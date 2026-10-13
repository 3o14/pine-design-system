import type { Metadata } from "next";
import { LandingPage } from "../../components/layout";
import { SITE_DESCRIPTION, SITE_NAME, baseOpenGraph } from "../../lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    ...baseOpenGraph,
    title: `${SITE_NAME} – Multi-theme React Component Library`,
    description: SITE_DESCRIPTION,
    url: "/",
  },
};

export default function HomePage() {
  return <LandingPage />;
}
