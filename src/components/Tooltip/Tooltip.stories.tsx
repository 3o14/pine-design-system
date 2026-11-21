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
		content: "Tooltip content",
		// Stories that render their own trigger ignore this; the rest need a child to hover.
		children: <Button variant="outline" intent="neutral">Hover me</Button>,
		side: "top",
		align: "center",
		showArrow: true,
		disabled: false,
	},
	argTypes: {
		content: {
			control: "text",
			description: "Content shown in the tooltip",
		},
		side: {
			control: "select",
			options: ["top", "bottom", "left", "right"],
			description: "Side of the trigger the tooltip appears on",
			table: {
				type: { summary: "TooltipSide" },
				defaultValue: { summary: "top" },
			},
		},
		align: {
			control: "select",
			options: ["start", "center", "end"],
			description: "Alignment along the trigger",
			table: {
				type: { summary: "TooltipAlign" },
				defaultValue: { summary: "center" },
			},
		},
		showArrow: {
			control: "boolean",
			description: "Shows the arrow",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "true" },
			},
		},
		disabled: {
			control: "boolean",
			description: "Disables the tooltip",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
		open: {
			control: "boolean",
			description: "Controlled open state",
		},
	},
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: <Button variant="outline" intent="neutral">Hover over this button</Button>,
	},
};

export const Sides: Story = {
	render: (args) => (
		<div style={{ display: "flex", gap: "1rem", alignItems: "center", padding: "3rem" }}>
			<Tooltip {...args} content="Top" side="top">
				<Button variant="outline" intent="neutral">Top</Button>
			</Tooltip>
			<Tooltip {...args} content="Bottom" side="bottom">
				<Button variant="outline" intent="neutral">Bottom</Button>
			</Tooltip>
			<Tooltip {...args} content="Left" side="left">
				<Button variant="outline" intent="neutral">Left</Button>
			</Tooltip>
			<Tooltip {...args} content="Right" side="right">
				<Button variant="outline" intent="neutral">Right</Button>
			</Tooltip>
		</div>
	),
};

export const WithoutArrow: Story = {
	args: {
		content: "Tooltip without an arrow",
		showArrow: false,
		children: <Button variant="outline" intent="neutral">No arrow</Button>,
	},
};

export const Disabled: Story = {
	args: {
		content: "This tooltip is disabled",
		disabled: true,
		children: <Button variant="outline" intent="neutral" disabled>Disabled button</Button>,
	},
};

export const RichContent: Story = {
	args: {
		content: (
			<div>
				<strong style={{ display: "block", marginBottom: "4px" }}>Shortcut</strong>
				<span>⌘ + S</span>
			</div>
		),
		children: <Button variant="solid" intent="primary">Save</Button>,
	},
};

export const LongContent: Story = {
	args: {
		content:
			"Text longer than the maximum width (240px) wraps automatically, so the tooltip always keeps a readable width.",
		children: <Button variant="outline" intent="neutral">Long content</Button>,
	},
};

const ControlledDemo = (args: React.ComponentProps<typeof Tooltip>) => {
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
				content="Controlled tooltip"
				open={open}
				onOpenChange={setOpen}
			>
				<Button variant="outline" intent="neutral">Hover, or use the button below</Button>
			</Tooltip>
			<Button
				variant="solid"
				intent={open ? "danger" : "primary"}
				onClick={() => setOpen((v) => !v)}
			>
				{open ? "Close tooltip" : "Open tooltip"}
			</Button>
		</div>
	);
};

export const Controlled: Story = {
	render: (args) => <ControlledDemo {...args} />,
};

export const AlwaysOpen: Story = {
	args: {
		content: "Always-open tooltip",
		open: true,
		children: <Button variant="outline" intent="neutral">Pinned tooltip</Button>,
	},
};

export const WithIconTrigger: Story = {
	args: {
		content: "More information",
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
				aria-label="More information"
			>
				?
			</button>
		),
	},
};
