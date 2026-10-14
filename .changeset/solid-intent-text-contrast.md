---
"pine-design-system": patch
---

Fix unreadable text on `solid` `Badge` and `Button` in the game and crayon themes. The `secondary`, `success`, and `warning` intent `text` tokens were white on very light neon/pastel surfaces (as low as 1.13:1). They now use the theme's dark ink (`slate[900]` for game, `charcoal[500]` for crayon), and dark-mode `danger` uses `slate[900]` to match the basic dark theme. Every affected pair now meets WCAG AA (4.5:1). Light-mode `danger` is unchanged and tracked separately.
