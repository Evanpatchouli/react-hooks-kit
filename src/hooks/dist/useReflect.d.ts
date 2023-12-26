declare function useReflect<T extends object, K extends keyof T>(initialValue: T): {
    get: (prop?: K) => K | undefined extends undefined ? T : T extends null ? null : T[K];
    set: (key: keyof T, val: T[keyof T]) => boolean;
    has: (key: keyof T | (string & {})) => boolean;
    apply: (func: (value: T) => void) => any;
};
export default useReflect;
