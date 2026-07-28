import { Select as BaseSelect } from "@base-ui/react/select";
import clsx from "clsx";
import * as styles from "./Dropdown.css";
import { lightTheme, type ColorIntent } from "@/tokens";
import { useTheme } from "@/providers";

export type DropdownSize = "small" | "medium" | "large";
export type DropdownRounded = "small" | "medium" | "large";
export type DropdownIntent = ColorIntent;


export interface DropdownOption {
	/** Unique value for this option, used for selection and `onValueChange`. */
	value: string;
	/** Display label rendered in the trigger and option list. */
	label: string;
	disabled?: boolean;
}

export interface DropdownProps
	extends Omit<React.HTMLAttributes<HTMLElement>, "onChange" | "defaultValue"> {
	/**
	 * Selectable options. Prefer Dropdown when there are 6 or more options or when space is
	 * limited; for 5 or fewer options where all choices should stay visible at once, use a Radio
	 * group instead.
	 */
	options: DropdownOption[];
	/**
	 * Controlled selected value. Use together with `onValueChange` when integrating with form
	 * libraries or when the selection needs to drive other UI. For simple uncontrolled usage, use
	 * `defaultValue` instead.
	 */
	value?: string;
	/** Initial selected value for uncontrolled usage. */
	defaultValue?: string;
	/** Callback fired when the selected value changes. Pair with `value` for controlled usage. */
	onValueChange?: (value: string | null) => void;
	/** Text shown in the trigger when no option is selected. Default: 'Select an option'. */
	placeholder?: string;
	/** Size of the dropdown trigger. Default: 'medium'. */
	size?: DropdownSize;
	/** Corner radius of the dropdown trigger (small, medium, large). Default: 'medium'. */
	rounded?: DropdownRounded;
	/** Semantic color intent (primary, secondary, success, warning, danger, neutral). Default: 'primary'. */
	intent?: DropdownIntent;
	fullWidth?: boolean;
	/** Whether the dropdown is disabled. Default: false. */
	disabled?: boolean;
	name?: string;
	required?: boolean;
}

/**
 * Dropdown component for option selection.
 */
export const Dropdown = ({
	options,
	value,
	defaultValue,
	onValueChange,
	placeholder = "Select an option",
	size = "medium",
	rounded = "medium",
	intent = "primary",
	fullWidth = false,
	disabled = false,
	className,
	name,
	required,
}: DropdownProps) => {
	const themeContext = useTheme();
	const themeClass = themeContext?.themeClass ?? lightTheme;
	return (
		<BaseSelect.Root
			value={value}
			defaultValue={defaultValue}
			onValueChange={(newValue) => onValueChange?.(newValue)}
			disabled={disabled}
			name={name}
			required={required}
		>
			<div
				className={clsx(
					themeClass,
					styles.container,
					fullWidth && styles.triggerFullWidth,
					className
				)}
			>
				<BaseSelect.Trigger
					className={clsx(
						styles.trigger({
							size,
							rounded,
							intent,
						}),
						fullWidth && styles.triggerFullWidth
					)}
				>
					<BaseSelect.Value className={styles.triggerValue}>
						{(selectedValue: string | null) => {
							const selected = options.find(
								(opt) => opt.value === selectedValue
							);
							return selected?.label || placeholder;
						}}
					</BaseSelect.Value>
					<BaseSelect.Icon className={styles.triggerIcon}>
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M4 6L8 10L12 6"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</BaseSelect.Icon>
				</BaseSelect.Trigger>

				<BaseSelect.Portal>
					<BaseSelect.Positioner sideOffset={4}>
						<BaseSelect.Popup
							className={styles.menu({ intent })}
						>
							<BaseSelect.List>
								{options.map((option) => (
									<BaseSelect.Item
										key={option.value}
										value={option.value}
										disabled={option.disabled}
										className={styles.menuItem({ intent })}
									>
										<BaseSelect.ItemText>{option.label}</BaseSelect.ItemText>
									</BaseSelect.Item>
								))}
							</BaseSelect.List>
						</BaseSelect.Popup>
					</BaseSelect.Positioner>
				</BaseSelect.Portal>
			</div>
		</BaseSelect.Root>
	);
};
