import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import { Button } from "../Button";

const meta = {
	title: "Overlay/Tooltip",
	component: Tooltip,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	args: {
		content: "툴팁 내용입니다",
		side: "top",
		align: "center",
		showArrow: true,
		disabled: false,
	},
	argTypes: {
		content: {
			control: "text",
			description: "툴팁에 표시할 내용",
		},
		side: {
			control: "select",
			options: ["top", "bottom", "left", "right"],
			description: "툴팁 표시 방향",
			table: {
				type: { summary: "TooltipSide" },
				defaultValue: { summary: "top" },
			},
		},
		align: {
			control: "select",
			options: ["start", "center", "end"],
			description: "툴팁 정렬",
			table: {
				type: { summary: "TooltipAlign" },
				defaultValue: { summary: "center" },
			},
		},
		showArrow: {
			control: "boolean",
			description: "화살표 표시 여부",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
			},
		},
		disabled: {
			control: "boolean",
			description: "툴팁 비활성화",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
		open: {
			control: "boolean",
			description: "controlled 오픈 상태",
		},
	},
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: <Button variant="outline" intent="neutral">버튼 위에 호버하세요</Button>,
	},
};

export const Sides: Story = {
	render: (args) => (
		<div style={{ display: "flex", gap: "1rem", alignItems: "center", padding: "3rem" }}>
			<Tooltip {...args} content="위쪽" side="top">
				<Button variant="outline" intent="neutral">Top</Button>
			</Tooltip>
			<Tooltip {...args} content="아래쪽" side="bottom">
				<Button variant="outline" intent="neutral">Bottom</Button>
			</Tooltip>
			<Tooltip {...args} content="왼쪽" side="left">
				<Button variant="outline" intent="neutral">Left</Button>
			</Tooltip>
			<Tooltip {...args} content="오른쪽" side="right">
				<Button variant="outline" intent="neutral">Right</Button>
			</Tooltip>
		</div>
	),
};

export const WithoutArrow: Story = {
	args: {
		content: "화살표 없는 툴팁",
		showArrow: false,
		children: <Button variant="outline" intent="neutral">화살표 없음</Button>,
	},
};

export const Disabled: Story = {
	args: {
		content: "이 툴팁은 비활성화됩니다",
		disabled: true,
		children: <Button variant="outline" intent="neutral" disabled>비활성화된 버튼</Button>,
	},
};

export const RichContent: Story = {
	args: {
		content: (
			<div>
				<strong style={{ display: "block", marginBottom: "4px" }}>단축키</strong>
				<span>⌘ + S</span>
			</div>
		),
		children: <Button variant="solid" intent="primary">저장</Button>,
	},
};

export const LongContent: Story = {
	args: {
		content:
			"최대 너비(240px)를 넘는 긴 텍스트는 자동으로 줄바꿈 처리됩니다. 툴팁은 항상 읽기 편한 너비를 유지합니다.",
		children: <Button variant="outline" intent="neutral">긴 내용</Button>,
	},
};

export const Controlled: Story = {
	render: (args) => {
		const [open, setOpen] = useState(false);
		return (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "1rem",
				}}
			>
				<Tooltip
					{...args}
					content="controlled 툴팁입니다"
					open={open}
					onOpenChange={setOpen}
				>
					<Button variant="outline" intent="neutral">호버 또는 아래 버튼으로 제어</Button>
				</Tooltip>
				<Button
					variant="solid"
					intent={open ? "danger" : "primary"}
					onClick={() => setOpen((v) => !v)}
				>
					{open ? "툴팁 닫기" : "툴팁 열기"}
				</Button>
			</div>
		);
	},
};

export const AlwaysOpen: Story = {
	args: {
		content: "항상 열려 있는 툴팁",
		open: true,
		children: <Button variant="outline" intent="neutral">고정 툴팁</Button>,
	},
};

export const WithIconTrigger: Story = {
	args: {
		content: "더 많은 정보",
		side: "right",
		children: (
			<button
				style={{
					display: "inline-flex",
					alignItems: "center",
					justifyContent: "center",
					width: "24px",
					height: "24px",
					borderRadius: "50%",
					border: "1px solid currentColor",
					background: "transparent",
					cursor: "pointer",
					fontSize: "12px",
					fontWeight: "bold",
				}}
				aria-label="더보기"
			>
				?
			</button>
		),
	},
};
