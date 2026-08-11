import { type RefObject } from "react";
declare function useDimensions(): [
    RefObject<HTMLDivElement | null>,
    {
        width: number;
        height: number;
        top: number;
        left: number;
    }
];
export default useDimensions;
