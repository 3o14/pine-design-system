"use client";

import { useState } from "react";

type ColorStep = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type StepScale = Record<ColorStep, string>;

export interface ColorScaleEntry {
  name: string;
  colors: StepScale;
}

interface ColorPaletteProps {
  scales: ColorScaleEntry[];
}

const STEPS: ColorStep[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function isLight(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return 0.299 * r + 0.587 * g + 0.114 * b > 160;
}

function ColorSwatch({ hex, step }: { hex: string; step: ColorStep }) {
  const [hovered, setHovered] = useState(false);
  const textColor = isLight(hex) ? "#1f2937" : "#f9fafb";

  return (
    <div
      style={{
        flex: 1,
        minWidth: 0,
        height: "72px",
        backgroundColor: hex,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "default",
        transition: "flex 0.15s ease",
        ...(hovered ? { flex: 1.6 } : {}),
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      title={`${step}: ${hex}`}
    >
      <span
        style={{
          fontSize: "11px",
          fontWeight: 600,
          color: textColor,
          opacity: hovered ? 1 : 0.7,
          lineHeight: 1.2,
        }}
      >
        {step}
      </span>
      {hovered && (
        <span
          style={{
            fontSize: "10px",
            color: textColor,
            opacity: 0.85,
            fontFamily: "monospace",
            marginTop: "2px",
          }}
        >
          {hex}
        </span>
      )}
    </div>
  );
}

export function ColorPalette({ scales }: ColorPaletteProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        margin: "24px 0",
      }}
    >
      {scales.map(({ name, colors }) => (
        <div
          key={name}
          style={{ display: "flex", alignItems: "stretch", gap: "0" }}
        >
          <div
            style={{
              width: "80px",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              paddingRight: "12px",
              fontSize: "13px",
              fontWeight: 600,
              color: "var(--x-color-fg-neutral, #374151)",
            }}
          >
            {name}
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            {STEPS.map((step) => (
              <ColorSwatch key={step} hex={colors[step]} step={step} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
