/**
 * adaptColor: adapts foundation palettes per theme.
 *
 * - toNeon()   : max saturation + higher lightness → game “neon” look
 * - toPastel() : softer saturation + much higher lightness → crayon pastel look
 */

type ColorStep = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type ColorStepScale = Record<ColorStep, string>;

// ─── HSL ↔ Hex ───────────────────────────────────────────────────────────────

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

// ─── Adapters ───────────────────────────────────────────────────────────────

/**
 * Converts a color scale to a neon variant (game theme).
 *
 * Rules:
 * - Saturation → min(S + 30%, 100%)
 * - Lightness  → mid steps (200–700): L + 20%; extremes use smaller deltas
 */
export function toNeon(scale: ColorStepScale): ColorStepScale {
	const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

	// Stronger lightness lift toward the middle of the scale
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
 * Converts a color scale to a pastel variant (crayon theme).
 *
 * Rules:
 * - Saturation → S × 0.65 (softer chroma)
 * - Lightness  → L + (100 − L) × 0.55 (55% shift toward white)
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
