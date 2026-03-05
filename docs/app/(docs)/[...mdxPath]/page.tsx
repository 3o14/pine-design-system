import { notFound } from "next/navigation";
import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "../../../mdx-components";

/** Paths that are not MDX (e.g. favicon, assets) — skip importPage and 404. */
function isNonMdxPath(segments: string[]): boolean {
  if (segments.length === 0) return false;
  const last = segments[segments.length - 1];
  return last.includes(".") || /\.(ico|png|jpg|jpeg|gif|svg|webp|woff2?)$/i.test(last);
}

/** Required catch-all: exclude root [] so / is served by (landing)/page.tsx. */
export const generateStaticParams = async () => {
  const params = await generateStaticParamsFor("mdxPath")();
  return params.filter((p: { mdxPath?: string[] }) => (p.mdxPath?.length ?? 0) > 0);
};

export async function generateMetadata(props: { params: Promise<{ mdxPath: string[] }> }) {
  const params = await props.params;
  const pathSegments = params.mdxPath;
  if (isNonMdxPath(pathSegments)) return {};
  try {
    const { metadata } = await importPage(pathSegments);
    return metadata ?? {};
  } catch {
    return {};
  }
}

const Wrapper = getMDXComponents(undefined!).wrapper;

export default async function Page(props: {
  params: Promise<{ mdxPath: string[] }>;
  children?: React.ReactNode;
}) {
  const params = await props.params;
  const pathSegments = params.mdxPath;
  if (isNonMdxPath(pathSegments)) notFound();

  let result: Awaited<ReturnType<typeof importPage>>;
  try {
    result = await importPage(pathSegments);
  } catch {
    notFound();
  }

  const { default: MDXContent, toc = [], metadata, sourceCode } = result!;

  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
