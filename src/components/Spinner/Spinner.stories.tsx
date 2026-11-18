import type { Meta, StoryObj } from "@storybook/react";
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
	},
	argTypes: {
		size: {
			control: "select",
			options: ["small", "medium", "large"],
			description: "스피너 크기 (16px / 24px / 32px)",
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
			],
			description: "회전하는 호의 색상",
			table: {
				type: { summary: "SpinnerIntent" },
				defaultValue: { summary: "primary" },
			},
		},
		label: {
			control: "text",
			description: "스크린 리더가 읽는 텍스트 (화면에는 보이지 않음)",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "Loading" },
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
			<Spinner size="small" />
			<Spinner size="medium" />
			<Spinner size="large" />
		</div>
	),
};

// Intents (colors)
export const Intents: Story = {
	render: () => (
		<div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
			<Spinner intent="primary" />
			<Spinner intent="secondary" />
			<Spinner intent="success" />
			<Spinner intent="warning" />
			<Spinner intent="danger" />
			<Spinner intent="neutral" />
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
