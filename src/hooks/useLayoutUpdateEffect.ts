import { useRef, useLayoutEffect } from "react";

export default function useUpdateLayoutEffect(
  callback: () => void,
  dependencies: any[]
) {
  const firstRenderRef = useRef(true);

  useLayoutEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
    } else {
      return callback();
    }
  }, dependencies);
}
