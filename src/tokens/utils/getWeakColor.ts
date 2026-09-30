/**
 * 색상을 다른 색상과 혼합하여 옅은 톤의 weak 색상을 생성합니다.
 *
 * 라이트 테마(mixTarget: "white")에서 잘 보이던 조합도, 다크 테마에서
 * 그대로 흰색과 섞으면 배경이 거의 흰색에 가까워져 밝은 텍스트와의
 * 대비가 무너진다. 다크 테마에서는 mixTarget으로 "black"을 넘겨
 * 어두운 방향으로 섞어야 한다.
 *
 * @param color - 원본 색상 (hex 또는 CSS 변수)
 * @param percent - 원본 색상의 비율 (0-100, 기본값: 25)
 * @param mixTarget - 혼합 대상 색상 (기본값: "white", 다크 테마는 "black" 권장)
 * @returns color-mix CSS 함수 문자열
 * @example
 * getWeakColor("#8b5cf6", 25) // "color-mix(in srgb, #8b5cf6 25%, white)"
 * getWeakColor("#8b5cf6", 35, "black") // "color-mix(in srgb, #8b5cf6 35%, black)"
 */
export const getWeakColor = (
	color: string,
	percent: number = 25,
	mixTarget: string = "white"
): string => {
	return `color-mix(in srgb, ${color} ${percent}%, ${mixTarget})`;
};
