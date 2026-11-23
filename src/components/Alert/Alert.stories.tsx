import React, { useEffect, useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Alert } from "./Alert";

const INTENTS = ["primary", "secondary", "success", "warning", "danger", "neutral"] as const;

const MESSAGES = {
	primary: ["New version available", "Reload the page to get the latest features."],
	secondary: ["Scheduled maintenance", "The service will be read-only on Sunday from 2 to 4 AM."],
	success: ["Changes saved", "Your profile is up to date."],
	warning: ["Storage almost full", "You've used 90% of your storage. Delete files or upgrade your plan."],
	danger: ["Couldn't save changes", "Check your connection and try again."],
	neutral: ["Read-only mode", "You can view this project, but only owners can edit it."],
} as const;

const meta = {
	title: "Feedback/Alert",
	component: Alert,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			<div style={{ maxWidth: "560px" }}>
				<Story />
			</div>
		),
	],
	args: {
		intent: "primary",
		variant: "weak",
		rounded: "medium",
		title: "New version available",
		children: "Reload the page to get the latest features.",
	},
	argTypes: {
		intent: {
			control: "select",
			options: INTENTS,
			description:
				"Semantic color intent. 'danger' and 'warning' render role='alert'; the others render role='status'.",
			table: {
				type: { summary: "AlertIntent" },
				defaultValue: { summary: "primary" },
			},
		},
		variant: {
			control: "select",
			options: ["weak", "outline", "solid"],
			description: "Visual emphasis: tinted (weak), border only (outline), or filled (solid)",
			table: {
				type: { summary: "AlertVariant" },
				defaultValue: { summary: "weak" },
			},
		},
		rounded: {
			control: "select",
			options: ["small", "medium", "large"],
			description: "Corner radius",
			table: {
				type: { summary: "AlertRounded" },
				defaultValue: { summary: "medium" },
			},
		},
		title: {
			control: "text",
			description: "Bold summary line",
			table: { type: { summary: "ReactNode" } },
		},
		children: {
			control: "text",
			description: "Description: what happened and what the user can do",
			table: { type: { summary: "ReactNode" } },
		},
		icon: {
			control: false,
			description: "Custom icon, or false to hide it. Defaults to an icon for the intent.",
			table: { type: { summary: "ReactNode" } },
		},
		action: {
			control: false,
			description: "Actions shown below the text",
			table: { type: { summary: "ReactNode" } },
		},
		onClose: {
			control: false,
			description: "Shows a dismiss button and is called when it is pressed",
			table: { type: { summary: "() => void" } },
		},
		closeLabel: {
			control: "text",
			description: "Accessible name of the dismiss button",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "Dismiss" },
			},
		},
	},
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default
export const Default: Story = {};

// Intents (colors)
export const Intents: Story = {
	render: (args) => (
		<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
			{INTENTS.map((intent) => (
				<Alert key={intent} {...args} intent={intent} title={MESSAGES[intent][0]}>
					{MESSAGES[intent][1]}
				</Alert>
			))}
		</div>
	),
};

// Variants for every intent
export const Variants: Story = {
	render: (args) => (
		<div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
			{(["weak", "outline", "solid"] as const).map((variant) => (
				<div key={variant} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
					{INTENTS.map((intent) => (
						<Alert
							key={intent}
							{...args}
							variant={variant}
							intent={intent}
							title={MESSAGES[intent][0]}
						>
							{MESSAGES[intent][1]}
						</Alert>
					))}
				</div>
			))}
		</div>
	),
};

// Description only, no title
export const DescriptionOnly: Story = {
	args: {
		title: undefined,
		children: "Your trial ends in 3 days.",
	},
};

// With an action
export const WithAction: Story = {
	args: {
		intent: "danger",
		title: "Upload failed",
		children: "report-2026.pdf is larger than 10 MB.",
		action: (
			<>
				<Button size="small" intent="danger">
					Choose another file
				</Button>
				<Button size="small" variant="ghost" intent="neutral">
					Learn about limits
				</Button>
			</>
		),
	},
};

// The consumer removes the alert in onClose and puts focus back on the page.
const DismissibleAlert = (args: React.ComponentProps<typeof Alert>) => {
	const [open, setOpen] = useState(true);
	const showButtonRef = useRef<HTMLButtonElement>(null);
	const restoreFocus = useRef(false);

	useEffect(() => {
		if (!open && restoreFocus.current) showButtonRef.current?.focus();
	}, [open]);

	return open ? (
		<Alert
			{...args}
			onClose={() => {
				restoreFocus.current = true;
				setOpen(false);
			}}
		/>
	) : (
		<Button ref={showButtonRef} size="small" variant="outline" onClick={() => setOpen(true)}>
			Show alert
		</Button>
	);
};

// Dismissible
export const Dismissible: Story = {
	render: (args) => <DismissibleAlert {...args} />,
};

// Without icon
export const WithoutIcon: Story = {
	args: {
		icon: false,
	},
};

// Long content wraps without pushing the dismiss button out
export const LongContent: Story = {
	args: {
		intent: "warning",
		title: "The certificate for https://api.example.com/v1/organizations/pine-design-system/environments/production expires soon",
		children:
			"Renew it before November 30 and update every service that uses the old one. Requests to the expired endpoint will be rejected.",
		onClose: () => {},
	},
};
