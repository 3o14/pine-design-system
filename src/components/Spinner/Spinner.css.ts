import { style, keyframes, createVar } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "@/tokens";
import { gameLightTheme, gameDarkTheme } from "@/tokens/themes/game.css";

const gameLightThemeClass = String(gameLightTheme);
const gameDarkThemeClass = String(gameDarkTheme);
const gameThemeSelector = `.${gameLightThemeClass} &, .${gameDarkThemeClass} &`;

/** Intent color of the arc, set per variant. */
const intentColor = createVar();
/** Color actually painted on the moving arc: the intent color, or a system color in forced colors. */
const arcColor = createVar();
/** Color of the track (the rest of the ring). */
const trackColor = createVar();

const spin = keyframes({
	from: { transform: "rotate(0deg)" },
	to: { transform: "rotate(360deg)" },
});

/**
 * Game theme: the square never rotates, so it can't spill out of its box as a diamond.
 * Instead the highlighted edge walks around the square in eight steps.
 */
const sides = (top: boolean, right: boolean, bottom: boolean, left: boolean) => ({
	borderTopColor: top ? arcColor : trackColor,
	borderRightColor: right ? arcColor : trackColor,
	borderBottomColor: bottom ? arcColor : trackColor,
	borderLeftColor: left ? arcColor : trackColor,
});

const chase = keyframes({
	"0%, 100%": sides(true, false, false, false),
	"12.5%": sides(true, true, false, false),
	"25%": sides(false, true, false, false),
	"37.5%": sides(false, true, true, false),
	"50%": sides(false, false, true, false),
	"62.5%": sides(false, false, true, true),
	"75%": sides(false, false, false, true),
	"87.5%": sides(true, false, false, true),
});

/** Reduced motion: no rotation or travel, only a slow fade that still signals activity. */
const pulse = keyframes({
	"0%, 100%": { opacity: 1 },
	"50%": { opacity: 0.4 },
});

const reducedMotionAnimation = `${pulse} 2s ease-in-out infinite`;

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
	vars: {
		// The track uses neutral.border; neutral.weak/surface disappear into light and dark
		// backgrounds on a thin ring, while the border token stands out in every theme.
		[trackColor]: themeContract.color.neutral.border,
		[arcColor]: intentColor,
	},
	display: "block",
	boxSizing: "border-box",
	borderStyle: "solid",
	borderRadius: "50%",
	borderColor: trackColor,
	borderTopColor: arcColor,
	animation: `${spin} 0.8s linear infinite`,
	selectors: {
		[gameThemeSelector]: {
			borderRadius: 0,
			animation: `${chase} 0.8s step-end infinite`,
		},
	},
	"@media": {
		// Forced colors paint every border side the same system color, which hides the arc
		// and makes the spinner look static. Use two distinct system colors instead.
		"(forced-colors: active)": {
			vars: {
				[trackColor]: "GrayText",
				[arcColor]: "CanvasText",
			},
			forcedColorAdjust: "none",
		},
		"(prefers-reduced-motion: reduce)": {
			animation: reducedMotionAnimation,
			selectors: {
				// Repeat the game selector so it outranks the game chase animation above.
				[gameThemeSelector]: {
					animation: reducedMotionAnimation,
				},
			},
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
			primary: { vars: { [intentColor]: themeContract.color.primary.surface } },
			secondary: { vars: { [intentColor]: themeContract.color.secondary.surface } },
			success: { vars: { [intentColor]: themeContract.color.success.surface } },
			warning: { vars: { [intentColor]: themeContract.color.warning.surface } },
			danger: { vars: { [intentColor]: themeContract.color.danger.surface } },
			// neutral.surface is nearly the track color and hides the arc, so use textMuted.
			neutral: { vars: { [intentColor]: themeContract.color.surface.textMuted } },
			// Follows the parent's text color so the arc contrasts with any filled surface,
			// such as a solid button; the track is the same color faded.
			current: {
				vars: {
					[intentColor]: "currentColor",
					[trackColor]: "color-mix(in srgb, currentColor 30%, transparent)",
				},
			},
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
