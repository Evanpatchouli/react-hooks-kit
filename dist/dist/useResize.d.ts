import { RefObject } from "react";
declare function useResize(callback?: () => void, ref?: RefObject<HTMLElement>): {
    width: number;
    height: number;
};
export default useResize;
