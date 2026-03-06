/**
 * adaptColor: foundation 팔레트를 테마별로 변환하는 어댑터 함수
 *
 * - toNeon()   : saturation 최대화 + lightness 상향 → game 테마 네온 느낌
 * - toPastel() : saturation 완화 + lightness 대폭 상향 → crayon 테마 파스텔 느낌
 */

type ColorStep = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type ColorStepScale = Record<ColorStep, string>;

// ─── HSL ↔ Hex 변환 ─────────────────────────────────────────────────────────

function hexToHsl(hex: string): { h: number; s: number; l: number } {
	const normalized =
		hex.length === 4
			? `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
			: hex;

	const r = parseInt(normalized.slice(1, 3), 16) / 255;
	const g = parseInt(normalized.slice(3, 5), 16) / 255;
	const b = parseInt(normalized.slice(5, 7), 16) / 255;

	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	const delta = max - min;

	let h = 0;
	if (delta !== 0) {
		if (max === r) h = ((g - b) / delta) % 6;
		else if (max === g) h = (b - r) / delta + 2;
		else h = (r - g) / delta + 4;
		h = Math.round(h * 60);
		if (h < 0) h += 360;
	}

	const l = (max + min) / 2;
	const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

	return { h, s: s * 100, l: l * 100 };
}

function hslToHex(h: number, s: number, l: number): string {
	const sn = s / 100;
	const ln = l / 100;
	const a = sn * Math.min(ln, 1 - ln);

	const f = (n: number) => {
		const k = (n + h / 30) % 12;
		const color = ln - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
		return Math.round(255 * color)
			.toString(16)
			.padStart(2, "0");
	};

	return `#${f(0)}${f(8)}${f(4)}`;
}

// ─── 어댑터 함수 ─────────────────────────────────────────────────────────────

/**
 * 색상 스케일을 네온 버전으로 변환 (game 테마용)
 *
 * 규칙:
 * - Saturation → min(S + 30%, 100%)
 * - Lightness  → mid steps(200–700): L + 20%, 극단 steps은 변화량 축소
 */
export function toNeon(scale: ColorStepScale): ColorStepScale {
	const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

	// mid steps일수록 lightness를 더 많이 올림
	const lightnessBoost: Record<ColorStep, number> = {
		50: 2,
		100: 4,
		200: 18,
		300: 20,
		400: 20,
		500: 20,
		600: 18,
		700: 14,
		800: 6,
		900: 2,
	};

	const result = {} as ColorStepScale;
	for (const step of steps) {
		const { h, s, l } = hexToHsl(scale[step]);
		const newS = Math.min(s + 30, 100);
		const newL = Math.min(l + lightnessBoost[step], 95);
		result[step] = hslToHex(h, newS, newL);
	}
	return result;
}

/**
 * 색상 스케일을 파스텔 버전으로 변환 (crayon 테마용)
 *
 * 규칙:
 * - Saturation → S × 0.65 (채도 완화)
 * - Lightness  → L + (100 - L) × 0.55 (흰색 방향으로 55% 이동)
 */
export function toPastel(scale: ColorStepScale): ColorStepScale {
	const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

	const result = {} as ColorStepScale;
	for (const step of steps) {
		const { h, s, l } = hexToHsl(scale[step]);
		const newS = s * 0.65;
		const newL = l + (100 - l) * 0.55;
		result[step] = hslToHex(h, newS, Math.min(newL, 97));
	}
	return result;
}
