import React from "react";
declare const useMixRef: <E = any>(refs: (typeof React.useRef | React.LegacyRef<any> | React.MutableRefObject<E> | undefined)[]) => React.MutableRefObject<E>;
export default useMixRef;
