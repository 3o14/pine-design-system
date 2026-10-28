import type { ColorScale } from "../colors";
import { PRIMARY_COLOR_CSS_VAR_NAMES } from "./constants";

/**
 * The primary color tokens a theme assigns: references to the `--pie-primary-*` custom
 * properties that `ThemeProvider` sets, falling back to the default scale wherever they
 * aren't set (outside a provider, or in content portaled outside it by a consumer).
 *
 * @param fallback - The default primary scale for the theme's color mode
 */
export function primaryColorVarRefs(fallback: ColorScale) {
	return {
		surface: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.surface}, ${fallback.surface})`,
		surfaceHover: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.surfaceHover}, ${fallback.surfaceHover})`,
		surfaceActive: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.surfaceActive}, ${fallback.surfaceActive})`,
		text: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.text}, ${fallback.text})`,
		border: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.border}, ${fallback.border})`,
		weak: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.weak}, ${fallback.weak})`,
	};
}
