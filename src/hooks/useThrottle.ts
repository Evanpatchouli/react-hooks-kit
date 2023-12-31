import { useMemo } from "react";

interface ThrottleOptions<R = void> {
  leading?: boolean;
  trailing?: boolean;
  callback?: (result: R) => void;
}

function throttle<R = void>(
  fn: (args: any[]) => R,
  interval: number = 200,
  options: ThrottleOptions = { leading: true, trailing: false }
) {
  // 1.记录上一次的开始时间
  const { leading, trailing, callback } = options;
  let lastTime = 0;
  let timer: NodeJS.Timeout | null = null;

  // 2.事件触发时, 真正执行的函数
  const _throttle = function (...args: any[]) {
    return new Promise((resolve, reject) => {
      // 2.1.获取当前事件触发时的时间
      const nowTime = new Date().getTime();
      if (!lastTime && !leading) lastTime = nowTime;

      // 2.2.使用当前触发的时间和之前的时间间隔以及上一次开始的时间, 计算出还剩余多长事件需要去触发函数
      const remainTime = interval - (nowTime - lastTime);
      if (remainTime <= 0) {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }

        // 2.3.真正触发函数
        // @ts-ignore
        const result = fn.apply(this, args);
        // @ts-ignore
        if (callback) callback(result);
        resolve(result);
        // 2.4.保留上次触发的时间
        lastTime = nowTime;
        return;
      }

      if (trailing && !timer) {
        timer = setTimeout(() => {
          timer = null;
          lastTime = !leading ? 0 : new Date().getTime();
          // @ts-ignore
          const result = fn.apply(this, args);
          // @ts-ignore
          if (callback) callback(result);
          resolve(result);
        }, remainTime);
      }
    });
  };

  _throttle.cancel = function () {
    if (timer) clearTimeout(timer);
    timer = null;
    lastTime = 0;
  };

  return _throttle;
}

const emptyFn = () => {};

export default function useThrottle<R = void>(
  fn: (args: any[]) => R,
  interval: number = 200,
  options: ThrottleOptions = { leading: true, trailing: false }
) {
  if (typeof fn !== "function") {
    throw new Error("fn must be a function");
  }
  if (typeof interval !== "number") {
    throw new Error("interval must be a number");
  }
  if (typeof options !== "object") {
    throw new Error("options must be a object");
  }
  if (options.leading === false && options.trailing === false) {
    throw new Error(
      "options.leading and options.trailing cannot be false at the same time"
    );
  }
  if (options.callback && typeof options.callback !== "function") {
    throw new Error("options.callback must be a function");
  }
  const throttleFn = useMemo(() => {
    if (interval < 0) {
      return emptyFn as any as ReturnType<typeof throttle<R>>;
    }
    if (interval === 0) {
      return fn as any as ReturnType<typeof throttle<R>>;
    }
    return throttle(fn, interval, options);
  }, [fn, interval, options]);

  return throttleFn;
}
