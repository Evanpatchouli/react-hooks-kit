import React from "react";
declare const useMixRef: <E = any>(refs: (typeof React.useRef | React.LegacyRef<any> | React.MutableRefObject<E> | undefined)[]) => (instance: E | null) => void;
export default useMixRef;
