/// <reference types="react" />
declare const useTickState: <T extends unknown = any>(initialState?: T | undefined) => (number | T | import("react").Dispatch<import("react").SetStateAction<T | undefined>> | undefined)[];
export default useTickState;
