import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tooltip } from "./Tooltip";

describe("Tooltip", () => {
	describe("Rendering", () => {
		it("renders children as trigger", () => {
			render(
				<Tooltip content="Tooltip text">
					<button>Hover me</button>
				</Tooltip>,
			);
			expect(
				screen.getByRole("button", { name: "Hover me" }),
			).toBeInTheDocument();
		});

		it("does not show tooltip content by default", () => {
			render(
				<Tooltip content="Hidden tooltip">
					<button>Trigger</button>
				</Tooltip>,
			);
			expect(screen.queryByText("Hidden tooltip")).not.toBeInTheDocument();
		});

		it("renders ReactNode as content when open", () => {
			render(
				<Tooltip content={<strong>Rich content</strong>} open>
					<button>Trigger</button>
				</Tooltip>,
			);
			expect(screen.getByText("Rich content")).toBeInTheDocument();
		});

		it("applies custom className to popup when open", () => {
			render(
				<Tooltip content="Text" open className="custom-tooltip">
					<button>Trigger</button>
				</Tooltip>,
			);
			// getByText returns the popup div — text is its direct text node child
			expect(screen.getByText("Text")).toHaveClass("custom-tooltip");
		});
	});

	describe("Controlled mode", () => {
		it("shows tooltip when open is true", () => {
			render(
				<Tooltip content="Controlled tooltip" open>
					<button>Trigger</button>
				</Tooltip>,
			);
			expect(screen.getByText("Controlled tooltip")).toBeInTheDocument();
		});

		it("hides tooltip when open is false", () => {
			render(
				<Tooltip content="Not visible" open={false}>
					<button>Trigger</button>
				</Tooltip>,
			);
			expect(screen.queryByText("Not visible")).not.toBeInTheDocument();
		});

		it("shows tooltip with defaultOpen", () => {
			render(
				<Tooltip content="Default open" defaultOpen>
					<button>Trigger</button>
				</Tooltip>,
			);
			expect(screen.getByText("Default open")).toBeInTheDocument();
		});
	});

	describe("Arrow", () => {
		it("renders arrow element by default when open", () => {
			render(
				<Tooltip content="With arrow" open>
					<button>Trigger</button>
				</Tooltip>,
			);
			// Arrow renders as an element child inside the popup div
			const popup = screen.getByText("With arrow");
			expect(popup.children.length).toBeGreaterThanOrEqual(1);
		});

		it("does not render arrow element when showArrow is false", () => {
			render(
				<Tooltip content="No arrow" open showArrow={false}>
					<button>Trigger</button>
				</Tooltip>,
			);
			// No Arrow element child inside the popup
			const popup = screen.getByText("No arrow");
			expect(popup.children.length).toBe(0);
		});
	});

	// Hover tests use real timers + waitFor to avoid fake-timer / userEvent deadlock.
	// base-ui fires tooltip open/close via real setTimeout using its internal defaults.
	describe("Hover behavior", () => {
		it("shows tooltip after hover delay", async () => {
			const user = userEvent.setup();
			render(
				<Tooltip content="Delayed tooltip">
					<button>Hover me</button>
				</Tooltip>,
			);

			await user.hover(screen.getByRole("button"));
			await waitFor(
				() => expect(screen.getByText("Delayed tooltip")).toBeInTheDocument(),
				{ timeout: 1000 },
			);
		});

		it("hides tooltip after mouse leave", async () => {
			const user = userEvent.setup();
			render(
				<Tooltip content="Hover tooltip">
					<button>Hover me</button>
				</Tooltip>,
			);
			const button = screen.getByRole("button");

			await user.hover(button);
			await waitFor(
				() => expect(screen.getByText("Hover tooltip")).toBeInTheDocument(),
				{ timeout: 1000 },
			);

			await user.unhover(button);
			await waitFor(
				() =>
					expect(screen.queryByText("Hover tooltip")).not.toBeInTheDocument(),
				{ timeout: 1000 },
			);
		});

		it("does not show tooltip when disabled", async () => {
			const user = userEvent.setup();
			render(
				<Tooltip content="Should not appear" disabled>
					<button>Hover me</button>
				</Tooltip>,
			);

			await user.hover(screen.getByRole("button"));
			// Wait longer than the tooltip delay to confirm it never appears
			await new Promise((r) => setTimeout(r, 600));
			expect(screen.queryByText("Should not appear")).not.toBeInTheDocument();
		});

		it("calls onOpenChange when tooltip opens", async () => {
			const handleChange = vi.fn();
			const user = userEvent.setup();
			render(
				<Tooltip content="Callback tooltip" onOpenChange={handleChange}>
					<button>Hover me</button>
				</Tooltip>,
			);

			await user.hover(screen.getByRole("button"));
			await waitFor(
				() =>
					expect(handleChange).toHaveBeenCalledWith(true, expect.anything()),
				{ timeout: 1000 },
			);
		});
	});

	describe("Accessibility", () => {
		it("trigger is accessible by keyboard focus", async () => {
			const user = userEvent.setup();
			render(
				<Tooltip content="Focus tooltip">
					<button>Focus me</button>
				</Tooltip>,
			);
			await user.tab();
			expect(screen.getByRole("button", { name: "Focus me" })).toHaveFocus();
		});

		it("popup has tooltip role when open", () => {
			render(
				<Tooltip content="Accessible tooltip" open>
					<button>Trigger</button>
				</Tooltip>,
			);
			expect(screen.getByRole("tooltip")).toBeInTheDocument();
		});

		it("shows tooltip on keyboard focus", async () => {
			const user = userEvent.setup();
			render(
				<Tooltip content="Focus tooltip">
					<button>Focus me</button>
				</Tooltip>,
			);
			await user.tab();
			await waitFor(
				() => expect(screen.getByRole("tooltip")).toBeInTheDocument(),
				{ timeout: 1000 },
			);
		});

		it("dismisses tooltip on Escape key", async () => {
			const user = userEvent.setup();
			render(
				<Tooltip content="Escape tooltip">
					<button>Trigger</button>
				</Tooltip>,
			);
			await user.tab();
			await waitFor(
				() => expect(screen.getByRole("tooltip")).toBeInTheDocument(),
				{ timeout: 1000 },
			);
			await user.keyboard("{Escape}");
			await waitFor(
				() => expect(screen.queryByRole("tooltip")).not.toBeInTheDocument(),
				{ timeout: 1000 },
			);
		});
	});
});
