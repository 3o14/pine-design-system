---
name: create-component
description: Creates a new Pine Design System component following the established pattern. Use when the user asks to add a new component, create a component, or implement a UI component in the design system.
---

# Create Component (Pine Design System)

Creates a new component in `src/components/ComponentName/` with all required files.

## When to Use

- User asks to add/create/implement a new component
- User mentions a component name that doesn't exist yet

## Component Structure

Each component lives in `src/components/ComponentName/`:

```
ComponentName/
├── ComponentName.tsx      # React component
├── ComponentName.css.ts  # Vanilla Extract styles
├── ComponentName.spec.tsx # Vitest tests
├── ComponentName.stories.tsx # Storybook
└── index.ts              # Barrel export
```

## Step 1: Create Component.tsx

- Use `React.forwardRef` if the component needs ref forwarding (form controls, focusable elements)
- Wrap `@base-ui/react` primitives when applicable (Button, Checkbox, Switch, Dropdown, Dialog, Tab)
- Import: `clsx`, `* as styles from "./Component.css"`, `lightTheme`, `useTheme` from `@/providers`, `ColorIntent` from `@/tokens`
- Export: component, Props interface, type aliases (Size, Variant, Intent, Rounded)
- Use `useTheme()` for theme class: `themeContext?.themeClass ?? lightTheme`
- Compose className: `clsx(themeClass, styles.component({ variant, size, ... }), className)`
- Accept `className` and spread `...props` for HTML attributes
- **No FC** — Use `const Component = (props: Props) => {...}` form

```tsx
export interface ComponentProps extends React.HTMLAttributes<HTMLXxxElement> {
  variant?: "solid" | "outline" | "subtle" | "weak";
  intent?: ColorIntent;
  size?: "small" | "medium" | "large" | "xlarge";
  rounded?: "small" | "medium" | "large";
  children: React.ReactNode;
}

export const Component = ({ variant = "solid", ... }: ComponentProps) => {
  const themeContext = useTheme();
  const themeClass = themeContext?.themeClass ?? lightTheme;
  return (
    <element className={clsx(themeClass, styles.component({ variant, ... }), className)} {...props}>
      {children}
    </element>
  );
};
```

## Step 2: Create Component.css.ts

- Use `recipe()` from `@vanilla-extract/recipes` for variants
- Use `style()` for single styles
- Import `themeContract`, `ColorIntent` from `@/tokens`
- Variants: `variant`, `intent`, `size`, `rounded` — use `themeContract.color[intent]` for colors
- Theme-specific overrides: `.${gameLightTheme} &`, `.${crayonLightTheme} &` selectors
- Reference existing component (e.g. Badge.css.ts) for game/crayon theme patterns

## Step 3: Create index.ts

```ts
export { Component } from "./Component";
export type { ComponentProps, ComponentSize, ComponentVariant } from "./Component";
```

## Step 4: Register in src/components/index.ts

Add: `export * from "./ComponentName";`

## Step 5: Create Component.spec.tsx

- Vitest + React Testing Library
- Use `getByRole`, `getByLabelText`, `getByText` (semantic queries)
- Use `userEvent` for interactions
- Test: rendering, props, HTML attributes, accessibility
- Wrap with `ThemeProvider` if needed for theme-dependent tests

## Step 6: Create Component.stories.tsx

- Meta: `title: "Category/ComponentName"`, `component`, `tags: ["autodocs"]`
- Args with defaults
- ArgTypes: control type, options, description, table (type, defaultValue)
- Stories: Default, variants, sizes, intents

## Checklist

- [ ] Component.tsx with forwardRef if needed
- [ ] Component.css.ts with recipe() variants
- [ ] index.ts barrel export
- [ ] src/components/index.ts updated
- [ ] Component.spec.tsx with semantic queries
- [ ] Component.stories.tsx with argTypes
