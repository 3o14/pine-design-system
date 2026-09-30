// @vitest-environment node
import { describe, expect, it } from "vitest";
import { generateColorScale } from "./generateColorScale";

function hexToRgb(hex: string): [number, number, number] {
	const normalized = hex.length === 4
		? `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
		: hex;
	const value = normalized.replace("#", "");
	return [
		parseInt(value.slice(0, 2), 16),
		parseInt(value.slice(2, 4), 16),
		parseInt(value.slice(4, 6), 16),
	];
}

function mix(
	colorHex: string,
	targetHex: string,
	percent: number
): [number, number, number] {
	const c = hexToRgb(colorHex);
	const t = hexToRgb(targetHex);
	const p = percent / 100;
	return [0, 1, 2].map(
		(i) => c[i] * p + t[i] * (1 - p)
	) as [number, number, number];
}

function relativeLuminance([r, g, b]: [number, number, number]): number {
	const [rs, gs, bs] = [r, g, b].map((v) => {
		const channel = v / 255;
		return channel <= 0.03928
			? channel / 12.92
			: Math.pow((channel + 0.055) / 1.055, 2.4);
	});
	return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function contrastRatio(
	a: [number, number, number],
	b: [number, number, number]
): number {
	const [l1, l2] = [relativeLuminance(a), relativeLuminance(b)].sort(
		(x, y) => y - x
	);
	return (l1 + 0.05) / (l2 + 0.05);
}

describe("generateColorScale", () => {
	it("라이트 모드에서는 weak을 흰색과 25% 비율로 혼합한다", () => {
		const scale = generateColorScale("#8b5cf6", false);
		expect(scale.weak).toBe("color-mix(in srgb, #8b5cf6 25%, white)");
	});

	it("다크 모드에서는 weak을 검은색과 35% 비율로 혼합한다", () => {
		const scale = generateColorScale("#8b5cf6", true);
		expect(scale.weak).toBe("color-mix(in srgb, #8b5cf6 35%, black)");
	});

	it("다크 모드 weak 배경은 surface(=outline 텍스트 색)와 WCAG AA(3:1) 이상의 대비를 갖는다", () => {
		// outline variant는 color: <intent>.surface, hover 배경: <intent>.weak를 사용하므로
		// 이 둘의 대비가 실제 버튼에서 사용자가 보는 대비다.
		const samplePrimaryColors = ["#8b5cf6", "#a78bfa", "#70c3ff", "#f87171"];

		for (const primary of samplePrimaryColors) {
			const scale = generateColorScale(primary, true);
			const textRgb = hexToRgb(scale.surface);
			const bgRgb = mix(scale.surface, "#000000", 35);
			const ratio = contrastRatio(textRgb, bgRgb);

			expect(ratio).toBeGreaterThanOrEqual(3);
		}
	});
});
