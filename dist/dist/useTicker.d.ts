export interface TickerOptions {
    immediate?: "mounted" | "first" | "every" | "all" | "none" | true | false;
    callAtFirst?: boolean;
    pauseAtFirst?: boolean;
    duration?: number;
    delay?: number;
}
export interface Ticker {
    readonly tick: number;
    readonly status: "off" | "on";
    readonly pause: () => void;
    readonly resume: () => void;
    readonly reset: () => void;
    readonly delayedPause: (delay: number) => void;
    readonly delayedResume: (delay: number) => void;
}
/**
 * @libVersion 1.2.2
 */
interface UseTicker {
    (fn: (tick: number) => void, options?: TickerOptions): Ticker;
    (fn: (tick: number) => void, duration?: number, options?: TickerOptions): Ticker;
}
declare const useTicker: UseTicker;
export default useTicker;
