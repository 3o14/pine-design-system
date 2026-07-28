import React from "react";
import clsx from "clsx";
import * as styles from "./Badge.css";
import { lightTheme, type ColorIntent } from "@/tokens";
import { useTheme } from "@/providers";

export type BadgeSize = "small" | "medium" | "large" | "xlarge";
export type BadgeVariant = "solid" | "outline" | "subtle" | "weak";
export type BadgeIntent = ColorIntent;
export type BadgeRounded = "small" | "medium" | "large";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
	/** Size of the badge. Choose based on the size of adjacent text or components. Default: 'medium'. */
	size?: BadgeSize;
	/**
	 * Visual emphasis level. 'solid' (filled background) is for states needing the most emphasis —
	 * use for list status indicators or count badges near CTAs. 'outline' (border only) is medium emphasis.
	 * 'subtle' (light background) and 'weak' (lightest background) are for lightweight tags or category
	 * labels next to text; avoid over-emphasizing multiple badges on the same screen. Default: 'solid'.
	 */
	variant?: BadgeVariant;
	/** Semantic color intent (primary, secondary, success, warning, danger, neutral). Default: 'primary'. */
	intent?: BadgeIntent;
	/** Corner radius (small, medium, large — 'large' is pill-like). Default: 'medium'. */
	rounded?: BadgeRounded;
	/**
	 * Shows a status dot before the badge content. Use to indicate real-time status changes or
	 * notifications. Recommended pairing: 'success' for online/normal, 'danger' for error/offline,
	 * 'warning' for pending/caution. Default: false.
	 */
	showDot?: boolean;
	/** Badge content. Required. */
	children: React.ReactNode;
}

/**
 * Badge component for displaying labels, tags, or status indicators.
 */
export const Badge = ({
	size = "medium",
	variant = "solid",
	intent = "primary",
	rounded = "medium",
	showDot = false,
	children,
	className,
	...props
}: BadgeProps) => {
	const themeContext = useTheme();
	const themeClass = themeContext?.themeClass ?? lightTheme;

	return (
		<span
			className={clsx(
				themeClass,
				styles.badge({
					size,
					variant,
					intent,
					rounded,
				}),
				className,
			)}
			{...props}
		>
			{showDot && <span className={styles.dot} />}
			<span className={styles.content}>{children}</span>
		</span>
	);
};
