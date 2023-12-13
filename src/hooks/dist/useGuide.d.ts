/// <reference types="react" />
type Render = {
    id: string;
    render: (id: string, name: string, data: any, ids: string[]) => React.ReactNode;
    containerStyle?: Partial<CSSStyleDeclaration>;
    containerClassName?: string;
};
type Step = {
    ids?: string[];
    name?: string;
    data?: any;
    renders?: Render[];
};
interface Guider {
    start: () => void;
    stop: () => void;
    next: () => void;
    last: () => void;
    go: (step: number) => void;
}
type MaskConfig = {
    backgroundColor?: string;
    opacity?: number;
    zIndex?: number;
    pointerEvents?: "none" | "auto";
};
type StepCallback = (step: number, stepConfig: Step) => void;
declare function useGuide(steps: Step[], callback?: StepCallback, config?: {
    containerStyle?: Partial<CSSStyleDeclaration>;
    containerClassName?: string;
    maskConfig?: MaskConfig;
}): [number, Guider];
export default useGuide;
