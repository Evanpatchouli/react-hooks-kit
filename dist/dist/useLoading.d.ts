export interface UseLoading<T extends Record<string, boolean | number> = Record<string, boolean | number>> {
    (loadingMap: T, returnType: undefined): readonly [
        typeof loadingMap,
        SetLoading<T>,
        /** value -> true */
        (key: keyof T) => void,
        /** value -> false */
        (key: keyof T) => void,
        /** value++ */
        (key: keyof T) => void,
        /** value-- */
        (key: keyof T) => void
    ] & {
        loading: typeof loadingMap;
        setLoading: SetLoading<T>;
        onLoading: (key: keyof T) => void;
        unLoading: (key: keyof T) => void;
        plusLoading: (key: keyof T) => void;
        minusLoading: (key: keyof T) => void;
    };
}
export declare function formatLoadingValue(value: number | boolean, boolify?: boolean): number | boolean;
export declare function formatLoadingState(values?: any, boolify?: boolean): any;
/** Default `setType` will be `override` */
export interface SetLoading<T = Record<string, boolean | number>, K extends keyof T = keyof T> {
    (key: K, value?: boolean | number): void;
    (key: K, setAction: (pre: boolean | number) => boolean | number): void;
    (stateOrSetAction: Record<K, boolean | number> | ((prevState: Record<K, boolean | number>) => Record<K, boolean | number>), 
    /** Default `setType` will be `override` */
    setType?: "spread" | "override"): void;
}
/**
 * #### 返回一个数组
 * - 0 loadings
 * - 1 setLoading
 * - 2 onLoading
 * - 3 unLoading
 * - 4 plusLoading
 * - 5 minusLoading
 */
export declare const useLoading: <T extends Record<string, number | boolean> = Record<string, number | boolean>>(loadingMap: T, options?: {
    /** Default `setType` will be `override` */
    setType?: "spread" | "override";
    /** When value is 0 will be converted to false */
    boolify?: boolean;
}) => readonly [T, SetLoading<T, keyof T>, (key: keyof T) => void, (key: keyof T) => void, (key: keyof T) => void, (key: keyof T) => void] & {
    loading: T;
    setLoading: SetLoading<T, keyof T>;
    onLoading: (key: keyof T) => void;
    unLoading: (key: keyof T) => void;
    plusLoading: (key: keyof T) => void;
    minusLoading: (key: keyof T) => void;
};
export default useLoading;
