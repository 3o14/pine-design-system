import { style, createVar } from "@vanilla-extract/css";
import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { themeContract, type ColorIntent, type SelectorMap } from "@/tokens";
import {
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
import {
	PIXEL,
	createPixelCornerFill,
	createPixelFrame,
	pixelRoundedVars,
} from "@/tokens/themes/gamePixel.css";

/** Fill of the icon's shape (circle or triangle). */
const iconShapeColor = createVar();
/** Color of the glyph drawn on the shape (i, check, !). */
const iconGlyphColor = createVar();

/**
 * Height of the first text line. The icon and the dismiss button are centered in a box this
 * tall, so they line up with the first line of the title (or description) at any length.
 */
const firstLineHeight = `calc(${themeContract.typography.fontSize.medium} * ${themeContract.typography.lineHeight.medium})`;

// The alert root carries the theme class itself, so overrides compound onto `&`.
const gameThemeSelector = themeSelector(gameThemes);

type AlertStyleVariant = "weak" | "outline" | "solid";

const INTENTS: ColorIntent[] = [
	"primary",
	"secondary",
	"success",
	"warning",
	"danger",
	"neutral",
];

/**
 * Colors for one variant and intent.
 *
 * weak and outline set the text in `surface.text`, not the intent color: intent colors such
 * as warning yellow fail text contrast on a light background. The intent shows through the
 * background, border, and icon instead.
 */
const createIntentStyle = (variant: AlertStyleVariant, intent: ColorIntent) => {
	const color = themeContract.color[intent];

	if (variant === "solid") {
		return {
			backgroundColor: color.surface,
			borderColor: "transparent",
			color: color.text,
			vars: {
				// Inverted on the filled background so the icon stays visible.
				[iconShapeColor]: color.text,
				[iconGlyphColor]: color.surface,
			},
			selectors: {
				[gameThemeSelector]: createGameFrame(themeContract.shadow.pixelColor),
				[themeSelector(crayonThemes, "&::before")]: createCrayonBeforeStyle(
					color.surface,
					color.border,
				),
			} satisfies SelectorMap,
		};
	}

	const background = variant === "weak" ? color.weak : "transparent";
	return {
		backgroundColor: background,
		borderColor: color.border,
		color: themeContract.color.surface.text,
		vars: {
			// Some intent surfaces are pale (neutral everywhere, secondary and warning in the
			// game theme) and vanish on a tinted background. Mixing in the text color darkens
			// the shape on light themes and lightens it on dark ones, so it stands out in
			// every theme, and the glyph takes the page background on top of it.
			[iconShapeColor]: `color-mix(in srgb, ${color.surface} 35%, ${themeContract.color.surface.text})`,
			[iconGlyphColor]: themeContract.color.surface.background,
		},
		selectors: {
			[gameThemeSelector]: createGameFrame(color.border),
			[themeSelector(crayonThemes, "&::before")]: createCrayonBeforeStyle(
				background,
				color.border,
			),
		} satisfies SelectorMap,
	};
};

/** Game theme: a stepped pixel frame drawn with box-shadows instead of the border. */
const createGameFrame = (frameColor: string) => ({
	borderColor: "transparent",
	boxShadow: createPixelFrame(frameColor),
	...createPixelCornerFill(frameColor),
});

const rootBase = style({
	display: "flex",
	alignItems: "flex-start",
	gap: themeContract.spacing.sm,
	boxSizing: "border-box",
	padding: themeContract.spacing.md,
	border: "1px solid transparent",
	fontFamily: themeContract.typography.fontFamily.sans,
	fontSize: themeContract.typography.fontSize.medium,
	lineHeight: themeContract.typography.lineHeight.medium,
	position: "relative",
	selectors: {
		// The pixel frame is drawn PIXEL outside the box, so inset the box by the same
		// amount. Otherwise the frame is clipped by overflow: hidden parents and touches
		// alerts stacked with a small gap.
		[gameThemeSelector]: { margin: PIXEL },
		// The ::before shell draws the crayon outline, so drop the straight CSS border.
		[themeSelector(crayonThemes)]: {
			...createCrayonBaseStyle(),
			borderColor: "transparent",
		},
		[themeSelector(crayonThemes, "&::before")]: createCrayonBeforeBaseStyle(),
		[themeSelector(crayonThemes, "&::after")]: createCrayonAfterStyle(),
	},
});

export const root = recipe({
	base: rootBase,

	variants: {
		variant: {
			weak: {},
			outline: {
				selectors: {
					// The texture would tint the page behind a transparent alert.
					[themeSelector(crayonThemes, "&::after")]: { display: "none" },
				},
			},
			solid: {},
		},
		intent: {
			primary: {},
			secondary: {},
			success: {},
			warning: {},
			danger: {},
			neutral: {},
		},
		// The game theme steps the pixel frame's corners instead of rounding them.
		rounded: {
			small: {
				borderRadius: themeContract.radius.small,
				selectors: { [gameThemeSelector]: pixelRoundedVars.small },
			},
			medium: {
				borderRadius: themeContract.radius.medium,
				selectors: { [gameThemeSelector]: pixelRoundedVars.medium },
			},
			large: {
				borderRadius: themeContract.radius.large,
				selectors: { [gameThemeSelector]: pixelRoundedVars.large },
			},
		},
	},

	compoundVariants: (["weak", "outline", "solid"] as const).flatMap((variant) =>
		INTENTS.map((intent) => ({
			variants: { variant, intent },
			style: createIntentStyle(variant, intent),
		})),
	),

	defaultVariants: {
		variant: "weak",
		intent: "primary",
		rounded: "medium",
	},
});

export type AlertRootVariants = RecipeVariants<typeof root>;

/** Children sit above the crayon shell and texture pseudo-elements. */
const layer = style({
	position: "relative",
	zIndex: 1,
});

export const icon = style([
	layer,
	{
		display: "flex",
		alignItems: "center",
		flexShrink: 0,
		height: firstLineHeight,
		"@media": {
			// Forced colors would paint the shape and glyph the same system color.
			"(forced-colors: active)": {
				vars: {
					[iconShapeColor]: "CanvasText",
					[iconGlyphColor]: "Canvas",
				},
			},
		},
	},
]);

// forced-color-adjust is set on the default icon's parts only, so a custom icon keeps the
// browser's forced colors instead of its own hard-coded ones.
const keepIconColors = {
	"@media": {
		"(forced-colors: active)": { forcedColorAdjust: "none" },
	},
} as const;

export const iconShape = style({
	fill: iconShapeColor,
	...keepIconColors,
});

export const iconGlyph = style({
	fill: "none",
	stroke: iconGlyphColor,
	...keepIconColors,
});

export const content = style([
	layer,
	{
		display: "flex",
		flexDirection: "column",
		gap: themeContract.spacing.xxs,
		flex: 1,
		// Lets long words wrap instead of pushing the dismiss button out of the alert.
		minWidth: 0,
		overflowWrap: "anywhere",
	},
]);

export const title = style({
	fontWeight: themeContract.typography.fontWeight.semibold,
});

export const description = style({
	fontWeight: themeContract.typography.fontWeight.regular,
});

export const action = style({
	display: "flex",
	flexWrap: "wrap",
	alignItems: "center",
	gap: themeContract.spacing.xs,
	marginTop: themeContract.spacing.xs,
});

export const closeButton = style([
	layer,
	{
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexShrink: 0,
		width: firstLineHeight,
		height: firstLineHeight,
		// Pulls the button into the padding so its icon lines up with the alert's edge.
		marginRight: `calc(-1 * ${themeContract.spacing.xxs})`,
		padding: 0,
		border: "none",
		borderRadius: themeContract.radius.small,
		background: "transparent",
		color: "inherit",
		cursor: "pointer",
		transition: "background-color 0.15s ease-in-out",
		":hover": {
			backgroundColor: "color-mix(in srgb, currentColor 12%, transparent)",
		},
		":focus-visible": {
			// currentColor follows the alert's text, so the ring shows on every variant.
			outline: "2px solid currentColor",
			outlineOffset: "1px",
		},
	},
]);
