---
"pine-design-system": minor
---

Give the game theme's `solid`, `outline`, and `weak` `Button` variants a layered, pressable arcade look. At rest, a back plate sits 4px down and to the right of the face, so the button reads as two stacked layers. `solid` uses the pixel-border color for the plate, and `outline`/`weak` use their intent border color. When pressed, the face translates 4px onto the plate and the layers merge. Pressing happens on `:active` everywhere, and on `:hover` only on hover-capable devices (`@media (hover: hover)`), so touch devices don't get a stuck "pressed" look after a tap. Layout doesn't shift, because the movement uses `transform`. Disabled buttons keep the layered look but don't move, and `prefers-reduced-motion` removes the transition while keeping the state change. Adds a `shadow.pixelBoxRaised` theme token (game only; `none` in basic and crayon).
