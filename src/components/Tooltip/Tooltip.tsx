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
	content: React.ReactNode;
	children: React.ReactElement;
	side?: TooltipSide;
	align?: TooltipAlign;
	showArrow?: boolean;
	open?: boolean;
	defaultOpen?: boolean;
	/**
	 * Called when the tooltip open state changes.
	 * @param open - The new open state.
	 * @param eventDetails - Details about what triggered the change (e.g., hover, focus, Escape key).
	 */
	onOpenChange?: (open: boolean, eventDetails: BaseTooltip.Root.ChangeEventDetails) => void;
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
			onOpenChange={onOpenChange}
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
	children: React.ReactNode;
	/** Hover-open delay in ms. */
	delay?: number;
	/** Close delay in ms after the cursor leaves. */
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
