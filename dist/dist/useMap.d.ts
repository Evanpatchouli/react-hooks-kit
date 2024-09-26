import { Hintable, Property } from './typings';
export type ReadonlyMap<T extends object = Record<string, any>> = Readonly<Omit<Map<keyof T, T[keyof T]>, "set" | "delete" | "clear">>;
declare const useMap: <T extends Object = {}>(initialState: T) => {
    map: Readonly<Omit<Map<keyof T, T[keyof T]>, "set" | "delete" | "clear">>;
    set: {
        <K extends Hintable<keyof T> = Hintable<keyof T>>(key: K, value: Property<T, K>): void;
        <K_1 extends Hintable<keyof T> = Hintable<keyof T>>(key: K_1, setValueAction: (prev?: Property<T, K_1> | undefined) => Property<T, K_1>): void;
        (record: Partial<T>, mode?: 'rehydrate' | 'override'): void;
        <K_2 extends Hintable<keyof T>>(setMapAction: (prev: Map<K_2, Property<T, K_2>>) => T | Map<K_2, Property<T, K_2>>, mode?: 'rehydrate' | 'override'): void;
    };
    get: <K_3 extends Hintable<keyof T>>(key: K_3) => Property<T, K_3>;
    del: (key: Hintable<keyof T>) => void;
    add: <K_4 extends Hintable<keyof T>>(key: K_4, value: Property<T, K_4>) => void;
};
export default useMap;
