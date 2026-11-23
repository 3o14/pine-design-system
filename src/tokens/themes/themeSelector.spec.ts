import { describe, it, expect } from "vitest";
import { themeSelector } from "./themeSelector";

describe("themeSelector", () => {
	it("compounds the theme class onto & when no scope is given", () => {
		expect(themeSelector(["light", "dark"], "&:hover::before")).toBe(
			"&.light:hover::before, &.dark:hover::before",
		);
	});

	it("defaults the selector to &", () => {
		expect(themeSelector(["light"])).toBe("&.light");
	});

	it("scopes to the given element without adding specificity", () => {
		expect(themeSelector(["light", "dark"], "> &", "root")).toBe(
			":where(.root).light > &, :where(.root).dark > &",
		);
	});

	it("rejects an unscoped selector that does not start with &", () => {
		expect(() => themeSelector(["light"], "> &")).toThrow(/must start with "&"/);
	});
});
