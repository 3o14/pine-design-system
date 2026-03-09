import type { ReactNode } from "react";
import { Layout } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import { DocsNavbar } from "../../components/DocsNavbar";

export default async function DocsLayout({ children }: { children: ReactNode }) {
  const pageMap = await getPageMap();

  return (
    <Layout
      pageMap={pageMap}
      docsRepositoryBase="https://github.com/3o14/pine-design-system"
      navbar={<DocsNavbar />}
    >
      {children}
    </Layout>
  );
}
