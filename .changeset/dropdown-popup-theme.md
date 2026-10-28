---
"pine-design-system": patch
---

Fix portaled popups losing their theme and primary colors. `Dropdown`, `Dialog`, and `Tooltip` render their popups in `<body>`, outside the `ThemeProvider` container.

- **Primary colors:** The themes read the primary scale from `--pie-primary-*` custom properties with no fallback, and those were only set on the provider's container. Every popup had unset primary colors, so a primary `Button` inside a `Dialog` had a transparent background, and `primaryColor` never reached any popup. The same happened to every component used outside a `ThemeProvider`. The theme tokens now fall back to the default primary scale. `ThemeProvider` also sets the active variables on `<html>` when `applyGlobal` is on, so content you portal outside the provider gets a custom `primaryColor` too, and exposes them as `primaryColorStyle` on the theme context, which all three popups apply so they also get it with `applyGlobal={false}`.
- **`Dropdown` theme:** Unlike `Dialog` and `Tooltip`, the `Dropdown` popup didn't carry the theme class. With `applyGlobal={false}` or outside a `ThemeProvider` its background was transparent, and inside a nested `ThemeProvider` it took its color tokens from the outer theme. It now gets the active theme class.
- **`Dropdown` selected option:** The selected-option styles targeted `[data-selected='true']`, but Base UI sets `data-selected` with an empty value, so the selected option was never highlighted. They now target `[data-selected]`.
- **`ThemeProvider` without `matchMedia`:** It no longer throws where `window.matchMedia` is missing (such as jsdom); the system theme resolves to `light`.
