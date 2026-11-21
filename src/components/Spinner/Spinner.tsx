import React from "react";
import clsx from "clsx";
import * as styles from "./Spinner.css";
import { lightTheme, type ColorIntent } from "@/tokens";
import { useTheme } from "@/providers";

export type SpinnerSize = "small" | "medium" | "large";
/** A color intent, or "current" to follow the parent's text color (e.g. inside a button). */
export type SpinnerIntent = ColorIntent | "current";

/**
 * Delay before the label is written into the status region. Screen readers only announce
 * changes inside a live region they have already registered, so the region mounts empty
 * and the label is filled in once it is in the accessibility tree.
 */
const ANNOUNCE_DELAY_MS = 100;

const DEFAULT_LABEL = "Loading";

export interface SpinnerProps
	extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children"> {
	/**
	 * Size of the spinner — small (16px), medium (24px), large (32px). Match it to the
	 * surrounding text or control. Default: 'medium'.
	 */
	size?: SpinnerSize;
	/**
	 * Color intent of the spinning arc (primary, secondary, success, warning, danger, neutral),
	 * or 'current' to use the parent's text color, with a faded track. Use 'current' inside
	 * buttons and other filled surfaces so the arc contrasts with them. Default: 'primary'.
	 */
	intent?: SpinnerIntent;
	/**
	 * Text announced to screen readers. It is not shown on screen. Describe what is loading
	 * (e.g. "Loading comments") when the context is not obvious. A blank label falls
	 * back to the default. Default: 'Loading'.
	 */
	label?: string;
	/**
	 * Renders a purely visual spinner with no `role` and no label, hidden from assistive
	 * technology. Use it inside a button or other control, or when several spinners are
	 * shown together, and announce the loading state elsewhere. Default: false.
	 */
	decorative?: boolean;
}

/**
 * Spinner indicates that something is loading when progress cannot be measured.
 *
 * Renders `role="status"`, so assistive technology announces `label` politely when the
 * spinner appears. The status region mounts empty and the label is filled in shortly
 * after, so the announcement fires even when the Spinner is conditionally rendered.
 * Use ProgressBar instead when progress can be measured.
 *
 * Set `decorative` inside a button or other control: ARIA treats a control's content as
 * presentational, so a status region there is never announced and its label leaks into
 * the control's accessible name.
 *
 * @param SpinnerProps
 * @param size - Spinner size (small, medium, large)
 * @param intent - Color intent of the spinning arc
 * @param label - Screen reader text (default "Loading")
 * @param decorative - Visual only, hidden from assistive technology (default false)
 */
export const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
	(
		{
			size = "medium",
			intent = "primary",
			label = DEFAULT_LABEL,
			decorative = false,
			className,
			...rest
		},
		ref,
	) => {
		const themeContext = useTheme();
		const themeClass = themeContext?.themeClass ?? lightTheme;
		const [isAnnounceReady, setIsAnnounceReady] = React.useState(false);

		React.useEffect(() => {
			if (decorative) return;
			const timer = setTimeout(() => setIsAnnounceReady(true), ANNOUNCE_DELAY_MS);
			return () => {
				clearTimeout(timer);
				// Reset so the region mounts empty again if it comes back after being decorative.
				setIsAnnounceReady(false);
			};
		}, [decorative]);

		// An empty label would leave a live region that announces nothing. The type check
		// also covers untyped callers that pass null or a non-string.
		const announcedLabel =
			typeof label === "string" && label.trim() ? label : DEFAULT_LABEL;

		const ringElement = (
			<span aria-hidden="true" className={styles.ring({ size, intent })} />
		);

		if (decorative) {
			return (
				<span
					{...rest}
					// Distinct keys make leaving decorative mode insert a fresh status region
					// instead of adding role="status" to the existing element.
					key="decorative"
					ref={ref}
					role={undefined}
					aria-hidden="true"
					className={clsx(themeClass, styles.root, className)}
				>
					{ringElement}
				</span>
			);
		}

		return (
			<span
				{...rest}
				key="status"
				ref={ref}
				// Set after the spread so consumer props can't remove or silence the live region.
				role="status"
				aria-live="polite"
				aria-atomic="true"
				aria-hidden={undefined}
				className={clsx(themeClass, styles.root, className)}
			>
				{ringElement}
				<span className={styles.visuallyHidden}>
					{isAnnounceReady ? announcedLabel : null}
				</span>
			</span>
		);
	},
);

Spinner.displayName = "Spinner";
