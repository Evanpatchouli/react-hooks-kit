/**
 * Watches a getter and optionally exposes an imperative update function.
 */
declare function useWatchGetter<T>(getter: () => T, callback?: (v: T) => void, updater?: false): T;
declare function useWatchGetter<T>(getter: () => T, callback: ((v: T) => void) | undefined, updater: true): [T, () => void];
export default useWatchGetter;
