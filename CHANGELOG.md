# pine-design-system

## 1.2.0

### Minor Changes

- 8288d75: Fix `Dropdown` popup rendering off-screen. Base UI Select's default trigger-alignment positioning stretches its internal positioner from the trigger to the viewport edge, so the popup's hardcoded `top: calc(100% + 4px)` offset was computed against that stretched box instead of the trigger, pushing the popup out of the viewport. The popup now uses standard anchored positioning (matching `Tooltip`), and `side`, `align`, and `sideOffset` props are exposed for customizing placement.
- 94a9d9c: Fix a crash in React Server Components: importing anything from `pine-design-system` inside a Server Component (no `"use client"`) failed the build with `TypeError: createContext is not a function`, because the single bundled entry had no `"use client"` directive and `ThemeContext`'s module-scope `createContext` call got evaluated under React's server condition.

  The library now builds as two entries. The main `pine-design-system` entry (all components + providers, still the same exports as before) is correctly marked `"use client"`. A new `pine-design-system/tokens` subpath exports only the pure design token values (colors, radius, spacing, shadow, typography, theme class names) with zero React/DOM dependency, safe to evaluate in server-only logic (Server Components, Route Handlers, `generateMetadata`).

  Existing `import { ... } from "pine-design-system"` usage from Client Components is unaffected.

### Patch Changes

- e3a78de: Fix `intent="neutral"` using the neutral surface (background-fill) token as its
  foreground color instead of the neutral text token, making it unreadable in dark
  themes. Affected `Text`, and the same pattern in `Button` (outline/ghost/weak),
  `Badge` (outline/subtle/weak), `Tab` (selected-tab text), and `Dropdown`
  (hover/focus-ring text).
- cd8236d: Fix a React hydration mismatch in `ThemeProvider` when `syncWithSystem` is on (the default): the initial theme was computed by reading `window.matchMedia` directly inside a `useState` lazy initializer, so the server (no `window`) and the client's first render (real OS preference) could disagree, producing a mismatch on every themed element. The system-theme detection now goes through `useSyncExternalStore`, which keeps the server and the client's hydration render in lockstep (falling back to `light`) and only picks up the real OS value immediately after hydration — with no regression for pure client-rendered apps (Storybook, etc.), which still get the correct theme from their very first render.

  Also adds `getThemeInitScript()` to the `pine-design-system/tokens` entry: an opt-in helper for consumers who want to inline a blocking script in their document `<head>` and eliminate even that post-hydration flash, following the same pattern as `next-themes`.

  Minor behavior refinement as part of this fix: a manual `setTheme()` call now persists even when `syncWithSystem` is on — previously, the next OS theme change would silently overwrite a manual choice. Manual selections are now sticky until you call `setTheme()` again, matching how a theme toggle button is normally expected to behave.

## 1.1.1

### Patch Changes

- 193b7a5: Add machine-readable docs for AI coding agents: `llms.txt`/`llms-full.txt` (served on the docs site and now also shipped inside the published package), per-prop JSDoc on every component's Props interface, and a W3C DTCG-formatted design tokens JSON export.
- d1b0b39: Fix game and crayon theme CSS failing to load at runtime. Dynamic import with a bare specifier was unresolvable in the browser, and a template-literal `import.meta.url` fallback was silently broken by Rollup. Replaced with static string URL derivation and `<link>` tag injection.

## 1.1.0

### Minor Changes

- f834b03: Add Tooltip component with support for placement (`side`, `align`), optional arrow, open state control (`open`, `defaultOpen`, `onOpenChange`), hover/close delay, and disabled state. Includes a shared `TooltipProvider` for cross-tooltip grouping behavior.
- 8fce678: Add `ProgressBar` component built on `@base-ui/react` Progress. Supports determinate and indeterminate (`value={null}`) states, three sizes, and six color intents, with theming for basic, game, and crayon. Renders `role="progressbar"` with full ARIA wiring — `label` is required for an accessible name and `formatValue` drives both the displayed value and `aria-valuetext`.
- c8b3ddc: Split theme CSS into per-theme chunks at build time, reducing the basic-theme bundle from 109 KB to 35.5 KB. `ThemeProvider` now lazily loads `style-game.css` and `style-crayon.css` on first design switch. Adds `cssLoading: boolean` to `ThemeContextValue` and exports theme class names (`basicLightTheme`, `basicDarkTheme`, `gameLightTheme`, `gameDarkTheme`, `crayonLightTheme`, `crayonDarkTheme`) as public API.

## 1.0.2

### Patch Changes

- 4e607f4: Release pine-design-system@1.0.1 and pine-ui-kit@1.0.2 bridge

  **Other Changes:**
  - release pine-design-system@1.0.1 and pine-ui-kit@1.0.2 bridge
  - rename package to pine-design-system and add pine-ui-kit bridge

## 1.0.1

### Patch Changes

- 2700bbb: rename prop and package name

  package name changee
  `pine-ui-kit` -> `pine-design-system`

  prop name change
  1. `mode` -> `theme`
  2. `theme` -> `design`

## 1.0.0

### Major Changes

- ca45e68: ucrayon theming TextField

  **New Features:**
  - Switch crayon theming
  - Dropdown crayon theming
  - crayon theming layer

  **Other Changes:**
  - crayon theming TextField
  - delete CrayonTextureButton
  - crayon theming Dialog
  - crayon theming Checkbox
  - crayon theming Button
  - Badge crayon theming

### Minor Changes

- 336a9a4: Component updates and improvements

  ## New Components
  - **Tab**: Added tab interface component for organizing content

  ## Component Improvements
  - **Base UI Migration**: Migrated all interactive components to Base UI for better accessibility and form handling
    - Enhanced Button, Switch, Checkbox, Dialog, Dropdown, and TextField components
    - Improved keyboard navigation and screen reader support
    - Better form validation and state management

  ## Browser Support
  - **iOS 26+ Safari**: Added backdrop support for overlay components like Dialog and Dropdown

- 78ca38b: **New Features:**
  - Tab indicator
  - game theming Dropdown
  - game theming Dialog
  - game theming Checkbox
  - Checkbox delete prop - variant, rounded
  - game theming Text
  - game theming Switch
  - TextField multiline prop
  - game theming textfield & font
  - game theming button
  - crayon theme

  **Bug Fixes:**
  - tab indicator
  - switch animation
  - dialog z-index

  **Other Changes:**
  - game theme padding
  - badge story
  - badge game dark theme
  - game badge ui
  - game theme font
  - crayon theme
  - theme layer

## 0.1.2

### Patch Changes

- dbd8174: provider export

## 0.1.1

### Patch Changes

- d58af62: refactor: move ThemeProvider to providers package for better dependency hierarchy
  - Moved ThemeProvider from components/ to providers/ package
  - Components now use useTheme hook instead of direct ThemeContext imports
  - Improved encapsulation and clearer dependency direction
  - No breaking changes - public API remains unchanged

## 0.1.0

### Minor Changes

- 4e1a358: Add `primaryColor` prop to ThemeProvider to allow custom primary color configuration. The primary color automatically generates all variant colors (solid, outline, ghost, weak) and disabled states. Each ThemeProvider instance can independently set its own primary color using CSS variables scoped to its container element.

## 0.0.3

### Patch Changes

- 26d6a48: Fix border styling consistency in Badge and Button components by explicitly setting borderColor and updating border property usage.
