export default function useDebounce<R = void>(fn: (...args: any[]) => R, delay?: number, immediate?: boolean, callback?: (result: R) => void): {
    (...args: any[]): Promise<unknown>;
    cancel(): void;
};
