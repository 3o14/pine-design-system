#!/usr/bin/env node
/**
 * public/font 폰트를 docs/public/font로 복사합니다.
 * pine-design-system의 @font-face가 /font/ 경로를 참조하므로 docs 앱에서도 동일 경로로 서빙해야 합니다.
 */
import { cpSync, existsSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "../..");
const srcFontDir = join(root, "public", "font");
const destFontDir = join(root, "docs", "public", "font");

if (!existsSync(srcFontDir)) {
  console.warn("[copy-fonts] public/font 폴더가 없습니다. 스킵합니다.");
  process.exit(0);
}

mkdirSync(destFontDir, { recursive: true });
cpSync(srcFontDir, destFontDir, { recursive: true });
console.log("[copy-fonts] 폰트 파일을 docs/public/font로 복사했습니다.");
