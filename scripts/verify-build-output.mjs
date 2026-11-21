import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import postcss from "postcss";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, "../dist");

const REACT_REFERENCE = /from ["']react["']|require\(["']react["']\)/;

let failed = false;

function check(condition, message) {
	if (condition) {
		console.log(`✓ ${message}`);
	} else {
		console.error(`✗ ${message}`);
		failed = true;
	}
}

const mainEs = readFileSync(resolve(distDir, "pine-design-system.es.js"), "utf-8");
const mainCjs = readFileSync(resolve(distDir, "pine-design-system.cjs.js"), "utf-8");
const tokensEs = readFileSync(resolve(distDir, "pine-design-system-tokens.es.js"), "utf-8");
const tokensCjs = readFileSync(resolve(distDir, "pine-design-system-tokens.cjs.js"), "utf-8");

// The main entry bundles ThemeProvider/useTheme (React context + hooks), so it must be a
// client boundary for RSC. The tokens entry is pure values and must stay un-directived and
// React-free — regressing either silently reintroduces the createContext-in-RSC crash.
check(mainEs.startsWith('"use client"'), 'main ES entry (pine-design-system.es.js) starts with "use client"');
check(mainCjs.startsWith('"use client"'), 'main CJS entry (pine-design-system.cjs.js) starts with "use client"');
check(!tokensEs.includes('"use client"'), 'tokens ES entry (pine-design-system-tokens.es.js) has no "use client"');
check(!tokensCjs.includes('"use client"'), 'tokens CJS entry (pine-design-system-tokens.cjs.js) has no "use client"');
check(!REACT_REFERENCE.test(tokensEs), "tokens ES entry has no react import/require");
check(!REACT_REFERENCE.test(tokensCjs), "tokens CJS entry has no react import/require");

// ThemeProvider must lazy-load the split theme stylesheets through static import specifiers,
// so consumer bundlers process them (including the @font-face url()s). A <link> built from
// import.meta.url bypasses the bundler and the fonts 404 in consumer apps.
for (const design of ["game", "crayon"]) {
	const specifier = `pine-design-system/style-${design}.css`;
	check(mainEs.includes(`import("${specifier}")`), `main ES entry lazy-loads ${specifier} via a static import()`);
	check(mainCjs.includes(`import("${specifier}")`), `main CJS entry lazy-loads ${specifier} via a static import()`);
}
check(!mainEs.includes("import.meta.url"), "main ES entry does not build theme CSS URLs from import.meta.url");

// Theme overrides must be scoped to the element that carries the theme class (see
// src/tokens/themes/themeSelector.ts). A compound made of a theme class alone, such as
// `.gameTheme .button`, matches any ancestor: the outermost provider's class on <html> then
// leaks into every nested ThemeProvider.
const tokensModule = await import(pathToFileURL(resolve(distDir, "pine-design-system-tokens.es.js")).href);
const themeClasses = [
	"basicLightTheme",
	"basicDarkTheme",
	"gameLightTheme",
	"gameDarkTheme",
	"crayonLightTheme",
	"crayonDarkTheme",
].map((name) => tokensModule[name]);

/** Top-level compounds of a selector: split on combinators outside parentheses. */
function compounds(selector) {
	const parts = [];
	let depth = 0;
	let current = "";
	for (const char of selector) {
		if (char === "(") depth++;
		if (char === ")") depth--;
		if (depth === 0 && /[\s>+~]/.test(char)) {
			if (current) parts.push(current);
			current = "";
		} else {
			current += char;
		}
	}
	if (current) parts.push(current);
	return parts;
}

const unscoped = [];
for (const file of ["style.css", "style-game.css", "style-crayon.css"]) {
	postcss.parse(readFileSync(resolve(distDir, file), "utf-8")).walkRules((rule) => {
		for (const selector of rule.selectors) {
			const parts = compounds(selector);
			// A lone theme class is the theme definition itself.
			if (parts.length < 2) continue;
			if (parts.some((part) => themeClasses.some((theme) => part === `.${theme}`))) {
				unscoped.push(`${file}: ${selector}`);
			}
		}
	});
}
check(
	unscoped.length === 0,
	"theme overrides are scoped to their component (no bare `.${theme} &` ancestor selectors)",
);
for (const selector of unscoped.slice(0, 10)) console.error(`    ${selector}`);

// scripts/split-css.ts moves a whole rule into style-game.css or style-crayon.css when its
// selector mentions that design's classes. A rule that mixes designs (e.g. basic dark and
// game dark in one selector list) would take the basic override out of style.css with it.
const designClasses = {
	basic: themeClasses.slice(0, 2),
	game: themeClasses.slice(2, 4),
	crayon: themeClasses.slice(4, 6),
};
const mixed = [];
for (const file of ["style.css", "style-game.css", "style-crayon.css"]) {
	postcss.parse(readFileSync(resolve(distDir, file), "utf-8")).walkRules((rule) => {
		const designs = Object.entries(designClasses)
			.filter(([, classes]) => classes.some((theme) => rule.selector.includes(theme)))
			.map(([design]) => design);
		if (designs.length > 1) mixed.push(`${file}: ${rule.selector}`);
	});
}
check(mixed.length === 0, "no CSS rule mixes theme classes from different designs");
for (const selector of mixed.slice(0, 10)) console.error(`    ${selector}`);

if (failed) {
	console.error("\nBuild output verification failed — see ✗ lines above.");
	process.exit(1);
}

console.log("\n✅ Build output verification passed (client boundary + tokens purity).");
