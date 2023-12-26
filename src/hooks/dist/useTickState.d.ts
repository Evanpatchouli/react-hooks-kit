import { Dispatch, SetStateAction } from "react";
declare const useTickState: <T extends unknown = any>(initialState: T) => [T, Dispatch<SetStateAction<T>>, number];
export default useTickState;
