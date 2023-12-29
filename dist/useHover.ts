import { useEffect, useRef } from "react";

function useHover(onHover: () => void) {
  const ref = useRef<any>(null);

  useEffect(() => {
    const handleHover = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onHover();
      }
    };

    document.addEventListener("mouseover", handleHover);
    return () => {
      document.removeEventListener("mouseover", handleHover);
    };
  }, [onHover]);

  return ref;
}

export default useHover;
