/// <reference types="react" />
declare function useDimensions(): (import("react").MutableRefObject<null> | {
    width: number;
    height: number;
    top: number;
    left: number;
})[];
export default useDimensions;
