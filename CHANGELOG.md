# pine-design-system

## 1.3.0

### Minor Changes

- 5023089: Make the `rounded` prop's `small`, `medium`, and `large` steps visibly distinct on `Button`, `Badge`, `TextField`, and `Dropdown` in every theme. Before this change, `medium` and `large` looked the same on smaller components, and every step looked the same in the game theme.
  - **basic and crayon:** Each component now has its own radius tokens sized for its height, and `large` is always a full pill. Some defaults change as a result. The basic `Badge` is no longer a pill at the default `medium`. crayon components are less rounded at `small` and `medium`. basic `TextField`/`Dropdown` default to 12px instead of 16px.
  - **game:** `rounded` steps the corners of the pixel frame: `small` is square, `medium` keeps the existing one-step notch, and `large` cuts a two-step corner. The `Button`'s back plate (every variant except `ghost`) follows the same shape, so it now has a one-step notch at the default `medium`.
  - **`TextField` with `variant="filled"`:** A `large` radius rounds the top corners into a half-circle instead of a dome.

  Token changes: adds the `pill` foundation radius (`9999px`), plus `component.badge.radius`, a `small`/`medium`/`large` `component.input.radius`, and the `shadow.pixelColor` theme tokens. Removes `shadow.pixelBoxRaised`.

### Patch Changes

- 2dd56f0: Fix the game and crayon theme fonts returning 404 in apps that install the package. The `@font-face` rules pointed at a site-root path (`/font/...`), but the font files ship inside the package, so consumer apps had nothing at that path and fell back to a default font. They now use a path relative to the stylesheet (`./font/...`), which bundlers resolve to the packaged files.

  `ThemeProvider` now lazy-loads the game and crayon stylesheets with `import()` instead of injecting a `<link>` to a URL built from `import.meta.url`. The `<link>` bypassed the consumer's bundler, so the fonts still 404'd when the theme CSS was loaded by `ThemeProvider` rather than imported directly, and in Vite dev the stylesheet itself 404'd.

  The crayon font file is renamed from `온글잎-승훈체.woff2` to `OnGeulipSeunghun.woff2` to avoid non-ASCII filename issues. The `font-family` name is unchanged. The build now fails if the shipped CSS contains a site-root `url()` or an inlined font.

## 1.2.0

### Minor Changes

- 8288d75: Fix `Dropdown` popup rendering off-screen. Base UI Select's default trigger-alignment positioning stretches its internal positioner from the trigger to the viewport edge, so the popup's hardcoded `top: calc(100% + 4px)` offset was computed against that stretched box instead of the trigger, pushing the popup out of the viewport. The popup now uses standard anchored positioning (matching `Tooltip`), and `side`, `align`, and `sideOffset` props are exposed for customizing placement.
- b84d9da: Give the game theme's `solid`, `outline`, and `weak` `Button` variants a layered, pressable arcade look. At rest, a back plate sits 4px down and to the right of the face, so the button reads as two stacked layers. `solid` uses the pixel-border color for the plate, and `outline`/`weak` use their intent border color. When pressed, the face translates 4px onto the plate and the layers merge. Pressing happens on `:active` everywhere, and on `:hover` only on hover-capable devices (`@media (hover: hover)`), so touch devices don't get a stuck "pressed" look after a tap. Layout doesn't shift, because the movement uses `transform`. Disabled buttons keep the layered look but don't move, and `prefers-reduced-motion` removes the transition while keeping the state change. Adds a `shadow.pixelBoxRaised` theme token (game only; `none` in basic and crayon).
- 94a9d9c: Fix a crash in React Server Components: importing anything from `pine-design-system` inside a Server Component (no `"use client"`) failed the build with `TypeError: createContext is not a function`, because the single bundled entry had no `"use client"` directive and `ThemeContext`'s module-scope `createContext` call got evaluated under React's server condition.

  The library now builds as two entries. The main `pine-design-system` entry (all components + providers, still the same exports as before) is correctly marked `"use client"`. A new `pine-design-system/tokens` subpath exports only the pure design token values (colors, radius, spacing, shadow, typography, theme class names) with zero React/DOM dependency, safe to evaluate in server-only logic (Server Components, Route Handlers, `generateMetadata`).

  Existing `import { ... } from "pine-design-system"` usage from Client Components is unaffected.

### Patch Changes

- 945284c: Fix dark theme contrast regressions in the `weak` color token. `getWeakColor()` always mixed toward white, so in dark themes (basic/game/crayon) the `Button` outline/ghost hover background and the `Button`/`Badge` `weak` variant background collapsed to near-white, making the accent-colored text on top unreadable (e.g. `<Button intent="secondary" variant="outline">` on the game dark theme). Dark-theme `weak` tokens — including the `--pie-primary-weak` CSS variable — now mix toward black instead, restoring WCAG-acceptable contrast. Also fixes `ProgressBar`'s track background, which relied on the same token and had become nearly invisible against the dark page background as a side effect of the above fix.
- e3a78de: Fix `intent="neutral"` using the neutral surface (background-fill) token as its
  foreground color instead of the neutral text token, making it unreadable in dark
  themes. Affected `Text`, and the same pattern in `Button` (outline/ghost/weak),
  `Badge` (outline/subtle/weak), `Tab` (selected-tab text), and `Dropdown`
  (hover/focus-ring text).
- 9e33c32: Fix unreadable text on `solid` `Badge` and `Button` in the game and crayon themes. The `secondary`, `success`, and `warning` intent `text` tokens were white on very light neon/pastel surfaces (as low as 1.13:1). They now use the theme's dark ink (`slate[900]` for game, `charcoal[500]` for crayon), and dark-mode `danger` uses `slate[900]` to match the basic dark theme. Every affected pair now meets WCAG AA (4.5:1). Light-mode `danger` is unchanged and tracked separately.
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
