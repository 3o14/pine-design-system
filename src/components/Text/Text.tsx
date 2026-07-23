import React from "react";
import clsx from "clsx";
import * as styles from "./Text.css";
import type { ColorIntent } from "@/tokens";
import type { FontSizeToken, FontWeightToken } from "@/tokens/typography";
import { lightTheme } from "@/tokens";
import { useTheme } from "@/providers";

export type TextSize = FontSizeToken;
export type TextWeight = FontWeightToken;
export type TextIntent = ColorIntent | "inherit";
export type TextAlign = "left" | "center" | "right";
export type TextElement =
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "h5"
	| "h6"
	| "p"
	| "span"
	| "div"
	| "label"
	| "li"
	| "ul"
	| "ol";

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
	as?: TextElement;
	size?: TextSize;
	weight?: TextWeight;
	intent?: TextIntent;
	align?: TextAlign;
	truncate?: boolean;
	children?: React.ReactNode;
}

/**
 * Text component for rendering semantic text elements with consistent typography.
 *
 * @param TextProps
 * @param as - HTML element to render (h1-h6, p, span, div, label, li, ul, ol)
 * @param size - Font size token (xsmall, small, medium, large, xlarge, display-small, display-medium, display-large)
 * @param weight - Font weight (regular, medium, semibold, bold)
 * @param intent - Text color intent (inherit, primary, secondary, success, warning, danger, neutral, muted, subdued, disabled)
 * @param align - Text alignment (left, center, right)
 * @param truncate - Whether to truncate text with ellipsis
 */
export const Text = ({
	as: Component = "p",
	size = "medium",
	weight = "regular",
	intent = "inherit",
	align = "left",
	truncate = false,
	children,
	className,
	...props
}: TextProps & React.HTMLAttributes<HTMLElement>) => {
	const themeContext = useTheme();
	// Only apply a theme class when used standalone (outside ThemeProvider).
	// Inside ThemeProvider, CSS vars cascade from the root via applyGlobal — adding
	// the theme class here would re-scope the vars on each element and break dark mode
	// inside portals when the fallback (lightTheme) is accidentally applied.
	const standaloneClass = themeContext ? null : lightTheme;

	return (
		<Component
			className={clsx(
				standaloneClass,
				styles.base,
				styles.sizeVariants[size],
				styles.weightVariants[weight],
				styles.intentVariants[intent],
				styles.alignVariants[align],
				truncate && styles.truncate,
				className
			)}
			{...props}
		>
			{children}
		</Component>
	);
};
