/**
 * Shared floating-ui placement primitives, reused by every component that positions a
 * portalled popup relative to a trigger (Tooltip, Dropdown, ...) so their positioning
 * props stay in lockstep as Base UI's Positioner API evolves.
 */
export type Side = "top" | "bottom" | "left" | "right";
export type Align = "start" | "center" | "end";
