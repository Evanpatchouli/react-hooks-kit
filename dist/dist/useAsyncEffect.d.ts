import { type DependencyList } from "react";
declare function useAsyncEffect(effect: () => Promise<void | (() => void)>, deps?: DependencyList, options?: {
    onError?: (error: unknown) => void;
    onFinally?: () => void;
}): void;
export default useAsyncEffect;
