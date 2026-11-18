import { style, keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "@/tokens";
import { gameLightTheme, gameDarkTheme } from "@/tokens/themes/game.css";

const gameLightThemeClass = String(gameLightTheme);
const gameDarkThemeClass = String(gameDarkTheme);

const spin = keyframes({
	from: { transform: "rotate(0deg)" },
	to: { transform: "rotate(360deg)" },
});

export const root = style({
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	verticalAlign: "middle",
});

const ringBase = style({
	display: "block",
	boxSizing: "border-box",
	borderStyle: "solid",
	borderRadius: "50%",
	// 트랙(링 전체)은 neutral.border, 회전하는 호(arc)는 intent 색으로 칠한다.
	// neutral.weak/surface는 얇은 링에서 라이트·다크 배경에 묻혀 보이지 않아서,
	// 모든 테마에서 배경과 구분되는 border 토큰을 쓴다.
	borderColor: themeContract.color.neutral.border,
	animation: `${spin} 0.8s linear infinite`,
	selectors: {
		// 게임 테마: 각진 링을 8단계로 끊어 돌려 픽셀 느낌을 낸다.
		[`.${gameLightThemeClass} &, .${gameDarkThemeClass} &`]: {
			borderRadius: 0,
			animationTimingFunction: "steps(8)",
		},
	},
	"@media": {
		// 회전을 완전히 멈추면 로딩 중이라는 신호가 사라지므로, 속도만 늦춘다.
		"(prefers-reduced-motion: reduce)": {
			animationDuration: "2.4s",
		},
	},
});

export const ring = recipe({
	base: ringBase,

	variants: {
		size: {
			small: { width: "16px", height: "16px", borderWidth: "2px" },
			medium: { width: "24px", height: "24px", borderWidth: "3px" },
			large: { width: "32px", height: "32px", borderWidth: "4px" },
		},
		intent: {
			primary: { borderTopColor: themeContract.color.primary.surface },
			secondary: { borderTopColor: themeContract.color.secondary.surface },
			success: { borderTopColor: themeContract.color.success.surface },
			warning: { borderTopColor: themeContract.color.warning.surface },
			danger: { borderTopColor: themeContract.color.danger.surface },
			// neutral.surface는 트랙과 거의 같은 색이라 호가 보이지 않으므로 textMuted를 쓴다.
			neutral: { borderTopColor: themeContract.color.surface.textMuted },
		},
	},

	defaultVariants: {
		size: "medium",
		intent: "primary",
	},
});

// 화면에는 보이지 않지만 스크린 리더는 읽는 텍스트.
export const visuallyHidden = style({
	position: "absolute",
	width: "1px",
	height: "1px",
	padding: 0,
	margin: "-1px",
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	border: 0,
});
