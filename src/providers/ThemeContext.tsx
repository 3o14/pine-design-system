import { createContext, type CSSProperties } from "react";

export type Theme = "light" | "dark";
export type Design = "basic" | "game" | "crayon";

export interface ThemeContextValue {
	theme: Theme;
	setTheme: (theme: Theme) => void;
	design: Design;
	setDesign: (design: Design) => void;
	themeClass: string;
	/**
	 * The primary color CSS custom properties (`--pie-primary-*`) for the active theme and
	 * `primaryColor`. Components that portal content outside the provider apply this as
	 * `style` on the portaled root, together with `themeClass`.
	 */
	primaryColorStyle?: CSSProperties;
	cssLoading: boolean;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

