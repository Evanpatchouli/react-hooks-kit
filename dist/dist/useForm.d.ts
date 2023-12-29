declare const useForm: <T = any>(schema: Record<keyof T, {
    value: T[keyof T] | null | undefined;
    required?: boolean | undefined;
    validator?: ((value?: T[keyof T] | null | undefined) => Promise<string | undefined>) | undefined;
    setter?: ((v: T[keyof T] | null | undefined) => void) | undefined;
}>, formRef: React.RefObject<HTMLFormElement>) => {
    onSubmit: (handler: (formData: T) => void, validates?: boolean | keyof T | (keyof T)[] | undefined) => (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    get: (key: keyof T, formData?: FormData) => Record<keyof T, {
        value: T[keyof T] | null | undefined;
        required?: boolean | undefined;
        validator?: ((value?: T[keyof T] | null | undefined) => Promise<string | undefined>) | undefined;
        setter?: ((v: T[keyof T] | null | undefined) => void) | undefined;
    }>[keyof T]["value"];
    set: (key: keyof T, value: Record<keyof T, {
        value: T[keyof T] | null | undefined;
        required?: boolean | undefined;
        validator?: ((value?: T[keyof T] | null | undefined) => Promise<string | undefined>) | undefined;
        setter?: ((v: T[keyof T] | null | undefined) => void) | undefined;
    }>[keyof T]["value"]) => void;
    sets: (data: Partial<Record<keyof T, {
        value: T[keyof T] | null | undefined;
        required?: boolean | undefined;
        validator?: ((value?: T[keyof T] | null | undefined) => Promise<string | undefined>) | undefined;
        setter?: ((v: T[keyof T] | null | undefined) => void) | undefined;
    }> extends infer T_1 ? { [K in keyof T_1]: Record<keyof T, {
        value: T[keyof T] | null | undefined;
        required?: boolean | undefined;
        validator?: ((value?: T[keyof T] | null | undefined) => Promise<string | undefined>) | undefined;
        setter?: ((v: T[keyof T] | null | undefined) => void) | undefined;
    }>[K]["value"]; } : never>) => void;
    validate: (key: keyof T) => Promise<boolean>;
    validates: (keys?: (keyof T)[] | undefined) => Promise<boolean>;
    gets: (keys?: (keyof T)[] | undefined) => Partial<Record<keyof T, {
        value: T[keyof T] | null | undefined;
        required?: boolean | undefined;
        validator?: ((value?: T[keyof T] | null | undefined) => Promise<string | undefined>) | undefined;
        setter?: ((v: T[keyof T] | null | undefined) => void) | undefined;
    }> extends infer T_2 ? { [K_1 in keyof T_2]: Record<keyof T, {
        value: T[keyof T] | null | undefined;
        required?: boolean | undefined;
        validator?: ((value?: T[keyof T] | null | undefined) => Promise<string | undefined>) | undefined;
        setter?: ((v: T[keyof T] | null | undefined) => void) | undefined;
    }>[K_1]["value"]; } : never>;
    reset: (keys?: (keyof T)[] | undefined) => void;
};
export default useForm;
