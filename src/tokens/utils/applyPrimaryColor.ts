import { type ColorScale } from "../colors";
import { PRIMARY_COLOR_CSS_VAR_NAMES } from "./constants";
import { generateColorScale } from "./generateColorScale";

/**
 * Maps a primary color scale to the primary CSS custom properties the themes read
 * (`--pie-primary-*`), as an object usable as a React `style` value.
 *
 * @param colorScale - The color scale to map
 */
export function getPrimaryColorVars(colorScale: ColorScale): Record<string, string> {
	return {
		[PRIMARY_COLOR_CSS_VAR_NAMES.surface]: colorScale.surface,
		[PRIMARY_COLOR_CSS_VAR_NAMES.surfaceHover]: colorScale.surfaceHover,
		[PRIMARY_COLOR_CSS_VAR_NAMES.surfaceActive]: colorScale.surfaceActive,
		[PRIMARY_COLOR_CSS_VAR_NAMES.text]: colorScale.text,
		[PRIMARY_COLOR_CSS_VAR_NAMES.border]: colorScale.border,
		[PRIMARY_COLOR_CSS_VAR_NAMES.weak]: colorScale.weak,
	};
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
