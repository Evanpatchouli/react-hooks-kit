import { useRef, useEffect } from "react";

/**
 * ### useRaf
 * `useRaf` is a custom React Hook that uses the browser's `requestAnimationFrame` API to execute a callback function on each animation frame. This hook is primarily used for creating smooth animations or continuous dynamic updates.
 * 
 * ---
 * #### Parameters
 * - `callback` - A callback function that is called on each animation frame. This function receives a parameter that represents the time from the start of the page load to when this callback is executed.
 * 
 * ---
 * #### Return
 * - `void`
 * 
 * ---
 * #### Example
 * ```tsx
 * import { useRaf } from "react-use";
 * const Demo = () => {
 *  useRaf((time) => {
 *   console.log(time);
 * });
 * return null;
 * };
 * ```
 * 
 * ---
 * #### FAQs
 * - What is `requestAnimationFrame`?
 * + `requestAnimationFrame` is a function provided by the browser that is used to call a specific function before the next redraw — this is the best time to perform animations.
 */
const useRaf = (callback: FrameRequestCallback): void => {
  const callbackRef = useRef(callback);
  const frameRef = useRef<number>();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const loop = (time: number) => {
      frameRef.current = requestAnimationFrame(loop);
      callbackRef.current(time);
    };
    frameRef.current = requestAnimationFrame(loop);
    // 在组件卸载时取消动画帧
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);
};

export default useRaf;