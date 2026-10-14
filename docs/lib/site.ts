import type { Metadata } from "next";

/** 배포된 문서 사이트의 절대 URL. canonical, sitemap, OG URL의 기준이 된다. */
export const SITE_URL = "https://pine-design-system.vercel.app";

export const SITE_NAME = "Pine Design System";

/** 검색 결과 스니펫에 노출되는 기본 설명. 개별 페이지 description이 없을 때 사용된다. */
export const SITE_DESCRIPTION =
  "A multi-theme React component library. Switch between basic, game, and crayon designs with a single prop — token-driven theming with Vanilla Extract, accessible Base UI primitives, and light/dark mode.";

/** 모든 페이지가 공유하는 Open Graph 기본값. 하위 페이지에서 openGraph를 지정하면 통째로 덮어써지므로 펼쳐서 사용한다. */
export const baseOpenGraph = {
  type: "website",
  siteName: SITE_NAME,
  locale: "en_US",
} satisfies Metadata["openGraph"];
