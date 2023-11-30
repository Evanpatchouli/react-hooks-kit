import { useEffect } from "react";

interface UseMount {
  (callback: () => void | (() => void)): void;
  (callback: () => void | (() => void), onError: (error: any) => void): void;
  (callback: () => void | (() => void), deps: any[]): void;
  (
    callback: () => void | (() => void),
    onError: (error: any) => void,
    deps: any[]
  ): void;
}

const useMount: UseMount = (callback, arg2?, arg3 = []) => {
  let deps: any[] = [];
  let onError: ((error: any) => void) | undefined;

  if (Array.isArray(arg2)) {
    deps = arg2;
  } else if (typeof arg2 === "function") {
    onError = arg2 as (error: any) => void;
    deps = arg3 as unknown[];
  }

  useEffect(() => {
    try {
      const cleanup = callback();
      return cleanup instanceof Function ? cleanup : undefined;
    } catch (error) {
      if (onError) {
        onError(error);
      } else {
        console.error("useMount callback error:", error);
      }
    }
  }, deps);
};

export default useMount;
