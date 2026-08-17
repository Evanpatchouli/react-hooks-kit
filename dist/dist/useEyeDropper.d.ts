/** Options accepted by the native EyeDropper picker. */
export interface EyeDropperOpenOptions {
    /** Cancels an active picker when the signal is aborted. */
    signal?: AbortSignal;
}
/** Color returned by the native EyeDropper picker. */
export interface EyeDropperResult {
    /** Selected color serialized as a hexadecimal sRGB value. */
    sRGBHex: string;
}
/** Minimal instance shape of the experimental browser EyeDropper API. */
export interface EyeDropperApi {
    /** Opens the native screen color picker. */
    open(options?: EyeDropperOpenOptions): Promise<EyeDropperResult>;
}
/** Constructor shape of the experimental browser EyeDropper API. */
export interface EyeDropperConstructor {
    new (): EyeDropperApi;
}
/** Configuration for {@link useEyeDropper}. */
export interface UseEyeDropperOptions {
    /** Initial color before the first successful pick. Defaults to an empty string. */
    initialValue?: string;
}
/** Values and actions exposed by {@link useEyeDropper}. */
export interface UseEyeDropperReturn {
    /** Whether the current browser exposes the native EyeDropper API. */
    isSupported: boolean;
    /** Most recently selected hexadecimal sRGB color. */
    sRGBHex: string;
    /**
     * Opens the native color picker.
     *
     * Returns `undefined` when unsupported. Native errors, including user
     * cancellation and an aborted signal, are propagated to the caller.
     */
    open(options?: EyeDropperOpenOptions): Promise<EyeDropperResult | undefined>;
}
/**
 * Wraps the browser EyeDropper API in React state.
 *
 * The picker must be opened from a user interaction and is available only in
 * browsers that implement the experimental EyeDropper API.
 *
 * @example
 * ```tsx
 * const { isSupported, sRGBHex, open } = useEyeDropper({
 *   initialValue: "#ffffff",
 * });
 *
 * <button disabled={!isSupported} onClick={() => void open()}>
 *   Pick color: {sRGBHex}
 * </button>
 * ```
 */
export default function useEyeDropper(options?: UseEyeDropperOptions): UseEyeDropperReturn;
