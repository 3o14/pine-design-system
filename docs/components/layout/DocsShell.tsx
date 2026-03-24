"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ThemeProviderWrapper } from "./ThemeProviderWrapper";
import { DesignThemeProvider } from "./DesignThemeProvider";

/**
 * Embeds (e.g. theme previews in iframes) must not sit under DesignThemeProvider:
 * Pine applies theme classes to documentElement; descendant selectors would style every preview the same.
 */
export function DocsShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isEmbed = pathname?.startsWith("/embed/") ?? false;

  if (isEmbed) {
    return <>{children}</>;
  }

  return (
    <ThemeProviderWrapper>
      <DesignThemeProvider>{children}</DesignThemeProvider>
    </ThemeProviderWrapper>
  );
}
