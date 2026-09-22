import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), vanillaExtractPlugin()],
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
	build: {
		lib: {
			entry: {
				"pine-design-system": resolve(__dirname, "src/components/index.ts"),
				"pine-design-system-tokens": resolve(__dirname, "src/tokens/public.ts"),
			},
			name: "PineDesignSystem",
			fileName: (format, entryName) => `${entryName}.${format}.js`,
			formats: ["es", "cjs"],
		},
		rollupOptions: {
			external: (id: string) =>
				["react", "react-dom", "react/jsx-runtime"].includes(id) ||
				id === "pine-design-system/style-game.css" ||
				id === "pine-design-system/style-crayon.css",
			output: {
				// The main entry bundles ThemeProvider/useTheme (React context + hooks),
				// so it must be marked as a client boundary for RSC. The tokens entry is
				// pure values with zero React/DOM dependency and must stay undirected.
				banner: (chunk) =>
					chunk.name === "pine-design-system" ? '"use client";' : "",
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
	},
});
