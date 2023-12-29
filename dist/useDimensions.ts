import { useState, useEffect, useRef } from "react";

function useDimensions() {
  const ref = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0, top: 0, left: 0 });

  useEffect(() => {
    const observeTarget = ref.current;
    if (!observeTarget) return;

    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
          top: entry.contentRect.top,
          left: entry.contentRect.left,
        });
      });
    });

    resizeObserver.observe(observeTarget);

    return () => {
      resizeObserver.unobserve(observeTarget);
    };
  }, [ref]);

  return [ref, dimensions];
}

export default useDimensions;
