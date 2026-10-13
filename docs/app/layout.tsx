import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "pine-design-system/style.css";
import "pine-design-system/style-game.css";
import "pine-design-system/style-crayon.css";
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
	icons: { icon: "/favicon.png" },
	verification: { google: "Xg4J667-CrGyRuLCUoOBehPLP1ukOTFHocojobS6XeE" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<DocsShell>{children}</DocsShell>
			</body>
		</html>
	);
}
