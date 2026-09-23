---
"pine-design-system": patch
---

Fix a React hydration mismatch in `ThemeProvider` when `syncWithSystem` is on (the default): the initial theme was computed by reading `window.matchMedia` directly inside a `useState` lazy initializer, so the server (no `window`) and the client's first render (real OS preference) could disagree, producing a mismatch on every themed element. The system-theme detection now goes through `useSyncExternalStore`, which keeps the server and the client's hydration render in lockstep (falling back to `light`) and only picks up the real OS value immediately after hydration — with no regression for pure client-rendered apps (Storybook, etc.), which still get the correct theme from their very first render.

Also adds `getThemeInitScript()` to the `pine-design-system/tokens` entry: an opt-in helper for consumers who want to inline a blocking script in their document `<head>` and eliminate even that post-hydration flash, following the same pattern as `next-themes`.

Minor behavior refinement as part of this fix: a manual `setTheme()` call now persists even when `syncWithSystem` is on — previously, the next OS theme change would silently overwrite a manual choice. Manual selections are now sticky until you call `setTheme()` again, matching how a theme toggle button is normally expected to behave.
