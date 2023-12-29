import { LazySource, Prettify } from "./typings";
export type LazyImage = LazySource & {
    error?: boolean;
};
export interface LazyImageActions {
    onLoad?: (loaded: boolean) => void;
    onError?: (error: boolean) => void;
}
export type LazyImageOptions = {
    src?: string;
    defaultSrc?: string;
    errorSrc?: string;
    actions?: LazyImageActions;
};
interface UseLazyImage {
    (options: LazyImageOptions): Prettify<LazyImage>;
    (src: string, options?: LazyImageOptions): Prettify<LazyImage>;
    (src: string, defaultSrc?: string, errorSrc?: string, actions?: LazyImageActions): Prettify<LazyImage>;
}
declare const useLazyImage: UseLazyImage;
export default useLazyImage;
