/**
 * CSS custom property names for the primary color, set at runtime.
 *
 * Note: createVar() only works in .css.ts files, so these are plain string names that
 * the themes reference with var().
 */
export const PRIMARY_COLOR_CSS_VAR_NAMES = {
	surface: "--pie-primary-surface",
	surfaceHover: "--pie-primary-surface-hover",
	surfaceActive: "--pie-primary-surface-active",
	text: "--pie-primary-text",
	border: "--pie-primary-border",
	weak: "--pie-primary-weak",
} as const;

export type PrimaryColorState = keyof typeof PRIMARY_COLOR_CSS_VAR_NAMES;

/** The primary color states that have a CSS custom property, in a stable order. */
export const PRIMARY_COLOR_STATES = Object.keys(
	PRIMARY_COLOR_CSS_VAR_NAMES
) as PrimaryColorState[];
