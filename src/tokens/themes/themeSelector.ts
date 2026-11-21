import { basicLightTheme, basicDarkTheme } from "./basic.css";
import { gameLightTheme, gameDarkTheme } from "./game.css";
import { crayonLightTheme, crayonDarkTheme } from "./crayon.css";

/** Theme classes per design, as [light, dark]. */
export const basicThemes =[String(basicLightTheme), String(basicDarkTheme)] as const;
export const gameThemes = [String(gameLightTheme), String(gameDarkTheme)] as const;
export const crayonThemes = [String(crayonLightTheme), String(crayonDarkTheme)] as const;

/**
 * Builds a selector that applies a theme override only when one of `themes` is the theme
 * of the element that carries the component's theme class (its root, or a popup's portal).
 *
 * Matching any ancestor's theme class (`.${theme} &`) breaks nested ThemeProviders: the
 * outermost provider puts its class on `<html>`, so every component under a nested basic
 * provider would still pick up the outer game or crayon styles. Each component root
 * already gets the nearest provider's class from `useTheme()`, so overrides are scoped to it.
 *
 * Specificity matches the old `.${theme} &` form, so the cascade order between theme
 * overrides and other rules is unchanged.
 *
 * @param themes - Theme classes the override applies to (e.g. both game themes)
 * @param selector - The target, written with `&`. When `scope` is omitted, `&` itself
 *   carries the theme class and the selector must start with `&` (e.g. `"&:hover::before"`).
 *   When `scope` is set, it is the path from the scope element to the target, starting
 *   with a combinator (e.g. `"> &"`, `"> :where(.${track}) > &::before"`). Use child
 *   combinators so the same component nested inside it can't match, and wrap structural
 *   steps in `:where()` so specificity stays the same as the old `.${theme} &` selector.
 * @param scope - Class of the element that carries the theme class, when it is an
 *   ancestor of the target.
 */
export function themeSelector(
	themes: readonly string[],
	selector = "&",
	scope?: string,
): string {
	if (scope === undefined && !selector.startsWith("&")) {
		throw new Error(
			`themeSelector: "${selector}" must start with "&" when no scope is given.`,
		);
	}
	return themes
		.map((theme) =>
			scope === undefined
				? `&.${theme}${selector.slice(1)}`
				: `:where(.${scope}).${theme} ${selector}`,
		)
		.join(", ");
}
