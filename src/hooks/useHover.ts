import { useEffect, useRef } from "react";

function useHover<E extends HTMLElement>(onHover: () => void) {
  const ref = useRef<E | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleHover = () => onHover();

    element.addEventListener("mouseenter", handleHover);
    return () => {
      element.removeEventListener("mouseenter", handleHover);
    };
  }, [onHover]);

  return ref;
}

export default useHover;
