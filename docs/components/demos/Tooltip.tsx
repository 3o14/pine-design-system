"use client";

import { useState } from "react";
import { Button, Tooltip, TooltipProvider } from "pine-design-system";

export function TooltipDemo() {
  return (
    <Tooltip content="Save the document" side="top">
      <Button intent="neutral">Hover me</Button>
    </Tooltip>
  );
}

export function TooltipSideDemo() {
  return (
    <>
      <Tooltip content="Top" side="top"><Button>Top</Button></Tooltip>
      <Tooltip content="Bottom" side="bottom"><Button>Bottom</Button></Tooltip>
      <Tooltip content="Left" side="left"><Button>Left</Button></Tooltip>
      <Tooltip content="Right" side="right"><Button>Right</Button></Tooltip>
    </>
  );
}

export function TooltipArrowDemo() {
  return (
    <>
      <Tooltip content="With arrow" showArrow><Button>With arrow</Button></Tooltip>
      <Tooltip content="Without arrow" showArrow={false}><Button>Without arrow</Button></Tooltip>
    </>
  );
}

export function TooltipRichContentDemo() {
  return (
    <Tooltip
      content={
        <div>
          <strong style={{ display: "block", marginBottom: "4px" }}>Keyboard shortcut</strong>
          <span>⌘ + S</span>
        </div>
      }
    >
      <Button variant="solid" intent="primary">Save</Button>
    </Tooltip>
  );
}

export function TooltipDisabledDemo() {
  return (
    <Tooltip content="This won't show" disabled>
      <Button disabled>Disabled trigger</Button>
    </Tooltip>
  );
}

export function TooltipProviderDemo() {
  return (
    <TooltipProvider delay={600} closeDelay={300}>
      <Tooltip content="Bold"><Button>B</Button></Tooltip>
      <Tooltip content="Italic"><Button>I</Button></Tooltip>
      <Tooltip content="Underline"><Button>U</Button></Tooltip>
    </TooltipProvider>
  );
}

export function TooltipControlledDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip content="Controlled tooltip" open={open} onOpenChange={setOpen}>
        <Button variant="outline" intent="neutral">Hover or use button below</Button>
      </Tooltip>
      <Button onClick={() => setOpen((v) => !v)}>
        {open ? "Close tooltip" : "Open tooltip"}
      </Button>
    </>
  );
}
