import { useState, useEffect } from "react";

/**
 *
 * @example
 * ```ts
 * const { module, loading, error } = useLazy(() => import('./MyModule'));
 * ```
 */
function useLazy<T>(importFunction: () => Promise<T>) {
  const [module, setModule] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let active = true;

    importFunction()
      .then((mod) => {
        if (!active) return;
        setModule(mod);
        setLoading(false);
      })
      .catch((err) => {
        if (!active) return;
        setError(err);
        setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return { module, loading, error };
}

export default useLazy;
