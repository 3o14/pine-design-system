import { style } from "@vanilla-extract/css";
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

/** game solid 버튼이 눌릴 때 이동하는 거리. shadow.pixelBoxRaised의 받침판 오프셋과 같아야 한다 */
const GAME_PRESS_OFFSET = "4px";
const GAME_PRESS_DURATION = "0.08s";

/**
 * 눌린 상태의 히트 영역. 버튼이 오른쪽 아래로 이동하므로 위·왼쪽으로만 같은 거리만큼 넓혀
 * 원래 자리까지 덮는다. 히트 판정은 transform을 따르기 때문에, 이게 없으면 위·왼쪽 가장자리에서
 * hover가 풀렸다 걸렸다 반복하고 그 자리에서 누른 click이 버튼 밖에서 떼어져 누락된다
 */
const gamePressedHitArea = {
	top: `calc(-1 * ${GAME_PRESS_OFFSET})`,
	left: `calc(-1 * ${GAME_PRESS_OFFSET})`,
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

	// 기본: 앞면 뒤로 받침판이 4px 밀려 있어 두 겹으로 보인다
	selectors[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`] = {
		...(variant === "solid" ? {} : { borderColor: "transparent" }),
		boxShadow: pressable.raised,
		margin: themeContract.shadow.pixelBoxMargin,
		transition: `transform ${GAME_PRESS_DURATION} ease-out, box-shadow ${GAME_PRESS_DURATION} ease-out, background-color ${GAME_PRESS_DURATION} ease-out`,
	};
	// hover: 공통 hover 그림자(shadow.medium)가 픽셀 테두리를 덮지 않도록 기본 모양을 유지한다.
	// 실제 눌림은 hover 가능한 기기에서만 createGameHoverMedia가 덮어쓴다 (터치 기기의 sticky hover 방지)
	selectors[
		`.${gameLightThemeClass} &:hover:not(:disabled), .${gameDarkThemeClass} &:hover:not(:disabled)`
	] = {
		boxShadow: pressable.raised,
	};
	// active: 모든 기기에서 앞면이 받침판 위치로 내려앉는다 (transform이라 레이아웃은 그대로)
	selectors[
		`.${gameLightThemeClass} &:active:not(:disabled), .${gameDarkThemeClass} &:active:not(:disabled)`
	] = pressable.pressed;
	// 히트 영역 보정용 ::after. 평소에는 버튼과 같은 크기라 이웃 버튼의 클릭을 가로채지 않는다
	selectors[`.${gameLightThemeClass} &::after, .${gameDarkThemeClass} &::after`] = {
		content: '""',
		position: "absolute",
		inset: 0,
	};
	selectors[
		`.${gameLightThemeClass} &:active:not(:disabled)::after, .${gameDarkThemeClass} &:active:not(:disabled)::after`
	] = gamePressedHitArea;

	return selectors;
};

/**
 * game 테마에서 눌림 효과가 적용되는 variant의 그림자 쌍.
 * solid는 테마 공통 픽셀 테두리 색, outline/weak는 intent 테두리 색으로 받침판을 그린다
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
			boxShadow: flat,
			transform: `translate(${GAME_PRESS_OFFSET}, ${GAME_PRESS_OFFSET})`,
		},
	};
};

/**
 * hover 가능한 기기에서만 game 버튼의 hover를 눌린 상태로 만든다.
 * vanilla-extract는 @media 규칙을 일반 규칙 뒤에 출력하므로 같은 우선순위의 기본 hover를 덮어쓴다
 */
const createGameHoverMedia = (intent: ColorIntent, variant: ButtonVariant) => {
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
	border: "1px solid transparent",
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
		// 움직임 줄이기 설정 시 눌림 상태 변화는 유지하고 전환 애니메이션만 끈다.
		// compoundVariants보다 뒤에 오지 않으므로 :not(:disabled)로 우선순위를 높인다
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

		// Crayon theme: Badge와 동일 - outline/ghost는 테두리 숨기고 texture 제거
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
