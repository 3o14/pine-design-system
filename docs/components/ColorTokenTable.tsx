"use client";

import { useState } from "react";
import { lightColors, darkColors } from "pine-design-system";

type Mode = "light" | "dark";
type Intent = "primary" | "secondary" | "success" | "warning" | "danger" | "neutral";
type State = "surface" | "surfaceHover" | "surfaceActive" | "text" | "border" | "weak";

const INTENTS: Intent[] = ["primary", "secondary", "success", "warning", "danger", "neutral"];
const STATES: State[] = ["surface", "surfaceHover", "surfaceActive", "text", "border", "weak"];

const STATE_LABELS: Record<State, string> = {
  surface: "surface",
  surfaceHover: "hover",
  surfaceActive: "active",
  text: "text",
  border: "border",
  weak: "weak",
};

function isLight(hex: string): boolean {
  if (!hex.startsWith("#")) return true;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return 0.299 * r + 0.587 * g + 0.114 * b > 160;
}

function Swatch({ hex, label }: { hex: string; label: string }) {
  const textColor = isLight(hex) ? "#1f2937" : "#f9fafb";
  const isCssMix = hex.startsWith("color-mix");

  return (
    <div className="flex flex-col items-center gap-1 min-w-[80px]">
      <div
        className="w-9 h-9 rounded-md flex items-center justify-center text-[9px] font-medium border border-black/8"
        style={{
          background: hex,
          color: isCssMix ? "#6b7280" : textColor,
        }}
        title={hex}
      >
        {isCssMix ? "~" : ""}
      </div>
      <span className="text-[10px] text-gray-500 dark:text-gray-400 font-mono text-center max-w-[80px] overflow-hidden text-ellipsis whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

export function ColorTokenTable() {
  const [mode, setMode] = useState<Mode>("light");
  const palette = mode === "light" ? lightColors.palette : darkColors.palette;

  return (
    <div className="my-6">
      {/* Tab switcher */}
      <div className="flex gap-1 mb-4 bg-gray-100 dark:bg-gray-800/50 rounded-lg p-1 w-fit">
        {(["light", "dark"] as Mode[]).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={`px-3.5 py-1 rounded-md text-sm font-medium cursor-pointer transition-colors ${
              mode === m
                ? "bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 shadow-sm"
                : "bg-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="text-left py-2 px-3 font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 whitespace-nowrap">
                Intent
              </th>
              {STATES.map((state) => (
                <th
                  key={state}
                  className="text-center py-2 px-3 font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 whitespace-nowrap"
                >
                  {STATE_LABELS[state]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {INTENTS.map((intent) => (
              <tr
                key={intent}
                className="border-b border-gray-100 dark:border-gray-800"
              >
                <td className="py-3 px-3 font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">
                  {intent}
                </td>
                {STATES.map((state) => {
                  const hex = palette[intent][state];
                  return (
                    <td key={state} className="py-3 px-3 text-center">
                      <div className="flex justify-center">
                        <Swatch hex={hex} label={hex.startsWith("#") ? hex : "mix"} />
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Surface tokens */}
      <h4 className="mt-8 mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
        Surface
      </h4>
      <div className="flex flex-wrap gap-4">
        {Object.entries(
          mode === "light" ? lightColors.surface : darkColors.surface
        ).map(([key, hex]) => (
          <div
            key={key}
            className="flex flex-col items-center gap-1.5"
          >
            <div
              className="w-12 h-12 rounded-lg border border-black/10"
              style={{ background: hex }}
              title={hex}
            />
            <span className="text-[11px] font-medium text-gray-700 dark:text-gray-300 text-center">
              {key}
            </span>
            <span className="text-[10px] text-gray-500 dark:text-gray-400 font-mono">
              {typeof hex === "string" && hex.startsWith("#") ? hex : "—"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
