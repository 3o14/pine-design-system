import type { MetadataRoute } from "next";
import { generateStaticParamsFor } from "nextra/pages";
import { SITE_URL } from "../lib/site";

// output: "export"에서는 빌드 시점에 정적 sitemap.xml로 생성되어야 한다
export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const params = await generateStaticParamsFor("mdxPath")();
  const docPaths = params
    .map((p: { mdxPath?: string[] }) => p.mdxPath ?? [])
    .filter((segs) => segs.length > 0 && segs.every((s) => s.length > 0))
    .map((segs) => `/${segs.join("/")}`);

  return ["/", ...docPaths].map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
  }));
}
