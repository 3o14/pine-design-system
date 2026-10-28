import type { StorybookConfig } from "@storybook/react-vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { resolve } from "path";
import type { Plugin } from "vite";

/**
 * The theme @font-face rules use `./font/...`, which matches the shipped dist/ layout
 * (the stylesheet sits next to dist/font/). Storybook compiles the CSS from source
 * instead, so the built stylesheet lands in assets/ with no font/ folder next to it.
 * Point the fonts at /font/, where Storybook serves public/font.
 */
const rootFontUrls = (): Plugin => ({
	name: "pine-storybook-root-font-urls",
	enforce: "pre",
	transform(code, id) {
		if (!id.includes(".vanilla.css")) return null;
		return code.replace(/url\((["']?)\.\/font\//g, "url($1/font/");
	},
});

const config: StorybookConfig = {
	stories: [
		"../.storybook/**/*.mdx",
		"../src/**/*.mdx",
		"../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
	],
	addons: [
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-a11y",
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
	typescript: {
		reactDocgen: "react-docgen-typescript",
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			propFilter: (prop) =>
				prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
		},
	},
	async viteFinal(config) {
		const plugins = config.plugins || [];
		const hasVanillaExtract = plugins.some(
			(plugin) =>
				plugin &&
				(typeof plugin === "function" ||
					(typeof plugin === "object" &&
						plugin !== null &&
						"name" in plugin &&
						plugin.name === "vanilla-extract"))
		);

		if (!hasVanillaExtract) {
			config.plugins = [vanillaExtractPlugin(), ...plugins];
		}

		if (!config.resolve) {
			config.resolve = {};
		}
		if (!config.resolve.alias) {
			config.resolve.alias = {};
		}
		config.resolve.alias["@"] = resolve(__dirname, "../src");
		// ThemeProvider lazy-loads the split theme stylesheets from the built package.
		// Storybook compiles the theme CSS from source, so these resolve to an empty file.
		config.resolve.alias["pine-design-system/style-game.css"] = resolve(__dirname, "../src/__mocks__/empty.css");
		config.resolve.alias["pine-design-system/style-crayon.css"] = resolve(__dirname, "../src/__mocks__/empty.css");

		config.plugins = [...(config.plugins ?? []), rootFontUrls()];

		return config;
	},
};
export default config;
