export declare function debounce<R = void>(fn: (args: any[]) => R, delay?: number, immediate?: boolean, callback?: (result: ReturnType<typeof fn>) => void): {
    (...args: any[]): Promise<unknown>;
    cancel(): void;
};
export default function useDebounce<R = void>(fn: (args: any[]) => R, delay?: number, immediate?: boolean, callback?: (result: ReturnType<typeof fn>) => void): {
    (...args: any[]): Promise<unknown>;
    cancel(): void;
};
