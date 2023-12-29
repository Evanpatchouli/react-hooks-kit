interface TickerOptions {
    immediate?: "mounted" | "first" | "every" | "all" | "none" | true | false;
    callAtFirst?: boolean;
    pauseAtFirst?: boolean;
    duration?: number;
    delay?: number;
}
interface Ticker {
    readonly tick: number;
    readonly status: "off" | "on";
    readonly pause: () => void;
    readonly resume: () => void;
    readonly reset: () => void;
    readonly delayedPause: (delay: number) => void;
    readonly delayedResume: (delay: number) => void;
}
/**
 * ## UseTicker API
 * `@desc` - Create a ticker that ticks every `${duration}` milliseconds.
 * ### Arguments
 * - `fn` - the function to be called every tick
 * - `duration` - the duration of each tick
 * - `options` - the options to be passed
 * - `options.immediate` whether to call the function immediately
 *   - `"mounted"` - call the function immediately when the component is mounted
 *   - `"every"` - call the function immediately at every tick
 *   - `"all"` - call the function immediately when the component is mounted and at every tick
 *   - `"none"` - do not call the function immediately any time
 *   - `true` - same as 'all'
 *   - `false` - same as 'none'
 *   - `undefined` - same as 'none'
 * - `options.callAtFirst` - whether to call the function at the first tick
 * - `options.pauseAtFirst` - whether to pause tick initially
 * - `options.duration` - the duration of each tick
 */
interface UseTicker {
    (fn: (tick: number) => any, options?: TickerOptions): Ticker;
    (fn: (tick: number) => any, duration?: number, options?: TickerOptions): Ticker;
}
declare const useTicker: UseTicker;
export default useTicker;
