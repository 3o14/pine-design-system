import { Switch as BaseSwitch } from "@base-ui/react/switch";
import clsx from "clsx";
import * as styles from "./Switch.css";
import { lightTheme, type ColorIntent } from "@/tokens";
import { useTheme } from "@/providers";
import { Text } from "../Text/Text";

export type SwitchSize = "small" | "medium" | "large" | "xlarge";
export type SwitchIntent = ColorIntent;

export interface SwitchProps extends Omit<
	React.HTMLAttributes<HTMLElement>,
	"onChange"
> {
	/** Size of the switch. Default: 'medium'. */
	size?: SwitchSize;
	/**
	 * Semantic color intent of the track, shown when the switch is on (primary, secondary,
	 * success, warning, danger, neutral). Default: 'primary'.
	 */
	intent?: SwitchIntent;
	/**
	 * Label text rendered next to the switch. Always provide a label — either via this prop or by
	 * connecting the switch to a `<label>` element — so screen readers can identify its purpose.
	 */
	label?: string;
	/**
	 * Controlled checked state. Use Switch (not Checkbox) when the on/off change takes effect
	 * immediately with no separate save action. Use together with `onCheckedChange`; for
	 * uncontrolled usage, use `defaultChecked` instead.
	 */
	checked?: boolean;
	/** Initial checked state for uncontrolled usage. */
	defaultChecked?: boolean;
	/** Whether the switch is disabled. Default: false. */
	disabled?: boolean;
	/** Callback fired when the checked state changes. Pair with `checked` for controlled usage. */
	onCheckedChange?: (checked: boolean) => void;
	name?: string;
	required?: boolean;
	readOnly?: boolean;
}

/**
 * Switch component for toggle controls.
 *
 * Unlike Checkbox, Switch is for settings that apply immediately with no separate save action.
 * Prefer Checkbox when the choice is reflected on form submit or when selecting multiple items
 * from many options.
 */
export const Switch = ({
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
}: SwitchProps) => {
	const themeContext = useTheme();
	const themeClass = themeContext?.themeClass ?? lightTheme;
	return (
		<label className={clsx(themeClass, styles.container, className)}>
			<BaseSwitch.Root
				checked={checked}
				defaultChecked={defaultChecked}
				disabled={disabled}
				onCheckedChange={onCheckedChange}
				name={name}
				required={required}
				readOnly={readOnly}
				className={styles.switchRoot}
			>
				<span
					className={clsx(
						styles.track({
							size,
							intent,
						})
					)}
				>
					<BaseSwitch.Thumb
						className={styles.thumb({
							size,
						})}
					/>
				</span>
			</BaseSwitch.Root>
			{label && (
				<Text as="span" size={size} intent="inherit">
					{label}
				</Text>
			)}
		</label>
	);
};
