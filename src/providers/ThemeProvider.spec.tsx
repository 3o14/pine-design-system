import { describe, it, expect, vi, afterEach } from "vitest";
import { act } from "react";
import { renderToString } from "react-dom/server";
import { hydrateRoot } from "react-dom/client";
import { render, waitFor } from "@testing-library/react";
import { ThemeProvider } from "./ThemeProvider";
import { useTheme } from "./useTheme";
import { generateColorScale, PRIMARY_COLOR_CSS_VAR_NAMES } from "@/tokens/utils";
import { lightColors } from "@/tokens/colors";
import { basicDarkTheme, basicLightTheme, gameDarkTheme, gameLightTheme } from "@/tokens/themes";

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
			let hydratedRoot: ReturnType<typeof hydrateRoot> | undefined;

			try {
				act(() => {
					hydratedRoot = hydrateRoot(
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
				// Unmount so the provider releases <html> for the tests that follow.
				act(() => hydratedRoot?.unmount());
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

	it("renders with light when window.matchMedia is unavailable", () => {
		// No mockMatchMedia: jsdom has none, like some embedded webviews.
		let captured: ReturnType<typeof useTheme>;
		render(
			<ThemeProvider design="basic">
				<Probe onValue={(ctx) => (captured = ctx)} />
			</ThemeProvider>
		);

		expect(captured?.theme).toBe("light");
	});

	describe("primary color vars", () => {
		it("exposes the primaryColor scale through context and sets it on the container", () => {
			mockMatchMedia(false);
			const expected = generateColorScale("#e11d48", false).surface;

			let captured: ReturnType<typeof useTheme>;
			const { container } = render(
				<ThemeProvider design="basic" syncWithSystem={false} primaryColor="#e11d48">
					<Probe onValue={(ctx) => (captured = ctx)} />
				</ThemeProvider>
			);

			const style = captured?.primaryColorStyle as Record<string, string>;
			expect(style[PRIMARY_COLOR_CSS_VAR_NAMES.surface]).toBe(expected);
			expect(
				(container.firstElementChild as HTMLElement).style.getPropertyValue(
					PRIMARY_COLOR_CSS_VAR_NAMES.surface
				)
			).toBe(expected);
		});

		it("leaves a primary var set on <html> by the consumer alone", () => {
			const root = document.documentElement;
			root.style.setProperty(PRIMARY_COLOR_CSS_VAR_NAMES.surface, "#16a34a");

			const { unmount } = render(
				<ThemeProvider design="basic" syncWithSystem={false} primaryColor="#e11d48">
					<span />
				</ThemeProvider>
			);
			expect(root.style.getPropertyValue(PRIMARY_COLOR_CSS_VAR_NAMES.surface)).toBe("#16a34a");

			unmount();
			expect(root.style.getPropertyValue(PRIMARY_COLOR_CSS_VAR_NAMES.surface)).toBe("#16a34a");
			root.style.removeProperty(PRIMARY_COLOR_CSS_VAR_NAMES.surface);
		});

		it("keeps the computed vars over the same vars passed in style", () => {
			const { container } = render(
				<ThemeProvider
					design="basic"
					syncWithSystem={false}
					primaryColor="#e11d48"
					style={{ [PRIMARY_COLOR_CSS_VAR_NAMES.surface]: "#000000" } as React.CSSProperties}
				>
					<span />
				</ThemeProvider>
			);

			expect(
				(container.firstElementChild as HTMLElement).style.getPropertyValue(
					PRIMARY_COLOR_CSS_VAR_NAMES.surface
				)
			).toBe(generateColorScale("#e11d48", false).surface);
		});

		it("warns and falls back to the default scale for an invalid primaryColor", () => {
			const warn = vi.spyOn(console, "warn").mockImplementation(() => {});

			let captured: ReturnType<typeof useTheme>;
			render(
				<ThemeProvider design="basic" syncWithSystem={false} primaryColor="not-a-color">
					<Probe onValue={(ctx) => (captured = ctx)} />
				</ThemeProvider>
			);

			const style = captured?.primaryColorStyle as Record<string, string>;
			expect(style[PRIMARY_COLOR_CSS_VAR_NAMES.surface]).toBe(
				lightColors.palette.primary.surface
			);
			expect(warn).toHaveBeenCalledTimes(1);
			warn.mockRestore();
		});

		it("falls back to the default primary scale without primaryColor", () => {
			mockMatchMedia(false);

			let captured: ReturnType<typeof useTheme>;
			render(
				<ThemeProvider design="basic" syncWithSystem={false}>
					<Probe onValue={(ctx) => (captured = ctx)} />
				</ThemeProvider>
			);

			const style = captured?.primaryColorStyle as Record<string, string>;
			expect(style[PRIMARY_COLOR_CSS_VAR_NAMES.surface]).toBe(
				lightColors.palette.primary.surface
			);
		});
	});

	describe("<html> theme class", () => {
		const root = document.documentElement;

		afterEach(() => {
			root.className = "";
			vi.restoreAllMocks();
		});

		it("puts the theme class of a top-level provider on <html>, follows its theme, and removes it on unmount", () => {
			mockMatchMedia(false);

			const { rerender, unmount } = render(
				<ThemeProvider design="basic" theme="light" syncWithSystem={false}>
					content
				</ThemeProvider>
			);
			expect(root).toHaveClass(basicLightTheme);

			rerender(
				<ThemeProvider design="basic" theme="dark" syncWithSystem={false}>
					content
				</ThemeProvider>
			);
			expect(root).toHaveClass(basicDarkTheme);
			expect(root).not.toHaveClass(basicLightTheme);

			unmount();
			expect(root).not.toHaveClass(basicDarkTheme);
		});

		it("leaves <html> to the outer provider while a nested provider's theme changes", () => {
			mockMatchMedia(false);

			const renderTree = (innerTheme: "light" | "dark") => (
				<ThemeProvider design="basic" theme="light" syncWithSystem={false}>
					<ThemeProvider design="game" theme={innerTheme} syncWithSystem={false}>
						content
					</ThemeProvider>
				</ThemeProvider>
			);

			const { rerender } = render(renderTree("light"));
			expect(root).toHaveClass(basicLightTheme);
			expect(root).not.toHaveClass(gameLightTheme);

			rerender(renderTree("dark"));
			expect(root).toHaveClass(basicLightTheme);
			expect(root).not.toHaveClass(gameDarkTheme);
		});

		it("keeps the outer provider's class on <html> when a nested provider unmounts", () => {
			mockMatchMedia(false);

			const renderTree = (showInner: boolean) => (
				<ThemeProvider design="basic" theme="light" syncWithSystem={false}>
					{showInner && (
						<ThemeProvider design="game" theme="dark" syncWithSystem={false}>
							content
						</ThemeProvider>
					)}
				</ThemeProvider>
			);

			const { rerender } = render(renderTree(true));
			rerender(renderTree(false));

			expect(root).toHaveClass(basicLightTheme);
		});

		it("gives <html> to the first of several top-level providers and hands it over when that one unmounts", () => {
			mockMatchMedia(false);

			const renderTree = (showFirst: boolean, secondTheme: "light" | "dark") => (
				<>
					{showFirst && (
						<ThemeProvider design="basic" theme="light" syncWithSystem={false}>
							first
						</ThemeProvider>
					)}
					<ThemeProvider design="game" theme={secondTheme} syncWithSystem={false}>
						second
					</ThemeProvider>
				</>
			);

			const { rerender } = render(renderTree(true, "light"));
			expect(root).toHaveClass(basicLightTheme);
			expect(root).not.toHaveClass(gameLightTheme);

			// A theme change in a provider that doesn't own <html> leaves it alone.
			rerender(renderTree(true, "dark"));
			expect(root).toHaveClass(basicLightTheme);
			expect(root).not.toHaveClass(gameDarkTheme);

			rerender(renderTree(false, "dark"));
			expect(root).toHaveClass(gameDarkTheme);
			expect(root).not.toHaveClass(basicLightTheme);
		});

		it("still honors an explicit applyGlobal={false} without clearing <html>, and warns once that it is deprecated", () => {
			mockMatchMedia(false);
			const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
			// Stands in for a class set before hydration by getThemeInitScript().
			root.classList.add(basicDarkTheme);

			render(
				<>
					<ThemeProvider design="game" theme="light" syncWithSystem={false} applyGlobal={false}>
						first
					</ThemeProvider>
					<ThemeProvider design="game" theme="dark" syncWithSystem={false} applyGlobal={false}>
						second
					</ThemeProvider>
				</>
			);

			expect(root).toHaveClass(basicDarkTheme);
			expect(root).not.toHaveClass(gameLightTheme);
			expect(root).not.toHaveClass(gameDarkTheme);

			const deprecationWarnings = warn.mock.calls.filter(([message]) =>
				String(message).includes("`applyGlobal` prop of ThemeProvider is deprecated")
			);
			expect(deprecationWarnings).toHaveLength(1);
		});
	});
});
