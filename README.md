<div align="center">
  <h1>🍍 Pine Design System</h1>
  <p><strong>A comprehensive design system with token-driven theming and accessible React components</strong></p>
  
  <p>
    <a href="https://www.npmjs.com/package/pine-design-system"><img src="https://img.shields.io/npm/v/pine-design-system?style=flat-square" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/pine-design-system"><img src="https://img.shields.io/npm/dm/pine-design-system?style=flat-square" alt="npm downloads" /></a>
    <a href="https://github.com/3o14/pine-design-system/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/pine-design-system?style=flat-square" alt="license" /></a>
  </p>
  
  <p>
    Pine Design System is a <strong>complete design system</strong> for React applications.<br />
    Built with design tokens, TypeScript, accessibility, and exceptional developer experience in mind.
  </p>
</div>

---

## Features

- **Three Unique Design Variants** — Switch between basic, game, and crayon designs instantly
- **Token-Driven Architecture** — Consistent theming through semantic design tokens
- **Light & Dark Themes** — Built-in theme support for all design variants
- **Tree-Shakeable** — Import only what you need
- **TypeScript Native** — First-class TypeScript support with full type safety
- **Zero-Runtime CSS** — Powered by Vanilla Extract for optimal performance
- **Accessible by Default** — Built on top of Base UI for WCAG compliance

## Quick Start

Install Pine Design System using your preferred package manager:

```bash
npm install pine-design-system
# or
pnpm add pine-design-system
# or
yarn add pine-design-system
```

Import components and start building:

```tsx
import { ThemeProvider, Button, Badge, TextField, Switch, Tooltip, TooltipProvider } from "pine-design-system";
import "pine-design-system/style.css";

function App() {
	return (
		<ThemeProvider design="basic" defaultTheme="light">
			<Button intent="primary" size="md">
				Get Started
			</Button>
			<Badge variant="solid" intent="success">
				New
			</Badge>
			<Switch size="md" intent="primary" />
			<TextField
				label="Email"
				placeholder="you@example.com"
				variant="outline"
			/>
			<Tooltip content="More information">
				<Button intent="neutral" variant="outline">Hover me</Button>
			</Tooltip>
		</ThemeProvider>
	);
}
```

## Design System

Pine Design System comes with **three distinct design variants** that can be switched seamlessly with a single prop change:

### 🎯 Basic Design

A clean, modern design perfect for professional applications. Features smooth animations, subtle shadows, and a refined aesthetic.

```tsx
<ThemeProvider design="basic">
	<YourApp />
</ThemeProvider>
```

### 🎮 Game Design

Pixel-art inspired design for gamified experiences. Features retro aesthetics, bold borders, and playful interactions that bring a nostalgic gaming feel to your interface.

```tsx
<ThemeProvider design="game">
	<YourApp />
</ThemeProvider>
```

### 🖍️ Crayon Design

Soft, warm, and friendly design with hand-drawn aesthetics. Features rounded corners, gentle shadows, and a cozy feel perfect for creative or educational applications.

```tsx
<ThemeProvider design="crayon">
	<YourApp />
</ThemeProvider>
```

**All design variants support both light and dark themes:**

```tsx
<ThemeProvider design="game" defaultTheme="dark">
	<YourApp />
</ThemeProvider>
```

Change the design dynamically at runtime:

```tsx
function App() {
	const [design, setDesign] = useState<"basic" | "game" | "crayon">("basic");
	const [theme, setTheme] = useState<"light" | "dark">("light");

	return (
		<ThemeProvider design={design} onDesignChange={setDesign} theme={theme} onThemeChange={setTheme}>
			<button onClick={() => setDesign("game")}>Switch to Game Design</button>
			<button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
				Toggle Theme
			</button>
			<YourApp />
		</ThemeProvider>
	);
}
```

## Documentation

**Visit our [Storybook documentation](https://3o14.github.io/pine-design-system/) for:**

- **Getting Started Guide** — Installation and usage
- **Component API** — Props, variants, and examples
- **Design Tokens** — Theming and customization
- **Accessibility** — A11y guidelines and best practices

To run Storybook locally:

```bash
git clone https://github.com/3o14/pine-design-system.git
cd pine-design-system
pnpm install
pnpm run storybook
```

## Components

| Component           | Description                                          |
| ------------------- | ---------------------------------------------------- |
| **Badge**           | Display status, labels, or counts                    |
| **Button**          | Primary actions with multiple variants               |
| **Checkbox**        | Selectable input with custom styling                 |
| **Dialog**          | Modal dialogs with Portal support                    |
| **Dropdown**        | Select input with custom options                     |
| **Switch**          | Toggle between two states                            |
| **Tab**             | Tabbed navigation with accessible panel switching   |
| **Text**            | Typography primitive with semantic variants          |
| **TextField**       | Text input with validation states                    |
| **Tooltip**         | Contextual popup triggered by hover or focus         |
| **TooltipProvider** | Shared timing provider for grouped tooltip instances |

## Tooltip

The `Tooltip` component renders a contextual popup anchored to any trigger element. It opens on hover and keyboard focus, and closes on `Escape`.

### Basic usage

```tsx
import { Tooltip } from "pine-design-system";

<Tooltip content="Save the document" side="top">
  <button>Save</button>
</Tooltip>
```

### Rich content

`content` accepts any `ReactNode`, so you can render formatted markup inside the tooltip.

```tsx
<Tooltip
  content={
    <div>
      <strong>Keyboard shortcut</strong>
      <span>⌘ + S</span>
    </div>
  }
>
  <Button intent="primary">Save</Button>
</Tooltip>
```

### Positioning

Control which side and alignment the tooltip appears on:

```tsx
<Tooltip content="Top center" side="top" align="center">…</Tooltip>
<Tooltip content="Bottom right" side="bottom" align="end">…</Tooltip>
<Tooltip content="Left" side="left">…</Tooltip>
<Tooltip content="Right" side="right">…</Tooltip>
```

### Controlled mode

Pass `open` + `onOpenChange` to take full control of visibility:

```tsx
const [open, setOpen] = useState(false);

<Tooltip content="Controlled tooltip" open={open} onOpenChange={setOpen}>
  <button>Hover or toggle</button>
</Tooltip>
<button onClick={() => setOpen(v => !v)}>Toggle tooltip</button>
```

### TooltipProvider — grouped timing

Wrap a region (or the whole app) with `TooltipProvider` to share a single hover-delay timer across all tooltips. Once the first tooltip opens, subsequent ones appear instantly — the same pattern used in most toolbars.

```tsx
import { TooltipProvider, Tooltip } from "pine-design-system";

<TooltipProvider delay={600} closeDelay={300}>
  <Tooltip content="Bold"><button>B</button></Tooltip>
  <Tooltip content="Italic"><button>I</button></Tooltip>
  <Tooltip content="Underline"><button>U</button></Tooltip>
</TooltipProvider>
```

### Tooltip props

| Prop            | Type                                      | Default   | Description                                      |
| --------------- | ----------------------------------------- | --------- | ------------------------------------------------ |
| `content`       | `ReactNode`                               | —         | Content rendered inside the tooltip popup        |
| `children`      | `ReactElement`                            | —         | Trigger element (must accept a `ref`)            |
| `side`          | `"top" \| "bottom" \| "left" \| "right"` | `"top"`   | Side of the trigger the tooltip appears on       |
| `align`         | `"start" \| "center" \| "end"`           | `"center"`| Alignment along the chosen side                  |
| `showArrow`     | `boolean`                                 | `true`    | Whether to render the directional arrow          |
| `open`          | `boolean`                                 | —         | Controlled open state                            |
| `defaultOpen`   | `boolean`                                 | —         | Initial open state (uncontrolled)                |
| `onOpenChange`  | `(open: boolean) => void`                 | —         | Callback fired when open state changes           |
| `disabled`      | `boolean`                                 | `false`   | Disables the tooltip entirely                    |
| `className`     | `string`                                  | —         | Additional class applied to the popup element    |

### TooltipProvider props

| Prop         | Type     | Default | Description                                               |
| ------------ | -------- | ------- | --------------------------------------------------------- |
| `children`   | `ReactNode` | —    | One or more `Tooltip` components                          |
| `delay`      | `number` | —       | Hover-open delay in ms for all wrapped tooltips           |
| `closeDelay` | `number` | —       | Close delay in ms after the cursor leaves                 |

### Accessibility

- Popup has `role="tooltip"` and is linked to its trigger automatically.
- Opens on **keyboard focus** (`Tab`) and closes on **`Escape`**.
- Game theme hides the arrow; crayon theme uses the crayon typeface — both happen automatically via the active theme class.

## Tech Stack

Built with modern tools for optimal developer experience:

- [React 19](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Vanilla Extract](https://vanilla-extract.style/) — Zero-runtime CSS-in-TS
- [Vite](https://vitejs.dev/) — Lightning-fast build tool
- [Storybook 8](https://storybook.js.org/) — Component documentation

## Contributing

Contributions are welcome! This project is part of a learning journey toward building production-ready design systems.

If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the [MIT License](LICENSE) — feel free to use it in your projects! :D

<div align="center">
  <p>
    <a href="https://3o14.github.io/pine-design-system/">Documentation</a> •
    <a href="https://github.com/3o14/pine-design-system">GitHub</a> •
    <a href="https://www.npmjs.com/package/pine-design-system">npm</a>
  </p>
</div>
