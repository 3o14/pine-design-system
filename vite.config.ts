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
			entry: resolve(__dirname, "src/components/index.ts"),
			name: "PineDesignSystem",
			fileName: (format) => `pine-design-system.${format}.js`,
			formats: ["es", "cjs"],
		},
		rollupOptions: {
			external: (id: string) =>
				["react", "react-dom", "react/jsx-runtime"].includes(id) ||
				id === "pine-design-system/style-game.css" ||
				id === "pine-design-system/style-crayon.css",
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
	},
});
