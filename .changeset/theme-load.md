---
"pine-design-system": minor
---

Split theme CSS into per-theme chunks at build time, reducing the basic-theme bundle from 109 KB to 35.5 KB. `ThemeProvider` now lazily loads `style-game.css` and `style-crayon.css` on first design switch. Adds `cssLoading: boolean` to `ThemeContextValue` and exports theme class names (`basicLightTheme`, `basicDarkTheme`, `gameLightTheme`, `gameDarkTheme`, `crayonLightTheme`, `crayonDarkTheme`) as public API.
