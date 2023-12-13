interface SafeArea {
    top: number;
    right: number;
    bottom: number;
    left: number;
}
/**
 * @hook useSafeArea
 * @availability iOS Safari, Android Chrome
 * @css
 * ```css
 * body {
 *   --safe-area-inset-top: env(safe-area-inset-top);
 *   --safe-area-inset-right: env(safe-area-inset-right);
 *   --safe-area-inset-bottom: env(safe-area-inset-bottom);
 *   --safe-area-inset-left: env(safe-area-inset-left);
 * }
 * ```
 */
export default function useSafeArea(): SafeArea;
export {};
