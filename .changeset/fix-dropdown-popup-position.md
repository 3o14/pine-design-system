---
"pine-design-system": minor
---

Fix `Dropdown` popup rendering off-screen. Base UI Select's default trigger-alignment positioning stretches its internal positioner from the trigger to the viewport edge, so the popup's hardcoded `top: calc(100% + 4px)` offset was computed against that stretched box instead of the trigger, pushing the popup out of the viewport. The popup now uses standard anchored positioning (matching `Tooltip`), and `side`, `align`, and `sideOffset` props are exposed for customizing placement.
