/**
 * ts-morph로 TSDoc 파싱 후 Props JSON 생성.
 * next build 전에 실행됩니다.
 */
import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { Project } from "ts-morph";

const __dirname = dirname(fileURLToPath(import.meta.url));

const BADGE_CODE = `
import type { ReactNode } from "react"

export interface BadgeProps {
  /**
   * Badge의 시각적 강조 수준을 결정합니다.
   * @default "solid"
   */
  variant?: "solid" | "outline" | "subtle" | "weak";
  /**
   * Badge의 의미적 색상을 결정합니다.
   * @default "primary"
   */
  intent?: "primary" | "secondary" | "success" | "warning" | "danger" | "neutral";
  /**
   * Badge의 크기를 결정합니다.
   * @default "medium"
   */
  size?: "small" | "medium" | "large" | "xlarge";
  /**
   * Badge 모서리의 곡률을 결정합니다.
   * @default "medium"
   */
  rounded?: "small" | "medium" | "large";
  /**
   * Badge 앞에 상태 표시 dot을 노출합니다.
   * @default false
   */
  showDot?: boolean;
  /** Badge에 표시할 내용입니다. */
  children: ReactNode;
}
`;

const DIALOG_CODE = `
export interface DialogAction {
  label: string;
  onClick: () => void;
  variant?: "solid" | "outline" | "ghost" | "weak";
  intent?: "primary" | "secondary" | "success" | "warning" | "danger" | "neutral";
  disabled?: boolean;
}

export interface DialogProps {
  /**
   * Dialog의 열림/닫힘 상태를 제어합니다.
   */
  open: boolean;
  /**
   * 열림 상태가 변경될 때 호출되는 콜백입니다.
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * Dialog가 닫힐 때 추가로 호출되는 콜백입니다.
   */
  onClose?: () => void;
  /**
   * Dialog 헤더에 표시되는 제목 텍스트입니다.
   */
  title?: string;
  /**
   * 제목 아래에 표시되는 설명 텍스트입니다.
   */
  description?: string;
  /**
   * Dialog의 최대 너비를 결정합니다.
   * @default "medium"
   */
  size?: "small" | "medium" | "large" | "xlarge" | "full";
  /**
   * Dialog 모서리의 곡률을 결정합니다.
   * @default "medium"
   */
  rounded?: "small" | "medium" | "large";
  /**
   * Dialog 하단에 표시되는 액션 버튼 목록입니다.
   */
  actions?: DialogAction[];
  /**
   * actions 대신 완전히 커스텀된 하단 영역을 렌더링할 때 사용합니다.
   */
  footer?: React.ReactNode;
  /**
   * 헤더 우측 상단의 닫기(X) 버튼 표시 여부를 결정합니다.
   * @default true
   */
  showCloseButton?: boolean;
  /**
   * 오버레이(배경) 클릭 시 Dialog를 닫을지 결정합니다.
   * @default true
   */
  closeOnOverlayClick?: boolean;
  /**
   * Escape 키 입력 시 Dialog를 닫을지 결정합니다.
   * @default true
   */
  closeOnEscape?: boolean;
  /**
   * Dialog 본문에 표시할 콘텐츠입니다.
   */
  children: React.ReactNode;
}
`;

const TEXT_CODE = `
export interface TextProps {
  /**
   * 렌더링할 HTML 요소를 지정합니다.
   * @default "p"
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div" | "label" | "li" | "ul" | "ol";
  /**
   * 텍스트의 크기를 결정합니다.
   * @default "medium"
   */
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge" | "display-small" | "display-medium" | "display-large";
  /**
   * 폰트 두께를 결정합니다.
   * @default "regular"
   */
  weight?: "regular" | "medium" | "semibold" | "bold";
  /**
   * 텍스트의 색상 의도를 결정합니다.
   * @default "inherit"
   */
  intent?: "inherit" | "primary" | "secondary" | "success" | "warning" | "danger" | "neutral";
  /**
   * 텍스트 정렬을 결정합니다.
   * @default "left"
   */
  align?: "left" | "center" | "right";
  /**
   * true로 설정하면 텍스트가 컨테이너를 넘칠 때 ...으로 잘라냅니다.
   * @default false
   */
  truncate?: boolean;
}
`;

const TAB_CODE = `
export interface TabItem {
  value: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabProps {
  /**
   * 탭 목록을 정의하는 필수 prop입니다.
   */
  tabs: TabItem[];
  /**
   * 현재 활성화된 탭의 값 (controlled).
   */
  value?: string;
  /**
   * 초기에 활성화할 탭의 값 (uncontrolled).
   */
  defaultValue?: string;
  /**
   * 활성 탭이 변경될 때 호출되는 콜백 함수입니다.
   */
  onChange?: (value: string) => void;
  /**
   * 탭 인디케이터의 색상 의도를 결정합니다.
   * @default "primary"
   */
  intent?: "primary" | "secondary" | "success" | "warning" | "danger" | "neutral";
  /**
   * 탭 목록의 배치 방향을 결정합니다.
   * @default "horizontal"
   */
  orientation?: "horizontal" | "vertical";
}
`;

const SWITCH_CODE = `
export interface SwitchProps {
  /**
   * Switch의 켜짐/꺼짐 상태를 제어합니다. controlled 컴포넌트가 됩니다.
   */
  checked?: boolean;
  /**
   * Switch의 초기 상태를 설정합니다. uncontrolled 방식으로 사용할 때 씁니다.
   */
  defaultChecked?: boolean;
  /**
   * Switch 상태가 변경될 때 호출되는 콜백 함수입니다.
   */
  onCheckedChange?: (checked: boolean) => void;
  /**
   * Switch 트랙의 색상 의도를 결정합니다.
   * @default "primary"
   */
  intent?: "primary" | "secondary" | "success" | "warning" | "danger" | "neutral";
  /**
   * Switch의 크기를 결정합니다.
   * @default "medium"
   */
  size?: "small" | "medium" | "large" | "xlarge";
  /**
   * Switch 옆에 표시되는 라벨 텍스트입니다.
   */
  label?: string;
  /**
   * Switch를 비활성화합니다.
   * @default false
   */
  disabled?: boolean;
  /**
   * Switch를 읽기 전용으로 만듭니다.
   * @default false
   */
  readOnly?: boolean;
}
`;

const DROPDOWN_CODE = `
export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface DropdownProps {
  /**
   * 드롭다운에서 선택할 수 있는 옵션 목록입니다.
   */
  options: DropdownOption[];
  /**
   * 현재 선택된 값 (controlled).
   */
  value?: string;
  /**
   * 초기 선택값 (uncontrolled).
   */
  defaultValue?: string;
  /**
   * 선택된 값이 변경될 때 호출되는 콜백 함수입니다.
   */
  onValueChange?: (value: string | null) => void;
  /**
   * 아무 옵션도 선택되지 않은 상태에서 보여줄 플레이스홀더 텍스트입니다.
   * @default "Select an option"
   */
  placeholder?: string;
  /**
   * 드롭다운의 크기를 결정합니다.
   * @default "medium"
   */
  size?: "small" | "medium" | "large";
  /**
   * 드롭다운 모서리의 곡률을 결정합니다.
   * @default "medium"
   */
  rounded?: "small" | "medium" | "large";
  /**
   * 드롭다운의 색상 의도를 결정합니다.
   * @default "primary"
   */
  intent?: "primary" | "secondary" | "success" | "warning" | "danger" | "neutral";
  /**
   * true로 설정하면 부모 컨테이너의 전체 너비를 채웁니다.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * 드롭다운을 비활성화합니다.
   * @default false
   */
  disabled?: boolean;
}
`;

const CHECKBOX_CODE = `
export interface CheckboxProps {
  /**
   * Checkbox의 체크 상태를 제어합니다. 이 prop을 사용하면 controlled 컴포넌트가 됩니다.
   */
  checked?: boolean;
  /**
   * Checkbox의 초기 체크 상태를 설정합니다. uncontrolled 방식으로 사용할 때 씁니다.
   */
  defaultChecked?: boolean;
  /**
   * 체크 상태가 변경될 때 호출되는 콜백 함수입니다.
   */
  onCheckedChange?: (checked: boolean) => void;
  /**
   * Checkbox의 색상 의도를 결정합니다.
   * @default "primary"
   */
  intent?: "primary" | "secondary" | "success" | "warning" | "danger" | "neutral";
  /**
   * Checkbox의 크기를 결정합니다.
   * @default "medium"
   */
  size?: "small" | "medium" | "large" | "xlarge";
  /**
   * Checkbox 옆에 표시되는 라벨 텍스트입니다. 라벨 클릭 시 Checkbox가 토글됩니다.
   */
  label?: string;
  /**
   * Checkbox를 비활성화합니다.
   * @default false
   */
  disabled?: boolean;
  /**
   * 체크 상태를 읽기 전용으로 만듭니다.
   * @default false
   */
  readOnly?: boolean;
  /**
   * 폼 유효성 검사 시 필수 입력 항목으로 표시합니다.
   * @default false
   */
  required?: boolean;
}
`;

const BUTTON_CODE = `
import type { ReactNode } from "react"

export interface ButtonProps {
  /**
   * 버튼의 시각적 강조 수준을 결정합니다.
   * @default "solid"
   */
  variant?: "solid" | "outline" | "ghost" | "weak";
  /**
   * 버튼의 의미적 목적을 색상으로 표현합니다.
   * @default "primary"
   */
  intent?: "primary" | "secondary" | "success" | "warning" | "danger" | "neutral";
  /**
   * 버튼의 크기를 결정합니다.
   * @default "medium"
   */
  size?: "small" | "medium" | "large" | "xlarge";
  /**
   * 버튼 모서리의 곡률을 결정합니다.
   * @default "medium"
   */
  rounded?: "small" | "medium" | "large";
  /**
   * true로 설정하면 부모 컨테이너의 전체 너비를 채웁니다.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * 버튼을 비활성화합니다.
   * @default false
   */
  disabled?: boolean;
  /** 버튼에 표시할 내용입니다. */
  children: ReactNode;
}
`;

function extractDefault(jsdocTags) {
  const def = jsdocTags.find((t) => t.getTagName() === "default");
  return def?.getComment()?.toString().trim();
}

function parseInterface(code, exportName) {
  const project = new Project({
    compilerOptions: { target: 99 },
    skipAddingFilesFromTsConfig: true,
  });
  const source = project.createSourceFile("$.ts", code, { overwrite: true });
  const iface = source.getInterfaceOrThrow(exportName);
  const props = [];

  for (const member of iface.getProperties()) {
    const jsdoc = member.getJsDocs()[0];
    const tags = jsdoc?.getTags() ?? [];
    const desc = jsdoc?.getDescription().trim();
    const defaultVal = extractDefault(tags);
    const typeNode = member.getTypeNode();
    const type = typeNode?.getText() ?? "unknown";
    const optional = member.hasQuestionToken();

    props.push({
      name: member.getName(),
      type,
      description: desc || undefined,
      default: defaultVal,
      required: !optional,
    });
  }

  return props;
}

function main() {
  const badgeProps = parseInterface(BADGE_CODE, "BadgeProps");
  const buttonProps = parseInterface(BUTTON_CODE, "ButtonProps");
  const checkboxProps = parseInterface(CHECKBOX_CODE, "CheckboxProps");
  const dialogProps = parseInterface(DIALOG_CODE, "DialogProps");
  const dropdownProps = parseInterface(DROPDOWN_CODE, "DropdownProps");
  const switchProps = parseInterface(SWITCH_CODE, "SwitchProps");
  const tabProps = parseInterface(TAB_CODE, "TabProps");
  const textProps = parseInterface(TEXT_CODE, "TextProps");

  const outputDir = join(__dirname, "../content/props");
  mkdirSync(outputDir, { recursive: true });

  writeFileSync(
    join(outputDir, "badge.json"),
    JSON.stringify(badgeProps, null, 2)
  );
  writeFileSync(
    join(outputDir, "button.json"),
    JSON.stringify(buttonProps, null, 2)
  );
  writeFileSync(
    join(outputDir, "checkbox.json"),
    JSON.stringify(checkboxProps, null, 2)
  );
  writeFileSync(
    join(outputDir, "dialog.json"),
    JSON.stringify(dialogProps, null, 2)
  );
  writeFileSync(
    join(outputDir, "dropdown.json"),
    JSON.stringify(dropdownProps, null, 2)
  );
  writeFileSync(
    join(outputDir, "switch.json"),
    JSON.stringify(switchProps, null, 2)
  );
  writeFileSync(
    join(outputDir, "tab.json"),
    JSON.stringify(tabProps, null, 2)
  );
  writeFileSync(
    join(outputDir, "text.json"),
    JSON.stringify(textProps, null, 2)
  );

  console.log("Generated props: badge.json, button.json, checkbox.json, dialog.json, dropdown.json, switch.json, tab.json, text.json");
}

main();
