import type { ReactNode } from "react";
import "nextra-theme-docs/style.css";
import "pine-design-system/style.css";
import { ThemeProviderWrapper } from "../components/ThemeProviderWrapper";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}
