import React from "react";
import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import clsx from "clsx";
import * as styles from "./Tooltip.css";
import { lightTheme } from "@/tokens";
import { useTheme } from "@/providers";

export type TooltipSide = "top" | "bottom" | "left" | "right";
export type TooltipAlign = "start" | "center" | "end";

const TOOLTIP_SIDE_OFFSET = 6;

export interface TooltipProps {
	/**
	 * Content rendered inside the tooltip popup. Accepts any `ReactNode`. Use Tooltip only for
	 * supplementary information that is helpful but not required — touch and keyboard users may
	 * not reliably reach it, so do not rely on it for anything essential (use `TextField`'s
	 * `helperText`/`status` for field hints and validation, and `Dialog` to confirm destructive
	 * actions). Do not place interactive elements (links, buttons) inside the content.
	 */
	content: React.ReactNode;
	/** Trigger element. Must accept a `ref`, which Tooltip forwards to it. */
	children: React.ReactElement;
	/**
	 * Side of the trigger the tooltip appears on. Automatically flips to the opposite side when
	 * there is not enough space. Default: 'top'.
	 */
	side?: TooltipSide;
	/** Alignment along the chosen side. Default: 'center'. */
	align?: TooltipAlign;
	/**
	 * Whether to render the directional arrow. Not shown in the game theme regardless of this
	 * value, since its pixel-art aesthetic omits directional arrows. Default: true.
	 */
	showArrow?: boolean;
	/** Controlled open state. Use together with `onOpenChange`. */
	open?: boolean;
	/** Initial open state for uncontrolled usage. */
	defaultOpen?: boolean;
	/** Callback fired when the open state changes. Pair with `open` for controlled usage. */
	onOpenChange?: (open: boolean) => void;
	/** Disables the tooltip entirely — it will not render. Default: false. */
	disabled?: boolean;
	className?: string;
}

/**
 * Tooltip component that wraps a single trigger element.
 * The `ref` is forwarded to the trigger (child) element, not the Tooltip wrapper.
 */
export const Tooltip = React.forwardRef<HTMLElement, TooltipProps>(({
	content,
	children,
	side = "top",
	align = "center",
	showArrow = true,
	open,
	defaultOpen,
	onOpenChange,
	disabled = false,
	className,
}, ref) => {
	const themeContext = useTheme();
	const themeClass = themeContext?.themeClass ?? lightTheme;

	return (
		<BaseTooltip.Root
			open={open}
			defaultOpen={defaultOpen}
			onOpenChange={onOpenChange ? (open) => onOpenChange(open) : undefined}
			disabled={disabled}
		>
			<BaseTooltip.Trigger render={children} ref={ref} />
			<BaseTooltip.Portal>
				<BaseTooltip.Positioner side={side} align={align} sideOffset={TOOLTIP_SIDE_OFFSET} className={styles.positioner}>
					<BaseTooltip.Popup
						role="tooltip"
						className={clsx(themeClass, styles.popup, className)}
					>
						{content}
						{showArrow && <BaseTooltip.Arrow className={styles.arrow} />}
					</BaseTooltip.Popup>
				</BaseTooltip.Positioner>
			</BaseTooltip.Portal>
		</BaseTooltip.Root>
	);
});

Tooltip.displayName = "Tooltip";

export interface TooltipProviderProps {
	/** One or more `Tooltip` components that should share a single hover-delay timer. */
	children: React.ReactNode;
	/** Hover-open delay in ms for all wrapped tooltips. */
	delay?: number;
	/** Close delay in ms after the cursor leaves, for all wrapped tooltips. */
	closeDelay?: number;
}

/**
 * Shared provider for multiple tooltips — enables instant-open grouping behavior.
 * Wrap a region or the whole app when multiple Tooltip instances should feel connected.
 * Configure delay and closeDelay here to apply consistent timing across all tooltips.
 */
export const TooltipProvider = ({ children, delay, closeDelay }: TooltipProviderProps) => (
	<BaseTooltip.Provider delay={delay} closeDelay={closeDelay}>
		{children}
	</BaseTooltip.Provider>
);
