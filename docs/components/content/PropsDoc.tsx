import { PropsTable, type PropDefinition } from "./PropsTable";
import buttonProps from "../../content/props/button.json";
import badgeProps from "../../content/props/badge.json";
import checkboxProps from "../../content/props/checkbox.json";
import dialogProps from "../../content/props/dialog.json";
import dropdownProps from "../../content/props/dropdown.json";
import switchProps from "../../content/props/switch.json";
import tabProps from "../../content/props/tab.json";
import textProps from "../../content/props/text.json";

const PROPS_MAP: Record<string, PropDefinition[]> = {
  button: buttonProps,
  badge: badgeProps,
  checkbox: checkboxProps,
  dialog: dialogProps,
  dropdown: dropdownProps,
  switch: switchProps,
  tab: tabProps,
  text: textProps,
};

export interface PropsDocProps {
  /** 컴포넌트 이름 (content/props/{component}.json) */
  component: keyof typeof PROPS_MAP;
}

export function PropsDoc({ component }: PropsDocProps) {
  const props = PROPS_MAP[component];
  if (!props) return null;
  return <PropsTable props={props} />;
}
