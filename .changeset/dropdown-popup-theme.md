---
"pine-design-system": patch
---

Fix portaled popups losing their theme and primary colors. `Dropdown`, `Dialog`, and `Tooltip` render their popups in `<body>`, outside the `ThemeProvider` container.

- **Primary colors:** The themes read the primary scale from `--pie-primary-*` custom properties, which were only set on the provider's container. In every popup the primary colors were unset, so a primary `Button` inside a `Dialog` had a transparent background, and `primaryColor` never reached any popup. `ThemeProvider` now exposes these variables as `primaryColorStyle` on the theme context, and all three popups apply them.
- **`Dropdown` theme:** Unlike `Dialog` and `Tooltip`, the `Dropdown` popup didn't carry the theme class. With `applyGlobal={false}` or outside a `ThemeProvider` its background was transparent, and inside a nested `ThemeProvider` it used the outer theme. It now gets the active theme class.
- **`Dropdown` selected option:** The selected-option styles targeted `[data-selected='true']`, but Base UI sets `data-selected` with an empty value, so the selected option was never highlighted. They now target `[data-selected]`.
