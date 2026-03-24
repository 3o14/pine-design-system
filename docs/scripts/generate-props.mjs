/**
 * Parses TSDoc with ts-morph and writes Props JSON files.
 * Runs before `next build` (see docs/package.json prebuild).
 */
import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { Project } from "ts-morph";

const __dirname = dirname(fileURLToPath(import.meta.url));

const BADGE_CODE = `
import type { ReactNode } from "react"

export interface BadgeProps {
  /**
   * Visual emphasis of the badge.
   * @default "solid"
   */
  variant?: "solid" | "outline" | "subtle" | "weak";
  /**
   * Semantic color intent.
   * @default "primary"
   */
  intent?: "primary" | "secondary" | "success" | "warning" | "danger" | "neutral";
  /**
   * Badge size.
   * @default "medium"
   */
  size?: "small" | "medium" | "large" | "xlarge";
  /**
   * Corner radius of the badge.
   * @default "medium"
   */
  rounded?: "small" | "medium" | "large";
  /**
   * Shows a status dot before the badge content.
   * @default false
   */
  showDot?: boolean;
  /** Content displayed inside the badge. */
  children: ReactNode;
}
`;

const DIALOG_CODE = `
export interface DialogAction {
  label: string;
  onClick: () => void;
  variant?: "solid" | "outline" | "ghost" | "weak";
  intent?: "primary" | "secondary" | "success" | "warning" | "danger" | "neutral";
  disabled?: boolean;
}

export interface DialogProps {
  /**
   * Controls whether the dialog is open.
   */
  open: boolean;
  /**
   * Called when the open state changes.
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * Called when the dialog closes (in addition to open state updates).
   */
  onClose?: () => void;
  /**
   * Title text shown in the header.
   */
  title?: string;
  /**
   * Description text shown below the title.
   */
  description?: string;
  /**
   * Maximum width of the dialog.
   * @default "medium"
   */
  size?: "small" | "medium" | "large" | "xlarge" | "full";
  /**
   * Corner radius of the dialog.
   * @default "medium"
   */
  rounded?: "small" | "medium" | "large";
  /**
   * Action buttons rendered in the footer.
   */
  actions?: DialogAction[];
  /**
   * Fully custom footer content; use instead of the actions prop.
   */
  footer?: React.ReactNode;
  /**
   * Whether to show the close (X) control in the header.
   * @default true
   */
  showCloseButton?: boolean;
  /**
   * Close the dialog when the overlay is clicked.
   * @default true
   */
  closeOnOverlayClick?: boolean;
  /**
   * Close the dialog when Escape is pressed.
   * @default true
   */
  closeOnEscape?: boolean;
  /**
   * Main dialog content.
   */
  children: React.ReactNode;
}
`;

const TEXT_FIELD_CODE = `
export interface TextFieldProps {
  /**
   * Label text shown above the field.
   */
  label?: string;
  /**
   * Placeholder when the value is empty.
   */
  placeholder?: string;
  /**
   * Helper text shown below the field.
   */
  helperText?: string;
  /**
   * Visual style of the field.
   * @default "outline"
   */
  variant?: "outline" | "filled";
  /**
   * Validation / feedback state.
   * @default "default"
   */
  status?: "default" | "error" | "success";
  /**
   * Field size.
   * @default "medium"
   */
  size?: "small" | "medium" | "large" | "xlarge";
  /**
   * Corner radius.
   * @default "medium"
   */
  rounded?: "small" | "medium" | "large";
  /**
   * When true, renders a textarea instead of an input.
   * @default false
   */
  multiline?: boolean;
  /**
   * Default height of the textarea in rows when multiline is true.
   * @default 3
   */
  rows?: number;
  /**
   * When true, stretches to the full width of the parent.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Disables the field.
   * @default false
   */
  disabled?: boolean;
  /**
   * Marks the field as required for form validation.
   * @default false
   */
  required?: boolean;
}
`;

const TEXT_CODE = `
export interface TextProps {
  /**
   * HTML element to render.
   * @default "p"
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div" | "label" | "li" | "ul" | "ol";
  /**
   * Typography size token.
   * @default "medium"
   */
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge" | "display-small" | "display-medium" | "display-large";
  /**
   * Font weight.
   * @default "regular"
   */
  weight?: "regular" | "medium" | "semibold" | "bold";
  /**
   * Color intent.
   * @default "inherit"
   */
  intent?: "inherit" | "primary" | "secondary" | "success" | "warning" | "danger" | "neutral";
  /**
   * Text alignment.
   * @default "left"
   */
  align?: "left" | "center" | "right";
  /**
   * When true, truncates overflowing text with an ellipsis.
   * @default false
   */
  truncate?: boolean;
}
`;

const TAB_CODE = `
export interface TabItem {
  value: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabProps {
  /**
   * Tab definitions (required).
   */
  tabs: TabItem[];
  /**
   * Active tab value (controlled).
   */
  value?: string;
  /**
   * Initial active tab value (uncontrolled).
   */
  defaultValue?: string;
  /**
   * Called when the active tab changes.
   */
  onChange?: (value: string) => void;
  /**
   * Color intent for the tab indicator.
   * @default "primary"
   */
  intent?: "primary" | "secondary" | "success" | "warning" | "danger" | "neutral";
  /**
   * Layout direction of the tab list.
   * @default "horizontal"
   */
  orientation?: "horizontal" | "vertical";
}
`;

const SWITCH_CODE = `
export interface SwitchProps {
  /**
   * Checked state (controlled).
   */
  checked?: boolean;
  /**
   * Initial checked state (uncontrolled).
   */
  defaultChecked?: boolean;
  /**
   * Called when the checked state changes.
   */
  onCheckedChange?: (checked: boolean) => void;
  /**
   * Color intent for the switch track.
   * @default "primary"
   */
  intent?: "primary" | "secondary" | "success" | "warning" | "danger" | "neutral";
  /**
   * Switch size.
   * @default "medium"
   */
  size?: "small" | "medium" | "large" | "xlarge";
  /**
   * Label text next to the switch.
   */
  label?: string;
  /**
   * Disables the switch.
   * @default false
   */
  disabled?: boolean;
  /**
   * Makes the switch read-only.
   * @default false
   */
  readOnly?: boolean;
}
`;

const DROPDOWN_CODE = `
export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface DropdownProps {
  /**
   * Selectable options.
   */
  options: DropdownOption[];
  /**
   * Selected value (controlled).
   */
  value?: string;
  /**
   * Initial selected value (uncontrolled).
   */
  defaultValue?: string;
  /**
   * Called when the selected value changes.
   */
  onValueChange?: (value: string | null) => void;
  /**
   * Placeholder when no option is selected.
   * @default "Select an option"
   */
  placeholder?: string;
  /**
   * Dropdown size.
   * @default "medium"
   */
  size?: "small" | "medium" | "large";
  /**
   * Corner radius.
   * @default "medium"
   */
  rounded?: "small" | "medium" | "large";
  /**
   * Color intent.
   * @default "primary"
   */
  intent?: "primary" | "secondary" | "success" | "warning" | "danger" | "neutral";
  /**
   * When true, stretches to the full width of the parent.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Disables the dropdown.
   * @default false
   */
  disabled?: boolean;
}
`;

const CHECKBOX_CODE = `
export interface CheckboxProps {
  /**
   * Checked state (controlled).
   */
  checked?: boolean;
  /**
   * Initial checked state (uncontrolled).
   */
  defaultChecked?: boolean;
  /**
   * Called when the checked state changes.
   */
  onCheckedChange?: (checked: boolean) => void;
  /**
   * Color intent.
   * @default "primary"
   */
  intent?: "primary" | "secondary" | "success" | "warning" | "danger" | "neutral";
  /**
   * Checkbox size.
   * @default "medium"
   */
  size?: "small" | "medium" | "large" | "xlarge";
  /**
   * Label next to the checkbox; clicking the label toggles the checkbox.
   */
  label?: string;
  /**
   * Disables the checkbox.
   * @default false
   */
  disabled?: boolean;
  /**
   * Makes the checkbox read-only.
   * @default false
   */
  readOnly?: boolean;
  /**
   * Marks the field as required for form validation.
   * @default false
   */
  required?: boolean;
}
`;

const BUTTON_CODE = `
import type { ReactNode } from "react"

export interface ButtonProps {
  /**
   * Visual variant of the button.
   * @default "solid"
   */
  variant?: "solid" | "outline" | "ghost" | "weak";
  /**
   * Semantic color intent.
   * @default "primary"
   */
  intent?: "primary" | "secondary" | "success" | "warning" | "danger" | "neutral";
  /**
   * Button size.
   * @default "medium"
   */
  size?: "small" | "medium" | "large" | "xlarge";
  /**
   * Corner radius.
   * @default "medium"
   */
  rounded?: "small" | "medium" | "large";
  /**
   * When true, stretches to the full width of the parent.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Disables the button.
   * @default false
   */
  disabled?: boolean;
  /** Content inside the button. */
  children: ReactNode;
}
`;

function extractDefault(jsdocTags) {
  const def = jsdocTags.find((t) => t.getTagName() === "default");
  return def?.getComment()?.toString().trim();
}

function parseInterface(code, exportName) {
  const project = new Project({
    compilerOptions: { target: 99 },
    skipAddingFilesFromTsConfig: true,
  });
  const source = project.createSourceFile("$.ts", code, { overwrite: true });
  const iface = source.getInterfaceOrThrow(exportName);
  const props = [];

  for (const member of iface.getProperties()) {
    const jsdoc = member.getJsDocs()[0];
    const tags = jsdoc?.getTags() ?? [];
    const desc = jsdoc?.getDescription().trim();
    const defaultVal = extractDefault(tags);
    const typeNode = member.getTypeNode();
    const type = typeNode?.getText() ?? "unknown";
    const optional = member.hasQuestionToken();

    props.push({
      name: member.getName(),
      type,
      description: desc || undefined,
      default: defaultVal,
      required: !optional,
    });
  }

  return props;
}

function main() {
  const badgeProps = parseInterface(BADGE_CODE, "BadgeProps");
  const buttonProps = parseInterface(BUTTON_CODE, "ButtonProps");
  const checkboxProps = parseInterface(CHECKBOX_CODE, "CheckboxProps");
  const dialogProps = parseInterface(DIALOG_CODE, "DialogProps");
  const dropdownProps = parseInterface(DROPDOWN_CODE, "DropdownProps");
  const switchProps = parseInterface(SWITCH_CODE, "SwitchProps");
  const tabProps = parseInterface(TAB_CODE, "TabProps");
  const textProps = parseInterface(TEXT_CODE, "TextProps");
  const textFieldProps = parseInterface(TEXT_FIELD_CODE, "TextFieldProps");

  const outputDir = join(__dirname, "../content/props");
  mkdirSync(outputDir, { recursive: true });

  writeFileSync(
    join(outputDir, "badge.json"),
    JSON.stringify(badgeProps, null, 2)
  );
  writeFileSync(
    join(outputDir, "button.json"),
    JSON.stringify(buttonProps, null, 2)
  );
  writeFileSync(
    join(outputDir, "checkbox.json"),
    JSON.stringify(checkboxProps, null, 2)
  );
  writeFileSync(
    join(outputDir, "dialog.json"),
    JSON.stringify(dialogProps, null, 2)
  );
  writeFileSync(
    join(outputDir, "dropdown.json"),
    JSON.stringify(dropdownProps, null, 2)
  );
  writeFileSync(
    join(outputDir, "switch.json"),
    JSON.stringify(switchProps, null, 2)
  );
  writeFileSync(
    join(outputDir, "tab.json"),
    JSON.stringify(tabProps, null, 2)
  );
  writeFileSync(
    join(outputDir, "text.json"),
    JSON.stringify(textProps, null, 2)
  );
  writeFileSync(
    join(outputDir, "text-field.json"),
    JSON.stringify(textFieldProps, null, 2)
  );

  console.log("Generated props: badge.json, button.json, checkbox.json, dialog.json, dropdown.json, switch.json, tab.json, text.json, text-field.json");
}

main();
