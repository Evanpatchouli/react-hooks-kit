type HookItem<Hook extends (...args: any) => any = (...args: any) => any> = {
    hook: Hook;
    args: Parameters<Hook>;
};
export default function useBatchHooks<Hook extends (...args: any) => any = (...args: any) => any>(hook: Hook, count: number, ...args: Parameters<Hook>): ReturnType<Hook>[];
export default function useBatchHooks<Hook extends (...args: any) => any = (...args: any) => any>(hooks: HookItem<Hook>[]): ReturnType<Hook>[];
export {};
