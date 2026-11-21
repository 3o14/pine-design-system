---
"pine-design-system": minor
---

Add a `Spinner` component for loading states whose progress can't be measured.

- `size` (`small` 16px, `medium` 24px, `large` 32px) and `intent` (the color of the spinning arc).
- Renders `role="status"` with a visually hidden `label` (default `"Loading"`) so screen readers announce it.
- `decorative` renders a purely visual spinner (no role, hidden from assistive technology) for use inside buttons or alongside other spinners.
- Steps through eight positions in the game theme, and slows down instead of stopping under `prefers-reduced-motion`.
