---
"pine-design-system": patch
---

Fix the game and crayon theme fonts returning 404 in apps that install the package. The `@font-face` rules pointed at a site-root path (`/font/...`), but the font files ship inside the package, so consumer apps had nothing at that path and fell back to a default font. They now use a path relative to the stylesheet (`./font/...`), which bundlers resolve to the packaged files.

`ThemeProvider` now lazy-loads the game and crayon stylesheets with `import()` instead of injecting a `<link>` to a URL built from `import.meta.url`. The `<link>` bypassed the consumer's bundler, so the fonts still 404'd when the theme CSS was loaded by `ThemeProvider` rather than imported directly, and in Vite dev the stylesheet itself 404'd.

The crayon font file is renamed from `온글잎-승훈체.woff2` to `OnGeulipSeunghun.woff2` to avoid non-ASCII filename issues. The `font-family` name is unchanged. The build now fails if the shipped CSS contains a site-root `url()` or an inlined font.
