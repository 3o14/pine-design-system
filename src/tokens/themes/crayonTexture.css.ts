/**
 * Shared texture styles for the crayon theme
 * - Common styles for the bumpy shell (::before) and the texture/grain overlays
 * - Components import them into their crayon selectors
 */

/**
 * ::before style for the bumpy shell (background + border + bumpy filter)
 * - Components override background and boxShadow with per-variant tokens
 */
export const crayonBumpyShellBefore = {
	content: '""',
	position: "absolute",
	inset: 0,
	borderRadius: "inherit",
	pointerEvents: "none",
	filter: "url(#crayon-bumpy)",
} as const;

/**
 * backgroundImage for the texture overlay (paper fibers + wax sheen)
 */
export const crayonTextureBackgroundImage = `
	repeating-linear-gradient(
		90deg,
		transparent 0,
		transparent 1px,
		rgba(255, 255, 255, 0.07) 1px,
		rgba(255, 255, 255, 0.07) 2px
	),
	repeating-linear-gradient(
		0deg,
		transparent 0,
		transparent 1px,
		rgba(0, 0, 0, 0.05) 1px,
		rgba(0, 0, 0, 0.05) 2px
	),
	radial-gradient(
		ellipse 80% 50% at 28% 25%,
		rgba(255, 255, 255, 0.25) 0%,
		transparent 50%
	),
	radial-gradient(
		ellipse 60% 40% at 75% 80%,
		rgba(0, 0, 0, 0.15) 0%,
		transparent 50%
	)
`;

/**
 * backgroundImage for the grain overlay
 */
export const crayonGrainBackgroundImage = `radial-gradient(
	circle at center,
	rgba(0, 0, 0, 0.12) 1px,
	transparent 1px
)`;

/**
 * Creates crayon theme base selectors for the element itself
 * Applied to the element itself under `themeSelector(crayonThemes, ...)`
 */
export const createCrayonBaseStyle = () =>
	({
		background: "transparent",
		overflow: "visible",
		filter: "none",
		position: "relative",
		isolation: "isolate",
	}) as const;

/**
 * Creates crayon theme ::before selector style (base only, zIndex)
 * Applied to `::before` under `themeSelector(crayonThemes, ...)`
 */
export const createCrayonBeforeBaseStyle = () =>
	({
		zIndex: 0,
	}) as const;

/**
 * Creates crayon theme ::after selector style (texture overlay)
 * Applied to `::after` under `themeSelector(crayonThemes, ...)`
 */
export const createCrayonAfterStyle = () =>
	({
		content: '""',
		position: "absolute",
		inset: 0,
		borderRadius: "inherit",
		pointerEvents: "none",
		backgroundImage: `${crayonTextureBackgroundImage}, ${crayonGrainBackgroundImage}`,
		backgroundSize: "auto, 3px 3px",
		mixBlendMode: "overlay",
		opacity: 0.8,
		zIndex: 0,
	}) as const;

/**
 * Creates crayon theme ::before pseudo-element style with background, border, and optional opacity
 */
export const createCrayonBeforeStyle = (
	background: string,
	borderColor: string,
	hasBorder = true,
	opacity?: number,
) => ({
	...crayonBumpyShellBefore,
	background,
	...(hasBorder && { boxShadow: `inset 0 0 0 2px ${borderColor}` }),
	...(opacity !== undefined && { opacity }),
});
