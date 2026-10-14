import { style, type StyleRule } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract, type ColorIntent, type SelectorMap } from "@/tokens";
import { crayonLightTheme, crayonDarkTheme } from "@/tokens/themes/crayon.css";
import { gameLightTheme, gameDarkTheme } from "@/tokens/themes/game.css";
import {
	createCrayonBaseStyle,
	createCrayonBeforeBaseStyle,
	createCrayonBeforeStyle,
	createCrayonAfterStyle,
} from "@/tokens/themes/crayonTexture.css";
import type { ButtonVariant } from "./Button";

const crayonLightThemeClass = String(crayonLightTheme);
const crayonDarkThemeClass = String(crayonDarkTheme);

const gameLightThemeClass = String(gameLightTheme);
const gameDarkThemeClass = String(gameDarkTheme);

/** How far a game button moves when pressed. Must match the back-plate offset in shadow.pixelBoxRaised */
const GAME_PRESS_OFFSET = "4px";
const GAME_PRESS_DURATION = "0.08s";

/** buttonBase border width. Absolutely positioned pseudo-elements are laid out from the padding box, so hit-area math must add it */
const BUTTON_BORDER_WIDTH = "1px";

/**
 * Hit area while pressed. The button moves down-right, so extend it up-left by the same distance
 * to keep covering the original footprint. Hit testing follows transform, so without this the
 * top/left edge flickers between hover and not-hover, and clicks pressed there are released
 * outside the button and get lost
 */
const gamePressedHitArea = {
	top: `calc(-1 * (${GAME_PRESS_OFFSET} + ${BUTTON_BORDER_WIDTH}))`,
	left: `calc(-1 * (${GAME_PRESS_OFFSET} + ${BUTTON_BORDER_WIDTH}))`,
};

/**
 * Creates crayon theme-specific selectors for a given intent and variant
 */
const createCrayonThemeSelectors = (
	intent: ColorIntent,
	variant: ButtonVariant,
): SelectorMap => {
	const color = themeContract.color[intent];
	const selectors: SelectorMap = {};

	if (variant === "solid" || variant === "weak") {
		const bg = variant === "solid" ? color.surface : color.weak;
		selectors[
			`.${crayonLightThemeClass} &::before, .${crayonDarkThemeClass} &::before`
		] = createCrayonBeforeStyle(bg, color.border);
		selectors[`.${crayonLightThemeClass} &, .${crayonDarkThemeClass} &`] = {
			boxShadow: "none",
		};
		selectors[
			`.${crayonLightThemeClass} &:hover:not(:disabled), .${crayonDarkThemeClass} &:hover:not(:disabled)`
		] = {
			backgroundColor: "transparent",
			boxShadow: "none",
		};
		selectors[
			`.${crayonLightThemeClass} &:hover:not(:disabled)::before, .${crayonDarkThemeClass} &:hover:not(:disabled)::before`
		] = variant === "solid"
			? { background: color.surfaceHover }
			: { background: "transparent" };
		selectors[
			`.${crayonLightThemeClass} &:active:not(:disabled), .${crayonDarkThemeClass} &:active:not(:disabled)`
		] = {
			backgroundColor: "transparent",
			boxShadow: "none",
		};
		selectors[
			`.${crayonLightThemeClass} &:active:not(:disabled)::before, .${crayonDarkThemeClass} &:active:not(:disabled)::before`
		] = variant === "solid"
			? { background: color.surfaceActive }
			: { background: "transparent" };
	}

	if (variant === "outline") {
		selectors[`.${crayonLightThemeClass} &, .${crayonDarkThemeClass} &`] = {
			borderColor: "transparent",
		};
		selectors[
			`.${crayonLightThemeClass} &::before, .${crayonDarkThemeClass} &::before`
		] = createCrayonBeforeStyle("transparent", color.border);
		selectors[
			`.${crayonLightThemeClass} &:hover:not(:disabled), .${crayonDarkThemeClass} &:hover:not(:disabled)`
		] = {
			backgroundColor: "transparent",
			borderColor: "transparent",
		};
		selectors[
			`.${crayonLightThemeClass} &:hover:not(:disabled)::before, .${crayonDarkThemeClass} &:hover:not(:disabled)::before`
		] = {
			background: color.weak,
		};
		selectors[
			`.${crayonLightThemeClass} &:active:not(:disabled), .${crayonDarkThemeClass} &:active:not(:disabled)`
		] = {
			backgroundColor: "transparent",
			borderColor: "transparent",
		};
		selectors[
			`.${crayonLightThemeClass} &:active:not(:disabled)::before, .${crayonDarkThemeClass} &:active:not(:disabled)::before`
		] = {
			background: color.weak,
		};
	}

	if (variant === "ghost") {
		selectors[`.${crayonLightThemeClass} &, .${crayonDarkThemeClass} &`] = {
			borderColor: "transparent",
		};
		selectors[
			`.${crayonLightThemeClass} &::before, .${crayonDarkThemeClass} &::before`
		] = createCrayonBeforeStyle("transparent", color.surface, true, 0.4);
		selectors[
			`.${crayonLightThemeClass} &:hover:not(:disabled), .${crayonDarkThemeClass} &:hover:not(:disabled)`
		] = {
			backgroundColor: "transparent",
			borderColor: "transparent",
		};
		selectors[
			`.${crayonLightThemeClass} &:hover:not(:disabled)::before, .${crayonDarkThemeClass} &:hover:not(:disabled)::before`
		] = {
			background: color.weak,
		};
		selectors[
			`.${crayonLightThemeClass} &:active:not(:disabled), .${crayonDarkThemeClass} &:active:not(:disabled)`
		] = {
			backgroundColor: "transparent",
			borderColor: "transparent",
		};
		selectors[
			`.${crayonLightThemeClass} &:active:not(:disabled)::before, .${crayonDarkThemeClass} &:active:not(:disabled)::before`
		] = {
			background: color.weak,
		};
	}

	return selectors;
};

/**
 * Creates game theme-specific selectors for a given intent and variant
 */
const createGameThemeSelectors = (
	intent: ColorIntent,
	variant: ButtonVariant,
): SelectorMap => {
	const selectors: SelectorMap = {};
	const pressable = getGamePressableShadows(intent, variant);
	if (!pressable) return selectors;

	// Rest: the back plate sits 4px behind the face, so the button reads as two layers
	selectors[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`] = {
		...(variant === "solid" ? {} : { borderColor: "transparent" }),
		boxShadow: pressable.raised,
		margin: themeContract.shadow.pixelBoxMargin,
		transition: `transform ${GAME_PRESS_DURATION} ease-out, box-shadow ${GAME_PRESS_DURATION} ease-out, background-color ${GAME_PRESS_DURATION} ease-out`,
	};
	// Hover: keep the rest look so the shared hover shadow (shadow.medium) doesn't cover the pixel border.
	// createGameHoverMedia applies the actual press only on hover-capable devices (avoids sticky hover on touch)
	selectors[
		`.${gameLightThemeClass} &:hover:not(:disabled), .${gameDarkThemeClass} &:hover:not(:disabled)`
	] = {
		...(variant === "solid" ? {} : { borderColor: "transparent" }),
		boxShadow: pressable.raised,
	};
	// Active: on every device the face drops onto the back plate (transform, so layout doesn't shift)
	selectors[
		`.${gameLightThemeClass} &:active:not(:disabled), .${gameDarkThemeClass} &:active:not(:disabled)`
	] = pressable.pressed;
	// ::after corrects the hit area. At rest it matches the button including its border, so it doesn't steal clicks from neighbours
	selectors[`.${gameLightThemeClass} &::after, .${gameDarkThemeClass} &::after`] = {
		content: '""',
		position: "absolute",
		inset: `calc(-1 * ${BUTTON_BORDER_WIDTH})`,
	};
	selectors[
		`.${gameLightThemeClass} &:active:not(:disabled)::after, .${gameDarkThemeClass} &:active:not(:disabled)::after`
	] = gamePressedHitArea;

	return selectors;
};

/**
 * Shadow pair for variants that get the game theme press effect.
 * solid draws the back plate in the theme's pixel-border color, outline/weak in the intent border color
 */
const getGamePressableShadows = (intent: ColorIntent, variant: ButtonVariant) => {
	if (variant === "ghost") return null;
	const color = themeContract.color[intent];
	const border = `calc(-4px) 0 0 0 ${color.border}, 4px 0 0 0 ${color.border}, 0 4px 0 0 ${color.border}, 0 calc(-4px) 0 0 ${color.border}`;
	const flat = variant === "solid" ? themeContract.shadow.pixelBox : border;
	const raised =
		variant === "solid"
			? themeContract.shadow.pixelBoxRaised
			: `${border}, ${GAME_PRESS_OFFSET} ${GAME_PRESS_OFFSET} 0 4px ${color.border}`;
	return {
		raised,
		pressed: {
			// Hide the 1px border so the shared outline hover/active color doesn't show inside the pixel border
			...(variant === "solid" ? {} : { borderColor: "transparent" }),
			boxShadow: flat,
			transform: `translate(${GAME_PRESS_OFFSET}, ${GAME_PRESS_OFFSET})`,
		},
	};
};

/**
 * Turns game button hover into the pressed state, only on hover-capable devices.
 * vanilla-extract emits @media rules after plain rules, so this overrides the default hover at equal specificity
 */
const createGameHoverMedia = (
	intent: ColorIntent,
	variant: ButtonVariant,
): NonNullable<StyleRule["@media"]> => {
	const pressable = getGamePressableShadows(intent, variant);
	if (!pressable) return {};
	return {
		"(hover: hover)": {
			selectors: {
				[`.${gameLightThemeClass} &:hover:not(:disabled), .${gameDarkThemeClass} &:hover:not(:disabled)`]:
					pressable.pressed,
				[`.${gameLightThemeClass} &:hover:not(:disabled)::after, .${gameDarkThemeClass} &:hover:not(:disabled)::after`]:
					gamePressedHitArea,
			},
		},
	};
};

/**
 * Creates theme-specific selectors for a given intent and variant
 */
const createThemeSelectors = (
	intent: ColorIntent,
	variant: ButtonVariant,
): SelectorMap => {
	return {
		...createGameThemeSelectors(intent, variant),
		...createCrayonThemeSelectors(intent, variant),
	};
};

const buttonBase = style({
	fontFamily: themeContract.typography.fontFamily.sans,
	fontWeight: themeContract.typography.fontWeight.semibold,
	cursor: "pointer",
	transition: "all 0.2s ease-in-out",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	gap: themeContract.spacing.xs,
	outline: "none",
	position: "relative",
	border: `${BUTTON_BORDER_WIDTH} solid transparent`,
	boxSizing: "border-box",
	selectors: {
		"&:disabled": {
			opacity: 0.5,
			cursor: "not-allowed",
		},
		[`.${crayonLightThemeClass} &, .${crayonDarkThemeClass} &`]:
			createCrayonBaseStyle(),
		[`.${crayonLightThemeClass} &::before, .${crayonDarkThemeClass} &::before`]:
			{
				...createCrayonBeforeBaseStyle(),
				transition: "background 0.2s ease-in-out",
			},
		[`.${crayonLightThemeClass} &::after, .${crayonDarkThemeClass} &::after`]:
			createCrayonAfterStyle(),
	},
	"@media": {
		// With reduced motion, keep the pressed state change but turn off the transition.
		// This isn't emitted after compoundVariants, so :not(:disabled) raises its specificity
		"(prefers-reduced-motion: reduce)": {
			selectors: {
				[`.${gameLightThemeClass} &:not(:disabled), .${gameDarkThemeClass} &:not(:disabled)`]:
					{
						transition: "none",
					},
			},
		},
	},
});

export const button = recipe({
	base: buttonBase,

	variants: {
		size: {
			small: {
				padding: `${themeContract.spacing.xs} ${themeContract.spacing.sm}`,
				fontSize: themeContract.typography.fontSize.small,
				lineHeight: themeContract.typography.lineHeight.small,
				selectors: {
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						padding: `${themeContract.spacing.xxxs} ${themeContract.spacing.xs}`,
					},
				},
			},
			medium: {
				padding: `${themeContract.spacing.sm} ${themeContract.spacing.md}`,
				fontSize: themeContract.typography.fontSize.medium,
				lineHeight: themeContract.typography.lineHeight.medium,
				selectors: {
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						padding: `${themeContract.spacing.xs} ${themeContract.spacing.sm}`,
					},
				},
			},
			large: {
				padding: `${themeContract.spacing.md} ${themeContract.spacing.lg}`,
				fontSize: themeContract.typography.fontSize.large,
				lineHeight: themeContract.typography.lineHeight.large,
				selectors: {
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						padding: `${themeContract.spacing.sm} ${themeContract.spacing.md}`,
					},
				},
			},
			xlarge: {
				padding: `${themeContract.spacing.lg} ${themeContract.spacing.xl}`,
				fontSize: themeContract.typography.fontSize.xlarge,
				lineHeight: themeContract.typography.lineHeight.xlarge,
				selectors: {
					[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
						padding: `${themeContract.spacing.md} ${themeContract.spacing.lg}`,
					},
				},
			},
		},

		variant: {
			solid: {},
			outline: {
				backgroundColor: "transparent",
			},
			ghost: {
				backgroundColor: "transparent",
				borderColor: "transparent",
				boxShadow: "none",
			},
			weak: {},
		},

		intent: {
			primary: {},
			secondary: {},
			success: {},
			warning: {},
			danger: {},
			neutral: {},
		},

		rounded: {
			small: {
				borderRadius: themeContract.radius.small,
			},
			medium: {
				borderRadius: themeContract.radius.medium,
			},
			large: {
				borderRadius: themeContract.radius.large,
			},
		},
	},

	compoundVariants: [
		// Solid variants
		{
			variants: { variant: "solid", intent: "primary" },
			style: {
				backgroundColor: themeContract.color.primary.surface,
				color: themeContract.color.primary.text,
				borderColor: "transparent",
				boxShadow: themeContract.shadow.small,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.primary.surfaceHover,
						boxShadow: themeContract.shadow.medium,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.primary.surfaceActive,
						transform: "scale(0.98)",
					},
					...createThemeSelectors("primary", "solid"),
				},
				"@media": createGameHoverMedia("primary", "solid"),
			},
		},
		{
			variants: { variant: "solid", intent: "secondary" },
			style: {
				backgroundColor: themeContract.color.secondary.surface,
				color: themeContract.color.secondary.text,
				borderColor: "transparent",
				boxShadow: themeContract.shadow.small,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.secondary.surfaceHover,
						boxShadow: themeContract.shadow.medium,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.secondary.surfaceActive,
						transform: "scale(0.98)",
					},
					...createThemeSelectors("secondary", "solid"),
				},
				"@media": createGameHoverMedia("secondary", "solid"),
			},
		},
		{
			variants: { variant: "solid", intent: "success" },
			style: {
				backgroundColor: themeContract.color.success.surface,
				color: themeContract.color.success.text,
				borderColor: "transparent",
				boxShadow: themeContract.shadow.small,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.success.surfaceHover,
						boxShadow: themeContract.shadow.medium,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.success.surfaceActive,
						transform: "scale(0.98)",
					},
					...createThemeSelectors("success", "solid"),
				},
				"@media": createGameHoverMedia("success", "solid"),
			},
		},
		{
			variants: { variant: "solid", intent: "warning" },
			style: {
				backgroundColor: themeContract.color.warning.surface,
				color: themeContract.color.warning.text,
				borderColor: "transparent",
				boxShadow: themeContract.shadow.small,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.warning.surfaceHover,
						boxShadow: themeContract.shadow.medium,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.warning.surfaceActive,
						transform: "scale(0.98)",
					},
					...createThemeSelectors("warning", "solid"),
				},
				"@media": createGameHoverMedia("warning", "solid"),
			},
		},
		{
			variants: { variant: "solid", intent: "danger" },
			style: {
				backgroundColor: themeContract.color.danger.surface,
				color: themeContract.color.danger.text,
				borderColor: "transparent",
				boxShadow: themeContract.shadow.small,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.danger.surfaceHover,
						boxShadow: themeContract.shadow.medium,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.danger.surfaceActive,
						transform: "scale(0.98)",
					},
					...createThemeSelectors("danger", "solid"),
				},
				"@media": createGameHoverMedia("danger", "solid"),
			},
		},
		{
			variants: { variant: "solid", intent: "neutral" },
			style: {
				backgroundColor: themeContract.color.neutral.surface,
				color: themeContract.color.neutral.text,
				borderColor: "transparent",
				boxShadow: themeContract.shadow.small,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.neutral.surfaceHover,
						boxShadow: themeContract.shadow.medium,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.neutral.surfaceActive,
						transform: "scale(0.98)",
					},
					...createThemeSelectors("neutral", "solid"),
				},
				"@media": createGameHoverMedia("neutral", "solid"),
			},
		},

		// Outline variants
		{
			variants: { variant: "outline", intent: "primary" },
			style: {
				color: themeContract.color.primary.surface,
				borderColor: themeContract.color.primary.border,
				boxShadow: "none",
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.primary.weak,
						borderColor: themeContract.color.primary.surfaceHover,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.primary.weak,
						borderColor: themeContract.color.primary.surfaceActive,
					},
					...createThemeSelectors("primary", "outline"),
				},
				"@media": createGameHoverMedia("primary", "outline"),
			},
		},
		{
			variants: { variant: "outline", intent: "secondary" },
			style: {
				color: themeContract.color.secondary.surface,
				borderColor: themeContract.color.secondary.border,
				boxShadow: "none",
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.secondary.weak,
						borderColor: themeContract.color.secondary.surfaceHover,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.secondary.weak,
						borderColor: themeContract.color.secondary.surfaceActive,
					},
					...createThemeSelectors("secondary", "outline"),
				},
				"@media": createGameHoverMedia("secondary", "outline"),
			},
		},
		{
			variants: { variant: "outline", intent: "success" },
			style: {
				color: themeContract.color.success.surface,
				borderColor: themeContract.color.success.border,
				boxShadow: "none",
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.success.weak,
						borderColor: themeContract.color.success.surfaceHover,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.success.weak,
						borderColor: themeContract.color.success.surfaceActive,
					},
					...createThemeSelectors("success", "outline"),
				},
				"@media": createGameHoverMedia("success", "outline"),
			},
		},
		{
			variants: { variant: "outline", intent: "warning" },
			style: {
				color: themeContract.color.warning.surface,
				borderColor: themeContract.color.warning.border,
				boxShadow: "none",
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.warning.weak,
						borderColor: themeContract.color.warning.surfaceHover,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.warning.weak,
						borderColor: themeContract.color.warning.surfaceActive,
					},
					...createThemeSelectors("warning", "outline"),
				},
				"@media": createGameHoverMedia("warning", "outline"),
			},
		},
		{
			variants: { variant: "outline", intent: "danger" },
			style: {
				color: themeContract.color.danger.surface,
				borderColor: themeContract.color.danger.border,
				boxShadow: "none",
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.danger.weak,
						borderColor: themeContract.color.danger.surfaceHover,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.danger.weak,
						borderColor: themeContract.color.danger.surfaceActive,
					},
					...createThemeSelectors("danger", "outline"),
				},
				"@media": createGameHoverMedia("danger", "outline"),
			},
		},
		{
			variants: { variant: "outline", intent: "neutral" },
			style: {
				color: themeContract.color.neutral.text,
				borderColor: themeContract.color.neutral.border,
				boxShadow: "none",
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.neutral.weak,
						borderColor: themeContract.color.neutral.surfaceHover,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.neutral.weak,
						borderColor: themeContract.color.neutral.surfaceActive,
					},
					...createThemeSelectors("neutral", "outline"),
				},
				"@media": createGameHoverMedia("neutral", "outline"),
			},
		},

		// Ghost variants
		{
			variants: { variant: "ghost", intent: "primary" },
			style: {
				color: themeContract.color.primary.surface,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.primary.weak,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.primary.weak,
					},
					...createThemeSelectors("primary", "ghost"),
				},
			},
		},
		{
			variants: { variant: "ghost", intent: "secondary" },
			style: {
				color: themeContract.color.secondary.surface,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.secondary.weak,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.secondary.weak,
					},
					...createThemeSelectors("secondary", "ghost"),
				},
			},
		},
		{
			variants: { variant: "ghost", intent: "success" },
			style: {
				color: themeContract.color.success.surface,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.success.weak,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.success.weak,
					},
					...createThemeSelectors("success", "ghost"),
				},
			},
		},
		{
			variants: { variant: "ghost", intent: "warning" },
			style: {
				color: themeContract.color.warning.surface,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.warning.weak,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.warning.weak,
					},
					...createThemeSelectors("warning", "ghost"),
				},
			},
		},
		{
			variants: { variant: "ghost", intent: "danger" },
			style: {
				color: themeContract.color.danger.surface,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.danger.weak,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.danger.weak,
					},
					...createThemeSelectors("danger", "ghost"),
				},
			},
		},
		{
			variants: { variant: "ghost", intent: "neutral" },
			style: {
				color: themeContract.color.neutral.text,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: themeContract.color.neutral.weak,
					},
					"&:active:not(:disabled)": {
						backgroundColor: themeContract.color.neutral.weak,
					},
					...createThemeSelectors("neutral", "ghost"),
				},
			},
		},

		// Weak variants
		{
			variants: { variant: "weak", intent: "primary" },
			style: {
				backgroundColor: themeContract.color.primary.weak,
				color: themeContract.color.primary.surface,
				borderColor: "transparent",
				boxShadow: themeContract.shadow.small,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: "transparent",
						boxShadow: themeContract.shadow.medium,
					},
					"&:active:not(:disabled)": {
						backgroundColor: "transparent",
						transform: "scale(0.98)",
					},
					...createThemeSelectors("primary", "weak"),
				},
				"@media": createGameHoverMedia("primary", "weak"),
			},
		},
		{
			variants: { variant: "weak", intent: "secondary" },
			style: {
				backgroundColor: themeContract.color.secondary.weak,
				color: themeContract.color.secondary.surface,
				borderColor: "transparent",
				boxShadow: themeContract.shadow.small,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: "transparent",
						boxShadow: themeContract.shadow.medium,
					},
					"&:active:not(:disabled)": {
						backgroundColor: "transparent",
						transform: "scale(0.98)",
					},
					...createThemeSelectors("secondary", "weak"),
				},
				"@media": createGameHoverMedia("secondary", "weak"),
			},
		},
		{
			variants: { variant: "weak", intent: "success" },
			style: {
				backgroundColor: themeContract.color.success.weak,
				color: themeContract.color.success.surface,
				borderColor: "transparent",
				boxShadow: themeContract.shadow.small,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: "transparent",
						boxShadow: themeContract.shadow.medium,
					},
					"&:active:not(:disabled)": {
						backgroundColor: "transparent",
						transform: "scale(0.98)",
					},
					...createThemeSelectors("success", "weak"),
				},
				"@media": createGameHoverMedia("success", "weak"),
			},
		},
		{
			variants: { variant: "weak", intent: "warning" },
			style: {
				backgroundColor: themeContract.color.warning.weak,
				color: themeContract.color.warning.surface,
				borderColor: "transparent",
				boxShadow: themeContract.shadow.small,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: "transparent",
						boxShadow: themeContract.shadow.medium,
					},
					"&:active:not(:disabled)": {
						backgroundColor: "transparent",
						transform: "scale(0.98)",
					},
					...createThemeSelectors("warning", "weak"),
				},
				"@media": createGameHoverMedia("warning", "weak"),
			},
		},
		{
			variants: { variant: "weak", intent: "danger" },
			style: {
				backgroundColor: themeContract.color.danger.weak,
				color: themeContract.color.danger.surface,
				borderColor: "transparent",
				boxShadow: themeContract.shadow.small,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: "transparent",
						boxShadow: themeContract.shadow.medium,
					},
					"&:active:not(:disabled)": {
						backgroundColor: "transparent",
						transform: "scale(0.98)",
					},
					...createThemeSelectors("danger", "weak"),
				},
				"@media": createGameHoverMedia("danger", "weak"),
			},
		},
		{
			variants: { variant: "weak", intent: "neutral" },
			style: {
				backgroundColor: themeContract.color.neutral.weak,
				color: themeContract.color.neutral.text,
				borderColor: "transparent",
				boxShadow: themeContract.shadow.small,
				selectors: {
					"&:hover:not(:disabled)": {
						backgroundColor: "transparent",
						boxShadow: themeContract.shadow.medium,
					},
					"&:active:not(:disabled)": {
						backgroundColor: "transparent",
						transform: "scale(0.98)",
					},
					...createThemeSelectors("neutral", "weak"),
				},
				"@media": createGameHoverMedia("neutral", "weak"),
			},
		},

		// Crayon theme: same as Badge - outline/ghost hide the border and drop the texture
		{
			variants: { variant: "outline" },
			style: {
				selectors: {
					[`.${crayonLightThemeClass} &, .${crayonDarkThemeClass} &`]: {
						borderColor: "transparent",
					},
					[`.${crayonLightThemeClass} &::after, .${crayonDarkThemeClass} &::after`]:
						{
							display: "none",
						},
				},
			},
		},
		{
			variants: { variant: "ghost" },
			style: {
				selectors: {
					[`.${crayonLightThemeClass} &, .${crayonDarkThemeClass} &`]: {
						borderColor: "transparent",
					},
					[`.${crayonLightThemeClass} &::after, .${crayonDarkThemeClass} &::after`]:
						{
							display: "none",
						},
				},
			},
		},
	],

	defaultVariants: {
		size: "medium",
		variant: "solid",
		intent: "primary",
		rounded: "medium",
	},
});

export const fullWidth = style({
	width: "100%",
});

// Content wrapper for text (prevents pseudo-elements from covering text in crayon theme)
export const content = style({
	position: "relative",
	zIndex: 1,
	isolation: "isolate",
	display: "inline-flex",
	alignItems: "center",
	gap: themeContract.spacing.xs,
});
