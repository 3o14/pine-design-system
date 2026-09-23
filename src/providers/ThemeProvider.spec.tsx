import { describe, it, expect, vi, afterEach } from "vitest";
import { act } from "react";
import { renderToString } from "react-dom/server";
import { hydrateRoot } from "react-dom/client";
import { render, waitFor } from "@testing-library/react";
import { ThemeProvider } from "./ThemeProvider";
import { useTheme } from "./useTheme";

function mockMatchMedia(initialMatches: boolean) {
	const listeners = new Set<(e: MediaQueryListEvent) => void>();
	const mql = {
		matches: initialMatches,
		media: "(prefers-color-scheme: dark)",
		addEventListener: (event: string, cb: (e: MediaQueryListEvent) => void) => {
			if (event === "change") listeners.add(cb);
		},
		removeEventListener: (event: string, cb: (e: MediaQueryListEvent) => void) => {
			if (event === "change") listeners.delete(cb);
		},
	};

	window.matchMedia = vi.fn().mockReturnValue(mql) as unknown as typeof window.matchMedia;

	return {
		fireChange(matches: boolean) {
			mql.matches = matches;
			listeners.forEach((cb) => cb({ matches, media: mql.media } as MediaQueryListEvent));
		},
	};
}

function Probe({ onValue }: { onValue: (ctx: ReturnType<typeof useTheme>) => void }) {
	onValue(useTheme());
	return null;
}

describe("ThemeProvider", () => {
	afterEach(() => {
		// @ts-expect-error test cleanup — matchMedia isn't implemented by jsdom by default
		delete window.matchMedia;
	});

	describe("SSR hydration with syncWithSystem", () => {
		it("does not produce a hydration mismatch when the OS theme differs from the SSR fallback", () => {
			// Simulate the server: no `window` at all, so the very first render must be
			// environment-independent (this is what genuinely happens in Next.js SSR).
			const realWindow = globalThis.window;
			// @ts-expect-error simulate SSR — no window global
			delete globalThis.window;
			let html: string;
			try {
				html = renderToString(
					<ThemeProvider design="game">
						<span>hello</span>
					</ThemeProvider>
				);
			} finally {
				globalThis.window = realWindow;
			}

			// Simulate the client: OS actually prefers dark.
			mockMatchMedia(true);

			const container = document.createElement("div");
			container.innerHTML = html;
			document.body.appendChild(container);

			const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

			try {
				act(() => {
					hydrateRoot(
						container,
						<ThemeProvider design="game">
							<span>hello</span>
						</ThemeProvider>
					);
				});

				const hydrationErrors = errorSpy.mock.calls.filter(([msg]) =>
					typeof msg === "string" && /hydrat/i.test(msg)
				);
				expect(hydrationErrors).toEqual([]);
			} finally {
				errorSpy.mockRestore();
				document.body.removeChild(container);
			}
		});
	});

	describe("theme resolution", () => {
		it("uses light when syncWithSystem is false, ignoring the OS preference", () => {
			mockMatchMedia(true); // OS says dark — should be ignored entirely

			let captured: ReturnType<typeof useTheme>;
			render(
				<ThemeProvider design="basic" syncWithSystem={false}>
					<Probe onValue={(ctx) => (captured = ctx)} />
				</ThemeProvider>
			);

			expect(captured?.theme).toBe("light");
		});

		it("tracks OS theme changes while mounted when syncWithSystem is true", async () => {
			const { fireChange } = mockMatchMedia(false);

			let captured: ReturnType<typeof useTheme>;
			render(
				<ThemeProvider design="basic">
					<Probe onValue={(ctx) => (captured = ctx)} />
				</ThemeProvider>
			);

			await waitFor(() => expect(captured?.theme).toBe("light"));

			act(() => {
				fireChange(true);
			});

			await waitFor(() => expect(captured?.theme).toBe("dark"));
		});

		it("lets a manual setTheme() call override the current theme", async () => {
			mockMatchMedia(false);

			let captured: ReturnType<typeof useTheme>;
			render(
				<ThemeProvider design="basic">
					<Probe onValue={(ctx) => (captured = ctx)} />
				</ThemeProvider>
			);

			await waitFor(() => expect(captured?.theme).toBe("light"));

			act(() => {
				captured?.setTheme("dark");
			});

			expect(captured?.theme).toBe("dark");
		});

		it("preserves a manual setTheme() choice across subsequent OS changes", async () => {
			const { fireChange } = mockMatchMedia(false); // OS starts at light

			let captured: ReturnType<typeof useTheme>;
			render(
				<ThemeProvider design="basic">
					<Probe onValue={(ctx) => (captured = ctx)} />
				</ThemeProvider>
			);

			await waitFor(() => expect(captured?.theme).toBe("light"));

			act(() => {
				captured?.setTheme("dark");
			});
			expect(captured?.theme).toBe("dark");

			// The OS flipping (either direction) must not override the manual choice.
			act(() => {
				fireChange(true);
			});
			expect(captured?.theme).toBe("dark");

			act(() => {
				fireChange(false);
			});
			expect(captured?.theme).toBe("dark");
		});
	});
});
