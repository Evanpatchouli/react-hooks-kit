import { DependencyList, useRef, useLayoutEffect } from "react";

const useUpdateLayoutEffect = (
  callback: () => void,
  dependencies: DependencyList
) => {
  const firstRenderRef = useRef(true);

  useLayoutEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    return callback();
  }, dependencies);
};

export default useUpdateLayoutEffect;
