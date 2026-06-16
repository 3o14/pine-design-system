/**
 * Generates Props JSON files by parsing the REAL component source in `src/components`
 * with ts-morph. The library source is the single source of truth — if a prop is
 * added, renamed, or retyped, this script reflects it (or fails loudly), so the docs
 * cannot silently drift from the components they describe.
 *
 * Runs before `next build` (see docs/package.json prebuild).
 *
 * What it extracts per prop:
 *  - type:        the written type, with local string/number-literal aliases (e.g.
 *                 `ColorIntent`, `BadgeSize`) expanded to their union for readability.
 *  - description: the prop's own JSDoc, falling back to the component's `@param` tag.
 *  - default:     the initializer from the component's parameter destructuring.
 *  - required:    whether the prop is non-optional.
 *
 * Props inherited purely from DOM/React typings (e.g. `className`, `onClick`) are
 * omitted — only props the component's own types declare or redeclare are documented.
 */
import { writeFileSync, mkdirSync } from "fs";
import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";
import { Project, Node } from "ts-morph";

const __dirname = dirname(fileURLToPath(import.meta.url));

const REPO_ROOT = resolve(__dirname, "../..");
const TSCONFIG = join(REPO_ROOT, "tsconfig.app.json");
const COMPONENTS_DIR = join(REPO_ROOT, "src/components");
const OUTPUT_DIR = join(__dirname, "../content/props");

/** [output basename, source file (relative to src/components), exported type name]. */
const COMPONENTS = [
  ["badge", "Badge/Badge.tsx", "BadgeProps"],
  ["button", "Button/Button.tsx", "ButtonProps"],
  ["checkbox", "Checkbox/Checkbox.tsx", "CheckboxProps"],
  ["dialog", "Dialog/Dialog.tsx", "DialogProps"],
  ["dropdown", "Dropdown/Dropdown.tsx", "DropdownProps"],
  ["progress-bar", "ProgressBar/ProgressBar.tsx", "ProgressBarProps"],
  ["switch", "Switch/Switch.tsx", "SwitchProps"],
  ["tab", "Tab/Tab.tsx", "TabProps"],
  ["text", "Text/Text.tsx", "TextProps"],
  ["text-field", "TextField/TextField.tsx", "TextFieldProps"],
];

/** Type keywords / well-known aliases we never try to expand into a union. */
const OPAQUE_TYPES = new Set([
  "string",
  "number",
  "boolean",
  "bigint",
  "symbol",
  "unknown",
  "any",
  "void",
  "null",
  "undefined",
  "object",
  "ReactNode",
  "ReactElement",
  "ReactNode[]",
]);

/** Content slot props that are inherited (not redeclared) but worth documenting anyway. */
const ALWAYS_INCLUDE = new Set(["children"]);

const isOwnDeclaration = (decl) =>
  !decl.getSourceFile().getFilePath().replace(/\\/g, "/").includes("/node_modules/");

const collapseWhitespace = (text) => text.replace(/\s+/g, " ").trim();

/**
 * Follow a type node (and any alias chain, across files) down to a union of
 * string/number literals, returning the members in source order. Returns null
 * when the node isn't ultimately a literal union.
 */
function resolveLiteralUnion(typeNode) {
  if (Node.isUnionTypeNode(typeNode)) {
    const members = typeNode.getTypeNodes();
    return members.every((m) => Node.isLiteralTypeNode(m)) ? members.map((m) => m.getText()) : null;
  }
  if (Node.isTypeReference(typeNode)) {
    let symbol = typeNode.getTypeName().getSymbol();
    symbol = symbol?.getAliasedSymbol?.() ?? symbol;
    const aliasDecl = symbol?.getDeclarations?.().find((d) => Node.isTypeAliasDeclaration(d));
    const aliasNode = aliasDecl?.getTypeNode?.();
    if (aliasNode) return resolveLiteralUnion(aliasNode);
  }
  return null;
}

/**
 * Expand a string/number-literal alias (e.g. `ColorIntent`, `ButtonVariant`) to its
 * union for readability. Source order is preserved via the AST; a checker-based pass
 * is the fallback so the union still expands even if the AST chain can't be followed.
 */
function expandAlias(text, decl) {
  const typeNode = decl.getTypeNode?.();
  const ordered = typeNode && resolveLiteralUnion(typeNode);
  if (ordered) return ordered.join(" | ");

  if (/^[A-Za-z_]\w*$/.test(text) && !OPAQUE_TYPES.has(text)) {
    const type = decl.getType();
    if (type.isUnion()) {
      const parts = type.getUnionTypes().filter((t) => !t.isUndefined() && !t.isNull());
      if (parts.length > 0 && parts.every((t) => t.isStringLiteral() || t.isNumberLiteral())) {
        return parts.map((t) => t.getText()).join(" | ");
      }
    }
  }
  return text;
}

function typeTextFor(symbol, decl, refNode) {
  const typeNode = decl.getTypeNode?.();
  let text = typeNode ? typeNode.getText() : decl.getType().getText();
  // Discriminant literals from unions (e.g. `multiline?: false`) read as boolean.
  if (text === "true" || text === "false") text = "boolean";
  // `never` appears on a union member that opts out of a prop; resolve the merged type.
  if (text === "never") text = symbol.getTypeAtLocation(refNode).getNonNullableType().getText();
  // Optionality is captured by `required`; drop a redundant trailing `| undefined`.
  text = text.replace(/\s*\|\s*undefined$/, "");
  text = text.replace(/\bReact\.ReactNode\b/g, "ReactNode").replace(/\bReact\.ReactElement\b/g, "ReactElement");
  // Tidy spacing inside function-type parentheses left by whitespace collapse.
  return collapseWhitespace(expandAlias(text, decl)).replace(/\(\s+/g, "(").replace(/\s+\)/g, ")");
}

/**
 * Inspect the component's destructured first parameter, returning the set of prop
 * names it reads and a map of prop name -> default initializer text.
 */
function destructuredParams(componentFn) {
  const names = new Set();
  const defaults = {};
  const binding = componentFn?.getParameters()[0]?.getNameNode();
  if (!binding || !Node.isObjectBindingPattern(binding)) return { names, defaults };
  for (const element of binding.getElements()) {
    const name = element.getPropertyNameNode()?.getText() ?? element.getName();
    names.add(name);
    const initializer = element.getInitializer();
    if (initializer) defaults[name] = initializer.getText();
  }
  return { names, defaults };
}

/** Map of param name -> description, from the component's `@param name - desc` JSDoc tags. */
function paramDocsFor(variableDecl) {
  const docs = {};
  const statement = variableDecl?.getVariableStatement?.();
  for (const doc of statement?.getJsDocs?.() ?? []) {
    for (const tag of doc.getTags()) {
      if (tag.getTagName() !== "param") continue;
      const name = tag.getName?.();
      const comment = (tag.getCommentText?.() ?? "").replace(/^\s*-\s*/, "").trim();
      if (name && comment && !docs[name]) docs[name] = comment;
    }
  }
  return docs;
}

/** The arrow/function expression for a component, unwrapping `forwardRef(...)`/`memo(...)`. */
function componentFunction(variableDecl) {
  let init = variableDecl?.getInitializer();
  if (init && Node.isCallExpression(init)) {
    init = init.getArguments().find((arg) => Node.isArrowFunction(arg) || Node.isFunctionExpression(arg));
  }
  return init && (Node.isArrowFunction(init) || Node.isFunctionExpression(init)) ? init : null;
}

function extractProps(sourceFile, typeName) {
  const typeDecl = sourceFile.getInterface(typeName) ?? sourceFile.getTypeAlias(typeName);
  if (!typeDecl) throw new Error(`Type "${typeName}" not found in ${sourceFile.getBaseName()}`);

  const componentName = typeName.replace(/Props$/, "");
  const variableDecl = sourceFile.getVariableDeclaration(componentName);
  const { names: destructured, defaults } = destructuredParams(componentFunction(variableDecl));
  const paramDocs = paramDocsFor(variableDecl);

  const props = [];
  for (const symbol of typeDecl.getType().getProperties()) {
    const name = symbol.getName();
    const ownDecl = symbol.getDeclarations().find(isOwnDeclaration);
    // Skip props inherited purely from DOM/React typings, except a content slot
    // (`children`) the component actually destructures and renders.
    if (!ownDecl && !(ALWAYS_INCLUDE.has(name) && destructured.has(name))) continue;

    const decl = ownDecl ?? symbol.getDeclarations()[0];
    const jsdocDescription = decl.getJsDocs?.()[0]?.getDescription?.().trim();
    const rawDescription = jsdocDescription || paramDocs[name] || undefined;
    const optional = decl.hasQuestionToken?.() ?? symbol.isOptional();

    props.push({
      // Own props keep source order; allowlisted inherited props sort to the end.
      order: ownDecl ? ownDecl.getStart() : Number.MAX_SAFE_INTEGER,
      name,
      type: typeTextFor(symbol, decl, typeDecl),
      description: rawDescription ? collapseWhitespace(rawDescription) : undefined,
      default: defaults[name],
      required: !optional,
    });
  }

  return props
    .sort((a, b) => a.order - b.order)
    .map(({ order, ...prop }) => prop);
}

function main() {
  const project = new Project({ tsConfigFilePath: TSCONFIG, skipAddingFilesFromTsConfig: false });
  mkdirSync(OUTPUT_DIR, { recursive: true });

  const generated = [];
  for (const [basename, relativeFile, typeName] of COMPONENTS) {
    const sourceFile = project.getSourceFileOrThrow(join(COMPONENTS_DIR, relativeFile));
    const props = extractProps(sourceFile, typeName);
    writeFileSync(join(OUTPUT_DIR, `${basename}.json`), JSON.stringify(props, null, 2));
    generated.push(`${basename}.json (${props.length})`);
  }

  console.log(`Generated props from src/components: ${generated.join(", ")}`);
}

main();
