/** The QR code or barcode formats supported by `html5-qrcode`. */
export type QrcodeScanFormat = "qr_code" | "aztec" | "codabar" | "code_39" | "code_93" | "code_128" | "data_matrix" | "maxicode" | "itf" | "ean_13" | "ean_8" | "pdf_417" | "rss_14" | "rss_expanded" | "upc_a" | "upc_e" | "upc_ean_extension";
/** A fixed or responsive scan box. */
export type QrcodeScanBox = number | {
    width: number;
    height: number;
} | ((viewfinderWidth: number, viewfinderHeight: number) => {
    width: number;
    height: number;
});
/** A requested QR code scanning mode. */
export type QrcodeScanMode = "auto" | "wechat" | "html5";
/** The actual scanning mode, or `none` while no scanner is active. */
export type QrcodeScanActiveMode = Exclude<QrcodeScanMode, "auto"> | "none";
/** The origin of a decoded QR code or barcode. */
export type QrcodeScanSource = "camera" | "image" | "wechat";
/** The semantic content type reported by the active decoder. */
export type QrcodeScanContentType = "unknown" | "url";
/** The detected code bounds in source pixels when the decoder provides them. */
export interface QrcodeScanBounds {
    x: number;
    y: number;
    width: number;
    height: number;
}
/** A normalized scan result independent of the underlying scanner implementation. */
export interface QrcodeScanResult {
    text: string;
    source: QrcodeScanSource;
    format: QrcodeScanFormat | null;
    formatName: string | null;
    contentType: QrcodeScanContentType | null;
    bounds: QrcodeScanBounds | null;
    decoderName: string | null;
    timestamp: number;
}
/** Configuration shared by visible and hidden image decoding. */
interface QrcodeImageScanBaseOptions {
    formats?: QrcodeScanFormat[];
    useNativeDetector?: boolean;
    verbose?: boolean;
    maxFileSize?: number;
}
/** Options accepted when decoding an image file. */
export type QrcodeImageScanOptions = QrcodeImageScanBaseOptions & ({
    showImage: true;
    containerId: string;
} | {
    showImage?: false;
    containerId?: string;
});
/** A snapshot of camera features available on the running video track. */
export interface QrcodeCameraCapabilities {
    torch: {
        supported: boolean;
        enabled: boolean | null;
    };
    zoom: {
        supported: boolean;
        value: number | null;
        min: number | null;
        max: number | null;
        step: number | null;
    };
}
/** A camera exposed by the browser. */
export interface QrcodeCamera {
    id: string;
    label: string;
}
/** Options passed to the optional WeChat adapter. */
export interface QrcodeWechatScanContext {
    signal: AbortSignal;
    formats: readonly QrcodeScanFormat[];
}
/**
 * An application-owned bridge to the WeChat JS-SDK.
 * The application remains responsible for SDK loading, signature creation, and readiness.
 */
export interface QrcodeScanWechatAdapter {
    isAvailable?: () => boolean;
    scan: (context: QrcodeWechatScanContext) => Promise<string | null>;
    cancel?: () => void | Promise<void>;
}
/** Options accepted when a scan starts. */
export interface QrcodeScanOptions {
    mode: QrcodeScanMode;
    containerId?: string;
    camera?: string | MediaTrackConstraints;
    fps: number;
    qrbox: QrcodeScanBox;
    aspectRatio: number;
    disableFlip: boolean;
    formats: QrcodeScanFormat[];
    useNativeDetector: boolean;
    verbose: boolean;
    stopOnSuccess: boolean;
    onSuccess: (result: string, details?: QrcodeScanResult) => void;
    onError?: (error: Error) => void;
    onCancel?: () => void;
    onDecodeError?: (message: string) => void;
}
/** Per-scan overrides accepted by `useQrcodeScan().start`. */
export type QrcodeScanStartOptions = Partial<QrcodeScanOptions>;
/** The scanner contract accepted by `useQrcodeScan` for custom implementations. */
export interface QrcodeScanServiceLike {
    start: (options: QrcodeScanOptions) => Promise<void>;
    stop: () => Promise<void>;
    pause: () => Promise<void>;
    resume: () => Promise<void>;
    switchCamera: (cameraId?: string) => Promise<QrcodeCamera>;
    getCameras: () => Promise<QrcodeCamera[]>;
    getCurrentMode: () => QrcodeScanActiveMode;
    getIsScanning: () => boolean;
    getIsWechatEnv: () => boolean;
    getSupportsNativeDetector: () => boolean;
    scanImage?: (file: File, options?: QrcodeImageScanOptions) => Promise<QrcodeScanResult>;
    getCameraCapabilities?: () => Promise<QrcodeCameraCapabilities | null>;
    setTorch?: (enabled: boolean) => Promise<QrcodeCameraCapabilities>;
    setZoom?: (value: number) => Promise<QrcodeCameraCapabilities>;
    destroy: () => Promise<void>;
}
type Html5QrcodeModule = typeof import("html5-qrcode");
/** Construction options for advanced integrations and tests. */
export interface QrcodeScanServiceOptions {
    wechatAdapter?: QrcodeScanWechatAdapter;
    isWechatEnvironment?: () => boolean;
    loadHtml5Qrcode?: () => Promise<Html5QrcodeModule>;
}
/**
 * A per-hook QR code scanning service with a lazy HTML5 implementation and an optional
 * application-provided WeChat adapter.
 */
export declare class QrcodeScanService implements QrcodeScanServiceLike {
    private readonly wechatAdapter?;
    private readonly isWechatEnvironment;
    private readonly loadHtml5Qrcode;
    private scanner;
    private currentMode;
    private isScanning;
    private isPaused;
    private operation;
    private cameraSwitchRequest;
    private abortController;
    private lastHtml5Options;
    private readonly ownedContainers;
    private readonly pendingScanners;
    private readonly disposedScanners;
    constructor(options?: QrcodeScanServiceOptions);
    /** Returns the mode that `auto` resolves to in the current environment. */
    getRecommendedMode(): Exclude<QrcodeScanMode, "auto">;
    /** Returns whether a requested concrete mode can run. */
    validateMode(mode: Exclude<QrcodeScanMode, "auto">): {
        valid: boolean;
        reason?: string;
    };
    /** Starts a scan. A newer start or stop operation supersedes pending work. */
    start(options: QrcodeScanOptions): Promise<void>;
    /** Stops the active scanner. Calling `stop` while idle is safe. */
    stop(): Promise<void>;
    /** Pauses an active HTML5 scanner and its video stream. */
    pause(): Promise<void>;
    /** Resumes a paused HTML5 scanner. */
    resume(): Promise<void>;
    /** Switches to a requested camera, or cycles to the next available camera. */
    switchCamera(cameraId?: string): Promise<QrcodeCamera>;
    /** Returns browser cameras. Labels may be empty until camera permission is granted. */
    getCameras(): Promise<QrcodeCamera[]>;
    /** Decodes one browser image file without requesting camera permission. */
    scanImage(file: File, options?: QrcodeImageScanOptions): Promise<QrcodeScanResult>;
    private scanImageInternal;
    /** Returns camera capabilities for the active HTML5 video track. */
    getCameraCapabilities(): Promise<QrcodeCameraCapabilities | null>;
    /** Enables or disables the camera torch and returns the refreshed capabilities. */
    setTorch(enabled: boolean): Promise<QrcodeCameraCapabilities>;
    /** Applies a camera zoom value and returns the refreshed capabilities. */
    setZoom(value: number): Promise<QrcodeCameraCapabilities>;
    /** Returns the actual mode used by the current or most recent scan. */
    getCurrentMode(): QrcodeScanActiveMode;
    /** Returns whether this service is starting, scanning, or paused. */
    getIsScanning(): boolean;
    /** Returns whether the current user agent is WeChat. */
    getIsWechatEnv(): boolean;
    /** Returns whether the browser exposes the native BarcodeDetector API. */
    getSupportsNativeDetector(): boolean;
    /** Releases the camera and invalidates all pending operations. */
    destroy(): Promise<void>;
    private isWechatAvailable;
    private assertContainer;
    private assertImageFile;
    private resolveImageContainer;
    private createOwnedScannerContainer;
    private assertImageContainer;
    private assertCurrentImageOperation;
    private throwSupersededImageError;
    private assertCurrentCameraOperation;
    private getActiveHtml5Scanner;
    private finiteNumberOrNull;
    private positiveFiniteNumberOrNull;
    private createBasicResult;
    private normalizeResult;
    private startWechat;
    private startHtml5;
    private mapFormats;
    private unmapFormat;
    private getRunningCameraId;
    private isCurrent;
    private isActiveScanner;
    private stopActiveScanner;
    private disposeScanner;
}
export {};
