import type { ReactNode } from "react";
import "./globals.css";
import "pine-design-system/style.css";
import { ThemeProviderWrapper } from "../components/ThemeProviderWrapper";
import { DesignThemeProvider } from "../components/DesignThemeProvider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProviderWrapper>
          <DesignThemeProvider>{children}</DesignThemeProvider>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
