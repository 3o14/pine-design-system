import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "./ProgressBar";
import { ThemeProvider } from "@/providers";
import type { Design } from "@/providers/ThemeContext";

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

// Regression: dark theme track visibility
const REGRESSION_DESIGNS: { design: Design; label: string }[] = [
	{ design: "basic", label: "Basic" },
	{ design: "game", label: "Game" },
	{ design: "crayon", label: "Crayon" },
];

export const DarkModeTrackContrast: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
			{REGRESSION_DESIGNS.map(({ design, label }) => (
				<ThemeProvider
					key={design}
					theme="dark"
					design={design}
					applyGlobal={false}
					style={{
						backgroundColor: "#0b1120",
						padding: "1.5rem",
						borderRadius: "8px",
					}}
				>
					<h3 style={{ margin: 0, marginBottom: "0.75rem", color: "#e2e8f0" }}>
						{label} · Dark
					</h3>
					<ProgressBar intent="neutral" value={40} label="Track" showValue />
				</ThemeProvider>
			))}
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"다크 테마(basic/game/crayon)에서 트랙(빈 부분) 배경이 페이지 배경에 묻히지 않는지 확인하는 회귀 스토리입니다. neutral.weak가 다크 모드에서 검은색에 가깝게 섞이면서 트랙이 페이지 배경과 거의 구분되지 않았던 문제를 수정했습니다.",
			},
		},
	},
};
