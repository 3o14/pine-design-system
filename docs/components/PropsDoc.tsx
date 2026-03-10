import { PropsTable, type PropDefinition } from "./PropsTable";
import buttonProps from "../content/props/button.json";
import badgeProps from "../content/props/badge.json";

const PROPS_MAP: Record<string, PropDefinition[]> = {
  button: buttonProps as PropDefinition[],
  badge: badgeProps as PropDefinition[],
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
