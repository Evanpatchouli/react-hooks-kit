import React from "react";
export type Render = {
    id: string;
    render: (id: string, name: string, data: any, ids: string[]) => React.ReactNode;
    containerStyle?: Partial<CSSStyleDeclaration>;
    containerClassName?: string;
};
export type Step = {
    ids?: string[];
    name?: string;
    data?: any;
    renders?: Render[];
};
export interface Guider {
    start: () => void;
    stop: () => void;
    next: () => void;
    last: () => void;
    go: (step: number) => void;
    step: number;
    options?: {
        steps?: Step[];
        callback?: StepCallback;
        config?: {
            containerStyle?: Partial<CSSStyleDeclaration>;
            containerClassName?: string;
            maskConfig?: MaskConfig;
        };
    };
    register: (id: string) => void;
    unregister: (id: string) => void;
}
export type MaskConfig = {
    backgroundColor?: string;
    opacity?: number;
    zIndex?: number;
    pointerEvents?: "none !important" | "auto" | React.CSSProperties["pointerEvents"];
};
export type StepCallback = (step: number, stepConfig: Step) => void;
declare function useGuide(steps: Step[], callback?: StepCallback, config?: {
    containerStyle?: Partial<CSSStyleDeclaration>;
    containerClassName?: string;
    maskConfig?: MaskConfig;
}): [number, Guider];
export default useGuide;
interface TargetProps {
    id: string;
    guider: Guider;
    children: React.ReactNode;
}
export declare const Target: React.FC<TargetProps>;
