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
    importFunction()
      .then((mod) => {
        setModule(mod);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [importFunction]);

  return { module, loading, error };
}

export default useLazy;
