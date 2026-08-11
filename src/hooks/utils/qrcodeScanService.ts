import type {
  Html5Qrcode,
  Html5QrcodeCameraScanConfig,
  Html5QrcodeResult,
  Html5QrcodeSupportedFormats,
} from "html5-qrcode";

/** The QR code or barcode formats supported by `html5-qrcode`. */
export type QrcodeScanFormat =
  | "qr_code"
  | "aztec"
  | "codabar"
  | "code_39"
  | "code_93"
  | "code_128"
  | "data_matrix"
  | "maxicode"
  | "itf"
  | "ean_13"
  | "ean_8"
  | "pdf_417"
  | "rss_14"
  | "rss_expanded"
  | "upc_a"
  | "upc_e"
  | "upc_ean_extension";

/** A fixed or responsive scan box. */
export type QrcodeScanBox =
  | number
  | { width: number; height: number }
  | ((viewfinderWidth: number, viewfinderHeight: number) => {
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
export type QrcodeImageScanOptions = QrcodeImageScanBaseOptions &
  (
    | { showImage: true; containerId: string }
    | { showImage?: false; containerId?: string }
  );

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
  scanImage?: (
    file: File,
    options?: QrcodeImageScanOptions
  ) => Promise<QrcodeScanResult>;
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

const DEFAULT_CAMERA: MediaTrackConstraints = {
  facingMode: { ideal: "environment" },
  width: { ideal: 1280 },
  height: { ideal: 720 },
};

const DEFAULT_FORMATS: QrcodeScanFormat[] = ["qr_code"];

interface ExtendedMediaTrackCapabilities extends MediaTrackCapabilities {
  torch?: boolean | boolean[];
  zoom?: {
    min?: number;
    max?: number;
    step?: number;
  };
}

interface ExtendedMediaTrackSettings extends MediaTrackSettings {
  torch?: boolean;
  zoom?: number;
}

interface ExtendedMediaTrackConstraintSet extends MediaTrackConstraintSet {
  torch?: boolean;
  zoom?: number;
}

let scannerContainerSequence = 0;

let html5QrcodeModulePromise: Promise<Html5QrcodeModule> | null = null;

const loadDefaultHtml5Qrcode = (): Promise<Html5QrcodeModule> => {
  html5QrcodeModulePromise ??= import("html5-qrcode");
  return html5QrcodeModulePromise;
};

const defaultIsWechatEnvironment = (): boolean =>
  typeof navigator !== "undefined" && /MicroMessenger/i.test(navigator.userAgent);

const normalizeError = (error: unknown): Error =>
  error instanceof Error ? error : new Error(String(error));

/**
 * A per-hook QR code scanning service with a lazy HTML5 implementation and an optional
 * application-provided WeChat adapter.
 */
export class QrcodeScanService implements QrcodeScanServiceLike {
  private readonly wechatAdapter?: QrcodeScanWechatAdapter;
  private readonly isWechatEnvironment: () => boolean;
  private readonly loadHtml5Qrcode: () => Promise<Html5QrcodeModule>;
  private scanner: Html5Qrcode | null = null;
  private currentMode: QrcodeScanActiveMode = "none";
  private isScanning = false;
  private isPaused = false;
  private operation = 0;
  private cameraSwitchRequest = 0;
  private abortController: AbortController | null = null;
  private lastHtml5Options: QrcodeScanOptions | null = null;
  private readonly ownedContainers = new WeakMap<Html5Qrcode, HTMLElement>();
  private readonly pendingScanners = new WeakSet<Html5Qrcode>();
  private readonly disposedScanners = new WeakSet<Html5Qrcode>();

  public constructor(options: QrcodeScanServiceOptions = {}) {
    this.wechatAdapter = options.wechatAdapter;
    this.isWechatEnvironment =
      options.isWechatEnvironment ?? defaultIsWechatEnvironment;
    this.loadHtml5Qrcode = options.loadHtml5Qrcode ?? loadDefaultHtml5Qrcode;
  }

  /** Returns the mode that `auto` resolves to in the current environment. */
  public getRecommendedMode(): Exclude<QrcodeScanMode, "auto"> {
    return this.isWechatAvailable() ? "wechat" : "html5";
  }

  /** Returns whether a requested concrete mode can run. */
  public validateMode(
    mode: Exclude<QrcodeScanMode, "auto">
  ): { valid: boolean; reason?: string } {
    if (mode === "wechat" && !this.isWechatAvailable()) {
      return {
        valid: false,
        reason:
          "WeChat scanning requires a WeChat browser and an available wechatAdapter.",
      };
    }

    if (mode === "html5" && typeof document === "undefined") {
      return {
        valid: false,
        reason: "HTML5 scanning requires a browser document.",
      };
    }

    return { valid: true };
  }

  /** Starts a scan. A newer start or stop operation supersedes pending work. */
  public async start(options: QrcodeScanOptions): Promise<void> {
    const operation = ++this.operation;
    this.abortController?.abort();
    const abortController = new AbortController();
    this.abortController = abortController;

    try {
      const mode =
        options.mode === "auto" ? this.getRecommendedMode() : options.mode;
      const validation = this.validateMode(mode);
      if (!validation.valid) {
        throw new Error(validation.reason);
      }

      if (options.formats.length === 0) {
        throw new Error("At least one scan format must be provided.");
      }

      if (mode === "html5") {
        this.assertContainer(options.containerId);
      }

      await this.stopActiveScanner();
      if (!this.isCurrent(operation)) return;

      this.currentMode = mode;
      this.isScanning = true;
      this.isPaused = false;

      if (mode === "wechat") {
        await this.startWechat(options, abortController.signal, operation);
      } else {
        await this.startHtml5(options, operation);
      }
    } catch (error) {
      if (!this.isCurrent(operation)) return;

      const normalizedError = normalizeError(error);
      this.isScanning = false;
      this.isPaused = false;
      this.currentMode = "none";
      options.onError?.(normalizedError);
      throw normalizedError;
    }
  }

  /** Stops the active scanner. Calling `stop` while idle is safe. */
  public async stop(): Promise<void> {
    ++this.operation;
    this.abortController?.abort();
    this.abortController = null;

    const mode = this.currentMode;
    this.currentMode = "none";
    this.isScanning = false;
    this.isPaused = false;

    const scannerStop = this.stopActiveScanner();
    const adapterStop =
      mode === "wechat" && this.wechatAdapter?.cancel
        ? Promise.resolve(this.wechatAdapter.cancel())
        : Promise.resolve();

    await Promise.all([scannerStop, adapterStop]);
  }

  /** Pauses an active HTML5 scanner and its video stream. */
  public async pause(): Promise<void> {
    if (this.currentMode !== "html5" || !this.scanner || !this.isScanning) {
      throw new Error("An active HTML5 scanner is required before pausing.");
    }

    this.scanner.pause(true);
    this.isPaused = true;
  }

  /** Resumes a paused HTML5 scanner. */
  public async resume(): Promise<void> {
    if (this.currentMode !== "html5" || !this.scanner || !this.isPaused) {
      throw new Error("A paused HTML5 scanner is required before resuming.");
    }

    this.scanner.resume();
    this.isPaused = false;
  }

  /** Switches to a requested camera, or cycles to the next available camera. */
  public async switchCamera(cameraId?: string): Promise<QrcodeCamera> {
    if (
      this.currentMode !== "html5" ||
      !this.scanner ||
      !this.isScanning ||
      !this.lastHtml5Options
    ) {
      throw new Error("An active HTML5 scanner is required before switching cameras.");
    }

    const request = ++this.cameraSwitchRequest;
    const operation = this.operation;
    const runningScanner = this.scanner;

    const cameras = await this.getCameras();
    this.assertCurrentCameraOperation(request, operation, runningScanner);
    if (cameras.length === 0) {
      throw new Error("No camera was found.");
    }

    let target: QrcodeCamera | undefined;
    if (cameraId) {
      target = cameras.find((camera) => camera.id === cameraId);
      if (!target) {
        throw new Error(`Camera ${cameraId} was not found.`);
      }
    } else {
      if (cameras.length < 2) {
        throw new Error("At least two cameras are required to switch cameras.");
      }

      const runningCameraId = this.getRunningCameraId();
      const currentIndex = cameras.findIndex(
        (camera) => camera.id === runningCameraId
      );
      target = cameras[(currentIndex + 1 + cameras.length) % cameras.length];
    }

    this.assertCurrentCameraOperation(request, operation, runningScanner);
    const pendingStart = this.start({
      ...this.lastHtml5Options,
      mode: "html5",
      camera: target.id,
    });
    const startedOperation = this.operation;
    await pendingStart;
    if (
      request !== this.cameraSwitchRequest ||
      !this.isCurrent(startedOperation) ||
      this.currentMode !== "html5" ||
      !this.isScanning
    ) {
      const error = new Error(
        "Camera switch was superseded by a newer operation."
      );
      error.name = "AbortError";
      throw error;
    }
    return target;
  }

  /** Returns browser cameras. Labels may be empty until camera permission is granted. */
  public async getCameras(): Promise<QrcodeCamera[]> {
    if (typeof navigator === "undefined") {
      throw new Error("Camera enumeration requires a browser environment.");
    }

    const { Html5Qrcode } = await this.loadHtml5Qrcode();
    const cameras = await Html5Qrcode.getCameras();
    return cameras.map(({ id, label }) => ({ id, label }));
  }

  /** Decodes one browser image file without requesting camera permission. */
  public scanImage(
    file: File,
    options: QrcodeImageScanOptions = {}
  ): Promise<QrcodeScanResult> {
    try {
      this.assertImageFile(file, options.maxFileSize);
      if ((options.formats ?? DEFAULT_FORMATS).length === 0) {
        throw new Error("At least one scan format must be provided.");
      }
      this.assertImageContainer(
        options.containerId,
        options.showImage ?? false
      );
    } catch (error) {
      return Promise.reject(normalizeError(error));
    }

    return this.scanImageInternal(file, options).catch((error) => {
      throw normalizeError(error);
    });
  }

  private async scanImageInternal(
    file: File,
    options: QrcodeImageScanOptions
  ): Promise<QrcodeScanResult> {
    const formats = options.formats ?? DEFAULT_FORMATS;

    const operation = ++this.operation;
    this.abortController?.abort();
    this.abortController = null;

    const previousMode = this.currentMode;
    this.currentMode = "none";
    this.isScanning = false;
    this.isPaused = false;

    const scannerStop = this.stopActiveScanner();
    const adapterStop =
      previousMode === "wechat" && this.wechatAdapter?.cancel
        ? Promise.resolve(this.wechatAdapter.cancel())
        : Promise.resolve();
    await Promise.all([scannerStop, adapterStop]);
    this.assertCurrentImageOperation(operation);

    const module = await this.loadHtml5Qrcode();
    this.assertCurrentImageOperation(operation);

    const showImage = options.showImage ?? false;
    const container = this.resolveImageContainer(options.containerId, showImage);
    let scanner: Html5Qrcode;
    try {
      scanner = new module.Html5Qrcode(container.id, {
        formatsToSupport: this.mapFormats(module, formats),
        useBarCodeDetectorIfSupported:
          (options.useNativeDetector ?? true) &&
          this.getSupportsNativeDetector(),
        verbose: options.verbose ?? false,
      });
    } catch (error) {
      if (container.owned) container.element.remove();
      throw normalizeError(error);
    }
    if (container.owned) this.ownedContainers.set(scanner, container.element);
    this.scanner = scanner;

    try {
      this.pendingScanners.add(scanner);
      let rawResult: Html5QrcodeResult;
      try {
        rawResult = await scanner.scanFileV2(file, showImage);
      } finally {
        this.pendingScanners.delete(scanner);
      }
      if (!this.isActiveScanner(operation, scanner)) {
        await this.disposeScanner(scanner);
        this.assertCurrentImageOperation(operation);
      }

      const result = this.normalizeResult(module, rawResult, "image");
      if (!showImage) {
        if (this.scanner === scanner) this.scanner = null;
        await this.disposeScanner(scanner);
      }
      return result;
    } catch (error) {
      if (this.scanner === scanner) this.scanner = null;
      await this.disposeScanner(scanner);
      throw normalizeError(error);
    }
  }

  /** Returns camera capabilities for the active HTML5 video track. */
  public async getCameraCapabilities(): Promise<QrcodeCameraCapabilities | null> {
    if (this.currentMode !== "html5" || !this.scanner || !this.isScanning) {
      return null;
    }

    try {
      const capabilities = this.scanner.getRunningTrackCapabilities() as
        ExtendedMediaTrackCapabilities;
      const settings = this.scanner.getRunningTrackSettings() as
        ExtendedMediaTrackSettings;
      const torchCapability = capabilities.torch;
      const torchSupported = Array.isArray(torchCapability)
        ? torchCapability.indexOf(true) >= 0 &&
          torchCapability.indexOf(false) >= 0
        : torchCapability === true;
      const zoomCapability = capabilities.zoom;
      const zoomMin = this.finiteNumberOrNull(zoomCapability?.min);
      const zoomMax = this.finiteNumberOrNull(zoomCapability?.max);
      const zoomSupported =
        zoomMin !== null && zoomMax !== null && zoomMax >= zoomMin;

      return {
        torch: {
          supported: torchSupported,
          enabled:
            typeof settings.torch === "boolean" ? settings.torch : null,
        },
        zoom: {
          supported: zoomSupported,
          value: this.finiteNumberOrNull(settings.zoom),
          min: zoomSupported ? zoomMin : null,
          max: zoomSupported ? zoomMax : null,
          step: zoomSupported
            ? this.positiveFiniteNumberOrNull(zoomCapability?.step)
            : null,
        },
      };
    } catch (error) {
      throw normalizeError(error);
    }
  }

  /** Enables or disables the camera torch and returns the refreshed capabilities. */
  public async setTorch(enabled: boolean): Promise<QrcodeCameraCapabilities> {
    const scanner = this.getActiveHtml5Scanner("torch");
    const capabilities = await this.getCameraCapabilities();
    if (!capabilities?.torch.supported) {
      throw new Error("The active camera does not support torch control.");
    }

    const advanced: ExtendedMediaTrackConstraintSet = { torch: enabled };
    await scanner.applyVideoConstraints({ advanced: [advanced] });
    const refreshed = await this.getCameraCapabilities();
    if (!refreshed) {
      throw new Error("The active camera stopped before torch was applied.");
    }
    return refreshed;
  }

  /** Applies a camera zoom value and returns the refreshed capabilities. */
  public async setZoom(value: number): Promise<QrcodeCameraCapabilities> {
    if (!Number.isFinite(value)) {
      throw new Error("Camera zoom must be a finite number.");
    }

    const scanner = this.getActiveHtml5Scanner("zoom");
    const capabilities = await this.getCameraCapabilities();
    if (!capabilities?.zoom.supported) {
      throw new Error("The active camera does not support zoom control.");
    }
    if (value < capabilities.zoom.min! || value > capabilities.zoom.max!) {
      throw new Error(
        `Camera zoom must be between ${capabilities.zoom.min} and ${capabilities.zoom.max}.`
      );
    }

    const advanced: ExtendedMediaTrackConstraintSet = { zoom: value };
    await scanner.applyVideoConstraints({ advanced: [advanced] });
    const refreshed = await this.getCameraCapabilities();
    if (!refreshed) {
      throw new Error("The active camera stopped before zoom was applied.");
    }
    return refreshed;
  }

  /** Returns the actual mode used by the current or most recent scan. */
  public getCurrentMode(): QrcodeScanActiveMode {
    return this.currentMode;
  }

  /** Returns whether this service is starting, scanning, or paused. */
  public getIsScanning(): boolean {
    return this.isScanning;
  }

  /** Returns whether the current user agent is WeChat. */
  public getIsWechatEnv(): boolean {
    return this.isWechatEnvironment();
  }

  /** Returns whether the browser exposes the native BarcodeDetector API. */
  public getSupportsNativeDetector(): boolean {
    if (typeof window === "undefined") return false;

    const BarcodeDetectorConstructor = (
      window as typeof window & {
        BarcodeDetector?: new (options: { formats: string[] }) => unknown;
      }
    ).BarcodeDetector;
    if (typeof BarcodeDetectorConstructor !== "function") return false;

    try {
      new BarcodeDetectorConstructor({ formats: ["qr_code"] });
      return true;
    } catch {
      return false;
    }
  }

  /** Releases the camera and invalidates all pending operations. */
  public async destroy(): Promise<void> {
    await this.stop();
  }

  private isWechatAvailable(): boolean {
    return (
      this.getIsWechatEnv() &&
      Boolean(this.wechatAdapter) &&
      (this.wechatAdapter?.isAvailable?.() ?? true)
    );
  }

  private assertContainer(containerId?: string): void {
    if (!containerId) {
      throw new Error("containerId is required for HTML5 scanning.");
    }

    if (!document.getElementById(containerId)) {
      throw new Error(`Container #${containerId} does not exist.`);
    }
  }

  private assertImageFile(file: File, maxFileSize?: number): void {
    if (typeof File === "undefined" || !(file instanceof File)) {
      throw new Error("scanImage requires a browser File object.");
    }
    if (file.type && !file.type.startsWith("image/")) {
      throw new Error("scanImage only accepts image files.");
    }
    if (
      maxFileSize !== undefined &&
      (!Number.isFinite(maxFileSize) || maxFileSize <= 0)
    ) {
      throw new Error("maxFileSize must be a positive finite number.");
    }
    if (maxFileSize !== undefined && file.size > maxFileSize) {
      throw new Error(
        `Image file size ${file.size} exceeds the ${maxFileSize} byte limit.`
      );
    }
  }

  private resolveImageContainer(
    containerId: string | undefined,
    showImage: boolean
  ): { id: string; element: HTMLElement; owned: boolean } {
    if (typeof document === "undefined") {
      throw new Error("Image scanning requires a browser document.");
    }

    if (containerId) {
      const host = document.getElementById(containerId);
      if (!host) {
        throw new Error(`Container #${containerId} does not exist.`);
      }
      const element = this.createOwnedScannerContainer(host, false);
      return { id: element.id, element, owned: true };
    }

    if (showImage) {
      throw new Error("containerId is required when showImage is true.");
    }

    const parent = document.body ?? document.documentElement;
    if (!parent) {
      throw new Error("Image scanning requires an initialized browser document.");
    }

    const element = this.createOwnedScannerContainer(parent, true);
    return { id: element.id, element, owned: true };
  }

  private createOwnedScannerContainer(
    parent: HTMLElement,
    hidden: boolean
  ): HTMLElement {
    const element = document.createElement("div");
    element.id =
      `react-hooks-kit-qrcode-scanner-${++scannerContainerSequence}`;
    element.hidden = hidden;
    parent.appendChild(element);
    return element;
  }

  private assertImageContainer(
    containerId: string | undefined,
    showImage: boolean
  ): void {
    if (typeof document === "undefined") {
      throw new Error("Image scanning requires a browser document.");
    }
    if (showImage && !containerId) {
      throw new Error("containerId is required when showImage is true.");
    }
    if (containerId && !document.getElementById(containerId)) {
      throw new Error(`Container #${containerId} does not exist.`);
    }
  }

  private assertCurrentImageOperation(operation: number): void {
    if (this.isCurrent(operation)) return;

    this.throwSupersededImageError();
  }

  private throwSupersededImageError(): never {
    const error = new Error("Image scan was superseded by a newer operation.");
    error.name = "AbortError";
    throw error;
  }

  private assertCurrentCameraOperation(
    request: number,
    operation: number,
    scanner: Html5Qrcode
  ): void {
    if (
      request === this.cameraSwitchRequest &&
      this.isCurrent(operation) &&
      this.scanner === scanner &&
      this.currentMode === "html5" &&
      this.isScanning
    ) {
      return;
    }

    const error = new Error("Camera switch was superseded by a newer operation.");
    error.name = "AbortError";
    throw error;
  }

  private getActiveHtml5Scanner(feature: string): Html5Qrcode {
    if (this.currentMode !== "html5" || !this.scanner || !this.isScanning) {
      throw new Error(
        `An active HTML5 scanner is required before controlling camera ${feature}.`
      );
    }
    return this.scanner;
  }

  private finiteNumberOrNull(value: unknown): number | null {
    return typeof value === "number" && Number.isFinite(value) ? value : null;
  }

  private positiveFiniteNumberOrNull(value: unknown): number | null {
    const number = this.finiteNumberOrNull(value);
    return number !== null && number > 0 ? number : null;
  }

  private createBasicResult(
    text: string,
    source: QrcodeScanSource
  ): QrcodeScanResult {
    return {
      text,
      source,
      format: null,
      formatName: null,
      contentType: null,
      bounds: null,
      decoderName: null,
      timestamp: Date.now(),
    };
  }

  private normalizeResult(
    module: Html5QrcodeModule,
    rawResult: Html5QrcodeResult,
    source: Extract<QrcodeScanSource, "camera" | "image">
  ): QrcodeScanResult {
    const result = rawResult.result;
    const bounds = result.bounds;
    return {
      text: rawResult.decodedText,
      source,
      format:
        result.format === undefined
          ? null
          : this.unmapFormat(module, result.format.format),
      formatName: result.format?.formatName ?? null,
      contentType:
        result.decodedTextType === undefined
          ? null
          : result.decodedTextType === 1
          ? "url"
          : "unknown",
      bounds: bounds
        ? {
            x: bounds.x,
            y: bounds.y,
            width: bounds.width,
            height: bounds.height,
          }
        : null,
      decoderName: result.debugData?.decoderName ?? null,
      timestamp: Date.now(),
    };
  }

  private async startWechat(
    options: QrcodeScanOptions,
    signal: AbortSignal,
    operation: number
  ): Promise<void> {
    const result = await this.wechatAdapter!.scan({
      signal,
      formats: options.formats,
    });
    if (!this.isCurrent(operation)) return;

    this.isScanning = false;
    this.currentMode = "none";
    if (result === null) {
      options.onCancel?.();
    } else {
      options.onSuccess(result, this.createBasicResult(result, "wechat"));
    }
  }

  private async startHtml5(
    options: QrcodeScanOptions,
    operation: number
  ): Promise<void> {
    const module = await this.loadHtml5Qrcode();
    if (!this.isCurrent(operation)) return;

    const useNativeDetector =
      options.useNativeDetector && this.getSupportsNativeDetector();
    const host = document.getElementById(options.containerId!);
    if (!host) {
      throw new Error(`Container #${options.containerId} does not exist.`);
    }
    const ownedContainer = this.createOwnedScannerContainer(host, false);
    let scanner: Html5Qrcode;
    try {
      scanner = new module.Html5Qrcode(ownedContainer.id, {
        formatsToSupport: this.mapFormats(module, options.formats),
        useBarCodeDetectorIfSupported: useNativeDetector,
        verbose: options.verbose,
      });
    } catch (error) {
      ownedContainer.remove();
      throw error;
    }

    this.ownedContainers.set(scanner, ownedContainer);
    this.scanner = scanner;
    this.lastHtml5Options = options;

    const camera = options.camera ?? DEFAULT_CAMERA;
    const cameraIdOrConfig =
      typeof camera === "string" ? camera : { facingMode: "environment" };
    const configuration: Html5QrcodeCameraScanConfig = {
      fps: options.fps,
      qrbox: options.qrbox,
      aspectRatio: options.aspectRatio,
      disableFlip: options.disableFlip,
      videoConstraints: typeof camera === "string" ? undefined : camera,
    };

    try {
      this.pendingScanners.add(scanner);
      try {
        await scanner.start(
          cameraIdOrConfig,
          configuration,
          (decodedText: string, rawResult: Html5QrcodeResult) => {
            if (!this.isActiveScanner(operation, scanner)) return;

            options.onSuccess(
              decodedText,
              this.normalizeResult(module, rawResult, "camera")
            );
            if (options.stopOnSuccess) {
              void this.stop().catch((error) =>
                options.onError?.(normalizeError(error))
              );
            }
          },
          (message: string) => {
            if (this.isActiveScanner(operation, scanner)) {
              options.onDecodeError?.(message);
            }
          }
        );
      } finally {
        this.pendingScanners.delete(scanner);
      }

      if (!this.isActiveScanner(operation, scanner)) {
        await this.disposeScanner(scanner);
      }
    } catch (error) {
      if (this.scanner === scanner) this.scanner = null;
      await this.disposeScanner(scanner);
      throw error;
    }
  }

  private mapFormats(
    module: Html5QrcodeModule,
    formats: readonly QrcodeScanFormat[]
  ): Html5QrcodeSupportedFormats[] {
    const supported = module.Html5QrcodeSupportedFormats;
    const formatMap: Record<QrcodeScanFormat, Html5QrcodeSupportedFormats> = {
      qr_code: supported.QR_CODE,
      aztec: supported.AZTEC,
      codabar: supported.CODABAR,
      code_39: supported.CODE_39,
      code_93: supported.CODE_93,
      code_128: supported.CODE_128,
      data_matrix: supported.DATA_MATRIX,
      maxicode: supported.MAXICODE,
      itf: supported.ITF,
      ean_13: supported.EAN_13,
      ean_8: supported.EAN_8,
      pdf_417: supported.PDF_417,
      rss_14: supported.RSS_14,
      rss_expanded: supported.RSS_EXPANDED,
      upc_a: supported.UPC_A,
      upc_e: supported.UPC_E,
      upc_ean_extension: supported.UPC_EAN_EXTENSION,
    };
    return formats.map((format) => formatMap[format]);
  }

  private unmapFormat(
    module: Html5QrcodeModule,
    format: Html5QrcodeSupportedFormats
  ): QrcodeScanFormat | null {
    const supported = module.Html5QrcodeSupportedFormats;
    const formatMap: Array<
      [Html5QrcodeSupportedFormats, QrcodeScanFormat]
    > = [
      [supported.QR_CODE, "qr_code"],
      [supported.AZTEC, "aztec"],
      [supported.CODABAR, "codabar"],
      [supported.CODE_39, "code_39"],
      [supported.CODE_93, "code_93"],
      [supported.CODE_128, "code_128"],
      [supported.DATA_MATRIX, "data_matrix"],
      [supported.MAXICODE, "maxicode"],
      [supported.ITF, "itf"],
      [supported.EAN_13, "ean_13"],
      [supported.EAN_8, "ean_8"],
      [supported.PDF_417, "pdf_417"],
      [supported.RSS_14, "rss_14"],
      [supported.RSS_EXPANDED, "rss_expanded"],
      [supported.UPC_A, "upc_a"],
      [supported.UPC_E, "upc_e"],
      [supported.UPC_EAN_EXTENSION, "upc_ean_extension"],
    ];

    const mappedFormat = formatMap.find(([value]) => value === format);
    return mappedFormat?.[1] ?? null;
  }

  private getRunningCameraId(): string | undefined {
    try {
      return this.scanner?.getRunningTrackSettings().deviceId;
    } catch {
      const camera = this.lastHtml5Options?.camera;
      return typeof camera === "string" ? camera : undefined;
    }
  }

  private isCurrent(operation: number): boolean {
    return operation === this.operation;
  }

  private isActiveScanner(
    operation: number,
    scanner: Html5Qrcode
  ): boolean {
    return this.isCurrent(operation) && this.scanner === scanner;
  }

  private async stopActiveScanner(): Promise<void> {
    const scanner = this.scanner;
    this.scanner = null;
    if (!scanner) return;

    try {
      await this.disposeScanner(scanner);
    } catch (error) {
      if (!this.scanner) this.scanner = scanner;
      throw error;
    }
  }

  private async disposeScanner(scanner: Html5Qrcode): Promise<void> {
    if (this.disposedScanners.has(scanner)) return;
    if (this.pendingScanners.has(scanner)) {
      const ownedContainer = this.ownedContainers.get(scanner);
      if (ownedContainer) ownedContainer.hidden = true;
      return;
    }

    let stopError: unknown;
    if (scanner.isScanning) {
      try {
        await scanner.stop();
      } catch (error) {
        stopError = error;
      }
    }

    try {
      scanner.clear();
    } catch (error) {
      stopError ??= error;
    }

    if (stopError) throw normalizeError(stopError);

    const ownedContainer = this.ownedContainers.get(scanner);
    if (ownedContainer) {
      this.ownedContainers.delete(scanner);
      ownedContainer.remove();
    }
    this.disposedScanners.add(scanner);
  }
}
