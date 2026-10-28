import { lightTheme } from "@/tokens";
import { useTheme } from "./useTheme";

/**
 * Props that carry the active theme onto a portal element (`*.Portal` in Base UI).
 *
 * Popups are portaled to `<body>`, outside the `ThemeProvider` container, so they don't
 * inherit its theme class or primary color vars. Put these on the portal element: it is an
 * ancestor of the backdrop, positioner, and popup, so the `.${themeClass} &` selectors in
 * component styles match and every part of the popup resolves the provider's tokens.
 * Outside a provider it falls back to the light theme, like the components themselves.
 */
export const usePortalThemeProps = () => {
	const themeContext = useTheme();

	return {
		className: themeContext?.themeClass ?? lightTheme,
		style: themeContext?.primaryColorStyle,
	};
};
