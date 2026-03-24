#!/usr/bin/env node
/**
 * Copies repo `public/font` into `docs/public/font`.
 * pine-design-system @font-face rules use `/font/`; the docs app must serve fonts at the same path.
 */
import { cpSync, existsSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "../..");
const srcFontDir = join(root, "public", "font");
const destFontDir = join(root, "docs", "public", "font");

if (!existsSync(srcFontDir)) {
  console.warn("[copy-fonts] public/font not found. Skipping.");
  process.exit(0);
}

mkdirSync(destFontDir, { recursive: true });
cpSync(srcFontDir, destFontDir, { recursive: true });
console.log("[copy-fonts] Copied font files to docs/public/font.");
