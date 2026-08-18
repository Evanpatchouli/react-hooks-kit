import { type RefObject } from "react";
declare function useDimensions(): [
    RefObject<HTMLDivElement>,
    {
        width: number;
        height: number;
        top: number;
        left: number;
    }
];
export default useDimensions;
