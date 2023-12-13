interface UseMount {
    (callback: () => void | (() => void)): void;
    (callback: () => void | (() => void), onError: (error: any) => void): void;
    (callback: () => void | (() => void), deps: any[]): void;
    (callback: () => void | (() => void), onError: (error: any) => void, deps: any[]): void;
}
declare const useMount: UseMount;
export default useMount;
