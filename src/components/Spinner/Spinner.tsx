import React from "react";
import clsx from "clsx";
import * as styles from "./Spinner.css";
import { lightTheme, type ColorIntent } from "@/tokens";
import { useTheme } from "@/providers";

export type SpinnerSize = "small" | "medium" | "large";
export type SpinnerIntent = ColorIntent;

/**
 * Delay before the label is written into the status region. Screen readers only announce
 * changes inside a live region they have already registered, so the region mounts empty
 * and the label is filled in once it is in the accessibility tree.
 */
const ANNOUNCE_DELAY_MS = 100;

export interface SpinnerProps
	extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children"> {
	/**
	 * Size of the spinner — small (16px), medium (24px), large (32px). Match it to the
	 * surrounding text or control. Default: 'medium'.
	 */
	size?: SpinnerSize;
	/** Color intent of the spinning arc (primary, secondary, success, warning, danger, neutral). Default: 'primary'. */
	intent?: SpinnerIntent;
	/**
	 * Text announced to screen readers. It is not shown on screen. Describe what is loading
	 * (e.g. "Loading comments") when the context is not obvious. Default: 'Loading'.
	 */
	label?: string;
}

/**
 * Spinner indicates that something is loading when progress cannot be measured.
 *
 * Renders `role="status"`, so assistive technology announces `label` politely when the
 * spinner appears. The status region mounts empty and the label is filled in shortly
 * after, so the announcement fires even when the Spinner is conditionally rendered.
 * Use ProgressBar instead when progress can be measured.
 *
 * @param SpinnerProps
 * @param size - Spinner size (small, medium, large)
 * @param intent - Color intent of the spinning arc
 * @param label - Screen reader text (default "Loading")
 */
export const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
	(
		{
			size = "medium",
			intent = "primary",
			label = "Loading",
			className,
			...rest
		},
		ref,
	) => {
		const themeContext = useTheme();
		const themeClass = themeContext?.themeClass ?? lightTheme;
		const [isAnnounceReady, setIsAnnounceReady] = React.useState(false);

		React.useEffect(() => {
			const timer = setTimeout(() => setIsAnnounceReady(true), ANNOUNCE_DELAY_MS);
			return () => clearTimeout(timer);
		}, []);

		return (
			<span
				ref={ref}
				role="status"
				className={clsx(themeClass, styles.root, className)}
				{...rest}
			>
				<span aria-hidden="true" className={styles.ring({ size, intent })} />
				<span className={styles.visuallyHidden}>
					{isAnnounceReady ? label : null}
				</span>
			</span>
		);
	},
);

Spinner.displayName = "Spinner";
