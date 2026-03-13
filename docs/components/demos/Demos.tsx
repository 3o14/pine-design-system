"use client";

import { useState } from "react";
import {
  Button,
  Badge,
  Checkbox,
  Dialog,
  Dropdown,
  Switch,
  Tab,
  Text,
  TextField,
} from "pine-design-system";

// ─── Button ──────────────────────────────────────────────────────────────────

export function ButtonDemo() {
  return (
    <>
      <Button variant="solid" intent="primary">Solid</Button>
      <Button variant="outline" intent="primary">Outline</Button>
      <Button variant="ghost" intent="primary">Ghost</Button>
      <Button variant="weak" intent="primary">Weak</Button>
    </>
  );
}

export function ButtonVariantDemo() {
  return (
    <>
      <Button variant="solid" intent="primary">Solid</Button>
      <Button variant="outline" intent="primary">Outline</Button>
      <Button variant="ghost" intent="primary">Ghost</Button>
      <Button variant="weak" intent="primary">Weak</Button>
    </>
  );
}

export function ButtonSizeDemo() {
  return (
    <>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
      <Button size="xlarge">XLarge</Button>
    </>
  );
}

export function ButtonIntentDemo() {
  return (
    <>
      <Button intent="primary">Primary</Button>
      <Button intent="secondary">Secondary</Button>
      <Button intent="success">Success</Button>
      <Button intent="warning">Warning</Button>
      <Button intent="danger">Danger</Button>
      <Button intent="neutral">Neutral</Button>
    </>
  );
}

export function ButtonRoundedDemo() {
  return (
    <>
      <Button rounded="small">Small</Button>
      <Button rounded="medium">Medium</Button>
      <Button rounded="large">Large</Button>
    </>
  );
}

export function ButtonFullWidthDemo() {
  return (
    <div className="max-w-[200px]">
      <Button fullWidth intent="primary">Full width</Button>
    </div>
  );
}

export function ButtonDisabledDemo() {
  return (
    <>
      <Button intent="primary">Enabled</Button>
      <Button intent="primary" disabled>Disabled</Button>
    </>
  );
}

// ─── Badge ───────────────────────────────────────────────────────────────────

export function BadgeDemo() {
  return (
    <>
      <Badge intent="primary">Primary</Badge>
      <Badge intent="success" variant="outline">Success</Badge>
      <Badge intent="warning" showDot>Warning</Badge>
      <Badge intent="danger" variant="subtle">Danger</Badge>
    </>
  );
}

export function BadgeVariantDemo() {
  return (
    <>
      <Badge variant="solid" intent="primary">Solid</Badge>
      <Badge variant="outline" intent="primary">Outline</Badge>
      <Badge variant="subtle" intent="primary">Subtle</Badge>
      <Badge variant="weak" intent="primary">Weak</Badge>
    </>
  );
}

export function BadgeIntentDemo() {
  return (
    <>
      <Badge intent="primary">Primary</Badge>
      <Badge intent="secondary">Secondary</Badge>
      <Badge intent="success">Success</Badge>
      <Badge intent="warning">Warning</Badge>
      <Badge intent="danger">Danger</Badge>
      <Badge intent="neutral">Neutral</Badge>
    </>
  );
}

export function BadgeSizeDemo() {
  return (
    <>
      <Badge size="small" intent="primary">Small</Badge>
      <Badge size="medium" intent="primary">Medium</Badge>
      <Badge size="large" intent="primary">Large</Badge>
      <Badge size="xlarge" intent="primary">XLarge</Badge>
    </>
  );
}

export function BadgeDotDemo() {
  return (
    <>
      <Badge intent="success" showDot>Active</Badge>
      <Badge intent="danger" showDot>Error</Badge>
      <Badge intent="warning" showDot>Pending</Badge>
    </>
  );
}

// ─── Checkbox ────────────────────────────────────────────────────────────────

export function CheckboxDemo() {
  return (
    <>
      <Checkbox defaultChecked />
      <Checkbox label="With label" />
      <Checkbox label="Disabled" disabled />
    </>
  );
}

export function CheckboxIntentDemo() {
  return (
    <>
      <Checkbox defaultChecked intent="primary" label="Primary" />
      <Checkbox defaultChecked intent="success" label="Success" />
      <Checkbox defaultChecked intent="warning" label="Warning" />
      <Checkbox defaultChecked intent="danger" label="Danger" />
    </>
  );
}

export function CheckboxSizeDemo() {
  return (
    <>
      <Checkbox size="small" defaultChecked label="Small" />
      <Checkbox size="medium" defaultChecked label="Medium" />
      <Checkbox size="large" defaultChecked label="Large" />
      <Checkbox size="xlarge" defaultChecked label="XLarge" />
    </>
  );
}

// ─── Dialog ──────────────────────────────────────────────────────────────────

export function DialogDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button intent="primary" onClick={() => setOpen(true)}>
        Dialog 열기
      </Button>
      <Dialog
        open={open}
        onOpenChange={setOpen}
        title="Dialog 제목"
        description="Dialog 설명 텍스트입니다."
        size="small"
        actions={[
          { label: "취소", variant: "weak", intent: "neutral", onClick: () => setOpen(false) },
          { label: "확인", variant: "solid", intent: "primary", onClick: () => setOpen(false) },
        ]}
      >
        <p>Dialog 본문 콘텐츠입니다.</p>
      </Dialog>
    </>
  );
}

export function DialogSizeDemo() {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<"small" | "medium" | "large">("small");
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
        {(["small", "medium", "large"] as const).map((s) => (
          <Button
            key={s}
            variant={size === s ? "solid" : "outline"}
            intent="primary"
            size="small"
            onClick={() => {
              setSize(s);
              setOpen(true);
            }}
          >
            {s}
          </Button>
        ))}
      </div>
      <Dialog
        open={open}
        onOpenChange={setOpen}
        title={`Size: ${size}`}
        description={`${size} 크기의 Dialog입니다.`}
        size={size}
        actions={[{ label: "닫기", variant: "solid", intent: "primary", onClick: () => setOpen(false) }]}
      >
        <p>Dialog 본문입니다.</p>
      </Dialog>
    </>
  );
}

// ─── Dropdown ────────────────────────────────────────────────────────────────

const dropdownOptions = [
  { value: "a", label: "Option A" },
  { value: "b", label: "Option B" },
  { value: "c", label: "Option C" },
];

export function DropdownDemo() {
  return (
    <Dropdown options={dropdownOptions} placeholder="Select an option" />
  );
}

export function DropdownSizeDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "200px" }}>
      <Dropdown options={dropdownOptions} size="small" placeholder="Small" />
      <Dropdown options={dropdownOptions} size="medium" placeholder="Medium" />
      <Dropdown options={dropdownOptions} size="large" placeholder="Large" />
    </div>
  );
}

// ─── Switch ──────────────────────────────────────────────────────────────────

export function SwitchDemo() {
  return (
    <>
      <Switch defaultChecked />
      <Switch label="With label" defaultChecked />
      <Switch label="Disabled" disabled />
    </>
  );
}

export function SwitchIntentDemo() {
  return (
    <>
      <Switch defaultChecked intent="primary" label="Primary" />
      <Switch defaultChecked intent="success" label="Success" />
      <Switch defaultChecked intent="warning" label="Warning" />
      <Switch defaultChecked intent="danger" label="Danger" />
    </>
  );
}

export function SwitchSizeDemo() {
  return (
    <>
      <Switch size="small" defaultChecked label="Small" />
      <Switch size="medium" defaultChecked label="Medium" />
      <Switch size="large" defaultChecked label="Large" />
      <Switch size="xlarge" defaultChecked label="XLarge" />
    </>
  );
}

// ─── Tab ─────────────────────────────────────────────────────────────────────

const tabItems = [
  { value: "one", label: "Overview", content: <p style={{ padding: "16px 0" }}>Overview panel content.</p> },
  { value: "two", label: "Details", content: <p style={{ padding: "16px 0" }}>Details panel content.</p> },
  { value: "three", label: "Settings", content: <p style={{ padding: "16px 0" }}>Settings panel content.</p> },
];

export function TabDemo() {
  return <Tab tabs={tabItems} />;
}

export function TabVerticalDemo() {
  return <Tab tabs={tabItems} orientation="vertical" />;
}

// ─── Text ────────────────────────────────────────────────────────────────────

export function TextDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <Text as="p" size="display-small" weight="bold">Display Small</Text>
      <Text as="p" size="xlarge" weight="semibold">XLarge Semibold</Text>
      <Text as="p" size="large">Large Regular</Text>
      <Text as="p" size="medium">Medium Regular</Text>
      <Text as="p" size="small">Small Regular</Text>
    </div>
  );
}

export function TextSizeDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <Text size="display-large">Display Large</Text>
      <Text size="display-medium">Display Medium</Text>
      <Text size="display-small">Display Small</Text>
      <Text size="xlarge">XLarge</Text>
      <Text size="large">Large</Text>
      <Text size="medium">Medium</Text>
      <Text size="small">Small</Text>
      <Text size="xsmall">XSmall</Text>
    </div>
  );
}

export function TextWeightDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <Text weight="regular">Regular — 400</Text>
      <Text weight="medium">Medium — 500</Text>
      <Text weight="semibold">Semibold — 600</Text>
      <Text weight="bold">Bold — 700</Text>
    </div>
  );
}

export function TextIntentDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <Text intent="inherit">Inherit</Text>
      <Text intent="primary">Primary</Text>
      <Text intent="success">Success</Text>
      <Text intent="warning">Warning</Text>
      <Text intent="danger">Danger</Text>
      <Text intent="neutral">Neutral</Text>
    </div>
  );
}

// ─── TextField ───────────────────────────────────────────────────────────────

export function TextFieldDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "240px" }}>
      <TextField label="Name" placeholder="Enter your name" />
      <TextField label="Email" placeholder="you@example.com" helperText="We'll never share your email." />
    </div>
  );
}

export function TextFieldVariantDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "240px" }}>
      <TextField label="Outline" variant="outline" placeholder="Outline style" />
      <TextField label="Filled" variant="filled" placeholder="Filled style" />
    </div>
  );
}

export function TextFieldStatusDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "240px" }}>
      <TextField label="Default" status="default" placeholder="Default" />
      <TextField label="Error" status="error" helperText="This field is required." placeholder="Error" />
      <TextField label="Success" status="success" helperText="Looks good!" placeholder="Success" defaultValue="john@doe.com" />
    </div>
  );
}

export function TextFieldMultilineDemo() {
  return (
    <div style={{ width: "300px" }}>
      <TextField label="Bio" multiline rows={4} placeholder="Tell us about yourself…" />
    </div>
  );
}

// ─── Intro (landing page) ─────────────────────────────────────────────────────

export function IntroDemo() {
  return (
    <>
      <Button variant="solid" intent="primary">Primary</Button>
      <Button variant="outline" intent="secondary">Secondary</Button>
      <Badge intent="success">Success</Badge>
      <Badge intent="warning" showDot>Warning</Badge>
    </>
  );
}
