import { useEffect, useRef, DependencyList } from "react";

const useUpdate = (callback: () => void, dependencies: DependencyList) => {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    return callback();
  }, dependencies);
};

export default useUpdate;
