import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { createRef } from "react";
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

	describe("Accessibility", () => {
		it("announces 'Loading' by default", () => {
			render(<Spinner />);
			expect(screen.getByRole("status")).toHaveTextContent("Loading");
		});

		it("announces a custom label", () => {
			render(<Spinner label="Loading comments" />);
			expect(screen.getByRole("status")).toHaveTextContent("Loading comments");
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
