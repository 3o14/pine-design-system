import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "./ProgressBar";

const meta = {
	title: "Feedback/ProgressBar",
	component: ProgressBar,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
	args: {
		value: 60,
		min: 0,
		max: 100,
		size: "medium",
		intent: "primary",
		label: "Progress",
		showValue: false,
	},
	argTypes: {
		value: {
			control: { type: "number" },
			description: "현재 값. null이면 indeterminate(진행률 미상) 상태",
			table: {
				type: { summary: "number | null" },
			},
		},
		min: {
			control: { type: "number" },
			description: "최솟값",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "0" },
			},
		},
		max: {
			control: { type: "number" },
			description: "최댓값",
			table: {
				type: { summary: "number" },
				defaultValue: { summary: "100" },
			},
		},
		size: {
			control: "select",
			options: ["small", "medium", "large"],
			description: "바 높이",
			table: {
				type: { summary: "ProgressBarSize" },
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
			description: "색상 테마",
			table: {
				type: { summary: "ProgressBarIntent" },
				defaultValue: { summary: "primary" },
			},
		},
		label: {
			control: "text",
			description: "접근성 레이블(필수). 바 위에 텍스트로도 표시됨",
			table: {
				type: { summary: "string" },
			},
		},
		showValue: {
			control: "boolean",
			description: "레이블 옆에 값(예: 72%) 표시 여부",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
	},
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default
export const Default: Story = {};

// With value displayed
export const WithValue: Story = {
	args: {
		value: 72,
		label: "Uploading",
		showValue: true,
	},
};

// Indeterminate
export const Indeterminate: Story = {
	args: {
		value: null,
		label: "Loading…",
	},
};

// Custom value formatting (also drives aria-valuetext)
export const CustomFormat: Story = {
	args: {
		value: 2,
		max: 5,
		label: "Setup steps",
		showValue: true,
		formatValue: (v) => `${v} / 5 steps`,
	},
};

// Sizes
export const Sizes: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
			<ProgressBar size="small" value={60} label="Small" />
			<ProgressBar size="medium" value={60} label="Medium" />
			<ProgressBar size="large" value={60} label="Large" />
		</div>
	),
};

// Intents (colors)
export const Intents: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
			<ProgressBar intent="primary" value={60} label="Primary" showValue />
			<ProgressBar intent="secondary" value={60} label="Secondary" showValue />
			<ProgressBar intent="success" value={100} label="Success" showValue />
			<ProgressBar intent="warning" value={80} label="Warning" showValue />
			<ProgressBar intent="danger" value={30} label="Danger" showValue />
			<ProgressBar intent="neutral" value={50} label="Neutral" showValue />
		</div>
	),
};
