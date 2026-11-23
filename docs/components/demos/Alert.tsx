"use client";

import { useEffect, useRef, useState } from "react";
import { Alert, Button } from "pine-design-system";

const column = { display: "flex", flexDirection: "column", gap: "0.75rem", width: "100%" } as const;

export function AlertDemo() {
  return (
    <Alert title="New version available">Reload the page to get the latest features.</Alert>
  );
}

export function AlertIntentDemo() {
  return (
    <div style={column}>
      <Alert intent="primary" title="New version available">
        Reload the page to get the latest features.
      </Alert>
      <Alert intent="success" title="Changes saved">
        Your profile is up to date.
      </Alert>
      <Alert intent="warning" title="Storage almost full">
        You&apos;ve used 90% of your storage.
      </Alert>
      <Alert intent="danger" title="Couldn&apos;t save changes">
        Check your connection and try again.
      </Alert>
      <Alert intent="neutral" title="Read-only mode">
        Only owners can edit this project.
      </Alert>
    </div>
  );
}

export function AlertVariantDemo() {
  return (
    <div style={column}>
      <Alert variant="weak" intent="danger" title="Weak">
        Tinted background and border.
      </Alert>
      <Alert variant="outline" intent="danger" title="Outline">
        Border only.
      </Alert>
      <Alert variant="solid" intent="danger" title="Solid">
        Filled background.
      </Alert>
    </div>
  );
}

export function AlertActionDemo() {
  return (
    <Alert
      intent="danger"
      title="Upload failed"
      action={
        <>
          <Button size="small" intent="danger">
            Choose another file
          </Button>
          <Button size="small" variant="ghost" intent="neutral">
            Learn about limits
          </Button>
        </>
      }
    >
      report-2026.pdf is larger than 10 MB.
    </Alert>
  );
}

export function AlertDismissDemo() {
  const [open, setOpen] = useState(true);
  const showButtonRef = useRef<HTMLButtonElement>(null);
  const restoreFocus = useRef(false);

  // The dismiss button disappears with the alert, so put focus somewhere useful.
  useEffect(() => {
    if (!open && restoreFocus.current) showButtonRef.current?.focus();
  }, [open]);

  return open ? (
    <Alert
      intent="success"
      title="Changes saved"
      onClose={() => {
        restoreFocus.current = true;
        setOpen(false);
      }}
    >
      Your profile is up to date.
    </Alert>
  ) : (
    <Button ref={showButtonRef} size="small" variant="outline" onClick={() => setOpen(true)}>
      Show alert
    </Button>
  );
}
