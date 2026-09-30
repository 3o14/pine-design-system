---
"pine-design-system": patch
---

Fix dark theme contrast regressions in the `weak` color token. `getWeakColor()` always mixed toward white, so in dark themes (basic/game/crayon) the `Button` outline/ghost hover background and the `Button`/`Badge` `weak` variant background collapsed to near-white, making the accent-colored text on top unreadable (e.g. `<Button intent="secondary" variant="outline">` on the game dark theme). Dark-theme `weak` tokens — including the `--pie-primary-weak` CSS variable — now mix toward black instead, restoring WCAG-acceptable contrast. Also fixes `ProgressBar`'s track background, which relied on the same token and had become nearly invisible against the dark page background as a side effect of the above fix.
