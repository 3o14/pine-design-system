import { useMDXComponents as getDocsMDXComponents } from "nextra-theme-docs";
import { ComponentPreview } from "./components/ComponentPreview";
import {
  IntroDemo,
  ButtonDemo,
  BadgeDemo,
  CheckboxDemo,
  DropdownDemo,
  SwitchDemo,
  TabDemo,
  TextDemo,
  TextFieldDemo,
} from "./components/Demos";

const docsComponents = getDocsMDXComponents();

export function useMDXComponents(components?: Record<string, unknown>) {
  return {
    ...docsComponents,
    ComponentPreview,
    IntroDemo,
    ButtonDemo,
    BadgeDemo,
    CheckboxDemo,
    DropdownDemo,
    SwitchDemo,
    TabDemo,
    TextDemo,
    TextFieldDemo,
    ...components,
  };
}
