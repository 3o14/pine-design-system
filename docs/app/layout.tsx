import type { ReactNode } from "react";
import "./globals.css";
import "pine-design-system/style.css";
import { ThemeProviderWrapper, DesignThemeProvider } from "../components/layout";

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
