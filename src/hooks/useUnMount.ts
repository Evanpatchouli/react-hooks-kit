import { useEffect, useRef } from "react";

function useUnMount(callback: () => void) {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    return () => {
      callbackRef.current();
    };
  }, []);
}

export default useUnMount;
