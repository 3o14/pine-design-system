---
"pine-design-system": patch
---

Fix game and crayon theme CSS failing to load at runtime. Dynamic import with a bare specifier was unresolvable in the browser, and a template-literal `import.meta.url` fallback was silently broken by Rollup. Replaced with static string URL derivation and `<link>` tag injection.
