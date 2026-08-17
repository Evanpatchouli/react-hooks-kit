import { useState, useEffect, useRef } from "react";

interface ScrollPosition {
  x: number;
  y: number;
}

function getScrollPosition(): ScrollPosition {
  return {
    x: window.scrollX,
    y: window.scrollY,
  };
}

const useScroll = (
  callback?: (position: ScrollPosition) => void
): ScrollPosition => {
  const [position, setPosition] = useState<ScrollPosition>(getScrollPosition);

  const handleScroll = () => {
    const newPosition = getScrollPosition();
    setPosition(newPosition);
    callback?.(newPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [callback]);

  return position;
};

export default useScroll;
