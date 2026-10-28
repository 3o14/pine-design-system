import { type ColorScale } from "../colors";
import { PRIMARY_COLOR_CSS_VAR_NAMES, PRIMARY_COLOR_STATES } from "./constants";
import { generateColorScale } from "./generateColorScale";

/**
 * Maps a primary color scale to the primary CSS custom properties the themes read
 * (`--pie-primary-*`). Usable as a React `style` value. Typed without React on purpose:
 * this module is part of the React-free `pine-design-system/tokens` graph.
 *
 * @param colorScale - The color scale to map
 */
export function getPrimaryColorVars(colorScale: ColorScale): Record<string, string> {
	return Object.fromEntries(
		PRIMARY_COLOR_STATES.map((state) => [
			PRIMARY_COLOR_CSS_VAR_NAMES[state],
			colorScale[state],
		])
	);
}

/**
 * Sets the primary color CSS custom properties on an element.
 *
 * @param colorScale - The color scale to apply
 * @param root - The element to set them on (default: document.documentElement)
 */
export function applyPrimaryColorVars(
	colorScale: ColorScale,
	root: HTMLElement = document.documentElement
): void {
	for (const [name, value] of Object.entries(getPrimaryColorVars(colorScale))) {
		root.style.setProperty(name, value);
	}
}

/**
 * Generates a primary color scale from a hex color and applies it as CSS custom properties.
 *
 * @param primaryHex - The primary color (hex)
 * @param isDark - Whether dark mode is active
 * @param root - The element to set them on (default: document.documentElement)
 * @throws {Error} If the hex color is invalid
 */
export function applyPrimaryColorFromHex(
	primaryHex: string,
	isDark: boolean,
	root: HTMLElement = document.documentElement
): void {
	const colorScale = generateColorScale(primaryHex, isDark);
	applyPrimaryColorVars(colorScale, root);
}
