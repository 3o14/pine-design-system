---
"pine-design-system": minor
---

Give the game theme's `solid` `Button` a layered, pressable arcade look. At rest, a back plate in the pixel-border color sits 4px down and to the right of the face, so the button reads as two stacked layers. On hover and active, the face translates 4px onto the plate and the layers merge, so the button looks pressed in. Layout doesn't shift, because the movement uses `transform`. Disabled buttons keep the layered look but don't move, and `prefers-reduced-motion` removes the transition while keeping the state change. Adds a `shadow.pixelBoxRaised` theme token (game only; `none` in basic and crayon).
