import { useMDXComponents as getDocsMDXComponents } from "nextra-theme-docs";
import { ComponentPreview } from "./components/ComponentPreview";
import { BadgePropsDoc, ButtonPropsDoc } from "./components/PropsTables";
import { ColorPalette } from "./components/ColorPalette";
import { ColorTokenTable } from "./components/ColorTokenTable";
import { TypographyScale } from "./components/TypographyScale";
import { FontWeightPreview } from "./components/FontWeightPreview";
import { FontFamilyPreview } from "./components/FontFamilyPreview";
import {
  IntroDemo,
  ButtonDemo,
  ButtonVariantDemo,
  ButtonSizeDemo,
  ButtonIntentDemo,
  ButtonRoundedDemo,
  ButtonDisabledDemo,
  BadgeDemo,
  BadgeVariantDemo,
  BadgeIntentDemo,
  BadgeSizeDemo,
  BadgeDotDemo,
  CheckboxDemo,
  CheckboxIntentDemo,
  CheckboxSizeDemo,
  DropdownDemo,
  DropdownSizeDemo,
  SwitchDemo,
  SwitchIntentDemo,
  SwitchSizeDemo,
  TabDemo,
  TabVerticalDemo,
  TextDemo,
  TextSizeDemo,
  TextWeightDemo,
  TextIntentDemo,
  TextFieldDemo,
  TextFieldVariantDemo,
  TextFieldStatusDemo,
  TextFieldMultilineDemo,
} from "./components/Demos";

const docsComponents = getDocsMDXComponents();

export function useMDXComponents(components?: Record<string, unknown>) {
  return {
    ...docsComponents,
    ComponentPreview,
    BadgePropsDoc,
    ButtonPropsDoc,
    ColorPalette,
    ColorTokenTable,
    TypographyScale,
    FontWeightPreview,
    FontFamilyPreview,
    IntroDemo,
    ButtonDemo,
    ButtonVariantDemo,
    ButtonSizeDemo,
    ButtonIntentDemo,
    ButtonRoundedDemo,
    ButtonDisabledDemo,
    BadgeDemo,
    BadgeVariantDemo,
    BadgeIntentDemo,
    BadgeSizeDemo,
    BadgeDotDemo,
    CheckboxDemo,
    CheckboxIntentDemo,
    CheckboxSizeDemo,
    DropdownDemo,
    DropdownSizeDemo,
    SwitchDemo,
    SwitchIntentDemo,
    SwitchSizeDemo,
    TabDemo,
    TabVerticalDemo,
    TextDemo,
    TextSizeDemo,
    TextWeightDemo,
    TextIntentDemo,
    TextFieldDemo,
    TextFieldVariantDemo,
    TextFieldStatusDemo,
    TextFieldMultilineDemo,
    ...components,
  };
}
