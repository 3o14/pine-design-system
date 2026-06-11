import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { ProgressBar } from "./ProgressBar";

describe("ProgressBar", () => {
	describe("Rendering", () => {
		it("renders with a progressbar role", () => {
			render(<ProgressBar value={50} label="Loading" />);
			expect(screen.getByRole("progressbar")).toBeInTheDocument();
		});

		it("renders the label text", () => {
			render(<ProgressBar value={50} label="Uploading files" />);
			expect(screen.getByText("Uploading files")).toBeInTheDocument();
		});

		it("applies custom className", () => {
			const { container } = render(
				<ProgressBar value={50} label="Loading" className="custom-class" />
			);
			expect(container.querySelector(".custom-class")).toBeInTheDocument();
		});

		it("does not show the value by default", () => {
			render(<ProgressBar value={72} label="Loading" />);
			expect(screen.queryByText("72%")).not.toBeInTheDocument();
		});

		it("shows the formatted value when showValue is true", () => {
			render(<ProgressBar value={72} label="Loading" showValue />);
			expect(screen.getByText("72%")).toBeInTheDocument();
		});

		it("uses formatValue for the displayed value", () => {
			render(
				<ProgressBar
					value={1}
					max={3}
					label="Steps"
					showValue
					formatValue={(v) => `${v} of 3`}
				/>
			);
			expect(screen.getByText("1 of 3")).toBeInTheDocument();
		});
	});

	describe("Accessibility", () => {
		it("has an accessible name from label", () => {
			render(<ProgressBar value={50} label="Download progress" />);
			expect(
				screen.getByRole("progressbar", { name: "Download progress" })
			).toBeInTheDocument();
		});

		it("sets aria-valuenow / valuemin / valuemax for determinate state", () => {
			render(<ProgressBar value={40} label="Loading" />);
			const bar = screen.getByRole("progressbar");
			expect(bar).toHaveAttribute("aria-valuenow", "40");
			expect(bar).toHaveAttribute("aria-valuemin", "0");
			expect(bar).toHaveAttribute("aria-valuemax", "100");
		});

		it("respects custom min and max", () => {
			render(<ProgressBar value={5} min={0} max={10} label="Loading" />);
			const bar = screen.getByRole("progressbar");
			expect(bar).toHaveAttribute("aria-valuenow", "5");
			expect(bar).toHaveAttribute("aria-valuemax", "10");
		});

		it("omits aria-valuenow when indeterminate", () => {
			render(<ProgressBar value={null} label="Loading" />);
			const bar = screen.getByRole("progressbar");
			expect(bar).not.toHaveAttribute("aria-valuenow");
		});

		it("applies aria-valuetext via formatValue", () => {
			render(
				<ProgressBar
					value={2}
					max={5}
					label="Steps"
					formatValue={(v) => `${v} of 5 complete`}
				/>
			);
			expect(screen.getByRole("progressbar")).toHaveAttribute(
				"aria-valuetext",
				"2 of 5 complete"
			);
		});
	});

	describe("Indeterminate state", () => {
		it("marks the progressbar as indeterminate", () => {
			render(<ProgressBar value={null} label="Loading" />);
			expect(screen.getByRole("progressbar")).toHaveAttribute(
				"data-indeterminate"
			);
		});

		it("is indeterminate by default when no value is given", () => {
			render(<ProgressBar label="Loading" />);
			expect(screen.getByRole("progressbar")).toHaveAttribute(
				"data-indeterminate"
			);
		});
	});

	describe("Edge cases", () => {
		it("does not produce NaN width when min equals max", () => {
			const { container } = render(
				<ProgressBar value={5} min={5} max={5} label="Loading" />
			);
			const indicator = container.querySelector(
				"[class*='indicator']"
			) as HTMLElement;
			// Width must never be the string "NaN%"
			expect(indicator.style.width).not.toContain("NaN");
		});

		it("clamps value above max to 100%", () => {
			const { container } = render(
				<ProgressBar value={150} max={100} label="Loading" />
			);
			const indicator = container.querySelector(
				"[class*='indicator']"
			) as HTMLElement;
			expect(indicator.style.width).toBe("100%");
		});
	});

	describe("API", () => {
		it("forwards ref to the root element", () => {
			const ref = createRef<HTMLDivElement>();
			render(<ProgressBar value={50} label="Loading" ref={ref} />);
			expect(ref.current).toBeInstanceOf(HTMLElement);
			expect(ref.current).toHaveAttribute("role", "progressbar");
		});

		it("passes through arbitrary HTML attributes to the root", () => {
			render(
				<ProgressBar
					value={50}
					label="Loading"
					id="upload-progress"
					data-testid="bar"
				/>
			);
			const bar = screen.getByRole("progressbar");
			expect(bar).toHaveAttribute("id", "upload-progress");
			expect(bar).toHaveAttribute("data-testid", "bar");
		});
	});
});
