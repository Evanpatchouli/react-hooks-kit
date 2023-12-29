declare const useRafState: <T>(initialState: T) => [T, (value: T | ((prevState: T) => T)) => void];
export default useRafState;
