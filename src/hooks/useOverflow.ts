import { useState, useEffect, useRef } from "react";

function useOverflow<E extends HTMLElement = HTMLElement>(): [React.RefObject<E>, boolean] {
  const ref = useRef<E>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (ref.current) {
        const isOverflow =
          ref.current.offsetWidth < ref.current.scrollWidth || ref.current.offsetHeight < ref.current.scrollHeight;
        setIsOverflowing(isOverflow);
      }
    };

    window.addEventListener("resize", checkOverflow);
    checkOverflow();

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  return [ref, isOverflowing];
}

export default useOverflow;
