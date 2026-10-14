import type { Metadata } from "next";

/** Absolute URL of the deployed docs site. Base for canonical, sitemap, and OG URLs. */
export const SITE_URL = "https://pine-design-system.vercel.app";

export const SITE_NAME = "Pine Design System";

/** Default description shown in search result snippets. Used when a page has no description of its own. */
export const SITE_DESCRIPTION =
  "A multi-theme React component library. Switch between basic, game, and crayon designs with a single prop — token-driven theming with Vanilla Extract, accessible Base UI primitives, and light/dark mode.";

/** Default social preview image (1200×630). Captured from real Pine components, so recapture it when their styles change. */
export const OG_IMAGE = {
  url: "/og/home.png",
  width: 1200,
  height: 630,
  alt: "Pine Design System — the same Button in basic, game, and crayon designs",
};

/** Open Graph defaults shared by every page. A page that sets openGraph replaces it entirely, so spread this in. */
export const baseOpenGraph = {
  type: "website",
  siteName: SITE_NAME,
  locale: "en_US",
  images: [OG_IMAGE],
} satisfies Metadata["openGraph"];
