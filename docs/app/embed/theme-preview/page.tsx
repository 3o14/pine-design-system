"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ThemeProvider, Button } from "pine-design-system";

type Design = "basic" | "game" | "crayon";
type ThemeMode = "light" | "dark";

function isDesign(value: string | null): value is Design {
  return value === "basic" || value === "game" || value === "crayon";
}

function ThemePreviewContent() {
  const searchParams = useSearchParams();
  const designParam = searchParams.get("design");
  const design: Design = isDesign(designParam) ? designParam : "basic";
  const theme: ThemeMode = searchParams.get("theme") === "dark" ? "dark" : "light";

  return (
    <ThemeProvider design={design} theme={theme} syncWithSystem={false}>
      <div
        style={{
          margin: 0,
          minHeight: "100vh",
          boxSizing: "border-box",
          padding: "24px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "8px",
          backgroundColor: "transparent",
        }}
      >
        <Button variant="solid" intent="primary">
          Solid
        </Button>
        <Button variant="outline" intent="primary">
          Outline
        </Button>
        <Button variant="ghost" intent="primary">
          Ghost
        </Button>
        <Button variant="weak" intent="primary">
          Weak
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default function ThemePreviewEmbedPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: 120 }} />}>
      <ThemePreviewContent />
    </Suspense>
  );
}
