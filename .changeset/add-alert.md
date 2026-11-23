---
"pine-design-system": minor
---

Add an `Alert` component for inline messages that don't block the page, such as a failed save or an upcoming maintenance notice.

- `intent` sets the color and the default icon, and `variant` (`weak`, `outline`, `solid`) sets the emphasis.
- `danger` and `warning` render `role="alert"`; the other intents render `role="status"`. Pass `role` to override it.
- `title`, `action` (buttons or links below the text), and `onClose` (shows a dismiss button) are optional.
- In `weak` and `outline`, the text and icon meet contrast requirements in every theme, light and dark. Every variant stays distinct in forced colors mode.
