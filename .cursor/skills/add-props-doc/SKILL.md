---
name: add-props-doc
description: Adds Props documentation to a component in the docs site using TSDoc and generate-props. Use when adding docs for a new component, documenting props, or creating a docs page with Props table.
---

# Add Props Doc (Pine Design System)

Adds Props table to the docs site for a component. Uses ts-morph to parse TSDoc and generate JSON, then PropsTable to render.

## When to Use

- User asks to add docs for a component
- User wants Props table on a component page
- New component was created and needs documentation

## Workflow

### Step 1: Add interface to docs/scripts/generate-props.mjs

Add a new constant with the component's Props interface and TSDoc:

```javascript
const COMPONENT_CODE = `
import type { ReactNode } from "react"

export interface ComponentProps {
  /**
   * 설명.
   * @default "value"
   */
  propName?: "option1" | "option2";
  /** 필수 prop 설명. */
  children: ReactNode;
}
`;
```

Add to `main()` (before the final console.log):

```javascript
const componentProps = parseInterface(COMPONENT_CODE, "ComponentProps");
writeFileSync(join(outputDir, "component.json"), JSON.stringify(componentProps, null, 2));
```

Update the console.log to include the new file: `"Generated props: badge.json, button.json, component.json"`

### Step 2: Create docs/components/ComponentPropsDoc.tsx

```tsx
import { PropsTable } from "./PropsTable";
import componentProps from "../content/props/component.json";

export function ComponentPropsDoc() {
  return <PropsTable props={componentProps} title="Props" />;
}
```

### Step 3: Export from docs/components/PropsTables.tsx

```tsx
export { ComponentPropsDoc } from "./ComponentPropsDoc";
```

### Step 4: Register in docs/mdx-components.tsx

```tsx
import { ..., ComponentPropsDoc } from "./components/PropsTables";
// ...
ComponentPropsDoc,
```

### Step 5: Add to docs/content/components/component.mdx

At the bottom of the page (after code block):

```mdx
<ComponentPropsDoc />
```

## TSDoc Format

- `/** 설명. */` — description
- `@default "value"` — default value (in same block or separate line)
- Optional props: `propName?: Type`
- Required: `children: ReactNode` (no `?`)

## Run generate-props

```bash
cd docs && node scripts/generate-props.mjs
```

Or it runs automatically via `pnpm run build` (prebuild).

## Checklist

- [ ] Interface added to generate-props.mjs
- [ ] ComponentPropsDoc.tsx created
- [ ] PropsTables.tsx updated
- [ ] mdx-components.tsx updated
- [ ] MDX page has <ComponentPropsDoc />
- [ ] Run generate-props (or build)
