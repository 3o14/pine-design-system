<div align="center">
  <h1>🍍 Pine Design System</h1>
  <p><strong>One React component library, three design concepts — switch the whole look with a single prop.</strong></p>

  <p>
    <a href="https://www.npmjs.com/package/pine-design-system"><img src="https://img.shields.io/npm/v/pine-design-system?style=flat-square" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/pine-design-system"><img src="https://img.shields.io/npm/dm/pine-design-system?style=flat-square" alt="npm downloads" /></a>
    <a href="https://github.com/3o14/pine-design-system/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/pine-design-system?style=flat-square" alt="license" /></a>
  </p>

  <img src="https://raw.githubusercontent.com/3o14/pine-design-system/main/.github/assets/design-switch.gif" alt="The same components switching between the basic, game, and crayon designs in light and dark mode" width="720" />

  <p>
    <a href="https://pine-design-system.vercel.app/?utm_source=readme">Documentation</a> •
    <a href="https://3o14.github.io/pine-design-system/">Storybook</a> •
    <a href="https://github.com/3o14/pine-design-system">GitHub</a>
  </p>
</div>

---

## Features

- **Three design concepts** — `basic`, `game` (pixel art), and `crayon` (hand-drawn), switched with one `design` prop
- **Light & dark mode** — Every design ships both modes, with optional OS sync
- **Token-driven** — Components only read semantic tokens, so a design swap never touches your code
- **Accessible by default** — Built on [Base UI](https://base-ui.com/) headless primitives for keyboard and screen reader support
- **Zero-runtime CSS** — Styles compiled ahead of time with Vanilla Extract
- **Small by default** — Only the basic design's CSS loads up front; game and crayon CSS load on first use
- **Server Component friendly** — Client entry is marked `"use client"`, and a React-free `/tokens` entry is safe in server-only code
- **TypeScript native** — Typed props with JSDoc on every component

## Installation

```bash
npm install pine-design-system
# or
pnpm add pine-design-system
# or
yarn add pine-design-system
```

Requires React 18 or 19.

## Quick Start

Wrap your app with `ThemeProvider` and import the stylesheet once:

```tsx
import { ThemeProvider, Button, Badge, TextField } from "pine-design-system";
import "pine-design-system/style.css";

function App() {
	return (
		<ThemeProvider defaultDesign="basic">
			<Button intent="primary">Get Started</Button>
			<Badge intent="success">New</Badge>
			<TextField label="Email" placeholder="you@example.com" />
		</ThemeProvider>
	);
}
```

## Switching Designs

The core idea of Pine: **change the design, keep the code.** Every component reads the active design from `ThemeProvider`.

| Design   | Look                                                                     |
| -------- | ------------------------------------------------------------------------ |
| `basic`  | Clean and modern, with soft shadows — for product and business apps      |
| `game`   | Pixel-art frames, pressable arcade buttons, and a bitmap font            |
| `crayon` | Hand-drawn strokes and a handwritten font — for playful or learning apps |

```tsx
<ThemeProvider design="game" theme="dark">
	<YourApp />
</ThemeProvider>
```

Switch at runtime with controlled props:

```tsx
import { useState } from "react";
import { ThemeProvider, type Design, type Theme } from "pine-design-system";

function App() {
	const [design, setDesign] = useState<Design>("basic");
	const [theme, setTheme] = useState<Theme>("light");

	return (
		<ThemeProvider design={design} onDesignChange={setDesign} theme={theme} onThemeChange={setTheme}>
			<YourApp />
		</ThemeProvider>
	);
}
```

Or from anywhere inside the provider with `useThemeRequired()`:

```tsx
import { useThemeRequired } from "pine-design-system";

function DesignToggle() {
	const { design, setDesign } = useThemeRequired();
	return <button onClick={() => setDesign(design === "game" ? "basic" : "game")}>Toggle</button>;
}
```

The game and crayon stylesheets (`style-game.css`, `style-crayon.css`) are loaded by `ThemeProvider` the first time you switch to them. While one loads, `cssLoading` from the theme context is `true`. They load through your bundler (Vite, webpack, Next.js), which also emits their fonts, so there are no font files to copy or serve yourself. To skip the lazy load, import one up front, e.g. `import "pine-design-system/style-game.css"`.

### ThemeProvider props

| Prop             | Type                              | Default   | Description                                                           |
| ---------------- | --------------------------------- | --------- | --------------------------------------------------------------------- |
| `defaultDesign`  | `"basic" \| "game" \| "crayon"`   | `"basic"` | Initial design (uncontrolled)                                         |
| `design`         | `"basic" \| "game" \| "crayon"`   | —         | Design (controlled), use with `onDesignChange`                        |
| `defaultTheme`   | `"light" \| "dark"`               | —         | Initial color mode, used when `syncWithSystem` is `false`             |
| `theme`          | `"light" \| "dark"`               | —         | Color mode (controlled), use with `onThemeChange`                     |
| `syncWithSystem` | `boolean`                         | `true`    | Follow the OS color scheme until the theme is set manually            |
| `primaryColor`   | `string`                          | —         | Hex color that generates a custom primary palette (e.g. `"#6366f1"`)  |
| `applyGlobal`    | `boolean`                         | `true`    | Apply the theme class to `<html>`; set `false` for multiple providers |

## Components

| Component                       | Description                                                   |
| ------------------------------- | ------------------------------------------------------------- |
| [**Badge**](https://pine-design-system.vercel.app/components/badge?utm_source=readme)                       | Status labels and counts                                      |
| [**Button**](https://pine-design-system.vercel.app/components/button?utm_source=readme)                      | Actions in `solid`, `outline`, `ghost`, and `weak` variants   |
| [**Checkbox**](https://pine-design-system.vercel.app/components/checkbox?utm_source=readme)                    | Selectable input with label                                   |
| [**Dialog**](https://pine-design-system.vercel.app/components/dialog?utm_source=readme)                      | Modal dialog with title, description, and action buttons      |
| [**Dropdown**](https://pine-design-system.vercel.app/components/dropdown?utm_source=readme)                    | Select input with anchored popup (`side`, `align`, `sideOffset`) |
| [**ProgressBar**](https://pine-design-system.vercel.app/components/progress-bar?utm_source=readme)                 | Determinate and indeterminate progress with accessible value text |
| [**Switch**](https://pine-design-system.vercel.app/components/switch?utm_source=readme)                      | On/off toggle                                                 |
| [**Tab**](https://pine-design-system.vercel.app/components/tab?utm_source=readme)                         | Tabbed navigation with accessible panels                      |
| [**Text**](https://pine-design-system.vercel.app/components/text?utm_source=readme)                        | Typography primitive with size, weight, and intent            |
| [**TextField**](https://pine-design-system.vercel.app/components/text-field?utm_source=readme)                   | Text input and textarea with validation states                |
| [**Tooltip**](https://pine-design-system.vercel.app/components/tooltip?utm_source=readme) / **TooltipProvider** | Hover and focus popups, with shared open delay for groups   |

Most components share the same vocabulary of props:

- `intent` — `primary | secondary | success | warning | danger | neutral`
- `size` — `small | medium | large` (plus `xlarge` on `Button`)
- `rounded` — `small | medium | large` (`large` is a full pill; in `game` the steps notch the pixel frame's corners)
- `className` — merged with the component's own classes

See the [documentation](https://pine-design-system.vercel.app/?utm_source=readme) for every prop and live examples.

## Next.js & Server Components

The main `pine-design-system` entry is a client boundary (`"use client"`), so you can render its components from Server Components as usual.

For server-only code (a Server Component's function body, Route Handlers, `generateMetadata`), import design tokens from the React-free `/tokens` entry:

```tsx
import { colors, radius, spacing } from "pine-design-system/tokens";
```

To avoid a light/dark flash before hydration, inline `getThemeInitScript()` in your root layout:

```tsx
// app/layout.tsx
import { getThemeInitScript } from "pine-design-system/tokens";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<script dangerouslySetInnerHTML={{ __html: getThemeInitScript({ design: "basic" }) }} />
			</head>
			<body>{children}</body>
		</html>
	);
}
```

## For AI Coding Agents

The package ships [`llms.txt`](https://pine-design-system.vercel.app/llms.txt) and `llms-full.txt` (also inside `node_modules/pine-design-system/`), so coding agents can read the full component API without leaving your project.

## Tech Stack

- [React](https://react.dev/) 18 / 19
- [Base UI](https://base-ui.com/) — Headless, accessible primitives
- [Vanilla Extract](https://vanilla-extract.style/) — Zero-runtime CSS-in-TS
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) — Library build

## Contributing

Contributions are welcome! To run the project locally:

```bash
git clone https://github.com/3o14/pine-design-system.git
cd pine-design-system
pnpm install
pnpm run storybook   # Storybook on http://localhost:6006
pnpm run test        # Vitest
```

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'feat(Button): add amazing feature'`)
4. Add a release note with `pnpm changeset`
5. Open a Pull Request

## License

[MIT](LICENSE)
