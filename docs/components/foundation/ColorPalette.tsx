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
      className={`min-w-0 h-[72px] flex flex-col items-center justify-center cursor-default transition-[flex] duration-150 ease-out ${
        hovered ? "flex-[1.6]" : "flex-1"
      }`}
      style={{ backgroundColor: hex }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      title={`${step}: ${hex}`}
    >
      <span
        className="text-[11px] font-semibold leading-tight"
        style={{ color: textColor, opacity: hovered ? 1 : 0.7 }}
      >
        {step}
      </span>
      {hovered && (
        <span
          className="text-[10px] font-mono mt-0.5"
          style={{ color: textColor, opacity: 0.85 }}
        >
          {hex}
        </span>
      )}
    </div>
  );
}

export function ColorPalette({ scales }: ColorPaletteProps) {
  return (
    <div className="flex flex-col gap-3 my-6">
      {scales.map(({ name, colors }) => (
        <div key={name} className="flex items-stretch gap-0">
          <div className="w-20 shrink-0 flex items-center pr-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
            {name}
          </div>
          <div className="flex-1 flex rounded-lg overflow-hidden">
            {STEPS.map((step) => (
              <ColorSwatch key={step} hex={colors[step]} step={step} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
