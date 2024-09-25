import { RefObject } from "react";
declare function useResize(callback?: (size: {
    width: number;
    height: number;
}) => void, ref?: RefObject<HTMLElement>): {
    width: number;
    height: number;
};
export default useResize;
