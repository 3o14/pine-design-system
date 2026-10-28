import { describe, it, expect } from "vitest";
import { primaryColorVarRefs } from "./primaryColorVarRefs";
import { PRIMARY_COLOR_CSS_VAR_NAMES } from "./constants";
import { lightColors, darkColors } from "../colors";
import { gameLightColors, gameDarkColors } from "../themes/game.css";
import { crayonLightColors, crayonDarkColors } from "../themes/crayon.css";

describe("primaryColorVarRefs", () => {
	it("references each primary custom property with the default scale as the fallback", () => {
		const scale = lightColors.palette.primary;
		const refs = primaryColorVarRefs(scale);

		expect(refs.surface).toBe(`var(${PRIMARY_COLOR_CSS_VAR_NAMES.surface}, ${scale.surface})`);
		expect(refs.weak).toBe(`var(${PRIMARY_COLOR_CSS_VAR_NAMES.weak}, ${scale.weak})`);
	});

	// Outside a ThemeProvider (or in content portaled outside one) nothing sets the
	// --pie-primary-* properties, so the themes must carry a fallback for each mode.
	it.each([
		["game light", gameLightColors, lightColors],
		["game dark", gameDarkColors, darkColors],
		["crayon light", crayonLightColors, lightColors],
		["crayon dark", crayonDarkColors, darkColors],
	])("gives the %s theme a fallback for its color mode", (_, themeColors, modeColors) => {
		expect(themeColors.primary).toEqual(primaryColorVarRefs(modeColors.palette.primary));
	});
});
