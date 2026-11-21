---
"pine-design-system": patch
---

Components under a nested `ThemeProvider` no longer pick up the outer provider's theme styles. Game and crayon overrides matched the theme class on any ancestor, and the outermost provider puts its class on `<html>`, so a nested basic provider still rendered game pixel frames, a crayon provider inside a game one got both themes at once, and popups followed `<html>` instead of their own provider. Overrides now apply only to the theme of the component's own root, or of its popup's portal.

- Affected: `Badge`, `Button`, `Checkbox`, `Dialog`, `Dropdown`, `ProgressBar`, `Switch`, `Tab`, `TextField`, `Tooltip`.
- `ProgressBar`: the basic dark theme's track color was shipped in `style-game.css`, so it only applied when the game stylesheet was loaded. It is now in `style.css`.
- `Dialog`: the popup sets the theme's text color and font, so its header and a custom `footer` no longer inherit the page's, which can belong to another provider.
