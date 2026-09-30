import { createTheme, globalFontFace } from "@vanilla-extract/css";
import { semanticTokens } from "../semantic";
import * as foundation from "../foundation";
import { getWeakColor } from "../utils/getWeakColor";
import { toNeon } from "../utils/adaptColor";
import { PRIMARY_COLOR_CSS_VAR_NAMES } from "../utils/constants";

// url()은 site-root 기준 절대경로("/font/...")가 아니라 이 CSS 파일 기준
// 상대경로여야 한다. 소비 앱에 배포되는 dist/style-game.css는 같은 dist/
// 디렉터리 밑에 있는 dist/font/DungGeunMo.woff2를 가리켜야 하는데,
// 소비 앱의 사이트 루트에는 그 폰트가 없어 절대경로는 404가 난다.
//
// 이 경로는 이 파일(game.css.ts) 기준으로는 실제로 존재하지 않는다(진짜
// 파일은 public/font/에 있다) — 의도적이다. vanilla-extract는 로컬에서
// 실제로 resolve되는 상대경로를 만나면 파일을 base64로 강제 인라인해버리는데,
// 이 폰트들(특히 온글잎-승훈체 3.4MB)에는 그게 치명적이다. resolve되지
// 않는 문자열을 쓰면 vanilla-extract가 건드리지 않고 그대로 출력 CSS에
// 남기고, 그 문자열이 실제 dist/ 배치(스타일시트와 font/ 폴더가 같은
// 위치에 나란히 있음)와 정확히 맞아떨어진다.
globalFontFace("DungGeunMo", {
	src: 'url("./font/DungGeunMo.woff2") format("woff2")',
	fontWeight: "normal",
	fontStyle: "normal",
	fontDisplay: "swap",
});

const primaryColorVars = {
	surface: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.surface})`,
	surfaceHover: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.surfaceHover})`,
	surfaceActive: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.surfaceActive})`,
	text: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.text})`,
	border: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.border})`,
	weak: `var(${PRIMARY_COLOR_CSS_VAR_NAMES.weak})`,
} as const;

const neonGreen = toNeon(foundation.green);
const neonBlue = toNeon(foundation.blue);
const neonOrange = toNeon(foundation.orange);

export const gameLightTheme = createTheme(semanticTokens, {
	color: {
		primary: primaryColorVars,
		secondary: {
			surface: neonBlue[500],
			surfaceHover: neonBlue[600],
			surfaceActive: neonBlue[700],
			text: foundation.neutral.white,
			border: neonBlue[600],
			weak: getWeakColor(neonBlue[500], 25),
		},
		success: {
			surface: neonGreen[500],
			surfaceHover: neonGreen[600],
			surfaceActive: neonGreen[700],
			text: foundation.neutral.white,
			border: neonGreen[600],
			weak: getWeakColor(neonGreen[500], 25),
		},
		warning: {
			surface: neonOrange[500],
			surfaceHover: neonOrange[600],
			surfaceActive: neonOrange[700],
			text: foundation.neutral.white,
			border: neonOrange[600],
			weak: getWeakColor(neonOrange[500], 25),
		},
		danger: {
			surface: foundation.red[500],
			surfaceHover: foundation.red[600],
			surfaceActive: foundation.red[700],
			text: foundation.neutral.white,
			border: foundation.red[600],
			weak: getWeakColor(foundation.red[500], 25),
		},
		neutral: {
			surface: foundation.slate[200],
			surfaceHover: foundation.slate[300],
			surfaceActive: foundation.slate[400],
			text: foundation.slate[900],
			border: foundation.slate[300],
			weak: getWeakColor(foundation.slate[200], 25),
		},
		surface: {
			background: foundation.neutral.white,
			backgroundElevated: foundation.slate[50],
			outline: foundation.slate[300],
			text: foundation.slate[900],
			textMuted: foundation.slate[500],
			divider: "rgba(15, 23, 42, 0.08)",
		},
	},
	spacing: foundation.spacing,
	typography: {
		fontFamily: {
			sans: foundation.fontFamily.pixel,
			mono: foundation.fontFamily.mono,
			crayon: foundation.fontFamily.crayon,
		},
		fontSize: {
			xsmall: foundation.fontSize.xs,
			small: foundation.fontSize.sm,
			medium: foundation.fontSize.md,
			large: foundation.fontSize.lg,
			xlarge: foundation.fontSize.xl,
			"display-small": foundation.fontSize["2xs"],
			"display-medium": foundation.fontSize["3xl"],
			"display-large": foundation.fontSize["4xl"],
		},
		lineHeight: {
			xsmall: String(foundation.lineHeight.snug),
			small: String(foundation.lineHeight.normal),
			medium: String(foundation.lineHeight.normal),
			large: String(foundation.lineHeight.relaxed),
			xlarge: String(foundation.lineHeight.relaxed),
			"display-small": String(foundation.lineHeight.tight),
			"display-medium": String(foundation.lineHeight.tight),
			"display-large": String(foundation.lineHeight.tight),
		},
		fontWeight: {
			regular: String(foundation.fontWeight.regular),
			medium: String(foundation.fontWeight.medium),
			semibold: String(foundation.fontWeight.semibold),
			bold: String(foundation.fontWeight.bold),
		},
	},
	radius: {
		none: foundation.radius.none,
		small: foundation.radius.none,
		medium: foundation.radius.none,
		large: foundation.radius.none,
		xlarge: foundation.radius.none,
		full: foundation.radius.full,
	},
	shadow: {
		none: foundation.shadow.none,
		xsmall: foundation.shadow.xs,
		small: foundation.shadow.sm,
		medium: foundation.shadow.md,
		large: foundation.shadow.lg,
		xlarge: foundation.shadow.xl,
		pixelBox: `calc(-4px) 0 0 0 black, 4px 0 0 0 black, 0 4px 0 0 black, 0 calc(-4px) 0 0 black`,
		pixelBoxMargin: "0",
	},
	component: {
		button: {
			padding: {
				small: `${foundation.spacing.xxxs} ${foundation.spacing.xs}`,
				medium: `${foundation.spacing.xs} ${foundation.spacing.sm}`,
				large: `${foundation.spacing.sm} ${foundation.spacing.md}`,
				xlarge: `${foundation.spacing.md} ${foundation.spacing.lg}`,
			},
			radius: {
				small: foundation.radius.none,
				medium: foundation.radius.none,
				large: foundation.radius.none,
			},
		},
		card: {
			radius: foundation.radius.none,
			padding: foundation.spacing.sm,
		},
		input: {
			radius: foundation.radius.none,
			padding: foundation.spacing.xs,
		},
	},
});

export const gameDarkTheme = createTheme(semanticTokens, {
	color: {
		primary: primaryColorVars,
		secondary: {
			surface: neonBlue[400],
			surfaceHover: neonBlue[500],
			surfaceActive: neonBlue[600],
			text: foundation.neutral.white,
			border: neonBlue[500],
			weak: getWeakColor(neonBlue[400], 35, "black"),
		},
		success: {
			surface: neonGreen[400],
			surfaceHover: neonGreen[500],
			surfaceActive: neonGreen[600],
			text: foundation.neutral.white,
			border: neonGreen[500],
			weak: getWeakColor(neonGreen[400], 35, "black"),
		},
		warning: {
			surface: neonOrange[400],
			surfaceHover: neonOrange[500],
			surfaceActive: neonOrange[600],
			text: foundation.neutral.white,
			border: neonOrange[500],
			weak: getWeakColor(neonOrange[400], 35, "black"),
		},
		danger: {
			surface: foundation.red[400],
			surfaceHover: foundation.red[500],
			surfaceActive: foundation.red[600],
			text: foundation.neutral.white,
			border: foundation.red[500],
			weak: getWeakColor(foundation.red[400], 35, "black"),
		},
		neutral: {
			surface: foundation.slate[800],
			surfaceHover: foundation.slate[700],
			surfaceActive: foundation.slate[600],
			text: foundation.slate[200],
			border: foundation.slate[700],
			weak: getWeakColor(foundation.slate[800], 35, "black"),
		},
		surface: {
			background: foundation.slate[900],
			backgroundElevated: foundation.slate[800],
			outline: foundation.slate[800],
			text: foundation.slate[200],
			textMuted: foundation.slate[400],
			divider: "rgba(148, 163, 184, 0.24)",
		},
	},
	spacing: foundation.spacing,
	typography: {
		fontFamily: {
			sans: foundation.fontFamily.pixel,
			mono: foundation.fontFamily.mono,
			crayon: foundation.fontFamily.crayon,
		},
		fontSize: {
			xsmall: foundation.fontSize.xs,
			small: foundation.fontSize.sm,
			medium: foundation.fontSize.md,
			large: foundation.fontSize.lg,
			xlarge: foundation.fontSize.xl,
			"display-small": foundation.fontSize["2xs"],
			"display-medium": foundation.fontSize["3xl"],
			"display-large": foundation.fontSize["4xl"],
		},
		lineHeight: {
			xsmall: String(foundation.lineHeight.snug),
			small: String(foundation.lineHeight.normal),
			medium: String(foundation.lineHeight.normal),
			large: String(foundation.lineHeight.relaxed),
			xlarge: String(foundation.lineHeight.relaxed),
			"display-small": String(foundation.lineHeight.tight),
			"display-medium": String(foundation.lineHeight.tight),
			"display-large": String(foundation.lineHeight.tight),
		},
		fontWeight: {
			regular: String(foundation.fontWeight.regular),
			medium: String(foundation.fontWeight.medium),
			semibold: String(foundation.fontWeight.semibold),
			bold: String(foundation.fontWeight.bold),
		},
	},
	radius: {
		none: foundation.radius.none,
		small: foundation.radius.none,
		medium: foundation.radius.none,
		large: foundation.radius.none,
		xlarge: foundation.radius.none,
		full: foundation.radius.full,
	},
	shadow: {
		none: foundation.shadow.none,
		xsmall: foundation.shadow.xs,
		small: foundation.shadow.sm,
		medium: foundation.shadow.md,
		large: foundation.shadow.lg,
		xlarge: foundation.shadow.xl,
		pixelBox: `calc(-4px) 0 0 0 ${foundation.neutral.white}, 4px 0 0 0 ${foundation.neutral.white}, 0 4px 0 0 ${foundation.neutral.white}, 0 calc(-4px) 0 0 ${foundation.neutral.white}`,
		pixelBoxMargin: "0",
	},
	component: {
		button: {
			padding: {
				small: `${foundation.spacing.xxxs} ${foundation.spacing.xs}`,
				medium: `${foundation.spacing.xs} ${foundation.spacing.sm}`,
				large: `${foundation.spacing.sm} ${foundation.spacing.md}`,
				xlarge: `${foundation.spacing.md} ${foundation.spacing.lg}`,
			},
			radius: {
				small: foundation.radius.none,
				medium: foundation.radius.none,
				large: foundation.radius.none,
			},
		},
		card: {
			radius: foundation.radius.none,
			padding: foundation.spacing.sm,
		},
		input: {
			radius: foundation.radius.none,
			padding: foundation.spacing.xs,
		},
	},
});
