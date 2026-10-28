// @vitest-environment node
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const __dirname = dirname(fileURLToPath(import.meta.url));

// If the @font-face src is a site-root absolute path (url(/...)), apps that install
// this package have no font at that path and the request 404s. It must be relative
// to this CSS file (url(./font/...)).
const ABSOLUTE_URL = /url\(\s*["']\/[^/]/;

describe("theme font-face src", () => {
	it.each(["game.css.ts", "crayon.css.ts"])(
		"%s keeps its @font-face src relative instead of a site-root absolute path",
		(file) => {
			const source = readFileSync(resolve(__dirname, file), "utf-8");
			expect(source).not.toMatch(ABSOLUTE_URL);
			expect(source).toMatch(/url\(\s*["']\.\/font\//);
		},
	);
});
