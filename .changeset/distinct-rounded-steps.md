---
"pine-design-system": minor
---

Make the `rounded` prop's `small`, `medium`, and `large` steps visibly distinct on `Button`, `Badge`, `TextField`, and `Dropdown` in every theme. Before this change, `medium` and `large` looked the same on smaller components, and every step looked the same in the game theme.

- **basic and crayon:** Each component now has its own radius tokens sized for its height, and `large` is always a full pill. Some defaults change as a result. The basic `Badge` is no longer a pill at the default `medium`. crayon components are less rounded at `small` and `medium`. basic `TextField`/`Dropdown` default to 12px instead of 16px.
- **game:** `rounded` steps the corners of the pixel frame: `small` is square, `medium` keeps the existing one-step notch, and `large` cuts a two-step corner. The `Button`'s back plate (every variant except `ghost`) follows the same shape, so it now has a one-step notch at the default `medium`.
- **`TextField` with `variant="filled"`:** A `large` radius rounds the top corners into a half-circle instead of a dome.

Token changes: adds the `pill` foundation radius (`9999px`), plus `component.badge.radius`, a `small`/`medium`/`large` `component.input.radius`, and the `shadow.pixelColor` theme tokens. Removes `shadow.pixelBoxRaised`.
