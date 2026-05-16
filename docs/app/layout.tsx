import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "pine-design-system/style.css";
import "pine-design-system/style-game.css";
import "pine-design-system/style-crayon.css";
import { DocsShell } from "../components/layout";

export const metadata: Metadata = {
	icons: { icon: "/favicon.png" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="ko" suppressHydrationWarning>
			<body>
				<DocsShell>{children}</DocsShell>
			</body>
		</html>
	);
}
