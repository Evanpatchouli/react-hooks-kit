interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: any;
}
interface Callbacks<T> {
    onResolve?: (value: T) => void;
    onReject?: (reason: any) => void;
    onFinally?: () => void;
}
export default function useFetch<T>(url: string, options?: RequestInit, callbacks?: Callbacks<T>, deps?: any[]): FetchState<T>;
export {};
