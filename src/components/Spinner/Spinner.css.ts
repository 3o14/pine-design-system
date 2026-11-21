import { style, keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "@/tokens";
import { gameLightTheme, gameDarkTheme } from "@/tokens/themes/game.css";

const gameLightThemeClass = String(gameLightTheme);
const gameDarkThemeClass = String(gameDarkTheme);

const spin = keyframes({
	from: { transform: "rotate(0deg)" },
	to: { transform: "rotate(360deg)" },
});

export const root = style({
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	verticalAlign: "middle",
	// Contains the absolutely positioned visually hidden label.
	position: "relative",
});

const ringBase = style({
	display: "block",
	boxSizing: "border-box",
	borderStyle: "solid",
	borderRadius: "50%",
	// The track (the whole ring) uses neutral.border; the spinning arc uses the intent color.
	// neutral.weak/surface disappear into light and dark backgrounds on a thin ring,
	// so use the border token, which stands out from the background in every theme.
	borderColor: themeContract.color.neutral.border,
	animation: `${spin} 0.8s linear infinite`,
	selectors: {
		// Game theme: a square ring rotating in 8 steps for a pixel-art feel.
		[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
			borderRadius: 0,
			animationTimingFunction: "steps(8)",
		},
	},
	"@media": {
		// Stopping the rotation would remove the loading signal, so only slow it down.
		"(prefers-reduced-motion: reduce)": {
			animationDuration: "2.4s",
		},
	},
});

export const ring = recipe({
	base: ringBase,

	variants: {
		size: {
			small: { width: "16px", height: "16px", borderWidth: "2px" },
			medium: { width: "24px", height: "24px", borderWidth: "3px" },
			large: { width: "32px", height: "32px", borderWidth: "4px" },
		},
		intent: {
			primary: { borderTopColor: themeContract.color.primary.surface },
			secondary: { borderTopColor: themeContract.color.secondary.surface },
			success: { borderTopColor: themeContract.color.success.surface },
			warning: { borderTopColor: themeContract.color.warning.surface },
			danger: { borderTopColor: themeContract.color.danger.surface },
			// neutral.surface is nearly the track color and hides the arc, so use textMuted.
			neutral: { borderTopColor: themeContract.color.surface.textMuted },
		},
	},

	defaultVariants: {
		size: "medium",
		intent: "primary",
	},
});

// Text that is hidden on screen but read by screen readers.
export const visuallyHidden = style({
	position: "absolute",
	width: "1px",
	height: "1px",
	padding: 0,
	margin: "-1px",
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	border: 0,
});
