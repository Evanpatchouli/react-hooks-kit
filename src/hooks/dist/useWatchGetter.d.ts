declare function useWatchGetter<T>(getter: () => T, interval?: number | ((value: any) => void), ...setters: ((value: any) => void)[]): T;
export default useWatchGetter;
