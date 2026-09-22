import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

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

if (failed) {
	console.error("\nBuild output verification failed — see ✗ lines above.");
	process.exit(1);
}

console.log("\n✅ Build output verification passed (client boundary + tokens purity).");
