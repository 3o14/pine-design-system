import type { ReactNode } from "react";
import { Layout, Navbar } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";

export default async function DocsLayout({ children }: { children: ReactNode }) {
  const pageMap = await getPageMap();

  return (
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
  );
}
