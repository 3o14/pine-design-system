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
	/**
	 * HTML element to render (h1-h6, p, span, div, label, li, ul, ol). Independent from `size` —
	 * you can keep good semantic structure for SEO/accessibility (e.g. `as="h2"`) while applying
	 * any visual size, or the reverse (e.g. `as="label" size="small"`). Default: 'p'.
	 */
	as?: TextElement;
	/**
	 * Font size token following the typography scale. 'medium' is the default body text size;
	 * 'small'/'xsmall' suit secondary text, descriptions, captions, and hints; 'large'/'xlarge'
	 * suit subheadings and section titles; the 'display-*' tokens are for hero and page-level
	 * headings. Default: 'medium'.
	 */
	size?: TextSize;
	/**
	 * Font weight. 'regular' for body/descriptive text, 'medium' for body text needing emphasis,
	 * 'semibold' for subheadings/labels, 'bold' for primary headings/strong emphasis. Default: 'regular'.
	 */
	weight?: TextWeight;
	/**
	 * Text color intent. 'inherit' inherits color from the parent element; the semantic intents
	 * (primary, secondary, success, warning, danger, neutral) apply the corresponding token color.
	 * Default: 'inherit'.
	 */
	intent?: TextIntent;
	/** Text alignment (left, center, right). Default: 'left'. */
	align?: TextAlign;
	/** Whether to truncate overflowing text with an ellipsis. Default: false. */
	truncate?: boolean;
	children?: React.ReactNode;
}

/**
 * Text component for rendering semantic text elements with consistent typography.
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
	const themeClass = themeContext?.themeClass ?? lightTheme;

	return (
		<Component
			className={clsx(
				themeClass,
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
