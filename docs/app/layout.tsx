import type { ReactNode } from "react";
import "./globals.css";
import "pine-design-system/style.css";
import { DocsShell } from "../components/layout";

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="ko" suppressHydrationWarning>
			<body>
				<DocsShell>{children}</DocsShell>
			</body>
		</html>
	);
}
