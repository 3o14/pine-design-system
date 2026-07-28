import { Field } from "@base-ui/react/field";
import { Input } from "@base-ui/react/input";
import clsx from "clsx";
import * as styles from "./TextField.css";
const { container, containerVariants, input, label, helperText, inputWrapper } =
	styles;
import { lightTheme } from "@/tokens";
import { useTheme } from "@/providers";

export type TextFieldSize = "small" | "medium" | "large" | "xlarge";
export type TextFieldRounded = "small" | "medium" | "large";
export type TextFieldVariant = "outline" | "filled";
export type TextFieldStatus = "default" | "error" | "success";

type BaseTextFieldProps = {
	/** Size of the input field. Default: 'medium'. */
	size?: TextFieldSize;
	/** Corner radius (small, medium, large). Default: 'medium'. */
	rounded?: TextFieldRounded;
	/**
	 * Visual style. 'outline' is the default bordered input; 'filled' uses a filled background,
	 * useful when the field needs to stand out from other form elements. Default: 'outline'.
	 */
	variant?: TextFieldVariant;
	/**
	 * Validation state — changes border and helper text color. Use 'error' with `helperText` set
	 * to a clear message explaining what went wrong; use 'success' with `helperText` to confirm
	 * validation passed. Default: 'default'.
	 */
	status?: TextFieldStatus;
	/** Label text rendered above the input. */
	label?: string;
	/**
	 * Helper text rendered below the input. When `status` is 'error', this renders as the error
	 * message instead of the default helper text.
	 */
	helperText?: string;
	fullWidth?: boolean;
	name?: string;
	required?: boolean;
	validate?: (
		value: unknown,
		formValues: Record<string, unknown>
	) => string | string[] | Promise<string | string[] | null> | null;
};

type InputTextFieldProps = BaseTextFieldProps &
	Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
		/** Renders a single-line `<input>`. Default: false. */
		multiline?: false;
		rows?: never;
	};

type TextareaTextFieldProps = BaseTextFieldProps &
	Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size" | "type"> & {
		/** Renders a `<textarea>` instead of `<input>`. */
		multiline: true;
		/** Default visible row height of the textarea. Only used when `multiline` is true. Default: 3. */
		rows?: number;
	};

export type TextFieldProps = InputTextFieldProps | TextareaTextFieldProps;

/**
 * TextField component for text input, combining a label, input area, and helper text.
 */
export const TextField = ({
	size = "medium",
	rounded = "medium",
	variant = "outline",
	status = "default",
	label: labelText,
	helperText: helperTextContent,
	fullWidth = false,
	disabled = false,
	multiline = false,
	rows = 3,
	className,
	name,
	required,
	validate,
	...props
}: TextFieldProps) => {
	const themeContext = useTheme();
	const themeClass = themeContext?.themeClass ?? lightTheme;

	const inputClassName = clsx(
		input({
			size,
			rounded,
			variant,
			status,
		}),
		multiline && styles.textarea
	);

	return (
		<Field.Root
			className={clsx(
				themeClass,
				container,
				containerVariants[fullWidth ? "fullWidth" : "default"],
				className
			)}
			name={name}
			disabled={disabled}
			validate={validate}
		>
			{labelText && (
				<Field.Label className={label({ size })}>
					{labelText}
					{required && " *"}
				</Field.Label>
			)}
			<div className={inputWrapper({ variant, status, rounded })}>
				{multiline ? (
					<textarea
						className={inputClassName}
						required={required}
						disabled={disabled}
						rows={rows}
						{...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
					/>
				) : (
					<Input
						className={inputClassName}
						required={required}
						{...(props as React.InputHTMLAttributes<HTMLInputElement>)}
					/>
				)}
			</div>
			{helperTextContent && status !== "error" && (
				<Field.Description className={helperText({ size, status })}>
					{helperTextContent}
				</Field.Description>
			)}
			<Field.Error className={helperText({ size, status: "error" })} />
		</Field.Root>
	);
};
