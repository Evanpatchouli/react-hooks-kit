import { useState } from "react";

function useForceUpdate() {
  const [, set] = useState(0);
  return () => {
    set((pre) => pre + 1);
  };
}

export default useForceUpdate;
