import { type QrcodeCamera, type QrcodeCameraCapabilities, type QrcodeImageScanOptions, type QrcodeScanActiveMode, type QrcodeScanMode, type QrcodeScanResult, type QrcodeScanServiceLike, type QrcodeScanStartOptions, type QrcodeScanWechatAdapter } from "./utils/qrcodeScanService";
/** The lifecycle state of `useQrcodeScan`. */
export type QrcodeScanStatus = "idle" | "starting" | "scanning" | "paused" | "decoding" | "stopping" | "error";
/** The browser's observable camera permission state. */
export type QrcodeCameraPermissionState = "unknown" | "prompt" | "granted" | "denied" | "unsupported";
/** Per-image overrides accepted by `useQrcodeScan().scanImage`. */
export type QrcodeImageScanStartOptions = QrcodeImageScanOptions & {
    onSuccess?: (result: string, details?: QrcodeScanResult) => void;
    onError?: (error: Error) => void;
};
/** Configuration shared by scans started from one Hook instance. */
export interface UseQrcodeScanOptions {
    mode?: QrcodeScanMode;
    wechatAdapter?: QrcodeScanWechatAdapter;
    service?: QrcodeScanServiceLike;
    onSuccess?: (result: string, details?: QrcodeScanResult) => void;
    onError?: (error: Error) => void;
    onCancel?: () => void;
    onDecodeError?: (message: string) => void;
}
/** Reactive state returned by `useQrcodeScan`. */
export interface UseQrcodeScanState {
    status: QrcodeScanStatus;
    isScanning: boolean;
    isPaused: boolean;
    isDecodingImage: boolean;
    result: string | null;
    scanResult: QrcodeScanResult | null;
    error: Error | null;
    mode: QrcodeScanActiveMode;
    cameraCapabilities: QrcodeCameraCapabilities | null;
    cameraPermission: QrcodeCameraPermissionState;
    isWechatEnv: boolean;
    supportsNativeDetector: boolean;
}
/** Operations returned by `useQrcodeScan`. */
export interface UseQrcodeScanActions {
    start: (options?: QrcodeScanStartOptions) => Promise<void>;
    stop: () => Promise<void>;
    pause: () => Promise<void>;
    resume: () => Promise<void>;
    switchCamera: (cameraId?: string) => Promise<QrcodeCamera>;
    getCameras: () => Promise<QrcodeCamera[]>;
    scanImage: (file: File, options?: QrcodeImageScanStartOptions) => Promise<QrcodeScanResult>;
    refreshCameraCapabilities: () => Promise<QrcodeCameraCapabilities | null>;
    setTorch: (enabled: boolean) => Promise<QrcodeCameraCapabilities>;
    setZoom: (value: number) => Promise<QrcodeCameraCapabilities>;
    refreshCameraPermission: () => Promise<QrcodeCameraPermissionState>;
    clearResult: () => void;
    clearError: () => void;
    reset: () => Promise<void>;
}
/** The complete object returned by `useQrcodeScan`. */
export type UseQrcodeScanReturn = UseQrcodeScanState & UseQrcodeScanActions;
/**
 * **useQrcodeScan** is a React Hook that scans QR codes and barcodes from a
 * camera, an image file, or an application-provided WeChat adapter.
 * ### Parameters
 * - options?: `UseQrcodeScanOptions | QrcodeScanMode` - Shared scanner options, or a mode string for concise usage.
 *   - mode: `"auto" | "wechat" | "html5"?` - The preferred live scanner mode. Defaults to `"auto"`.
 *   - wechatAdapter: `QrcodeScanWechatAdapter?` - An application-owned WeChat JS-SDK bridge.
 *   - service: `QrcodeScanServiceLike?` - A stable custom scanner service. The first value is used for the Hook lifetime.
 *   - onSuccess: `((result: string, details?: QrcodeScanResult) => void)?` - The default success callback for live and image scans.
 *   - onError: `((error: Error) => void)?` - The default operational error callback.
 *   - onCancel: `(() => void)?` - The default WeChat cancellation callback.
 *   - onDecodeError: `((message: string) => void)?` - Receives non-fatal per-frame decode misses.
 * ---
 * ### Return (Object)
 * - status: `QrcodeScanStatus` - The lifecycle state, including `decoding` for image files.
 * - isScanning: `boolean` - Whether a live scanner is starting, running, or paused.
 * - isPaused: `boolean` - Whether an HTML5 camera scan is paused.
 * - isDecodingImage: `boolean` - Whether an image file is currently being decoded.
 * - result: `string | null` - The latest decoded text, retained for backwards compatibility.
 * - scanResult: `QrcodeScanResult | null` - The normalized result source, format, bounds, content type, decoder, and timestamp.
 * - error: `Error | null` - The latest operational or device-control error.
 * - mode: `"wechat" | "html5" | "none"` - The active live scanner mode. Image decoding keeps this as `none`.
 * - cameraCapabilities: `QrcodeCameraCapabilities | null` - Torch and zoom support for the active camera track.
 * - cameraPermission: `QrcodeCameraPermissionState` - The observable camera permission without prompting on mount.
 * - isWechatEnv: `boolean` - Whether the current user agent is WeChat.
 * - supportsNativeDetector: `boolean` - Whether the native BarcodeDetector API is exposed.
 * - start: `(options?: QrcodeScanStartOptions) => Promise<void>` - Starts a live scan. Per-scan callbacks override shared callbacks.
 * - stop: `() => Promise<void>` - Stops scanning, clears image previews, and releases the camera.
 * - pause: `() => Promise<void>` - Pauses an HTML5 camera scan.
 * - resume: `() => Promise<void>` - Resumes a paused HTML5 camera scan.
 * - switchCamera: `(cameraId?: string) => Promise<QrcodeCamera>` - Selects a camera or cycles to the next one.
 * - getCameras: `() => Promise<QrcodeCamera[]>` - Requests access when needed and lists browser cameras.
 * - scanImage: `(file: File, options?: QrcodeImageScanStartOptions) => Promise<QrcodeScanResult>` - Decodes one image after stopping any live scan.
 * - refreshCameraCapabilities: `() => Promise<QrcodeCameraCapabilities | null>` - Refreshes the active camera feature snapshot.
 * - setTorch: `(enabled: boolean) => Promise<QrcodeCameraCapabilities>` - Applies torch state when supported.
 * - setZoom: `(value: number) => Promise<QrcodeCameraCapabilities>` - Applies an in-range zoom value when supported.
 * - refreshCameraPermission: `() => Promise<QrcodeCameraPermissionState>` - Re-queries camera permission without requesting it.
 * - clearResult: `() => void` - Clears both text and structured results.
 * - clearError: `() => void` - Clears the latest error without stopping an active scanner.
 * - reset: `() => Promise<void>` - Stops scanning and clears session result and error state.
 * ---
 * ### Usage
 * ```tsx
 * const scanner = useQrcodeScan({ mode: "auto" });
 *
 * await scanner.start({ containerId: "qr-reader" });
 * const capabilities = await scanner.refreshCameraCapabilities();
 * if (capabilities?.torch.supported) await scanner.setTorch(true);
 * if (capabilities?.zoom.supported && capabilities.zoom.min !== null) {
 *   await scanner.setZoom(capabilities.zoom.min);
 * }
 *
 * const imageResult = await scanner.scanImage(file, {
 *   formats: ["qr_code"],
 *   maxFileSize: 8 * 1024 * 1024,
 * });
 * ```
 * ---
 * ### Example
 * ```tsx
 * import { useQrcodeScan } from "@evanpatchouli/react-hooks-kit";
 *
 * const Scanner = () => {
 *   const scanner = useQrcodeScan({
 *     onSuccess: (_text, details) => console.log(details),
 *   });
 *
 *   return (
 *     <section>
 *       <div id="qr-reader" />
 *       <button
 *         onClick={() => void scanner.start({ containerId: "qr-reader" })}
 *       >
 *         Start camera
 *       </button>
 *       <input
 *         type="file"
 *         accept="image/*"
 *         onChange={(event) => {
 *           const file = event.currentTarget.files?.[0];
 *           if (file) void scanner.scanImage(file);
 *         }}
 *       />
 *       <p>Permission: {scanner.cameraPermission}</p>
 *       {scanner.scanResult ? <p>{scanner.scanResult.text}</p> : null}
 *     </section>
 *   );
 * };
 * ```
 * ---
 * ### FAQs
 * - Q: Why does camera scanning fail on an HTTP page?
 * - A: Camera access requires a secure context such as HTTPS or localhost. Image scanning does not request camera permission.
 * ---
 * - Q: Why are format, bounds, or content type sometimes null?
 * - A: The selected browser decoder does not always provide every metadata field.
 * ---
 * - Q: Why are torch or zoom unsupported on a device with a camera?
 * - A: Support is reported by the currently active camera track and can change after switching cameras.
 * ---
 * - Q: Does `granted` guarantee that camera startup will succeed?
 * - A: No. Device availability, browser policy, and concurrent camera use can still prevent startup.
 * ---
 * - Q: Does the Hook configure the WeChat JS-SDK?
 * - A: No. Inject a `wechatAdapter` so the application can own its app ID, signature API, and SDK readiness.
 */
export declare const useQrcodeScan: (options?: UseQrcodeScanOptions | QrcodeScanMode) => UseQrcodeScanReturn;
export { QrcodeScanService } from "./utils/qrcodeScanService";
export type { QrcodeCamera, QrcodeCameraCapabilities, QrcodeImageScanOptions, QrcodeScanActiveMode, QrcodeScanBox, QrcodeScanBounds, QrcodeScanContentType, QrcodeScanFormat, QrcodeScanMode, QrcodeScanOptions, QrcodeScanResult, QrcodeScanServiceLike, QrcodeScanServiceOptions, QrcodeScanSource, QrcodeScanStartOptions, QrcodeScanWechatAdapter, QrcodeWechatScanContext, } from "./utils/qrcodeScanService";
export default useQrcodeScan;
