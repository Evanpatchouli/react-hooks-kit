import { DependencyList, Dispatch, SetStateAction } from "react";
declare const useTickState: <T extends unknown = any>(initialState: T, tickBy?: "onSetState" | "onChange", dependencies?: DependencyList | ((state: T) => DependencyList) | undefined) => [T, Dispatch<SetStateAction<T>>, number];
export default useTickState;
