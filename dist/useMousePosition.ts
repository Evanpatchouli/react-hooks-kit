import { useState, useEffect } from "react";

interface MousePosition {
  x: number | null;
  y: number | null;
}

function useMousePosition(trigger: "mousemove" | "mousedown" = "mousemove"): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: null, y: null });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener(trigger, updateMousePosition);

    return () => {
      window.removeEventListener(trigger, updateMousePosition);
    };
  }, [trigger]);

  return mousePosition;
}

export default useMousePosition;
