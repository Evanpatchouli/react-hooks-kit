interface MousePosition {
    x: number | null;
    y: number | null;
}
declare function useMousePosition(trigger?: "mousemove" | "mousedown"): MousePosition;
export default useMousePosition;
