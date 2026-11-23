import { describe, it, expect, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { createRef } from "react";
import { Alert } from "./Alert";
import { ThemeProvider } from "@/providers";
import { basicLightTheme, gameLightTheme } from "@/tokens/themes";

describe("Alert", () => {
	describe("Rendering", () => {
		it("renders the title and description", () => {
			render(<Alert title="Couldn't save changes">Check your connection and try again.</Alert>);
			const alert = screen.getByRole("status");
			expect(alert).toHaveTextContent("Couldn't save changes");
			expect(alert).toHaveTextContent("Check your connection and try again.");
		});

		it("renders without a title", () => {
			render(<Alert>Your trial ends in 3 days.</Alert>);
			expect(screen.getByRole("status")).toHaveTextContent("Your trial ends in 3 days.");
		});

		it("applies custom className", () => {
			render(<Alert className="custom-class">Message</Alert>);
			expect(screen.getByRole("status")).toHaveClass("custom-class");
		});

		it("renders 0 as the title and description", () => {
			render(<Alert title={0}>{0}</Alert>);
			expect(screen.getByRole("status")).toHaveTextContent("00");
		});

		it("renders no empty wrappers for empty or boolean content", () => {
			render(
				<Alert icon={false} title="" action={true}>
					{false}
				</Alert>,
			);
			// Only the content column is left, and it is empty.
			const alert = screen.getByRole("status");
			expect(alert.children).toHaveLength(1);
			expect(alert.firstElementChild).toBeEmptyDOMElement();
		});

		it("renders actions inside the alert", () => {
			render(
				<Alert intent="danger" action={<button type="button">Retry</button>}>
					Upload failed.
				</Alert>,
			);
			expect(
				within(screen.getByRole("alert")).getByRole("button", { name: "Retry" }),
			).toBeInTheDocument();
		});
	});

	describe("Icon", () => {
		// Default icons are decorative SVGs: no semantic query reaches them.
		const iconOf = (container: HTMLElement) => container.querySelector("svg");

		it("shows a decorative icon by default", () => {
			const { container } = render(<Alert>Message</Alert>);
			expect(iconOf(container)).toHaveAttribute("aria-hidden", "true");
		});

		it("uses a different icon shape for each intent", () => {
			const shapes = (
				["primary", "success", "warning", "danger"] as const
			).map((intent) => {
				const { container, unmount } = render(<Alert intent={intent}>Message</Alert>);
				const markup = iconOf(container)!.innerHTML;
				unmount();
				return markup;
			});
			expect(new Set(shapes).size).toBe(4);
		});

		it("replaces the icon with a custom one", () => {
			render(<Alert icon={<span data-testid="custom-icon" aria-hidden="true" />}>Message</Alert>);
			expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
		});

		it.each([
			["false", false],
			["null", null],
		])("hides the icon when icon is %s", (_, icon) => {
			const { container } = render(<Alert icon={icon}>Message</Alert>);
			expect(iconOf(container)).toBeNull();
		});
	});

	describe("Variants", () => {
		const rootClass = (ui: React.ReactElement) => {
			const { container, unmount } = render(ui);
			const className = (container.firstElementChild as HTMLElement).className;
			unmount();
			return className;
		};

		it("applies a different class for each variant", () => {
			const classes = (["weak", "outline", "solid"] as const).map((variant) =>
				rootClass(<Alert variant={variant}>Message</Alert>),
			);
			expect(new Set(classes).size).toBe(3);
		});

		it("applies a different class for each intent", () => {
			const classes = (
				["primary", "secondary", "success", "warning", "danger", "neutral"] as const
			).map((intent) => rootClass(<Alert intent={intent}>Message</Alert>));
			expect(new Set(classes).size).toBe(6);
		});

		it("applies a different class for each rounded value", () => {
			const classes = (["small", "medium", "large"] as const).map((rounded) =>
				rootClass(<Alert rounded={rounded}>Message</Alert>),
			);
			expect(new Set(classes).size).toBe(3);
		});
	});

	describe("Accessibility", () => {
		it.each(["danger", "warning"] as const)("renders role='alert' for %s", (intent) => {
			render(<Alert intent={intent}>Message</Alert>);
			expect(screen.getByRole("alert")).toBeInTheDocument();
		});

		it.each(["primary", "secondary", "success", "neutral"] as const)(
			"renders role='status' for %s",
			(intent) => {
				render(<Alert intent={intent}>Message</Alert>);
				expect(screen.getByRole("status")).toBeInTheDocument();
			},
		);

		it("lets consumers raise the role to alert", () => {
			render(
				<Alert intent="success" role="alert">
					Changes saved
				</Alert>,
			);
			expect(screen.getByRole("alert")).toHaveTextContent("Changes saved");
		});

		it("keeps the default role when role={undefined} is forwarded", () => {
			render(
				<Alert intent="danger" role={undefined}>
					Message
				</Alert>,
			);
			expect(screen.getByRole("alert")).toBeInTheDocument();
		});

		it("lets consumers override the role", () => {
			render(
				<Alert intent="danger" role="none" data-testid="alert">
					Message
				</Alert>,
			);
			expect(screen.queryByRole("alert")).not.toBeInTheDocument();
			expect(screen.getByTestId("alert")).toHaveAttribute("role", "none");
		});
	});

	describe("Dismiss", () => {
		it("shows no dismiss button without onClose", () => {
			render(<Alert>Message</Alert>);
			expect(screen.queryByRole("button")).not.toBeInTheDocument();
		});

		it("calls onClose when the dismiss button is pressed", async () => {
			const user = userEvent.setup();
			const onClose = vi.fn();
			render(<Alert onClose={onClose}>Message</Alert>);

			await user.click(screen.getByRole("button", { name: "Dismiss" }));
			expect(onClose).toHaveBeenCalledTimes(1);
		});

		it("can be dismissed with the keyboard", async () => {
			const user = userEvent.setup();
			const onClose = vi.fn();
			render(<Alert onClose={onClose}>Message</Alert>);

			await user.tab();
			expect(screen.getByRole("button", { name: "Dismiss" })).toHaveFocus();
			await user.keyboard("{Enter}");
			expect(onClose).toHaveBeenCalledTimes(1);
		});

		it("uses a custom closeLabel", () => {
			render(
				<Alert onClose={() => {}} closeLabel="Dismiss upload error">
					Message
				</Alert>,
			);
			expect(screen.getByRole("button", { name: "Dismiss upload error" })).toBeInTheDocument();
		});

		it("falls back to 'Dismiss' when closeLabel is blank", () => {
			render(
				<Alert onClose={() => {}} closeLabel="  ">
					Message
				</Alert>,
			);
			expect(screen.getByRole("button", { name: "Dismiss" })).toBeInTheDocument();
		});

		it("falls back to 'Dismiss' when an untyped caller passes null", () => {
			render(
				<Alert onClose={() => {}} closeLabel={null as unknown as string}>
					Message
				</Alert>,
			);
			expect(screen.getByRole("button", { name: "Dismiss" })).toBeInTheDocument();
		});

		it("does not submit a surrounding form", async () => {
			const user = userEvent.setup();
			const onSubmit = vi.fn((event: React.FormEvent) => event.preventDefault());
			render(
				<form onSubmit={onSubmit}>
					<Alert onClose={() => {}}>Message</Alert>
				</form>,
			);
			await user.click(screen.getByRole("button", { name: "Dismiss" }));
			expect(onSubmit).not.toHaveBeenCalled();
		});
	});

	describe("Theming", () => {
		// Game and crayon overrides match the theme class on the Alert's own root, so the
		// root must carry the nearest provider's class, not an outer one.
		it("takes the theme class from the nearest ThemeProvider", () => {
			render(
				<ThemeProvider design="game" syncWithSystem={false}>
					<ThemeProvider design="basic" syncWithSystem={false}>
						<Alert>Message</Alert>
					</ThemeProvider>
				</ThemeProvider>,
			);
			const alert = screen.getByRole("status");
			expect(alert).toHaveClass(basicLightTheme);
			expect(alert).not.toHaveClass(gameLightTheme);
		});
	});

	describe("API", () => {
		it("forwards ref to the root element", () => {
			const ref = createRef<HTMLDivElement>();
			render(<Alert ref={ref}>Message</Alert>);
			expect(ref.current).toBe(screen.getByRole("status"));
		});

		it("passes through arbitrary HTML attributes to the root", () => {
			render(
				<Alert id="save-error" data-testid="alert">
					Message
				</Alert>,
			);
			const alert = screen.getByRole("status");
			expect(alert).toHaveAttribute("id", "save-error");
			expect(alert).toHaveAttribute("data-testid", "alert");
		});
	});
});
