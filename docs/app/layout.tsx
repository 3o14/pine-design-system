import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "pine-design-system/style.css";
import "pine-design-system/style-game.css";
import "pine-design-system/style-crayon.css";
import { Analytics } from "@vercel/analytics/next";
import { DocsShell } from "../components/layout";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, baseOpenGraph } from "../lib/site";

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: `${SITE_NAME} – Multi-theme React Component Library`,
		template: `%s – ${SITE_NAME}`,
	},
	description: SITE_DESCRIPTION,
	openGraph: baseOpenGraph,
	twitter: { card: "summary_large_image" },
	icons: {
		icon: [
			{ url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
			{ url: "/favicon-78.png", sizes: "78x78", type: "image/png" },
			{ url: "/favicon.png", sizes: "202x202", type: "image/png" },
		],
		apple: { url: "/favicon-radius0.png", sizes: "202x202" },
	},
	verification: { google: "Xg4J667-CrGyRuLCUoOBehPLP1ukOTFHocojobS6XeE" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<DocsShell>{children}</DocsShell>
				<Analytics />
			</body>
		</html>
	);
}
