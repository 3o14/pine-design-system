import type { ReactNode } from "react";
import { Layout } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import { DocsNavbar, DesignThemeProvider } from "../../components/layout";

export default async function DocsLayout({ children }: { children: ReactNode }) {
  const pageMap = await getPageMap();

  return (
    <DesignThemeProvider>
      <Layout
        pageMap={pageMap}
        docsRepositoryBase="https://github.com/3o14/pine-design-system"
        navbar={<DocsNavbar key="navbar" />}
      >
        {children}
      </Layout>
    </DesignThemeProvider>
  );
}
