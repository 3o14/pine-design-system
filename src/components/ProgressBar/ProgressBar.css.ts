import { style, keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract, type ColorIntent } from "@/tokens";
import { basicDarkTheme } from "@/tokens/themes/basic.css";
import { gameLightTheme, gameDarkTheme } from "@/tokens/themes/game.css";
import { crayonLightTheme, crayonDarkTheme } from "@/tokens/themes/crayon.css";
import {
	createCrayonBaseStyle,
	createCrayonBeforeBaseStyle,
	createCrayonBeforeStyle,
	createCrayonAfterStyle,
} from "@/tokens/themes/crayonTexture.css";

const basicDarkThemeClass = String(basicDarkTheme);

const gameLightThemeClass = String(gameLightTheme);
const gameDarkThemeClass = String(gameDarkTheme);

const crayonLightThemeClass = String(crayonLightTheme);
const crayonDarkThemeClass = String(crayonDarkTheme);

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

const trackBase = style({
	position: "relative",
	width: "100%",
	overflow: "hidden",
	backgroundColor: themeContract.color.neutral.weak,
	selectors: {
		// neutral.weak는 텍스트-위-weak 대비(Button/Badge)에 맞춰 다크 테마에서
		// 검은색에 가깝게 섞이도록 튜닝되어 있어, 텍스트가 없는 이 트랙에서는
		// 오히려 어두운 페이지 배경과 거의 구분되지 않는다. 트랙 위엔 텍스트가
		// 없으므로 weak(텍스트 대비용) 토큰 대신, 이미 페이지와 구분되는
		// 일반 neutral 단계를 써야 한다.
		[`.${basicDarkThemeClass} &, .${gameDarkThemeClass} &`]: {
			backgroundColor: themeContract.color.neutral.surfaceActive,
		},
		[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
			borderRadius: 0,
			boxShadow: themeContract.shadow.pixelBox,
			margin: themeContract.shadow.pixelBoxMargin,
		},
		[`.${crayonLightThemeClass} &, .${crayonDarkThemeClass} &`]: {
			...createCrayonBaseStyle(),
			overflow: "hidden",
			backgroundColor: "transparent",
		},
		[`.${crayonLightThemeClass} &::before`]: {
			...createCrayonBeforeBaseStyle(),
			...createCrayonBeforeStyle(
				themeContract.color.neutral.weak,
				themeContract.color.neutral.border,
				false
			),
		},
		[`.${crayonDarkThemeClass} &::before`]: {
			...createCrayonBeforeBaseStyle(),
			...createCrayonBeforeStyle(
				themeContract.color.neutral.surface,
				themeContract.color.neutral.border,
				false
			),
		},
		[`.${crayonLightThemeClass} &::after, .${crayonDarkThemeClass} &::after`]: {
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
		[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
			borderRadius: 0,
		},
		[`.${crayonLightThemeClass} &, .${crayonDarkThemeClass} &`]: {
			...createCrayonBaseStyle(),
			backgroundColor: "transparent",
		},
		[`.${crayonLightThemeClass} &::before, .${crayonDarkThemeClass} &::before`]: {
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
		[`.${crayonLightThemeClass} &::before, .${crayonDarkThemeClass} &::before`]:
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
