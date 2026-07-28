import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import clsx from "clsx";
import * as styles from "./Dialog.css";
import { lightTheme } from "@/tokens";
import { useTheme } from "@/providers";
import { Button } from "../Button";
import type { ButtonVariant, ButtonIntent } from "../Button";

export type DialogSize = "small" | "medium" | "large" | "xlarge" | "full";
export type DialogRounded = "small" | "medium" | "large";

export interface DialogAction {
	/** Button label text. */
	label: string;
	/** Click handler for the action button. */
	onClick: () => void;
	/** Visual style variant of the action button, forwarded to `Button`. */
	variant?: ButtonVariant;
	/**
	 * Color intent of the action button, forwarded to `Button`. Use 'danger' for irreversible
	 * confirmation actions (delete, reset) to clearly warn the user.
	 */
	intent?: ButtonIntent;
	disabled?: boolean;
}

export interface DialogProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
	/** Whether the dialog is open. Required — Dialog is always controlled. */
	open: boolean;
	/** Callback fired when the open state changes (e.g. overlay click, Escape, close button). */
	onOpenChange?: (open: boolean) => void;
	/** Callback fired specifically when the dialog closes (after `onOpenChange(false)`). */
	onClose?: () => void;
	/**
	 * Maximum width of the dialog. 'small' suits simple confirmation dialogs; 'medium' fits general
	 * forms or information; 'large' suits complex forms or detailed content; 'xlarge' suits dialogs
	 * with a lot of content; 'full' is a full-screen dialog. Default: 'medium'.
	 */
	size?: DialogSize;
	/** Corner radius of the dialog (small, medium, large). Default: 'medium'. */
	rounded?: DialogRounded;
	/** Dialog title, rendered as the accessible name. */
	title?: string;
	/** Dialog description text, rendered below the title. */
	description?: string;
	children: React.ReactNode;
	/**
	 * Action buttons rendered in the footer. For irreversible actions (delete, reset), include a
	 * 'danger' intent action and set `closeOnOverlayClick: false` so the confirmation can't be
	 * dismissed accidentally. Takes precedence over `footer` when both are provided.
	 */
	actions?: DialogAction[];
	/** Custom footer content, used instead of `actions` for non-button footers. */
	footer?: React.ReactNode;
	/** Whether to show the close (X) button in the header. Default: true. */
	showCloseButton?: boolean;
	/**
	 * Whether clicking the overlay closes the dialog. Set to `false` for confirmation dialogs on
	 * irreversible actions, or when the dialog contains a form, to prevent users from accidentally
	 * losing their input or bypassing a decision. Default: true.
	 */
	closeOnOverlayClick?: boolean;
	/** Whether pressing Escape closes the dialog. Default: true. */
	closeOnEscape?: boolean;
}

/**
 * Dialog component for modal interactions.
 */
export const Dialog = ({
	open,
	onOpenChange,
	onClose,
	size = "medium",
	rounded = "medium",
	title,
	description,
	children,
	actions,
	footer,
	showCloseButton = true,
	closeOnOverlayClick = true,
	closeOnEscape = true,
	className,
}: DialogProps) => {
	const themeContext = useTheme();
	const themeClass = themeContext?.themeClass ?? lightTheme;
	const handleOpenChange = (newOpen: boolean) => {
		onOpenChange?.(newOpen);
		if (!newOpen) {
			onClose?.();
		}
	};

	return (
		<BaseDialog.Root
			open={open}
			onOpenChange={handleOpenChange}
			disablePointerDismissal={!closeOnOverlayClick}
			modal={closeOnEscape}
		>
			<BaseDialog.Portal>
				<BaseDialog.Backdrop className={styles.overlay} />
				<BaseDialog.Popup
					className={clsx(
						themeClass,
						styles.container,
						styles.sizeVariants[size],
						styles.roundedVariants[rounded],
						className
					)}
				>
					{(title || showCloseButton) && (
						<div className={styles.header}>
							<div style={{ flex: 1 }}>
								{title && (
									<BaseDialog.Title className={styles.title}>
										{title}
									</BaseDialog.Title>
								)}
								{description && (
									<BaseDialog.Description className={styles.description}>
										{description}
									</BaseDialog.Description>
								)}
							</div>
							{showCloseButton && (
								<BaseDialog.Close className={styles.closeButton}>
									<svg
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
									>
										<path
											d="M15 5L5 15M5 5L15 15"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</BaseDialog.Close>
							)}
						</div>
					)}

					<div className={styles.body}>{children}</div>

					{(actions || footer) && (
						<div className={styles.footer}>
							{actions
								? actions.map((action, index) => (
										<Button
											key={index}
											variant={action.variant ?? "solid"}
											intent={action.intent ?? "primary"}
											onClick={action.onClick}
											disabled={action.disabled}
										>
											{action.label}
										</Button>
									))
								: footer}
						</div>
					)}
				</BaseDialog.Popup>
			</BaseDialog.Portal>
		</BaseDialog.Root>
	);
};
