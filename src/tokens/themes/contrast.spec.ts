import { describe, it, expect } from "vitest";
import { gameLightColors, gameDarkColors } from "./game.css";
import { crayonLightColors, crayonDarkColors } from "./crayon.css";

/** WCAG 2.x 상대 휘도 */
const luminance = (hex: string) => {
	const [r, g, b] = [1, 3, 5].map((i) => {
		const c = parseInt(hex.slice(i, i + 2), 16) / 255;
		return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
	});
	return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const contrastRatio = (a: string, b: string) => {
	const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
	return (hi + 0.05) / (lo + 0.05);
};

/** WCAG AA 일반 텍스트 기준 */
const AA = 4.5;

const THEMES = {
	"game light": gameLightColors,
	"game dark": gameDarkColors,
	"crayon light": crayonLightColors,
	"crayon dark": crayonDarkColors,
};

// primary는 사용자 지정 색을 CSS 변수로 받으므로 여기서 검증하지 않는다
const INTENTS = ["secondary", "success", "warning", "danger", "neutral"] as const;

// 라이트 모드 danger는 basic 테마와 같은 빨강 스케일 문제라 별도로 다룬다 (#58 "Out of scope")
const KNOWN_LOW_CONTRAST = new Set(["game light danger", "crayon light danger"]);

describe("intent 색 토큰 대비", () => {
	for (const [theme, colors] of Object.entries(THEMES)) {
		for (const intent of INTENTS) {
			const key = `${theme} ${intent}`;
			if (KNOWN_LOW_CONTRAST.has(key)) continue;

			it(`${key}: surface 위 text가 AA(4.5:1)를 만족한다`, () => {
				const { surface, text } = colors[intent];
				expect(contrastRatio(surface, text)).toBeGreaterThanOrEqual(AA);
			});
		}
	}

	it("허용 목록의 조합은 여전히 기준 미달이다 (고쳐졌다면 목록에서 제거)", () => {
		for (const key of KNOWN_LOW_CONTRAST) {
			const [themeName, mode, intent] = key.split(" ");
			const colors = THEMES[`${themeName} ${mode}` as keyof typeof THEMES];
			const { surface, text } = colors[intent as (typeof INTENTS)[number]];
			expect(contrastRatio(surface, text)).toBeLessThan(AA);
		}
	});
});
