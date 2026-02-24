"use client";

import {
	Button,
	Badge,
	Checkbox,
	Dropdown,
	Switch,
	Tab,
	Text,
	TextField,
} from "pine-design-system";

export function IntroDemo() {
	return (
		<>
			<Button variant="solid" intent="primary">
				Primary
			</Button>
			<Button variant="outline" intent="secondary">
				Secondary
			</Button>
			<Badge intent="success">Success</Badge>
		</>
	);
}

export function ButtonDemo() {
	return (
		<>
			<Button variant="solid" intent="primary">
				Solid Primary
			</Button>
			<Button variant="outline" intent="secondary">
				Outline
			</Button>
			<Button variant="ghost" intent="neutral">
				Ghost
			</Button>
			<Button variant="weak" intent="success">
				Weak
			</Button>
		</>
	);
}

export function BadgeDemo() {
	return (
		<>
			<Badge intent="primary">Primary</Badge>
			<Badge intent="success" variant="outline">
				Success
			</Badge>
			<Badge intent="warning" showDot>
				Warning
			</Badge>
			<Badge intent="danger" variant="subtle">
				Danger
			</Badge>
		</>
	);
}

export function CheckboxDemo() {
	return (
		<>
			<Checkbox defaultChecked />
			<Checkbox label="Label" />
			<Checkbox label="Disabled" disabled />
		</>
	);
}

export function DropdownDemo() {
	return (
		<Dropdown
			options={[
				{ value: "a", label: "Option A" },
				{ value: "b", label: "Option B" },
				{ value: "c", label: "Option C" },
			]}
			placeholder="Select..."
		/>
	);
}

export function SwitchDemo() {
	return (
		<>
			<Switch defaultChecked />
			<Switch label="Label" />
			<Switch intent="success" defaultChecked />
		</>
	);
}

export function TabDemo() {
	return (
		<Tab
			tabs={[
				{ value: "one", label: "One", content: <p>Content for tab One.</p> },
				{ value: "two", label: "Two", content: <p>Content for tab Two.</p> },
				{
					value: "three",
					label: "Three",
					content: <p>Content for tab Three.</p>,
				},
			]}
		/>
	);
}

export function TextDemo() {
	return (
		<>
			<Text as="p" size="medium">
				Medium body
			</Text>
			<Text as="p" size="large" weight="bold">
				Large bold
			</Text>
			<Text as="span" intent="primary">
				Primary intent
			</Text>
		</>
	);
}

export function TextFieldDemo() {
	return (
		<>
			<TextField label="Label" placeholder="Placeholder" />
			<TextField label="With helper" helperText="Helper text below." />
			<TextField label="Error" status="error" helperText="Error message." />
		</>
	);
}
