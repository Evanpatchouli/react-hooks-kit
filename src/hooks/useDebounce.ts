import { useMemo } from "react";

export function debounce<R = void>(
  fn: (args: any[]) => R,
  delay: number = 200,
  immediate: boolean = false,
  callback?: (result: ReturnType<typeof fn>) => void
) {
  // 1.定义一个定时器, 保存上一次的定时器
  let timer: NodeJS.Timeout | null = null;
  let isInvoke = false;

  // 2.真正执行的函数
  const _debounce = function (...args: any[]) {
    return new Promise((resolve, reject) => {
      // 取消上一次的定时器
      if (timer) clearTimeout(timer);

      // 判断是否需要立即执行
      if (immediate && !isInvoke) {
        // @ts-ignore
        const result = fn.apply(this, args);
        if (callback) callback(result);
        resolve(result);
        isInvoke = true;
      } else {
        // 延迟执行
        timer = setTimeout(() => {
          // 外部传入的真正要执行的函数
          // @ts-ignore
          const result = fn.apply(this, args);
          if (callback) callback(result);
          resolve(result);
          isInvoke = false;
          timer = null;
        }, delay);
      }
    });
  };

  // 封装取消功能
  _debounce.cancel = function () {
    if (timer) clearTimeout(timer);
    timer = null;
    isInvoke = false;
  };

  return _debounce;
}

const emptyFn = () => {};

export default function useDebounce<R = void>(
  fn: (args: any[]) => R,
  delay: number = 200,
  immediate: boolean = false,
  callback?: (result: ReturnType<typeof fn>) => void
) {
  if (typeof fn !== "function") {
    throw new Error("fn must be a function");
  }
  if (typeof delay !== "number") {
    throw new Error("delay must be a number");
  }
  const debounceFn = useMemo(() => {
    if (delay < 0) {
      return emptyFn as ReturnType<typeof debounce<R>>;
    }
    if (delay === 0) {
      return fn as any as ReturnType<typeof debounce<R>>;
    }
    return debounce(fn, delay, immediate, callback);
  }, [fn, delay, immediate, callback]);

  return debounceFn;
}
