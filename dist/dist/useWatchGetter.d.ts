declare function useWatchGetter<T>(getter: () => T, ...setters: ((value: any) => void)[]): T;
export default useWatchGetter;
