import { style, keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract, type ColorIntent } from "@/tokens";
import {
	basicThemes,
	crayonThemes,
	gameThemes,
	themeSelector,
} from "@/tokens/themes/themeSelector";
import {
	createCrayonBaseStyle,
	createCrayonBeforeBaseStyle,
	createCrayonBeforeStyle,
	createCrayonAfterStyle,
} from "@/tokens/themes/crayonTexture.css";

export const root = style({
	display: "flex",
	flexDirection: "column",
	gap: themeContract.spacing.xs,
	width: "100%",
	fontFamily: themeContract.typography.fontFamily.sans,
});

export const header = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	gap: themeContract.spacing.sm,
});

export const label = style({
	fontSize: themeContract.typography.fontSize.small,
	lineHeight: themeContract.typography.lineHeight.small,
	fontWeight: themeContract.typography.fontWeight.medium,
	color: themeContract.color.surface.text,
});

export const value = style({
	fontSize: themeContract.typography.fontSize.small,
	lineHeight: themeContract.typography.lineHeight.small,
	fontWeight: themeContract.typography.fontWeight.medium,
	color: themeContract.color.surface.textMuted,
	fontVariantNumeric: "tabular-nums",
});

const darkTrack = { backgroundColor: themeContract.color.neutral.surfaceActive };

const trackBase = style({
	position: "relative",
	width: "100%",
	overflow: "hidden",
	backgroundColor: themeContract.color.neutral.weak,
	selectors: {
		// In dark themes neutral.weak is tuned to sit close to black for text-on-weak contrast
		// (Button/Badge), so on this text-free track it nearly disappears into a dark page.
		// Use a regular neutral step, which already stands out from the page.
		// One rule per design: the build splits game rules into style-game.css, so a shared
		// rule would drop the basic dark override from style.css.
		[themeSelector([basicThemes[1]], "> &", root)]: darkTrack,
		[themeSelector([gameThemes[1]], "> &", root)]: darkTrack,
		[themeSelector(gameThemes, "> &", root)]: {
			borderRadius: 0,
			boxShadow: themeContract.shadow.pixelBox,
			margin: themeContract.shadow.pixelBoxMargin,
		},
		[themeSelector(crayonThemes, "> &", root)]: {
			...createCrayonBaseStyle(),
			overflow: "hidden",
			backgroundColor: "transparent",
		},
		[themeSelector([crayonThemes[0]], "> &::before", root)]: {
			...createCrayonBeforeBaseStyle(),
			...createCrayonBeforeStyle(
				themeContract.color.neutral.weak,
				themeContract.color.neutral.border,
				false
			),
		},
		[themeSelector([crayonThemes[1]], "> &::before", root)]: {
			...createCrayonBeforeBaseStyle(),
			...createCrayonBeforeStyle(
				themeContract.color.neutral.surface,
				themeContract.color.neutral.border,
				false
			),
		},
		[themeSelector(crayonThemes, "> &::after", root)]: {
			...createCrayonAfterStyle(),
		},
	},
});

export const track = recipe({
	base: trackBase,

	variants: {
		size: {
			small: { height: "4px", borderRadius: "2px" },
			medium: { height: "8px", borderRadius: "4px" },
			large: { height: "12px", borderRadius: "6px" },
		},
	},

	defaultVariants: {
		size: "medium",
	},
});

const indeterminateSlide = keyframes({
	"0%": { left: "-40%" },
	"100%": { left: "100%" },
});

/** Path from the root, which carries the theme class, to the indicator inside the track. */
const indicatorPath = `> :where(.${trackBase}) > &`;

const indicatorBase = style({
	position: "absolute",
	insetBlock: 0,
	left: 0,
	height: "100%",
	borderRadius: "inherit",
	transition: "width 0.3s ease",
	selectors: {
		"&[data-indeterminate]": {
			width: "40%",
			animation: `${indeterminateSlide} 1.2s ease-in-out infinite`,
		},
		[themeSelector(gameThemes, indicatorPath, root)]: {
			borderRadius: 0,
		},
		[themeSelector(crayonThemes, indicatorPath, root)]: {
			...createCrayonBaseStyle(),
			backgroundColor: "transparent",
		},
		[themeSelector(crayonThemes, `${indicatorPath}::before`, root)]: {
			...createCrayonBeforeBaseStyle(),
		},
	},
	"@media": {
		"(prefers-reduced-motion: reduce)": {
			selectors: {
				"&[data-indeterminate]": {
					animation: "none",
					width: "100%",
					opacity: 0.5,
				},
			},
		},
	},
});

/**
 * Builds the crayon ::before fill selectors for a given intent.
 */
const crayonFill = (intent: ColorIntent) => {
	const color = themeContract.color[intent];
	return {
		[themeSelector(crayonThemes, `${indicatorPath}::before`, root)]:
			createCrayonBeforeStyle(color.surface, color.border, false),
	};
};

export const indicator = recipe({
	base: indicatorBase,

	variants: {
		intent: {
			primary: {
				backgroundColor: themeContract.color.primary.surface,
				selectors: crayonFill("primary"),
			},
			secondary: {
				backgroundColor: themeContract.color.secondary.surface,
				selectors: crayonFill("secondary"),
			},
			success: {
				backgroundColor: themeContract.color.success.surface,
				selectors: crayonFill("success"),
			},
			warning: {
				backgroundColor: themeContract.color.warning.surface,
				selectors: crayonFill("warning"),
			},
			danger: {
				backgroundColor: themeContract.color.danger.surface,
				selectors: crayonFill("danger"),
			},
			neutral: {
				backgroundColor: themeContract.color.neutral.surface,
				selectors: crayonFill("neutral"),
			},
		},
	},

	defaultVariants: {
		intent: "primary",
	},
});
