import { useCallback } from "react";
import clsx from "clsx";
import { Tabs as BaseUITabs } from "@base-ui/react/tabs";
import * as styles from "./Tab.css";
import { lightTheme, type ColorIntent } from "@/tokens";
import { useTheme } from "@/providers";
import { useTabValue } from "./hook/useTabValue";
import { useTabIndicator } from "./hook/useTabIndicator";

export type TabIntent = ColorIntent;
export type TabOrientation = "horizontal" | "vertical";

export interface TabItem {
	/** Unique value identifying this tab, used for selection and `onChange`. */
	value: string;
	/** Label rendered in the tab trigger. */
	label: React.ReactNode;
	/** Panel content rendered when this tab is selected. */
	content: React.ReactNode;
	disabled?: boolean;
}

export interface TabProps extends Omit<
	React.HTMLAttributes<HTMLElement>,
	"onChange"
> {
	/**
	 * Tabs to render. Keep the count between 2 and 6 where possible — too many tabs make it
	 * harder to grasp the content; for more options, consider a Dropdown or sidebar navigation
	 * instead.
	 */
	tabs: TabItem[];
	/**
	 * Controlled selected tab value. Use together with `onChange` when syncing tab state with URL
	 * params or when tab changes trigger external actions (e.g. data fetch). For simple UI
	 * switching, `defaultValue` alone is enough.
	 */
	value?: string;
	/** Initial selected tab value for uncontrolled usage. Defaults to the first tab's value. */
	defaultValue?: string;
	/** Callback fired when the selected tab changes. Pair with `value` for controlled usage. */
	onChange?: (value: string) => void;
	/** Semantic color intent (primary, secondary, success, warning, danger, neutral). Default: 'primary'. */
	intent?: TabIntent;
	/**
	 * Layout direction of the tab list. 'horizontal' suits typical in-page tabs; 'vertical' suits
	 * sidebar-style navigation. Default: 'horizontal'.
	 */
	orientation?: TabOrientation;
}

/**
 * Tab component for organizing related content into multiple panels.
 */
export const Tab = ({
	tabs,
	value,
	defaultValue,
	onChange,
	intent = "primary",
	orientation = "horizontal",
	className,
}: TabProps) => {
	const themeContext = useTheme();
	const themeClass = themeContext?.themeClass ?? lightTheme;

	const initialValue = value ?? defaultValue ?? tabs[0]?.value ?? null;
	const { currentValue, handleValueChange } = useTabValue(value, initialValue);

	const { tabListRef, tabRefs, indicatorStyle } = useTabIndicator(
		currentValue,
		orientation,
		tabs
	);

	const onValueChange = useCallback(
		(newValue: string | null) => {
			handleValueChange(newValue, onChange);
		},
		[handleValueChange, onChange]
	);

	return (
		<BaseUITabs.Root
			value={value}
			defaultValue={defaultValue}
			onValueChange={onValueChange}
			orientation={orientation}
			className={clsx(themeClass, styles.root, className)}
		>
			<div ref={tabListRef} className={styles.tabListWrapper}>
				<BaseUITabs.List
					className={styles.tabList({
						orientation,
					})}
				>
					{tabs.map((tab) => {
						const isSelected = currentValue === tab.value;
						return (
							<BaseUITabs.Tab
								key={tab.value}
								ref={(el) => {
									if (el && el instanceof HTMLButtonElement) {
										tabRefs.current.set(tab.value, el);
									} else {
										tabRefs.current.delete(tab.value);
									}
								}}
								value={tab.value}
								disabled={tab.disabled}
								className={clsx(
									styles.tab({ intent, orientation }),
									isSelected && styles.tabSelected({ intent })
								)}
							>
								{tab.label}
							</BaseUITabs.Tab>
						);
					})}
					<div
						className={styles.indicator({
							intent,
							orientation,
						})}
						style={indicatorStyle}
					/>
				</BaseUITabs.List>
			</div>

			{tabs.map((tab) => (
				<BaseUITabs.Panel
					key={tab.value}
					value={tab.value}
					className={styles.panel}
				>
					{tab.content}
				</BaseUITabs.Panel>
			))}
		</BaseUITabs.Root>
	);
};
