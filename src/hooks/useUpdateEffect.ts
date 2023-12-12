import { useRef, useEffect, DependencyList } from "react";

const useUpdateEffect = (
  callback: () => void,
  dependencies: DependencyList
) => {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    return callback();
  }, dependencies);
};

export default useUpdateEffect;
