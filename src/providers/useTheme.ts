import { useContext } from "react";
import { ThemeContext, type ThemeContextValue } from "./ThemeContext";

/**
 * Accesses the Pine theme context.
 * Returns `undefined` when used outside of `ThemeProvider` (e.g. optional usage in leaf components).
 *
 * @example
 * ```tsx
 * const themeContext = useTheme();
 * const themeClass = themeContext?.themeClass ?? lightTheme;
 * ```
 */
export const useTheme = () => {
	return useContext(ThemeContext);
};

/**
 * Same context as `useTheme`, but always returns a value.
 * Must only be used under `ThemeProvider`; throws if the context is missing.
 *
 * @throws {Error} When no `ThemeProvider` ancestor exists.
 */
export const useThemeRequired = (): ThemeContextValue => {
	const value = useContext(ThemeContext);
	if (value === undefined) {
		throw new Error(
			"useThemeRequired must be used within ThemeProvider. For optional access, use useTheme() instead.",
		);
	}
	return value;
};
