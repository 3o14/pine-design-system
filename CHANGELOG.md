# pine-design-system

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
