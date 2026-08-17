import { useState, useEffect, useCallback } from "react";

interface SafeAreaInsets {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

// 防抖处理，避免 resize 频繁触发
function debounce<T extends (...args: any[]) => void>(fn: T, delay: number) {
  let timer: ReturnType<typeof setTimeout> | undefined;
  const debounced = ((...args: Parameters<T>) => {
    if (timer !== undefined) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => fn(...args), delay);
  }) as T & { cancel: () => void };
  debounced.cancel = () => {
    if (timer !== undefined) {
      clearTimeout(timer);
      timer = undefined;
    }
  };
  return debounced;
}

/**
 * @hook useSafeArea
 * @availability iOS Safari, Android Chrome
 */
export default function useSafeArea(): SafeAreaInsets {
  const [insets, setInsets] = useState<SafeAreaInsets>({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  });

  const compute = useCallback(() => {
    // 方案：动态创建 div 测量（不依赖 CSS 变量）+ 监听 resize
    const div = document.createElement("div");
    div.style.cssText = `
      position: fixed;
      padding: env(safe-area-inset-top) env(safe-area-inset-right) 
                env(safe-area-inset-bottom) env(safe-area-inset-left);
      visibility: hidden;
      pointer-events: none;
    `;
    document.body.appendChild(div);

    const style = window.getComputedStyle(div);
    const parse = (val: string) => {
      const num = parseFloat(val);
      return isNaN(num) ? 0 : num;
    };

    setInsets({
      top: parse(style.paddingTop),
      right: parse(style.paddingRight),
      bottom: parse(style.paddingBottom),
      left: parse(style.paddingLeft),
    });

    document.body.removeChild(div);
  }, []);

  useEffect(() => {
    compute();
    // 防抖处理 resize，100ms 足够
    const debouncedCompute = debounce(compute, 100);
    window.addEventListener("resize", debouncedCompute);
    // iOS 方向变化可能需要 orientationchange
    window.addEventListener("orientationchange", compute);

    return () => {
      debouncedCompute.cancel();
      window.removeEventListener("resize", debouncedCompute);
      window.removeEventListener("orientationchange", compute);
    };
  }, [compute]);

  return insets;
}
