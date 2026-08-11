interface SafeAreaInsets {
    top: number;
    right: number;
    bottom: number;
    left: number;
}
/**
 * @hook useSafeArea
 * @availability iOS Safari, Android Chrome
 */
export default function useSafeArea(): SafeAreaInsets;
export {};
