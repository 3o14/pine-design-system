import { style } from "@vanilla-extract/css";
import { themeContract } from "@/tokens";
import { gameLightTheme, gameDarkTheme } from "@/tokens/themes/game.css";
import { crayonLightTheme, crayonDarkTheme } from "@/tokens/themes/crayon.css";

const gameLightThemeClass = String(gameLightTheme);
const gameDarkThemeClass = String(gameDarkTheme);
const crayonLightThemeClass = String(crayonLightTheme);
const crayonDarkThemeClass = String(crayonDarkTheme);

export const positioner = style({
	zIndex: 9000,
});

export const popup = style({
	backgroundColor: themeContract.color.neutral.surface,
	color: themeContract.color.neutral.text,
	padding: `${themeContract.spacing.xxs} ${themeContract.spacing.sm}`,
	borderRadius: themeContract.radius.small,
	boxShadow: themeContract.shadow.small,
	fontFamily: themeContract.typography.fontFamily.sans,
	fontSize: themeContract.typography.fontSize.small,
	lineHeight: themeContract.typography.lineHeight.small,
	fontWeight: themeContract.typography.fontWeight.regular,
	maxWidth: "240px",
	transition: "opacity 150ms ease, transform 150ms ease",
	selectors: {
		"&[data-starting-style]": {
			opacity: 0,
			transform: "scale(0.95)",
		},
		"&[data-ending-style]": {
			opacity: 0,
			transform: "scale(0.95)",
		},
		[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
			boxShadow: themeContract.shadow.pixelBox,
			margin: themeContract.shadow.pixelBoxMargin,
			borderRadius: "0 !important",
		},
		[`.${crayonLightThemeClass} &, .${crayonDarkThemeClass} &`]: {
			fontFamily: themeContract.typography.fontFamily.crayon,
		},
	},
});

export const arrow = style({
	width: "10px",
	height: "10px",
	backgroundColor: themeContract.color.neutral.surface,
	transform: "rotate(45deg)",
	// base-ui sets only the cross-axis centering (left/top) via inline style.
	// We must set the perpendicular edge offset per side so the arrow
	// sits half-inside / half-outside the popup on the correct edge.
	selectors: {
		"&[data-side='top']": {
			bottom: "-5px",
		},
		"&[data-side='bottom']": {
			top: "-5px",
		},
		"&[data-side='left']": {
			right: "-5px",
		},
		"&[data-side='right']": {
			left: "-5px",
		},
		[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
			display: "none",
		},
	},
});
