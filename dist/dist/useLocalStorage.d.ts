type Key = string | string[];
export default function useLocalStorage<T>(key?: Key, initialValue?: T): [T | undefined, (value: T | undefined) => void];
export {};
