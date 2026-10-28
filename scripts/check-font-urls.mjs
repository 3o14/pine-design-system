import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, "../dist");

// An absolute path (url(/...)) points at the consumer app's site root, which has
// none of the font files shipped inside this package, so the request 404s.
// The @font-face src must be relative to the CSS file (e.g. url(./font/DungGeunMo.woff2)).
const ABSOLUTE_URL = /url\(\s*["']?\/[^/][^)"']*["']?\s*\)/g;
const DATA_URL = /url\(\s*["']?data:/g;

// If the game/crayon fonts ever reference a relative path that resolves locally,
// vanilla-extract force-inlines them as base64 (the crayon font is 3.4MB, which
// pushes style-crayon.css to almost 6MB). Only these two files get a size limit,
// set well above their normal size; exceeding it means inlining has come back.
const SIZE_LIMITS_KB = {
	"style-game.css": 200,
	"style-crayon.css": 200,
};

const files = ["style.css", "style-game.css", "style-crayon.css"];

let failed = false;

for (const file of files) {
	const path = resolve(distDir, file);
	const css = readFileSync(path, "utf-8");
	const absoluteMatches = [...css.matchAll(ABSOLUTE_URL)];
	const dataUrlMatches = [...css.matchAll(DATA_URL)];
	const sizeKb = Buffer.byteLength(css) / 1024;
	const sizeLimit = SIZE_LIMITS_KB[file];

	let ok = true;

	if (absoluteMatches.length > 0) {
		failed = true;
		ok = false;
		console.error(`✗ ${file}: found ${absoluteMatches.length} site-root absolute url() reference(s)`);
		for (const m of absoluteMatches.slice(0, 5)) {
			console.error(`  ${m[0]}`);
		}
	}

	if (dataUrlMatches.length > 0) {
		failed = true;
		ok = false;
		console.error(`✗ ${file}: found ${dataUrlMatches.length} data: URL(s) (likely inlined base64)`);
	}

	if (sizeLimit != null && sizeKb > sizeLimit) {
		failed = true;
		ok = false;
		console.error(
			`✗ ${file}: ${sizeKb.toFixed(1)}KB exceeds the ${sizeLimit}KB limit (a font may have been inlined)`,
		);
	}

	if (ok) {
		console.log(`✓ ${file}: no absolute paths or inlined fonts (${sizeKb.toFixed(1)}KB)`);
	}
}

if (failed) {
	console.error(
		"\nThe build output has a problem: fonts will 404 in consumer apps, or the CSS is abnormally large.",
	);
	process.exit(1);
}

console.log("\n✅ Font URL check passed.");
