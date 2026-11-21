import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Spinner } from "./Spinner";

const meta = {
	title: "Feedback/Spinner",
	component: Spinner,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {
		size: "medium",
		intent: "primary",
		label: "Loading",
		decorative: false,
	},
	argTypes: {
		size: {
			control: "select",
			options: ["small", "medium", "large"],
			description: "Spinner size (16px / 24px / 32px)",
			table: {
				type: { summary: "SpinnerSize" },
				defaultValue: { summary: "medium" },
			},
		},
		intent: {
			control: "select",
			options: [
				"primary",
				"secondary",
				"success",
				"warning",
				"danger",
				"neutral",
				"current",
			],
			description:
				"Color of the spinning arc. 'current' follows the parent's text color, for use inside buttons.",
			table: {
				type: { summary: "SpinnerIntent" },
				defaultValue: { summary: "primary" },
			},
		},
		label: {
			control: "text",
			description: "Text read by screen readers (not shown on screen)",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "Loading" },
			},
		},
		decorative: {
			control: "boolean",
			description:
				"Visual only: no role or label, hidden from assistive technology. Use inside buttons or when several spinners are shown together.",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
	},
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default
export const Default: Story = {};

// Sizes
export const Sizes: Story = {
	render: () => (
		<div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
			<Spinner size="small" decorative />
			<Spinner size="medium" decorative />
			<Spinner size="large" decorative />
		</div>
	),
};

// Intents (colors)
export const Intents: Story = {
	render: () => (
		<div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
			<Spinner intent="primary" decorative />
			<Spinner intent="secondary" decorative />
			<Spinner intent="success" decorative />
			<Spinner intent="warning" decorative />
			<Spinner intent="danger" decorative />
			<Spinner intent="neutral" decorative />
		</div>
	),
};

// Inline with text
export const WithText: Story = {
	render: () => (
		<div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
			<Spinner size="small" label="Loading comments" />
			<span aria-hidden="true">Loading comments…</span>
		</div>
	),
};

// Decorative inside a button: the button text carries the loading state
export const InButton: Story = {
	render: () => (
		<Button aria-disabled="true" size="small">
			<Spinner size="small" intent="current" decorative />
			Saving…
		</Button>
	),
};
