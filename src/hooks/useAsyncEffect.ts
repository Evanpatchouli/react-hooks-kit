import { useEffect, DependencyList } from "react";

export default function useAsyncEffect(
  callback: () => Promise<void | (() => void)>,
  dependencies: DependencyList = []
) {
  useEffect(() => {
    const promise = callback();
    let cleanup: (() => void) | undefined;

    promise.then((cleanupFn) => {
      // @ts-ignore
      cleanup = cleanupFn;
    });

    return () => {
      cleanup && cleanup();
    };
  }, dependencies);
}
