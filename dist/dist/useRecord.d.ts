import { Hintable, Property } from "./typings";
export default function useRecord<T extends object = Record<string, any>>(initial?: T): readonly [T, {
    <K extends Hintable<keyof T>>(key: K, value: Property<T, K>): void;
    <K_1 extends Hintable<keyof T>>(key: K_1, setValueAction: (value: Property<T, K_1>) => Property<T, K_1>): void;
    (state: Partial<T>, mode?: 'rehydrate' | 'override'): void;
    (setRecordAction: (prev: T) => Partial<T>, mode?: 'rehydrate' | 'override'): void;
}, <K_2 extends Hintable<keyof T>>(key: K_2) => Property<T, K_2>];
