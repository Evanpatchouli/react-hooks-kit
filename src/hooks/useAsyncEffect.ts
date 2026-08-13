import { useEffect, type DependencyList } from "react";

function useAsyncEffect(
  effect: () => Promise<void | (() => void)>,
  deps: DependencyList = [],
  options?: {
    onError?: (error: unknown) => void;
    onFinally?: () => void;
  }
) {
  useEffect(() => {
    let active = true;
    let cleanup: void | (() => void);

    const runEffect = async () => {
      try {
        const nextCleanup = await effect();

        if (active) {
          cleanup = nextCleanup;
        } else {
          nextCleanup?.();
        }
      } catch (error) {
        if (options?.onError) {
          options.onError(error);
        } else {
          throw error;
        }
      } finally {
        options?.onFinally?.();
      }
    };

    void runEffect();

    return () => {
      active = false;
      cleanup?.();
      cleanup = undefined;
    };
  }, deps);
}

export default useAsyncEffect;
