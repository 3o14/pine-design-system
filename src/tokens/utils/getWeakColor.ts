/**
 * Mixes a color with another color to produce a light-toned "weak" color.
 *
 * A combination that reads fine in light themes (mixTarget: "white") breaks
 * down in dark themes if mixed toward white the same way — the background
 * ends up almost white, collapsing contrast against light-colored text. Dark
 * themes should pass "black" as mixTarget to mix toward the dark end instead.
 *
 * @param color - Source color (hex or CSS variable)
 * @param percent - Proportion of the source color (0-100, default: 25)
 * @param mixTarget - Color to mix toward (default: "white"; use "black" for dark themes)
 * @returns A `color-mix` CSS function string
 * @example
 * getWeakColor("#8b5cf6", 25) // "color-mix(in srgb, #8b5cf6 25%, white)"
 * getWeakColor("#8b5cf6", 35, "black") // "color-mix(in srgb, #8b5cf6 35%, black)"
 */
export const getWeakColor = (
	color: string,
	percent: number = 25,
	mixTarget: string = "white"
): string => {
	return `color-mix(in srgb, ${color} ${percent}%, ${mixTarget})`;
};
