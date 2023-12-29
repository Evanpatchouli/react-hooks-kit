type PromiseStatus = "idle" | "pending" | "resolved" | "rejected";
interface PromiseState<T> {
    status: PromiseStatus;
    data: T | null;
    error: any;
}
interface Callbacks<T> {
    onResolve?: (value: T) => void;
    onReject?: (reason: any) => void;
    onFinally?: () => void;
}
export declare function usePromise<T>(promiseFn: () => Promise<T>, callbacks?: Callbacks<T>, deps?: any[]): [PromiseState<T>, () => void];
export declare function usePromise<T>(promiseFn: () => Promise<T>, deps?: any[]): [PromiseState<T>, () => void];
export default function usePromise<T>(promiseFn: () => Promise<T>, callbacksOrDeps?: Callbacks<T> | any[], deps?: any[]): [PromiseState<T>, () => void];
export {};
