import React from "react";
import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import clsx from "clsx";
import * as styles from "./Tooltip.css";
import { lightTheme } from "@/tokens";
import { useTheme } from "@/providers";

export type TooltipSide = "top" | "bottom" | "left" | "right";
export type TooltipAlign = "start" | "center" | "end";

export interface TooltipProps {
	content: React.ReactNode;
	children: React.ReactElement;
	side?: TooltipSide;
	align?: TooltipAlign;
	showArrow?: boolean;
	open?: boolean;
	defaultOpen?: boolean;
	onOpenChange?: (open: boolean) => void;
	disabled?: boolean;
	className?: string;
	/** Hover-open delay in ms. For cross-tooltip grouping, mount a shared TooltipProvider instead. */
	delay?: number;
	/** Close delay in ms after the cursor leaves. */
	closeDelay?: number;
}

export const Tooltip = ({
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
	delay = 400,
	closeDelay = 200,
}: TooltipProps) => {
	const themeContext = useTheme();
	const themeClass = themeContext?.themeClass ?? lightTheme;

	return (
		<BaseTooltip.Provider delay={delay} closeDelay={closeDelay}>
			<BaseTooltip.Root
				open={open}
				defaultOpen={defaultOpen}
				onOpenChange={onOpenChange}
				disabled={disabled}
			>
				<BaseTooltip.Trigger render={children} />
				<BaseTooltip.Portal>
					<BaseTooltip.Positioner side={side} align={align} sideOffset={6} className={styles.positioner}>
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
		</BaseTooltip.Provider>
	);
};

/**
 * Shared provider for multiple tooltips — enables instant-open grouping behavior.
 * Wrap a region or the whole app when multiple Tooltip instances should feel connected.
 */
export const TooltipProvider = BaseTooltip.Provider;
