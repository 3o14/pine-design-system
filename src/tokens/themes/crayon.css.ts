import { createTheme, globalFontFace } from "@vanilla-extract/css";
import { semanticTokens } from "../semantic";
import * as foundation from "../foundation";
import { getWeakColor } from "../utils/getWeakColor";
import { toPastel } from "../utils/adaptColor";
import { PRIMARY_COLOR_CSS_VAR_NAMES } from "../utils/constants";

globalFontFace("온글잎-승훈체", {
	src: 'url("/font/온글잎-승훈체.woff2") format("woff2")',
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

const pastelPink = toPastel(foundation.pink);
const pastelGreen = toPastel(foundation.green);
const pastelYellow = toPastel(foundation.yellow);

export const crayonLightTheme = createTheme(semanticTokens, {
	color: {
		primary: primaryColorVars,
		secondary: {
			surface: pastelPink[500],
			surfaceHover: pastelPink[600],
			surfaceActive: pastelPink[700],
			text: foundation.neutral.white,
			border: pastelPink[600],
			weak: getWeakColor(pastelPink[500], 25),
		},
		success: {
			surface: pastelGreen[500],
			surfaceHover: pastelGreen[600],
			surfaceActive: pastelGreen[700],
			text: foundation.neutral.white,
			border: pastelGreen[600],
			weak: getWeakColor(pastelGreen[500], 25),
		},
		warning: {
			surface: pastelYellow[500],
			surfaceHover: pastelYellow[600],
			surfaceActive: pastelYellow[700],
			text: foundation.charcoal[500],
			border: pastelYellow[600],
			weak: getWeakColor(pastelYellow[500], 25),
		},
		danger: {
			surface: foundation.red[400],
			surfaceHover: foundation.red[500],
			surfaceActive: foundation.red[600],
			text: foundation.neutral.white,
			border: foundation.red[500],
			weak: getWeakColor(foundation.red[400], 25),
		},
		neutral: {
			surface: foundation.cream[500],
			surfaceHover: foundation.cream[600],
			surfaceActive: foundation.cream[700],
			text: foundation.charcoal[500],
			border: foundation.cream[600],
			weak: getWeakColor(foundation.cream[500], 25),
		},
		surface: {
			background: foundation.cream[50],
			backgroundElevated: foundation.neutral.white,
			outline: foundation.cream[300],
			text: foundation.charcoal[500],
			textMuted: foundation.charcoal[400],
			divider: "rgba(75, 75, 75, 0.08)",
		},
	},
	spacing: foundation.spacing,
	typography: {
		fontFamily: {
			sans: foundation.fontFamily.crayon,
			mono: foundation.fontFamily.mono,
			crayon: foundation.fontFamily.crayon,
		},
		fontSize: {
			xsmall: foundation.fontSize.xs,
			small: foundation.fontSize.sm,
			medium: foundation.fontSize.md,
			large: foundation.fontSize.lg,
			xlarge: foundation.fontSize.xl,
			"display-small": foundation.fontSize["2xl"],
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
		small: foundation.radius.lg,
		medium: foundation.radius.xxl,
		large: foundation.radius.xxxl,
		xlarge: foundation.radius.xxxl,
		full: foundation.radius.full,
	},
	shadow: {
		none: foundation.shadow.none,
		xsmall: foundation.shadow.xs,
		small: foundation.shadow.sm,
		medium: foundation.shadow.md,
		large: foundation.shadow.lg,
		xlarge: foundation.shadow.xl,
		pixelBox: "none",
		pixelBoxMargin: "0",
	},
	component: {
		button: {
			padding: {
				small: `${foundation.spacing.xs} ${foundation.spacing.sm}`,
				medium: `${foundation.spacing.sm} ${foundation.spacing.md}`,
				large: `${foundation.spacing.md} ${foundation.spacing.lg}`,
				xlarge: `${foundation.spacing.lg} ${foundation.spacing.xl}`,
			},
			radius: {
				small: foundation.radius.xxl,
				medium: foundation.radius.xxxl,
				large: foundation.radius.xxxl,
			},
		},
		card: {
			radius: foundation.radius.xxxl,
			padding: foundation.spacing.md,
		},
		input: {
			radius: foundation.radius.xxl,
			padding: foundation.spacing.sm,
		},
	},
});

export const crayonDarkTheme = createTheme(semanticTokens, {
	color: {
		primary: primaryColorVars,
		secondary: {
			surface: pastelPink[400],
			surfaceHover: pastelPink[500],
			surfaceActive: pastelPink[600],
			text: foundation.neutral.white,
			border: pastelPink[500],
			weak: getWeakColor(pastelPink[400], 25),
		},
		success: {
			surface: pastelGreen[400],
			surfaceHover: pastelGreen[500],
			surfaceActive: pastelGreen[600],
			text: foundation.neutral.white,
			border: pastelGreen[500],
			weak: getWeakColor(pastelGreen[400], 25),
		},
		warning: {
			surface: pastelYellow[400],
			surfaceHover: pastelYellow[500],
			surfaceActive: pastelYellow[600],
			text: foundation.charcoal[500],
			border: pastelYellow[500],
			weak: getWeakColor(pastelYellow[400], 25),
		},
		danger: {
			surface: foundation.red[400],
			surfaceHover: foundation.red[500],
			surfaceActive: foundation.red[600],
			text: foundation.neutral.white,
			border: foundation.red[500],
			weak: getWeakColor(foundation.red[400], 25),
		},
		neutral: {
			surface: foundation.charcoal[500],
			surfaceHover: foundation.charcoal[600],
			surfaceActive: foundation.charcoal[700],
			text: foundation.cream[500],
			border: foundation.charcoal[600],
			weak: getWeakColor(foundation.charcoal[500], 25),
		},
		surface: {
			background: foundation.charcoal[900],
			backgroundElevated: foundation.charcoal[800],
			outline: foundation.charcoal[700],
			text: foundation.cream[500],
			textMuted: foundation.charcoal[400],
			divider: "rgba(250, 243, 236, 0.24)",
		},
	},
	spacing: foundation.spacing,
	typography: {
		fontFamily: {
			sans: foundation.fontFamily.crayon,
			mono: foundation.fontFamily.mono,
			crayon: foundation.fontFamily.crayon,
		},
		fontSize: {
			xsmall: foundation.fontSize.xs,
			small: foundation.fontSize.sm,
			medium: foundation.fontSize.md,
			large: foundation.fontSize.lg,
			xlarge: foundation.fontSize.xl,
			"display-small": foundation.fontSize["2xl"],
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
		small: foundation.radius.lg,
		medium: foundation.radius.xxl,
		large: foundation.radius.xxxl,
		xlarge: foundation.radius.xxxl,
		full: foundation.radius.full,
	},
	shadow: {
		none: foundation.shadow.none,
		xsmall: foundation.shadow.xs,
		small: foundation.shadow.sm,
		medium: foundation.shadow.md,
		large: foundation.shadow.lg,
		xlarge: foundation.shadow.xl,
		pixelBox: "none",
		pixelBoxMargin: "0",
	},
	component: {
		button: {
			padding: {
				small: `${foundation.spacing.xs} ${foundation.spacing.sm}`,
				medium: `${foundation.spacing.sm} ${foundation.spacing.md}`,
				large: `${foundation.spacing.md} ${foundation.spacing.lg}`,
				xlarge: `${foundation.spacing.lg} ${foundation.spacing.xl}`,
			},
			radius: {
				small: foundation.radius.xxl,
				medium: foundation.radius.xxxl,
				large: foundation.radius.xxxl,
			},
		},
		card: {
			radius: foundation.radius.xxxl,
			padding: foundation.spacing.md,
		},
		input: {
			radius: foundation.radius.xxl,
			padding: foundation.spacing.sm,
		},
	},
});
