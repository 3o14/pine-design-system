import { style, styleVariants, keyframes } from "@vanilla-extract/css";
import { themeContract, zIndex } from "@/tokens";
import {
	crayonThemes,
	gameThemes,
	themeSelector,
} from "@/tokens/themes/themeSelector";
import {
	crayonBumpyShellBefore,
	crayonTextureBackgroundImage,
	crayonGrainBackgroundImage,
} from "@/tokens/themes/crayonTexture.css";

/**
 * Marks the dialog's portal element, which carries the theme class. Theme overrides are
 * scoped to it: portal > container > header / body / footer.
 */
export const portal = style({});

/**
 * Creates crayon theme ::before pseudo-element style
 */
const createCrayonBeforeStyle = (
	background: string,
	borderColor: string,
	hasBorder = true,
) => ({
	...crayonBumpyShellBefore,
	background,
	...(hasBorder && { boxShadow: `inset 0 0 0 2px ${borderColor}` }),
});

/**
 * Creates crayon theme selectors for the dialog container
 */
const createCrayonContainerSelectors = () => {
	const selectors: Record<string, unknown> = {};

	selectors[themeSelector(crayonThemes, "> &", portal)] = {
		background: "transparent",
		overflow: "visible",
		isolation: "isolate",
	};

	selectors[themeSelector(crayonThemes, "> &::before", portal)] = createCrayonBeforeStyle(
		themeContract.color.surface.background,
		themeContract.color.surface.outline,
	);

	selectors[themeSelector(crayonThemes, "> &::after", portal)] = {
		content: '""',
		position: "absolute",
		inset: 0,
		borderRadius: "inherit",
		pointerEvents: "none",
		backgroundImage: `${crayonTextureBackgroundImage}, ${crayonGrainBackgroundImage}`,
		backgroundSize: "auto, 3px 3px",
		mixBlendMode: "overlay",
		opacity: 0.8,
	};

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return selectors as any;
};

const fadeIn = keyframes({
	from: { opacity: 0 },
	to: { opacity: 1 },
});

const fadeOut = keyframes({
	from: { opacity: 1 },
	to: { opacity: 0 },
});

const scaleIn = keyframes({
	from: {
		opacity: 0,
		transform: "translate(-50%, calc(-50% - 10px)) scale(0.95)",
	},
	to: {
		opacity: 1,
		transform: "translate(-50%, -50%) scale(1)",
	},
});

const scaleOut = keyframes({
	from: {
		opacity: 1,
		transform: "translate(-50%, -50%) scale(1)",
	},
	to: {
		opacity: 0,
		transform: "translate(-50%, calc(-50% - 10px)) scale(0.95)",
	},
});

export const overlay = style({
	position: "fixed",
	inset: "0",
	backgroundColor: "rgba(0, 0, 0, 0.5)",
	zIndex: zIndex.dialogBackdrop,
	animation: `${fadeIn} 0.2s ease-out`,
	selectors: {
		"&[data-state='closing']": {
			animation: `${fadeOut} 0.2s ease-in`,
		},
		"&[data-ending-style]": {
			animation: `${fadeOut} 0.2s ease-in`,
		},
	},
});

export const container = style({
	position: "fixed",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	backgroundColor: themeContract.color.surface.background,
	// The popup is portaled to <body>, so set the theme's text color and font here instead
	// of inheriting the page's, which can belong to another provider (e.g. a custom footer).
	color: themeContract.color.surface.text,
	fontFamily: themeContract.typography.fontFamily.sans,
	boxShadow: themeContract.shadow.xlarge,
	display: "flex",
	flexDirection: "column",
	maxHeight: "90vh",
	width: "100%",
	zIndex: zIndex.dialog,
	animation: `${scaleIn} 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
	selectors: {
		"&[data-ending-style]": {
			animation: `${scaleOut} 0.2s ease-in forwards`,
		},
		[themeSelector(gameThemes, "> &", portal)]: {
			boxShadow: themeContract.shadow.pixelBox,
			margin: themeContract.shadow.pixelBoxMargin,
			borderRadius: "0 !important",
		},
		...createCrayonContainerSelectors(),
	},
});

export const sizeVariants = styleVariants({
	small: {
		maxWidth: "400px",
	},
	medium: {
		maxWidth: "600px",
	},
	large: {
		maxWidth: "800px",
	},
	xlarge: {
		maxWidth: "1000px",
	},
	full: {
		maxWidth: "calc(100vw - 2rem)",
		maxHeight: "calc(100vh - 2rem)",
	},
});

export const roundedVariants = styleVariants({
	small: {
		borderRadius: themeContract.radius.small,
	},
	medium: {
		borderRadius: themeContract.radius.medium,
	},
	large: {
		borderRadius: themeContract.radius.large,
	},
});

export const header = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	padding: themeContract.spacing.lg,
	borderBottom: `1px solid ${themeContract.color.surface.divider}`,
	gap: themeContract.spacing.md,
	selectors: {
		[themeSelector(gameThemes, `> :where(.${container}) > &`, portal)]: {
			borderBottom: "1px solid transparent",
			boxShadow: `0 4px 0 0 ${themeContract.color.surface.divider}`,
			padding: themeContract.spacing.md,
		},
		[themeSelector(crayonThemes, `> :where(.${container}) > &`, portal)]: {
			position: "relative",
			zIndex: 1,
		},
	},
});

export const title = style({
	margin: 0,
	flex: 1,
	fontFamily: themeContract.typography.fontFamily.sans,
	fontSize: themeContract.typography.fontSize.large,
	fontWeight: themeContract.typography.fontWeight.semibold,
	lineHeight: themeContract.typography.lineHeight.large,
	color: themeContract.color.surface.text,
});

export const closeButton = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: "32px",
	height: "32px",
	borderRadius: themeContract.radius.medium,
	border: "none",
	backgroundColor: "transparent",
	color: themeContract.color.surface.textMuted,
	cursor: "pointer",
	flexShrink: 0,
	transition: "all 0.2s ease-in-out",
	":hover": {
		backgroundColor: themeContract.color.surface.backgroundElevated,
		color: themeContract.color.surface.text,
	},
	":focus-visible": {
		outline: `2px solid ${themeContract.color.primary.surface}`,
		outlineOffset: "2px",
	},
});

export const body = style({
	padding: themeContract.spacing.lg,
	overflowY: "auto",
	flex: 1,
	fontFamily: themeContract.typography.fontFamily.sans,
	fontSize: themeContract.typography.fontSize.medium,
	lineHeight: themeContract.typography.lineHeight.medium,
	color: themeContract.color.surface.text,
	selectors: {
		[themeSelector(gameThemes, `> :where(.${container}) > &`, portal)]: {
			padding: themeContract.spacing.md,
		},
		[themeSelector(crayonThemes, `> :where(.${container}) > &`, portal)]: {
			position: "relative",
			zIndex: 1,
		},
	},
});

export const footer = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	gap: themeContract.spacing.sm,
	padding: themeContract.spacing.lg,
	borderTop: `1px solid ${themeContract.color.surface.divider}`,
	selectors: {
		[themeSelector(gameThemes, `> :where(.${container}) > &`, portal)]: {
			borderTop: "1px solid transparent",
			boxShadow: `0 -4px 0 0 ${themeContract.color.surface.divider}`,
			padding: themeContract.spacing.md,
		},
		[themeSelector(crayonThemes, `> :where(.${container}) > &`, portal)]: {
			position: "relative",
			zIndex: 1,
		},
	},
});

export const description = style({
	marginTop: themeContract.spacing.xxs,
	fontFamily: themeContract.typography.fontFamily.sans,
	fontSize: themeContract.typography.fontSize.small,
	lineHeight: themeContract.typography.lineHeight.small,
	color: themeContract.color.surface.textMuted,
});
