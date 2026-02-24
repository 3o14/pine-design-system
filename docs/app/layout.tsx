import type { ReactNode } from "react";
import { Layout, Navbar } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "pine-design-system/style.css";

export default async function RootLayout({ children }: { children: ReactNode }) {
  const pageMap = await getPageMap();

  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <Layout
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/3o14/pine-design-system"
          navbar={
            <Navbar
              logo={<strong>Pine Design System</strong>}
              projectLink="https://github.com/3o14/pine-design-system"
            />
          }
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
