import { describe, it, expect } from "vitest";
import {
	getThemeInitScript,
	basicLightTheme,
	basicDarkTheme,
	gameLightTheme,
	gameDarkTheme,
	crayonLightTheme,
	crayonDarkTheme,
} from "./public";

describe("getThemeInitScript", () => {
	it("defaults to the basic design's light/dark class pair", () => {
		const script = getThemeInitScript();
		expect(script).toContain(basicLightTheme);
		expect(script).toContain(basicDarkTheme);
		expect(script).not.toContain(gameLightTheme);
		expect(script).not.toContain(crayonLightTheme);
	});

	it("resolves the game design's class pair", () => {
		const script = getThemeInitScript({ design: "game" });
		expect(script).toContain(gameLightTheme);
		expect(script).toContain(gameDarkTheme);
	});

	it("resolves the crayon design's class pair", () => {
		const script = getThemeInitScript({ design: "crayon" });
		expect(script).toContain(crayonLightTheme);
		expect(script).toContain(crayonDarkTheme);
	});

	it("reads prefers-color-scheme synchronously and only touches document.documentElement", () => {
		const script = getThemeInitScript({ design: "game" });
		expect(script).toContain(`window.matchMedia("(prefers-color-scheme: dark)")`);
		expect(script).toContain("document.documentElement");
	});

	it("is wrapped defensively so a failure never breaks page load", () => {
		const script = getThemeInitScript();
		expect(script).toMatch(/^\(function\(\)\{try\{/);
		expect(script).toContain("catch(e){}");
	});
});
