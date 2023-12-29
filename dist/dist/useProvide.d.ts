import { Dispatch, SetStateAction } from "react";
export declare function useProvide<T = any>(name: string, state: T, options?: {
    setState?: Dispatch<SetStateAction<T>>;
    namespace?: string;
}): void;
export default useProvide;
