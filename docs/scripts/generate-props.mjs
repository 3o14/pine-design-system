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

  console.log("Generated props: badge.json, button.json, checkbox.json");
}

main();
