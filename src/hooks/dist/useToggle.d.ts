/// <reference types="react" />
export type ToggleState<T = true, F = false> = {
    true: T;
    false: F;
};
export default function useToggle<T = true, F = false>(initial?: boolean, valueMap?: Partial<ToggleState<T, F>>): [
    NonNullable<F> | true | false | NonNullable<T>,
    (bool?: any) => void,
    React.Dispatch<React.SetStateAction<boolean>>
];
