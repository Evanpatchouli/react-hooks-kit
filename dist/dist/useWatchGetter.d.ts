declare function useWatchGetter<T>(getter: () => T, callback?: (v: T) => void, updater?: boolean): typeof updater extends true ? [T, () => void] : T;
export default useWatchGetter;
