import React from "react";
import { Button as BaseButton } from "@base-ui/react/button";
import clsx from "clsx";
import * as styles from "./Button.css";
import { lightTheme, type ColorIntent } from "@/tokens";
import { useTheme } from "@/providers";

export type ButtonVariant = "solid" | "outline" | "ghost" | "weak";
export type ButtonSize = "small" | "medium" | "large" | "xlarge";
export type ButtonIntent = ColorIntent;
export type ButtonRounded = "small" | "medium" | "large";

export interface ButtonProps extends Omit<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	"color"
> {
	/**
	 * Visual emphasis level. Prefer a single 'solid' button per view — the primary CTA that needs
	 * the most emphasis; multiple solid buttons make it harder for users to identify the primary
	 * action. 'weak' pairs well as a secondary action alongside solid. 'outline' / 'ghost' are for
	 * tertiary, low-emphasis actions. Default: 'solid'.
	 */
	variant?: ButtonVariant;
	/** Size of the button. Choose based on context and required click area. Default: 'medium'. */
	size?: ButtonSize;
	/**
	 * Semantic color intent conveying the nature of the action. For irreversible actions (delete,
	 * reset), always use 'danger' to clearly warn the user. Default: 'primary'.
	 */
	intent?: ButtonIntent;
	/** Corner radius (small, medium, large — 'large' is pill-like). Default: 'medium'. */
	rounded?: ButtonRounded;
	/** Whether the button fills the full width of its parent container. Default: false. */
	fullWidth?: boolean;
	/** Whether the button is disabled. When disabled, click events do not fire. Default: false. */
	disabled?: boolean;
}

/**
 * Button component for user interactions.
 *
 * Do not use Button for links — if a link should look like a button, style the `<a>` element
 * directly. Unlike the native `<button>`, `type="submit"` must be set explicitly for the Button
 * to act as a submit button in forms.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			variant = "solid",
			size = "medium",
			intent = "primary",
			rounded = "medium",
			fullWidth = false,
			disabled = false,
			children,
			className,
			...props
		},
		ref,
	) => {
		const themeContext = useTheme();
		const themeClass = themeContext?.themeClass ?? lightTheme;

		return (
			<BaseButton
				ref={ref}
				className={clsx(
					themeClass,
					styles.button({
						variant,
						intent,
						size,
						rounded,
					}),
					fullWidth && styles.fullWidth,
					className,
				)}
				disabled={disabled}
				{...props}
			>
				<span className={styles.content}>{children}</span>
			</BaseButton>
		);
	},
);

Button.displayName = "Button";
