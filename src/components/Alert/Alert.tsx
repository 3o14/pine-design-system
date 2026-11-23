import React from "react";
import clsx from "clsx";
import * as styles from "./Alert.css";
import { lightTheme, type ColorIntent } from "@/tokens";
import { useTheme } from "@/providers";

export type AlertVariant = "weak" | "outline" | "solid";
export type AlertIntent = ColorIntent;
export type AlertRounded = "small" | "medium" | "large";

const DEFAULT_CLOSE_LABEL = "Dismiss";

/** Whether a node renders anything visible. Empty wrappers would add a gap to the layout. */
const isRenderable = (node: React.ReactNode) =>
	node !== undefined && node !== null && typeof node !== "boolean" && node !== "";

/**
 * Default icon per intent. Each intent has its own shape (info, check, warning triangle,
 * error), so the meaning doesn't rely on color alone.
 */
const IntentIcon = ({ intent }: { intent: AlertIntent }) => {
	const glyphProps = {
		className: styles.iconGlyph,
		strokeWidth: 2,
		strokeLinecap: "round",
		strokeLinejoin: "round",
	} as const;

	if (intent === "warning") {
		return (
			<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
				<path
					className={styles.iconShape}
					d="M8.27 2.99a2 2 0 0 1 3.46 0l6.93 12A2 2 0 0 1 16.93 18H3.07a2 2 0 0 1-1.73-3.01z"
				/>
				<path {...glyphProps} d="M10 7.5v4M10 14.5h.01" />
			</svg>
		);
	}

	return (
		<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
			<circle className={styles.iconShape} cx="10" cy="10" r="9" />
			{intent === "success" ? (
				<path {...glyphProps} d="M6 10.5l2.5 2.5L14 7.5" />
			) : intent === "danger" ? (
				<path {...glyphProps} d="M7 7l6 6M13 7l-6 6" />
			) : (
				<path {...glyphProps} d="M10 9v5M10 6h.01" />
			)}
		</svg>
	);
};

const CloseIcon = () => (
	<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
		<path
			d="M12 4L4 12M4 4l8 8"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
		/>
	</svg>
);

export interface AlertProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
	/**
	 * Semantic color intent. 'primary' for general information, 'success' for a completed
	 * action, 'warning' for something that needs attention, 'danger' for an error or a failed
	 * action. 'secondary' and 'neutral' are for low-emphasis notes. Default: 'primary'.
	 */
	intent?: AlertIntent;
	/**
	 * Visual emphasis. 'weak' (tinted background and border) suits most alerts. 'outline'
	 * (border only) is quieter, for alerts that sit among other content. 'solid' (filled
	 * background) is the strongest; keep it for the one message on the screen that must not
	 * be missed. Default: 'weak'.
	 */
	variant?: AlertVariant;
	/**
	 * Corner radius (small, medium, large). In the game theme the pixel frame's corners are
	 * stepped instead. Default: 'medium'.
	 */
	rounded?: AlertRounded;
	/** Short summary shown in bold above the description, such as "Couldn't save changes". */
	title?: React.ReactNode;
	/** Description: what happened and what the user can do about it. */
	children?: React.ReactNode;
	/**
	 * Icon shown before the text. Defaults to an icon that matches `intent`. Pass your own
	 * element to replace it, or `false` to show no icon. Custom icons should be decorative
	 * (`aria-hidden`), since the text carries the message.
	 */
	icon?: React.ReactNode;
	/** Actions shown below the text, such as a "Retry" button or a link. */
	action?: React.ReactNode;
	/**
	 * Shows a dismiss button and is called when it is pressed. The Alert doesn't hide itself:
	 * remove it in this callback, and move focus to a sensible element (for example the
	 * control that the alert was about), since the focused button disappears with it.
	 */
	onClose?: () => void;
	/** Accessible name of the dismiss button. Default: 'Dismiss'. */
	closeLabel?: string;
}

/**
 * Alert shows a message inline, in the flow of the page, without interrupting the user.
 * Use Dialog instead when the user must respond before they can continue.
 *
 * The role follows the intent: 'danger' and 'warning' render `role="alert"` (announced
 * immediately), the others `role="status"` (announced politely). Pass `role` to override
 * it, for example `role="none"` for a static note that is part of the page from the start
 * and should not be announced as a change.
 *
 * Screen readers announce `role="alert"` when it is added to the page, but often skip a
 * `role="status"` region that is added together with its text. For a polite message that
 * must be heard, keep the Alert mounted and change its content, or pass `role="alert"`.
 *
 * @param AlertProps
 * @param intent - Semantic color intent (default "primary")
 * @param variant - Visual emphasis: weak, outline, solid (default "weak")
 * @param rounded - Corner radius (default "medium")
 * @param title - Bold summary line
 * @param icon - Custom icon, or false for none
 * @param action - Actions below the text
 * @param onClose - Shows a dismiss button
 * @param closeLabel - Dismiss button's accessible name (default "Dismiss")
 */
export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
	(
		{
			intent = "primary",
			variant = "weak",
			rounded = "medium",
			title,
			children,
			icon,
			action,
			onClose,
			closeLabel = DEFAULT_CLOSE_LABEL,
			role,
			className,
			...rest
		},
		ref,
	) => {
		const themeContext = useTheme();
		const themeClass = themeContext?.themeClass ?? lightTheme;

		// `??` keeps the default when a wrapper forwards `role={undefined}`.
		const resolvedRole =
			role ?? (intent === "danger" || intent === "warning" ? "alert" : "status");
		const iconElement = icon === undefined ? <IntentIcon intent={intent} /> : icon;
		// The type check also covers untyped callers that pass null or a non-string.
		const resolvedCloseLabel =
			typeof closeLabel === "string" && closeLabel.trim() ? closeLabel : DEFAULT_CLOSE_LABEL;

		return (
			<div
				{...rest}
				role={resolvedRole}
				ref={ref}
				className={clsx(themeClass, styles.root({ intent, variant, rounded }), className)}
			>
				{isRenderable(iconElement) && <span className={styles.icon}>{iconElement}</span>}
				<div className={styles.content}>
					{isRenderable(title) && <div className={styles.title}>{title}</div>}
					{isRenderable(children) && <div className={styles.description}>{children}</div>}
					{isRenderable(action) && <div className={styles.action}>{action}</div>}
				</div>
				{onClose && (
					<button
						type="button"
						className={styles.closeButton}
						aria-label={resolvedCloseLabel}
						onClick={onClose}
					>
						<CloseIcon />
					</button>
				)}
			</div>
		);
	},
);

Alert.displayName = "Alert";
