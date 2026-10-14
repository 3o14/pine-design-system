import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/site";

// output: "export"에서는 빌드 시점에 정적 robots.txt로 생성되어야 한다
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
