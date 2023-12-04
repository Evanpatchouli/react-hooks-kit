import { useRef, useEffect } from "react";

export default function useUpdate(callback: () => void, dependencies: any[]) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
    } else {
      callback();
    }
  }, dependencies);
}
