import React, {
	useEffect,
	useState,
	useMemo,
	useCallback,
	useRef,
	useSyncExternalStore,
} from "react";
import {
	ThemeContext,
	type Theme,
	type Design,
	type ThemeContextValue,
} from "./ThemeContext";
import { generateColorScale, getPrimaryColorVars } from "@/tokens/utils";
import { lightColors, darkColors } from "@/tokens/colors";
import {
	basicLightTheme,
	basicDarkTheme,
	gameLightTheme,
	gameDarkTheme,
	crayonLightTheme,
	crayonDarkTheme,
} from "@/tokens/themes";
import { CrayonThemeFilters } from "./CrayonThemeFilters";
import clsx from "clsx";

/** Theme class names that may be set on `document.documentElement` when `applyGlobal` is true */
const DOCUMENT_THEME_CLASS_NAMES = [
	basicLightTheme,
	basicDarkTheme,
	gameLightTheme,
	gameDarkTheme,
	crayonLightTheme,
	crayonDarkTheme,
] as const;

function stripDocumentThemeClasses(root: HTMLElement) {
	root.classList.remove(...DOCUMENT_THEME_CLASS_NAMES);
}

const loadedThemes = new Set<string>();

async function loadThemeCSS(design: 'game' | 'crayon'): Promise<void> {
	if (typeof window === 'undefined') return; // SSR guard
	if (loadedThemes.has(design)) return;

	loadedThemes.add(design);
	try {
		// Each specifier must be a static string literal so the consumer's bundler sees it
		// and processes the stylesheet like any other CSS import, which also resolves the
		// @font-face url()s to the packaged font files. A <link> to a URL built from
		// import.meta.url bypasses the bundler, so the fonts 404, and a variable specifier
		// with @vite-ignore leaves a bare specifier the browser cannot resolve.
		// The specifiers are externalized in vite.config.ts and aliased to an empty
		// stylesheet in vitest and Storybook, where the theme CSS is already loaded from source.
		if (design === 'game') {
			await import('pine-design-system/style-game.css');
		} else {
			await import('pine-design-system/style-crayon.css');
		}
	} catch (err) {
		loadedThemes.delete(design);
		console.warn(`[pine-ui-kit] Failed to load CSS for "${design}" theme.`, err);
	}
}

// --- Component ---

export interface ThemeProviderProps {
	children: React.ReactNode;
	defaultTheme?: Theme;
	theme?: Theme;
	onThemeChange?: (theme: Theme) => void;
	syncWithSystem?: boolean;
	design?: Design;
	defaultDesign?: Design;
	onDesignChange?: (design: Design) => void;
	primaryColor?: string;
	className?: string;
	style?: React.CSSProperties;
	/**
	 * Whether to apply the theme class to `document.documentElement`.
	 * Set to `false` when rendering multiple ThemeProviders (e.g. theme showcases).
	 * @default true
	 */
	applyGlobal?: boolean;
}

/**
 * `window.matchMedia` is an external, environment-dependent value: the server has no `window` at
 * all, and the client's real OS preference is only knowable once `window` exists. Reading it
 * directly inside a `useState` lazy initializer (the old approach) makes the client's very first
 * render diverge from the server-rendered HTML whenever the two disagree, which React reports as
 * a hydration mismatch.
 *
 * `useSyncExternalStore`'s `getServerSnapshot` is used only for the server render and for the
 * client's hydration pass (kept in lockstep with the server on purpose), then React automatically
 * re-renders with `getSnapshot`'s real value immediately after hydration completes. A pure
 * client-only render (no `hydrateRoot` involved, e.g. Storybook) skips `getServerSnapshot`
 * entirely and uses `getSnapshot` from the first render — so this doesn't reintroduce a flash for
 * apps that never had one.
 */
function subscribeToSystemTheme(callback: () => void) {
	// Some environments (jsdom, older embedded webviews) have no matchMedia; treat them as light.
	if (typeof window.matchMedia !== "function") return () => {};
	const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
	mediaQuery.addEventListener("change", callback);
	return () => mediaQuery.removeEventListener("change", callback);
}

function getSystemThemeSnapshot(): Theme {
	if (typeof window.matchMedia !== "function") return "light";
	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getServerSystemThemeSnapshot(): Theme {
	return "light";
}

export const ThemeProvider = ({
	children,
	defaultTheme,
	theme: controlledTheme,
	onThemeChange,
	syncWithSystem = true,
	design: controlledDesign,
	defaultDesign = "basic",
	onDesignChange,
	primaryColor,
	className,
	style,
	applyGlobal = true,
}: ThemeProviderProps) => {
	// Subscribed unconditionally (Rules of Hooks); `subscribe`/`getSnapshot` only ever touch
	// `window` when React actually calls them on the client — never during an SSR render.
	const systemTheme = useSyncExternalStore(
		subscribeToSystemTheme,
		getSystemThemeSnapshot,
		getServerSystemThemeSnapshot
	);

	const [manualTheme, setManualTheme] = useState<Theme | undefined>(undefined);
	const [internalDesign, setInternalDesign] = useState<Design>(defaultDesign);

	const [cssLoading, setCssLoading] = useState(false);

	const theme = useMemo(() => {
		if (controlledTheme !== undefined) {
			return controlledTheme;
		}
		if (manualTheme !== undefined) {
			return manualTheme;
		}
		if (syncWithSystem) {
			return systemTheme;
		}
		return defaultTheme ?? "light";
	}, [controlledTheme, manualTheme, syncWithSystem, systemTheme, defaultTheme]);

	// Kept in a ref (rather than a dependency) so an un-memoized `onThemeChange` passed by the
	// consumer can't retrigger this effect on every parent re-render.
	const onThemeChangeRef = useRef(onThemeChange);
	onThemeChangeRef.current = onThemeChange;

	useEffect(() => {
		if (!syncWithSystem || controlledTheme !== undefined || manualTheme !== undefined) {
			return;
		}
		onThemeChangeRef.current?.(systemTheme);
	}, [systemTheme, syncWithSystem, controlledTheme, manualTheme]);

	const design = useMemo(() => {
		return controlledDesign ?? internalDesign;
	}, [controlledDesign, internalDesign]);

	useEffect(() => {
		if (design === 'basic' || loadedThemes.has(design)) return;

		setCssLoading(true);
		void loadThemeCSS(design).finally(() => {
			setCssLoading(false);
		});
	}, [design]);

	const themeClass = useMemo(() => {
		if (design === "game") {
			return theme === "dark" ? gameDarkTheme : gameLightTheme;
		}
		if (design === "crayon") {
			return theme === "dark" ? crayonDarkTheme : crayonLightTheme;
		}
		return theme === "dark" ? basicDarkTheme : basicLightTheme;
	}, [design, theme]);

	// The themes read the primary scale from `--pie-primary-*` custom properties, falling back
	// to the default scale. They are set on the container and, through context, on the portal
	// element of the library's popups (see usePortalThemeProps). They are deliberately not set
	// on <html>: that would override a consumer's own :root values and applyPrimaryColorVars(),
	// and nested providers would remove each other's values on unmount.
	const { primaryColorVars, primaryColorError } = useMemo(() => {
		const isDark = theme === "dark";
		let scale = isDark ? darkColors.palette.primary : lightColors.palette.primary;
		let error: unknown;

		if (primaryColor) {
			try {
				scale = generateColorScale(primaryColor, isDark);
			} catch (e) {
				error = e;
			}
		}

		return { primaryColorVars: getPrimaryColorVars(scale), primaryColorError: error };
	}, [primaryColor, theme]);
	const primaryColorStyle = primaryColorVars as React.CSSProperties;

	useEffect(() => {
		if (primaryColorError) {
			console.warn("Failed to generate color scale from primaryColor:", primaryColorError);
		}
	}, [primaryColorError]);

	useEffect(() => {
		if (typeof document === "undefined") {
			return;
		}

		const root = document.documentElement;

		if (!applyGlobal) {
			stripDocumentThemeClasses(root);
			return;
		}

		stripDocumentThemeClasses(root);
		root.classList.add(themeClass);

		return () => {
			stripDocumentThemeClasses(root);
		};
	}, [theme, design, themeClass, applyGlobal]);

	// The computed primary vars win over `style`, as they did when an effect set them.
	const containerStyle = useMemo(
		() => ({ ...style, ...primaryColorStyle }),
		[style, primaryColorStyle]
	);

	const setTheme = useCallback(
		(newTheme: Theme) => {
			if (!controlledTheme) {
				setManualTheme(newTheme);
			}
			onThemeChange?.(newTheme);
		},
		[controlledTheme, onThemeChange]
	);

	const setDesign = useCallback(
		(newDesign: Design) => {
			if (!controlledDesign) {
				setInternalDesign(newDesign);
			}
			onDesignChange?.(newDesign);
		},
		[controlledDesign, onDesignChange]
	);

	const value: ThemeContextValue = useMemo(() => {
		return {
			theme,
			setTheme,
			design,
			setDesign,
			themeClass,
			primaryColorStyle,
			cssLoading,
		};
	}, [theme, design, themeClass, primaryColorStyle, setTheme, setDesign, cssLoading]);

	return (
		<ThemeContext.Provider value={value}>
			<div
				className={clsx(themeClass, className)}
				style={containerStyle}
			>
				{design === "crayon" && <CrayonThemeFilters />}
				{children}
			</div>
		</ThemeContext.Provider>
	);
};
