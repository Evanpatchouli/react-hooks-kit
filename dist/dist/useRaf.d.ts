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
declare const useRaf: (callback: FrameRequestCallback) => void;
export default useRaf;
