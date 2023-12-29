import { RefObject } from "react";
export type RippleConfig = {
    color?: React.CSSProperties["color"];
    duration?: number;
    trigger?: "click" | "mousedown" | "pointerdown";
    alphaMin?: number;
};
declare const useRipple: <T extends HTMLElement = HTMLButtonElement>(config?: RippleConfig) => RefObject<T>;
export default useRipple;
