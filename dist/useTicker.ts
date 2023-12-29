import { useEffect, useState, useRef, useCallback, useMemo } from "react";

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
  (
    fn: (tick: number) => any,
    duration?: number,
    options?: TickerOptions
  ): Ticker;
}

const useTicker: UseTicker = (
  fn: (tick: number) => any,
  durationOrOptions?: number | TickerOptions,
  options?: TickerOptions
) => {
  let duration: number | undefined;
  if (typeof durationOrOptions === "number") {
    duration = durationOrOptions;
  } else if (typeof durationOrOptions === "object") {
    options = durationOrOptions;
  }

  const _options = useMemo(() => {
    const immediate =
      typeof options?.immediate === "boolean"
        ? options.immediate
          ? "all"
          : "none"
        : options?.immediate ?? "none";
    const runAtFirst = options?.callAtFirst || true;
    const pauseAtFirst = options?.pauseAtFirst || false;
    const _duration = options?.duration ?? duration;

    return { immediate, runAtFirst, pauseAtFirst, duration: _duration };
  }, [options]);

  if (_options.duration !== undefined && _options.duration >= 0) {
    duration = _options.duration;
  }

  const [tick, setTick] = useState(0);
  const [isPaused, setIsPaused] = useState(_options.pauseAtFirst || false);
  const status: "off" | "on" = isPaused ? "off" : "on";
  const startDelay = 0;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const pause = useCallback(() => setIsPaused(true), []);
  const resume = useCallback(() => {
    setIsPaused(false);
    if ("first" === _options.immediate && tick === 0) {
      return fn(tick);
    }
  }, [_options.immediate, tick, fn]);
  const reset = () => setTick(0);

  const mountedRef = useRef<boolean>(false);

  useEffect(() => {
    if (
      !mountedRef.current &&
      ["mounted", "all"].includes(_options.immediate)
    ) {
      fn(tick);
    }
    mountedRef.current = true;
  }, [tick]);

  const delayedPause = (delay: number) => {
    setTimeout(() => {
      setIsPaused(true);
    }, delay);
  };

  const delayedResume = (delay: number) => {
    setTimeout(() => {
      setIsPaused(false);
    }, delay);
  };

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setTick((pre) => pre + 1);
        if (_options.runAtFirst || tick === 0) {
          fn(tick);
        }
      }, duration ?? 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, tick]);

  useEffect(() => {
    setTimeout(() => {
      if (options?.pauseAtFirst) {
        pause();
      } else {
        if (_options.immediate) {
          fn(tick);
        }
        resume();
      }
    }, startDelay);
  }, [startDelay]);

  return {
    tick,
    status,
    pause,
    resume,
    reset,
    delayedPause,
    delayedResume,
  } as const;
};

export default useTicker;
