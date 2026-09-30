// @vitest-environment node
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const __dirname = dirname(fileURLToPath(import.meta.url));

// @font-face의 src가 사이트 루트 기준 절대경로(url(/...))면, 이 패키지를
// 설치한 소비 앱에는 그 경로에 폰트가 없어 404가 난다. 반드시 이 CSS 파일
// 기준 상대경로(url(./font/...))여야 한다.
const ABSOLUTE_URL = /url\(\s*["']\/[^/]/;

describe("theme font-face src", () => {
	it.each(["game.css.ts", "crayon.css.ts"])(
		"%s의 @font-face src는 사이트 루트 절대경로를 쓰지 않는다",
		(file) => {
			const source = readFileSync(resolve(__dirname, file), "utf-8");
			expect(source).not.toMatch(ABSOLUTE_URL);
			expect(source).toMatch(/url\(\s*["']\.\/font\//);
		},
	);
});
