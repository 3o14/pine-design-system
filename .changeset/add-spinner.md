---
"pine-design-system": minor
---

Add a `Spinner` component for loading states whose progress can't be measured.

- `size` (`small` 16px, `medium` 24px, `large` 32px) and `intent` (the color of the spinning arc).
- Renders `role="status"` with a visually hidden `label` (default `"Loading"`) so screen readers announce it.
- `decorative` renders a purely visual spinner (no role, hidden from assistive technology) for use inside buttons or alongside other spinners.
- In the game theme the highlighted edge steps around a square ring in eight positions. Under `prefers-reduced-motion` the spinner stops moving and fades slowly instead.
