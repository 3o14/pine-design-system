/**
 * Public token API — published as `pine-design-system/tokens`.
 *
 * This module and everything it (transitively) imports must have zero React or DOM
 * dependency. It's consumed from server-only contexts (Server Components, Route Handlers,
 * `generateMetadata`), so any React import here would silently reintroduce the RSC
 * `createContext` crash this package's client/tokens split exists to avoid.
 */
import {
	basicLightTheme,
	basicDarkTheme,
	gameLightTheme,
	gameDarkTheme,
	crayonLightTheme,
	crayonDarkTheme,
} from "./themes";

export {
	basicLightTheme,
	basicDarkTheme,
	gameLightTheme,
	gameDarkTheme,
	crayonLightTheme,
	crayonDarkTheme,
};
export * from "./colors";
export { radius } from "./foundation/radius";
export { spacing } from "./foundation/spacing";
export { shadow } from "./foundation/shadow";
export { fontFamily, fontWeight } from "./foundation/typography";
export {
	basicThemeSemanticTextStyles,
	BASIC_SEMANTIC_TEXT_SIZE_ORDER,
	type BasicSemanticTextSize,
} from "./semantic/basicTypography";

export interface ThemeInitScriptOptions {
	/** Design variant to resolve the light/dark class pair for. Default: 'basic'. */
	design?: "basic" | "game" | "crayon";
}

/**
 * Generates a small, self-contained script that applies the correct theme class to
 * `document.documentElement` *before* React hydrates, by reading
 * `window.matchMedia('(prefers-color-scheme: dark)')` synchronously.
 *
 * `ThemeProvider`'s own initial render is deliberately environment-independent (always
 * server-safe) to avoid a hydration mismatch, which means an SSR app briefly renders the
 * fallback theme before `ThemeProvider` corrects it on the client. Inlining this script in the
 * document `<head>`, before hydration, removes that visible flash entirely by pre-painting the
 * `<html>` element — CSS custom properties then inherit the correct values from the very first
 * paint.
 *
 * Usage (root layout, Server Component):
 * ```tsx
 * <html lang="en" suppressHydrationWarning>
 *   <head>
 *     <script dangerouslySetInnerHTML={{ __html: getThemeInitScript({ design: "game" }) }} />
 *   </head>
 *   <body>{children}</body>
 * </html>
 * ```
 *
 * `suppressHydrationWarning` on `<html>` is required — you must add it yourself, the package
 * cannot add it on your behalf. Without it, React will (correctly, but unhelpfully here) warn
 * about this script's own class attribute mutation.
 */
export function getThemeInitScript(options?: ThemeInitScriptOptions): string {
	const design = options?.design ?? "basic";

	const lightClass =
		design === "game"
			? gameLightTheme
			: design === "crayon"
				? crayonLightTheme
				: basicLightTheme;
	const darkClass =
		design === "game"
			? gameDarkTheme
			: design === "crayon"
				? crayonDarkTheme
				: basicDarkTheme;

	return `(function(){try{var m=window.matchMedia("(prefers-color-scheme: dark)").matches;var c=m?"${darkClass}":"${lightClass}";var r=document.documentElement;r.classList.remove("${lightClass}","${darkClass}");r.classList.add(c);}catch(e){}})();`;
}
