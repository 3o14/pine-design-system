---
"pine-design-system": patch
---

Fix portaled popups losing their theme and primary colors. `Dropdown`, `Dialog`, and `Tooltip` render their popups in `<body>`, outside the `ThemeProvider` container.

- **Primary colors:** The themes read the primary scale from `--pie-primary-*` custom properties with no fallback, and those were only set on the provider's container. Every popup had unset primary colors, so a primary `Button` inside a `Dialog` had a transparent background, and `primaryColor` never reached any popup. The same happened to every component used outside a `ThemeProvider`. The theme tokens now fall back to the default primary scale, and `ThemeProvider` exposes the active variables as `primaryColorStyle` on the theme context.
- **Popup theme:** The three popups now put the active theme class and primary color variables on their portal element, an ancestor of every part of the popup. Before, the `Dropdown` popup had no theme class at all (a transparent background with `applyGlobal={false}` or outside a `ThemeProvider`, and the outer theme's color tokens inside a nested one), and `Dialog` and `Tooltip` carried it on the popup itself, so their game and crayon styles, which match an ancestor's theme class, were skipped with `applyGlobal={false}`.
- **`Dropdown` selected option:** The selected-option styles targeted `[data-selected='true']`, but Base UI sets `data-selected` with an empty value, so the selected option was never highlighted. They now target `[data-selected]`.
- **`ThemeProvider` without `matchMedia`:** It no longer throws where `window.matchMedia` is missing (such as jsdom); the system theme resolves to `light`.
