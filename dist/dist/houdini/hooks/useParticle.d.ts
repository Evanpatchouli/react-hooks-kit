/// <reference types="react" />
export type ParticleConfig = {
    color?: React.CSSProperties["color"];
    duration?: number;
    trigger?: "click" | "mousedown" | "pointerdown";
    num?: number;
    size?: number;
};
declare function useParticle<T extends HTMLElement = HTMLButtonElement>(config?: ParticleConfig, enable?: boolean): import("react").RefObject<T>;
export default useParticle;
