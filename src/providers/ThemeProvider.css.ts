import { style } from "@vanilla-extract/css";
import { themeContract } from "@/tokens";

export const themeWrapper = style({
	backgroundColor: themeContract.color.surface.background,
	color: themeContract.color.surface.text,
});
