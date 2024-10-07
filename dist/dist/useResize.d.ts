import { RefObject, DependencyList } from "react";
export type useResizeOptions = {
    callback?: (size: {
        width: number;
        height: number;
    }) => void;
    target?: string | RefObject<HTMLElement>;
};
declare function useResize({ callback, target }?: useResizeOptions, deps?: DependencyList): {
    width: number;
    height: number;
};
export default useResize;
