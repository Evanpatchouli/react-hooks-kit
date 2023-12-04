import { useRef, useEffect } from "react";

export default function useUpdateEffect(
  callback: () => void,
  dependencies: any[]
) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
    } else {
      return callback();
    }
  }, dependencies);
}
