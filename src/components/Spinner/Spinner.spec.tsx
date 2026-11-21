import { describe, it, expect } from "vitest";
import { render, screen, waitFor, within } from "@testing-library/react";
import React, { createRef } from "react";
import { Spinner } from "./Spinner";

describe("Spinner", () => {
	describe("Rendering", () => {
		it("renders with a status role", () => {
			render(<Spinner />);
			expect(screen.getByRole("status")).toBeInTheDocument();
		});

		it("applies custom className", () => {
			render(<Spinner className="custom-class" />);
			expect(screen.getByRole("status")).toHaveClass("custom-class");
		});

		it("hides the visual ring from assistive technology", () => {
			render(<Spinner />);
			expect(screen.getByRole("status").firstElementChild).toHaveAttribute(
				"aria-hidden",
				"true",
			);
		});
	});

	describe("Variants", () => {
		// The ring is the first child of the status region.
		const ringClass = (ui: React.ReactElement) =>
			within(render(ui).container).getByRole("status").firstElementChild!
				.className;

		it("applies a different ring class for each size", () => {
			const classes = (["small", "medium", "large"] as const).map((size) =>
				ringClass(<Spinner size={size} />),
			);
			expect(new Set(classes).size).toBe(3);
		});

		it("applies a different ring class for each intent", () => {
			const classes = (
				["primary", "secondary", "success", "warning", "danger", "neutral"] as const
			).map((intent) => ringClass(<Spinner intent={intent} />));
			expect(new Set(classes).size).toBe(6);
		});
	});

	describe("Accessibility", () => {
		it("mounts the status region empty so the label is announced as a change", () => {
			render(<Spinner />);
			expect(screen.getByRole("status").textContent).toBe("");
		});

		it("announces 'Loading' by default", async () => {
			render(<Spinner />);
			await waitFor(() =>
				expect(screen.getByRole("status")).toHaveTextContent("Loading"),
			);
		});

		it("announces a custom label", async () => {
			render(<Spinner label="Loading comments" />);
			await waitFor(() =>
				expect(screen.getByRole("status")).toHaveTextContent("Loading comments"),
			);
		});

		it("falls back to 'Loading' when the label is blank", async () => {
			render(<Spinner label="   " />);
			await waitFor(() =>
				expect(screen.getByRole("status")).toHaveTextContent("Loading"),
			);
		});

		it("falls back to 'Loading' when an untyped caller passes a null label", async () => {
			render(<Spinner label={null as unknown as string} />);
			await waitFor(() =>
				expect(screen.getByRole("status")).toHaveTextContent("Loading"),
			);
		});

		it("keeps the region polite when consumers try to silence it", () => {
			render(<Spinner aria-live="off" aria-atomic={false} />);
			const region = screen.getByRole("status");
			expect(region).toHaveAttribute("aria-live", "polite");
			expect(region).toHaveAttribute("aria-atomic", "true");
		});

		it("keeps the live region when consumers pass role or aria-hidden", async () => {
			render(<Spinner role="presentation" aria-hidden />);
			const region = screen.getByRole("status");
			expect(region).not.toHaveAttribute("aria-hidden");
			await waitFor(() => expect(region).toHaveTextContent("Loading"));
		});

		it("mounts the region empty again when it returns from decorative", async () => {
			const { rerender } = render(<Spinner />);
			await waitFor(() =>
				expect(screen.getByRole("status")).toHaveTextContent("Loading"),
			);

			rerender(<Spinner decorative />);
			expect(screen.queryByRole("status")).not.toBeInTheDocument();

			rerender(<Spinner />);
			expect(screen.getByRole("status").textContent).toBe("");
			await waitFor(() =>
				expect(screen.getByRole("status")).toHaveTextContent("Loading"),
			);
		});

		it("updates the label inside the same status region", async () => {
			const { rerender } = render(<Spinner label="Loading comments" />);
			const region = screen.getByRole("status");
			await waitFor(() => expect(region).toHaveTextContent("Loading comments"));
			rerender(<Spinner label="Loading replies" />);
			expect(screen.getByRole("status")).toBe(region);
			expect(region).toHaveTextContent("Loading replies");
		});
	});

	describe("Decorative", () => {
		it("renders no status region", () => {
			render(<Spinner decorative />);
			expect(screen.queryByRole("status")).not.toBeInTheDocument();
		});

		it("hides the whole spinner from assistive technology", () => {
			render(<Spinner decorative data-testid="spinner" />);
			expect(screen.getByTestId("spinner")).toHaveAttribute("aria-hidden", "true");
		});

		it("stays hidden even when consumers pass role or aria-hidden={false}", () => {
			render(
				<Spinner decorative role="status" aria-hidden={false} data-testid="spinner" />,
			);
			expect(screen.queryByRole("status")).not.toBeInTheDocument();
			expect(screen.getByTestId("spinner")).toHaveAttribute("aria-hidden", "true");
		});

		it("keeps a button's accessible name clean", async () => {
			render(
				<button type="button">
					<Spinner decorative size="small" />
					Save
				</button>,
			);
			// Wait past the announce delay to make sure no label is written later.
			await new Promise((resolve) => setTimeout(resolve, 150));
			expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
		});
	});

	describe("API", () => {
		it("forwards ref to the root element", () => {
			const ref = createRef<HTMLSpanElement>();
			render(<Spinner ref={ref} />);
			expect(ref.current).toBeInstanceOf(HTMLElement);
			expect(ref.current).toHaveAttribute("role", "status");
		});

		it("passes through arbitrary HTML attributes to the root", () => {
			render(<Spinner id="page-loader" data-testid="spinner" />);
			const spinner = screen.getByRole("status");
			expect(spinner).toHaveAttribute("id", "page-loader");
			expect(spinner).toHaveAttribute("data-testid", "spinner");
		});
	});
});
