import { fontSize, lineHeight } from "../foundation/typography";

/**
 * Basic theme (light/dark): semantic text sizes → foundation fontSize + lineHeight.
 * SSOT for docs TypographyScale and basic theme typography.fontSize / lineHeight.
 */
export const basicThemeSemanticTextStyles = {
	fontSize: {
		xsmall: fontSize.xs,
		small: fontSize.sm,
		medium: fontSize.md,
		large: fontSize.lg,
		xlarge: fontSize.xl,
		"display-small": fontSize["2xl"],
		"display-medium": fontSize["3xl"],
		"display-large": fontSize["4xl"],
	},
	lineHeight: {
		xsmall: String(lineHeight.snug),
		small: String(lineHeight.normal),
		medium: String(lineHeight.normal),
		large: String(lineHeight.relaxed),
		xlarge: String(lineHeight.relaxed),
		"display-small": String(lineHeight.tight),
		"display-medium": String(lineHeight.tight),
		"display-large": String(lineHeight.tight),
	},
} as const;

export type BasicSemanticTextSize = keyof typeof basicThemeSemanticTextStyles.fontSize;

/** Stable row order for documentation tables */
export const BASIC_SEMANTIC_TEXT_SIZE_ORDER = [
	"xsmall",
	"small",
	"medium",
	"large",
	"xlarge",
	"display-small",
	"display-medium",
	"display-large",
] as const satisfies readonly BasicSemanticTextSize[];
