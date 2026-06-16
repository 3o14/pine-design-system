"use client";

import { useState } from "react";
import { Button, Dialog } from "pine-design-system";

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
