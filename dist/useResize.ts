import { useState, RefObject, DependencyList, useLayoutEffect } from "react";

export type useResizeOptions = {
  callback?: (size: { width: number, height: number }) => void
  target?: string | RefObject<HTMLElement>
}

function useResize({ callback, target }: useResizeOptions = {}, deps: DependencyList = []) {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (target) {
      const element = typeof target === "string" ? document.getElementById(target) : target.current;
      if (element) {
        const resizeObserver = new ResizeObserver((entries) => {
          entries.forEach((entry) => {
            setSize({ width: entry.target.clientWidth, height: entry.target.clientHeight });
            callback?.({
              width: entry.target.clientWidth,
              height: entry.target.clientHeight,
            });
          });
        });
        resizeObserver.observe(element);

        return () => {
          resizeObserver.unobserve(element);
        };
      }
    } else {
      const updateSize = () => {
        setSize({ width: window.innerWidth, height: window.innerHeight });
        callback?.({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return size;
}

export default useResize;
