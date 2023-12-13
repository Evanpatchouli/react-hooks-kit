type Condition<T> = ((oldData: T, newState?: T) => boolean | string | undefined | null) | boolean | string | undefined | null;
export default function useProtect<T>(initialData: T, ...conditions: Condition<T>[]): [T, (newData: T | ((oldData: T) => T)) => void];
export {};
