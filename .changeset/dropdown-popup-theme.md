---
"pine-design-system": patch
---

Fix the `Dropdown` popup losing its theme. The popup is portaled to `<body>`, outside the themed wrapper, and unlike `Dialog` and `Tooltip` it didn't carry the theme class itself. With `applyGlobal={false}`, outside a `ThemeProvider`, or inside a nested `ThemeProvider`, its background and colors fell back to unset theme variables or the outer theme. The popup now gets the active theme class.
