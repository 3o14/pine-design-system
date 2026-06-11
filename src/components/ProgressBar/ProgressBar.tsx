import React from "react";
import { Progress as BaseProgress } from "@base-ui/react/progress";
import clsx from "clsx";
import * as styles from "./ProgressBar.css";
import { lightTheme, type ColorIntent } from "@/tokens";
import { useTheme } from "@/providers";

export type ProgressBarSize = "small" | "medium" | "large";
export type ProgressBarIntent = ColorIntent;

export interface ProgressBarProps
	extends React.HTMLAttributes<HTMLDivElement> {
	/** Current value. Pass `null` for an indeterminate (unknown-progress) bar. */
	value?: number | null;
	/** Minimum value. Defaults to 0. */
	min?: number;
	/** Maximum value. Defaults to 100. */
	max?: number;
	/** Height of the bar (small, medium, large). */
	size?: ProgressBarSize;
	/** Color intent (primary, secondary, success, warning, danger, neutral). */
	intent?: ProgressBarIntent;
	/**
	 * Accessible label for the progress bar. Required — the WAI-ARIA `progressbar`
	 * role mandates an accessible name. Also rendered as visible text above the bar.
	 */
	label: string;
	/** Whether to show the formatted value (e.g. "72%") next to the label. */
	showValue?: boolean;
	/**
	 * Custom formatter for the displayed value and `aria-valuetext`.
	 * Receives the current numeric value. When omitted, base-ui's default
	 * percent format is used for the displayed value.
	 */
	formatValue?: (value: number) => string;
}

/**
 * ProgressBar visualizes the completion status of a task.
 *
 * Built on `@base-ui/react` Progress, which renders `role="progressbar"` with
 * `aria-valuenow`/`aria-valuemin`/`aria-valuemax` wired automatically. When
 * `value` is `null` the bar is indeterminate and `aria-valuenow` is omitted.
 *
 * @param ProgressBarProps
 * @param value - Current value, or `null` for indeterminate
 * @param min - Minimum value (default 0)
 * @param max - Maximum value (default 100)
 * @param size - Bar height (small, medium, large)
 * @param intent - Color intent
 * @param label - Required accessible label, also shown as visible text
 * @param showValue - Whether to display the formatted value
 * @param formatValue - Custom value/aria-valuetext formatter
 */
export const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
	(
		{
			value = null,
			min = 0,
			max = 100,
			size = "medium",
			intent = "primary",
			label,
			showValue = false,
			formatValue,
			className,
			...rest
		},
		ref,
	) => {
		const themeContext = useTheme();
		const themeClass = themeContext?.themeClass ?? lightTheme;

		const isIndeterminate = value == null;
		const range = max - min;
		const percentage =
			value == null || range <= 0
				? 0
				: Math.min(100, Math.max(0, ((value - min) / range) * 100));

		return (
			<BaseProgress.Root
				ref={ref}
				value={value}
				min={min}
				max={max}
				getAriaValueText={
					formatValue
						? (_formatted, current) =>
							current == null ? "" : formatValue(current)
						: undefined
				}
				className={clsx(themeClass, styles.root, className)}
				{...rest}
			>
				<div className={styles.header}>
					<BaseProgress.Label className={styles.label}>
						{label}
					</BaseProgress.Label>
					{showValue && (
						<BaseProgress.Value className={styles.value}>
							{formatValue
								? (formatted, current) =>
									current == null ? formatted : formatValue(current)
								: undefined}
						</BaseProgress.Value>
					)}
				</div>
				<BaseProgress.Track className={styles.track({ size })}>
					<BaseProgress.Indicator
						className={styles.indicator({ intent })}
						style={isIndeterminate ? undefined : { width: `${percentage}%` }}
					/>
				</BaseProgress.Track>
			</BaseProgress.Root>
		);
	},
);

ProgressBar.displayName = "ProgressBar";
