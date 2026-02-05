import { useEffect, useRef, useState, useCallback, useMemo } from "react";

/* ---------------------------------- types --------------------------------- */

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
  (
    fn: (tick: number) => void,
    duration?: number,
    options?: TickerOptions,
  ): Ticker;
}

/* -------------------------------------------------------------------------- */
/*                                implementation                              */
/* -------------------------------------------------------------------------- */

const useTicker: UseTicker = (
  fn: (tick: number) => void,
  durationOrOptions?: number | TickerOptions,
  options?: TickerOptions,
) => {
  /* ------------------------- normalize arguments ------------------------- */

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
        : (options?.immediate ?? "none");

    return {
      immediate,
      callAtFirst: options?.callAtFirst ?? true,
      pauseAtFirst: options?.pauseAtFirst ?? false,
      duration: options?.duration ?? duration ?? 1000,
      delay: options?.delay ?? 0,
    };
  }, [options, duration]);

  /* ----------------------------- state / refs ----------------------------- */

  const [tick, setTick] = useState(0);
  const [paused, setPaused] = useState(_options.pauseAtFirst);

  const tickRef = useRef(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const fnRef = useRef(fn);

  fnRef.current = fn;

  const status: "off" | "on" = paused ? "off" : "on";

  /* ------------------------------- helpers ------------------------------- */

  const clear = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  /* ----------------------------- core ticker ----------------------------- */

  const schedule = useCallback(() => {
    clear();

    timerRef.current = setTimeout(() => {
      tickRef.current += 1;

      const next = tickRef.current;
      setTick(next);

      if (_options.callAtFirst || next > 0) {
        fnRef.current(next);
      }

      if (!paused) {
        schedule(); // recursion (NO interval, NO race)
      }
    }, _options.duration);
  }, [_options.duration, _options.callAtFirst, paused, clear]);

  /* ------------------------------ controls ------------------------------- */

  const pause = useCallback(() => {
    setPaused(true);
    clear();
  }, [clear]);

  const resume = useCallback(() => {
    setPaused(false);
  }, []);

  const reset = useCallback(() => {
    tickRef.current = 0;
    setTick(0);
  }, []);

  const delayedPause = useCallback(
    (delay: number) => {
      setTimeout(pause, delay);
    },
    [pause],
  );

  const delayedResume = useCallback(
    (delay: number) => {
      setTimeout(resume, delay);
    },
    [resume],
  );

  /* ------------------------------ lifecycle ------------------------------ */

  // start / resume
  useEffect(() => {
    if (!paused) {
      schedule();
    }
    return clear;
  }, [paused, schedule, clear]);

  // immediate behaviors
  useEffect(() => {
    const runImmediate = () => {
      if (_options.immediate === "mounted" || _options.immediate === "all") {
        fnRef.current(0);
      }
    };

    const id = setTimeout(runImmediate, _options.delay);

    return () => clearTimeout(id);
  }, [_options.immediate, _options.delay]);

  /* ----------------------------------------------------------------------- */

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
