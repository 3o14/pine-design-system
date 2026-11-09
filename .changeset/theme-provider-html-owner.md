---
"pine-design-system": minor
---

`ThemeProvider` now decides on its own whether to set the theme class on `<html>`, so the `applyGlobal` prop is no longer needed and is deprecated. It still works, but logs a warning and will be removed in the next major version.

- A `ThemeProvider` nested in another one leaves `<html>` alone; the outermost provider owns it.
- When several top-level providers are mounted, the first one owns `<html>` and hands it to the next when it unmounts, so they no longer overwrite each other.
- Fixes a nested provider wiping the outer provider's theme class from `<html>` when its own theme changed (with `applyGlobal={false}`) or when it unmounted.
- `applyGlobal={false}` now leaves `<html>` untouched instead of clearing it, so a class set by `getThemeInitScript()` is kept.

To migrate, remove `applyGlobal` and render one `ThemeProvider` at the root with the others nested inside it.
