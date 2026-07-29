import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import clsx from "clsx";
import * as styles from "./Checkbox.css";
import { lightTheme, type ColorIntent } from "@/tokens";
import { useTheme } from "@/providers";
import { Text } from "../Text/Text";

export type CheckboxSize = "small" | "medium" | "large" | "xlarge";
export type CheckboxIntent = ColorIntent;

export interface CheckboxProps extends Omit<
	React.HTMLAttributes<HTMLElement>,
	"onChange"
> {
	/** Size of the checkbox. Choose based on adjacent text or form components. Default: 'medium'. */
	size?: CheckboxSize;
	/** Semantic color intent (primary, secondary, success, warning, danger, neutral). Default: 'primary'. */
	intent?: CheckboxIntent;
	/** Label text rendered next to the checkbox. Also required for screen readers to identify its purpose. */
	label?: string;
	/**
	 * Controlled checked state. Use together with `onCheckedChange` when integrating with form
	 * libraries, external state, or when rendering different UI based on the checked state. For
	 * simple cases with no state management needed, use `defaultChecked` instead.
	 */
	checked?: boolean;
	/** Initial checked state for uncontrolled usage. Use when you don't need to manage state externally. */
	defaultChecked?: boolean;
	/** Whether the checkbox is disabled. Default: false. */
	disabled?: boolean;
	/** Callback fired when the checked state changes. Pair with `checked` for controlled usage. */
	onCheckedChange?: (checked: boolean) => void;
	name?: string;
	required?: boolean;
	readOnly?: boolean;
}

/**
 * Checkbox component for selection controls.
 */
export const Checkbox = ({
	size = "medium",
	intent = "primary",
	label,
	checked,
	defaultChecked,
	disabled = false,
	onCheckedChange,
	className,
	name,
	required,
	readOnly,
}: CheckboxProps) => {
	const themeContext = useTheme();
	const themeClass = themeContext?.themeClass ?? lightTheme;

	return (
		<label className={clsx(themeClass, styles.container, className)}>
			<BaseCheckbox.Root
				checked={checked}
				defaultChecked={defaultChecked}
				disabled={disabled}
				onCheckedChange={onCheckedChange}
				name={name}
				required={required}
				readOnly={readOnly}
			className={clsx(
				styles.checkboxRoot,
				styles.checkbox({
					size,
					intent,
				})
			)}
			>
				<BaseCheckbox.Indicator className={styles.indicatorContainer}>
					<svg
						className={styles.checkmarkIcon}
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M13.3334 4L6.00002 11.3333L2.66669 8"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</BaseCheckbox.Indicator>
			</BaseCheckbox.Root>
			{label && (
				<Text as="span" size={size} intent="inherit">
					{label}
				</Text>
			)}
		</label>
	);
};
