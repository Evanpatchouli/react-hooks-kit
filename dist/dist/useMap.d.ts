import { Hintable } from './typings';
declare const useMap: <T extends Object = {}>(initialState: T) => {
    map: Readonly<Omit<Map<Hintable<keyof T>, T>, "set" | "delete" | "clear">>;
    set: (key: Hintable<keyof T>, value: T) => void;
    get: (key: Hintable<keyof T>) => T | undefined;
    del: (key: Hintable<keyof T>) => void;
    add: (key: Hintable<keyof T>, value: T) => void;
};
export default useMap;
