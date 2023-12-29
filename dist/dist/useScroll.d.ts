interface ScrollPosition {
    x: number;
    y: number;
}
declare const useScroll: (callback?: ((position: ScrollPosition) => void) | undefined) => ScrollPosition;
export default useScroll;
