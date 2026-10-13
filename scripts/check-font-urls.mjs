import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, "../dist");

// 소비 앱의 사이트 루트를 가리키는 절대경로(url(/...))는 패키지 안에 든
// 폰트 파일을 찾지 못해 404가 난다. @font-face의 src는 반드시 CSS 파일
// 기준 상대경로(예: url(./font/DungGeunMo.woff2))여야 한다.
const ABSOLUTE_URL = /url\(\s*["']?\/[^/][^)"']*["']?\s*\)/g;
const DATA_URL = /url\(\s*["']?data:/g;

// game/crayon 폰트가 로컬에서 실제로 resolve되는 상대경로를 참조하면
// vanilla-extract가 base64로 강제 인라인해버려(온글잎-승훈체는 3.4MB라
// style-crayon.css가 6MB 가까이 불어남) 이 두 파일만 넉넉히 큰 임계값을
// 둔다. 이 임계값을 넘으면 인라인이 다시 일어난 것으로 본다.
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
		console.error(`✗ ${file}: 사이트 루트 절대경로 url()을 ${absoluteMatches.length}개 발견`);
		for (const m of absoluteMatches.slice(0, 5)) {
			console.error(`  ${m[0]}`);
		}
	}

	if (dataUrlMatches.length > 0) {
		failed = true;
		ok = false;
		console.error(`✗ ${file}: data: URL(base64 인라인 추정)을 ${dataUrlMatches.length}개 발견`);
	}

	if (sizeLimit != null && sizeKb > sizeLimit) {
		failed = true;
		ok = false;
		console.error(
			`✗ ${file}: 크기가 ${sizeKb.toFixed(1)}KB로 임계값(${sizeLimit}KB)을 초과 — 폰트가 인라인됐을 가능성`,
		);
	}

	if (ok) {
		console.log(`✓ ${file}: 절대경로/인라인 없음 (${sizeKb.toFixed(1)}KB)`);
	}
}

if (failed) {
	console.error(
		"\n빌드 결과물에 문제가 있습니다 — 소비 앱에서 폰트가 404로 로드되지 않거나 CSS가 비정상적으로 커집니다.",
	);
	process.exit(1);
}

console.log("\n✅ 폰트 URL 검사 통과.");
