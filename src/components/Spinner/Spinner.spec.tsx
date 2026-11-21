import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import React, { createRef } from "react";
import { Spinner } from "./Spinner";

describe("Spinner", () => {
	describe("Rendering", () => {
		it("renders with a status role", () => {
			render(<Spinner />);
			expect(screen.getByRole("status")).toBeInTheDocument();
		});

		it("applies custom className", () => {
			const { container } = render(<Spinner className="custom-class" />);
			expect(container.querySelector(".custom-class")).toBeInTheDocument();
		});

		it("hides the visual ring from assistive technology", () => {
			const { container } = render(<Spinner />);
			expect(container.querySelector("[aria-hidden='true']")).toBeInTheDocument();
		});
	});

	describe("Variants", () => {
		const ringClass = (ui: React.ReactElement) =>
			render(ui).container.querySelector("[aria-hidden='true']")!.className;

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

		it("updates the label inside the same status region", async () => {
			const { rerender } = render(<Spinner label="Loading comments" />);
			const region = screen.getByRole("status");
			await waitFor(() => expect(region).toHaveTextContent("Loading comments"));
			rerender(<Spinner label="Loading replies" />);
			expect(screen.getByRole("status")).toBe(region);
			expect(region).toHaveTextContent("Loading replies");
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
