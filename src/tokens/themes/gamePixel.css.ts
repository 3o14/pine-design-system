import { createVar, fallbackVar } from "@vanilla-extract/css";

/**
 * Game theme pixel frame with stepped corners.
 *
 * The frame is drawn with four offset box-shadows (one per side) instead of a border, so
 * border-radius can't round it. Corners are stepped instead:
 * - the trim var shortens each side at its ends (negative spread)
 * - the corner var paints the frame color into the element's own corner cells (background-image)
 *
 * clip-path isn't used on purpose: it also clips hit testing, which would break the
 * pressed-state hit area that Button extends past its box.
 */

/** Size of one pixel step */
const PIXEL = "4px";

/** How far each side is shortened at both ends: -4px fills the corners, 0 leaves a one-cell notch, 4px steps twice */
const pixelTrimVar = createVar();
/** Size of the frame-colored cell painted inside each corner of the element */
const pixelCornerVar = createVar();

const trim = fallbackVar(pixelTrimVar, "0px");
const corner = fallbackVar(pixelCornerVar, "0px");

/** Corner shape per `rounded` value. Spread into a game theme selector */
export const pixelRoundedVars = {
	small: { vars: { [pixelTrimVar]: `-${PIXEL}`, [pixelCornerVar]: "0px" } },
	medium: { vars: { [pixelTrimVar]: "0px", [pixelCornerVar]: "0px" } },
	large: { vars: { [pixelTrimVar]: PIXEL, [pixelCornerVar]: PIXEL } },
} as const;

/** Four-sided pixel frame around the element */
export const createPixelFrame = (color: string) =>
	[
		`calc(-${PIXEL} - ${trim}) 0 0 calc(-1 * ${trim}) ${color}`,
		`calc(${PIXEL} + ${trim}) 0 0 calc(-1 * ${trim}) ${color}`,
		`0 calc(${PIXEL} + ${trim}) 0 calc(-1 * ${trim}) ${color}`,
		`0 calc(-${PIXEL} - ${trim}) 0 calc(-1 * ${trim}) ${color}`,
	].join(", ");

/**
 * Pixel frame plus a back plate: the same shape shifted one step down-right.
 * Only the element and its right/bottom sides are repeated, since the shifted left/top sides stay hidden
 */
export const createPixelFrameRaised = (color: string) =>
	[
		createPixelFrame(color),
		`${PIXEL} ${PIXEL} 0 0 ${color}`,
		`calc(2 * ${PIXEL} + ${trim}) ${PIXEL} 0 calc(-1 * ${trim}) ${color}`,
		`${PIXEL} calc(2 * ${PIXEL} + ${trim}) 0 calc(-1 * ${trim}) ${color}`,
	].join(", ");

/** Paints the inner corner cells of a stepped frame. Uses background-image, so background-color changes keep it */
export const createPixelCornerFill = (color: string) => ({
	backgroundImage: Array(4).fill(`linear-gradient(${color}, ${color})`).join(", "),
	backgroundSize: `${corner} ${corner}`,
	backgroundPosition: "0 0, 100% 0, 0 100%, 100% 100%",
	backgroundRepeat: "no-repeat",
	// Shadows are laid out from the border box, so the cells must ignore the transparent border
	backgroundOrigin: "border-box",
});
