---
"pine-design-system": patch
---

Fix `intent="neutral"` using the neutral surface (background-fill) token as its
foreground color instead of the neutral text token, making it unreadable in dark
themes. Affected `Text`, and the same pattern in `Button` (outline/ghost/weak),
`Badge` (outline/subtle/weak), `Tab` (selected-tab text), and `Dropdown`
(hover/focus-ring text).
