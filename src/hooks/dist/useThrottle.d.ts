interface ThrottleOptions<R = void> {
    leading?: boolean;
    trailing?: boolean;
    callback?: (result: R) => void;
}
export default function useThrottle<R = void>(fn: (args: any[]) => R, interval?: number, options?: ThrottleOptions): {
    (...args: any[]): Promise<unknown>;
    cancel(): void;
};
export {};
