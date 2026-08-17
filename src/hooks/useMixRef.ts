import React, { useCallback } from "react";

const useMixRef = <E = any>(
  refs: (
    | React.LegacyRef<any>
    | React.MutableRefObject<E>
    | (typeof React)["useRef"]
    | null
    | undefined
  )[]
): React.RefCallback<E> => {
  const setRefs = useCallback((node: E | null) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        (ref as React.RefCallback<E>)(node);
      } else if (ref) {
        (ref as React.MutableRefObject<E | null>).current = node;
      }
    });
  }, [refs]);
  return setRefs;
};

export default useMixRef;
