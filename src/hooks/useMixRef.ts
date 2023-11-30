import React, { useCallback } from "react";

const useMixRef = <E = any>(
  refs: (
    | React.LegacyRef<any>
    | React.MutableRefObject<E>
    | (typeof React)["useRef"]
    | null
    | undefined
  )[]
): React.MutableRefObject<E> => {
  const setRefs = useCallback((node: E) => {
    // Refs expect a DOM node. Pass it if it exists.
    if (node) {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          // @ts-ignore
          ref.current = node;
        }
      });
    }
  }, []);
  return setRefs as any as React.MutableRefObject<E>;
};

export default useMixRef;
