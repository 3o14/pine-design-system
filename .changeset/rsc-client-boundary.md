---
"pine-design-system": minor
---

Fix a crash in React Server Components: importing anything from `pine-design-system` inside a Server Component (no `"use client"`) failed the build with `TypeError: createContext is not a function`, because the single bundled entry had no `"use client"` directive and `ThemeContext`'s module-scope `createContext` call got evaluated under React's server condition.

The library now builds as two entries. The main `pine-design-system` entry (all components + providers, still the same exports as before) is correctly marked `"use client"`. A new `pine-design-system/tokens` subpath exports only the pure design token values (colors, radius, spacing, shadow, typography, theme class names) with zero React/DOM dependency, safe to evaluate in server-only logic (Server Components, Route Handlers, `generateMetadata`).

Existing `import { ... } from "pine-design-system"` usage from Client Components is unaffected.
