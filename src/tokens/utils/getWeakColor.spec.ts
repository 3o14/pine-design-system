// @vitest-environment node
import { describe, expect, it } from "vitest";
import { getWeakColor } from "./getWeakColor";

describe("getWeakColor", () => {
	it("기본값으로 흰색과 25% 비율로 혼합한다 (라이트 테마)", () => {
		expect(getWeakColor("#8b5cf6")).toBe(
			"color-mix(in srgb, #8b5cf6 25%, white)"
		);
	});

	it("percent를 지정하면 해당 비율로 흰색과 혼합한다", () => {
		expect(getWeakColor("#8b5cf6", 30)).toBe(
			"color-mix(in srgb, #8b5cf6 30%, white)"
		);
	});

	it("mixTarget을 지정하면 흰색이 아닌 해당 색과 혼합한다 (다크 테마)", () => {
		expect(getWeakColor("#8b5cf6", 35, "black")).toBe(
			"color-mix(in srgb, #8b5cf6 35%, black)"
		);
	});

	it("CSS 변수도 색상 인자로 받을 수 있다", () => {
		expect(getWeakColor("var(--pie-primary-surface)", 35, "black")).toBe(
			"color-mix(in srgb, var(--pie-primary-surface) 35%, black)"
		);
	});
});
