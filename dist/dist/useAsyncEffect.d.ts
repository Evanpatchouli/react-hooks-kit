import { DependencyList } from "react";
declare function useAsyncEffect(effect: () => Promise<void | (() => void)>, deps?: DependencyList, options?: {
    onError?: (erroe: any) => void;
    onFinally?: () => void;
}): void;
export default useAsyncEffect;
