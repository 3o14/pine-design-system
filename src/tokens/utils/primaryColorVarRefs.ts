import type { ColorScale } from "../colors";
import {
	PRIMARY_COLOR_CSS_VAR_NAMES,
	PRIMARY_COLOR_STATES,
	type PrimaryColorState,
} from "./constants";

/**
 * The primary color tokens a theme assigns: references to the `--pie-primary-*` custom
 * properties that `ThemeProvider` sets, falling back to the default scale wherever they
 * aren't set (outside a provider, or in content portaled outside it by a consumer).
 *
 * @param fallback - The default primary scale for the theme's color mode
 */
export function primaryColorVarRefs(
	fallback: ColorScale
): Record<PrimaryColorState, string> {
	return Object.fromEntries(
		PRIMARY_COLOR_STATES.map((state) => [
			state,
			`var(${PRIMARY_COLOR_CSS_VAR_NAMES[state]}, ${fallback[state]})`,
		])
	) as Record<PrimaryColorState, string>;
}
