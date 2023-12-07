import { useState } from "react";

function useForceUpdate() {
  const [, set] = useState(0);
  return (callback?: (t: number) => void) => {
    set((pre) => {
      callback?.(pre);
      return pre + 1;
    });
  };
}

export default useForceUpdate;
