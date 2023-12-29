/**
 *
 * @example
 * ```ts
 * const { module, loading, error } = useLazy(() => import('./MyModule'));
 * ```
 */
declare function useLazy<T>(importFunction: () => Promise<T>): {
    module: T | null;
    loading: boolean;
    error: Error | null;
};
export default useLazy;
