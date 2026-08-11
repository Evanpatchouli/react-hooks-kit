import { useCallback, useEffect, useRef, useState } from "react";
import {
  QrcodeScanService,
  type QrcodeCamera,
  type QrcodeCameraCapabilities,
  type QrcodeImageScanOptions,
  type QrcodeScanActiveMode,
  type QrcodeScanMode,
  type QrcodeScanOptions,
  type QrcodeScanResult,
  type QrcodeScanServiceLike,
  type QrcodeScanStartOptions,
  type QrcodeScanWechatAdapter,
} from "./utils/qrcodeScanService";

/** The lifecycle state of `useQrcodeScan`. */
export type QrcodeScanStatus =
  | "idle"
  | "starting"
  | "scanning"
  | "paused"
  | "decoding"
  | "stopping"
  | "error";

/** The browser's observable camera permission state. */
export type QrcodeCameraPermissionState =
  | "unknown"
  | "prompt"
  | "granted"
  | "denied"
  | "unsupported";

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
  scanImage: (
    file: File,
    options?: QrcodeImageScanStartOptions
  ) => Promise<QrcodeScanResult>;
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

const DEFAULT_OPTIONS: Omit<
  QrcodeScanOptions,
  "mode" | "onSuccess" | "onError" | "onCancel" | "onDecodeError"
> = {
  fps: 10,
  qrbox: 250,
  aspectRatio: 1,
  disableFlip: false,
  formats: ["qr_code"],
  useNativeDetector: true,
  verbose: false,
  stopOnSuccess: false,
};

const normalizeError = (error: unknown): Error =>
  error instanceof Error ? error : new Error(String(error));

const createFallbackScanResult = (
  text: string,
  source: QrcodeScanResult["source"]
): QrcodeScanResult => ({
  text,
  source,
  format: null,
  formatName: null,
  contentType: null,
  bounds: null,
  decoderName: null,
  timestamp: Date.now(),
});

interface CameraPermissionQuery {
  state: QrcodeCameraPermissionState;
  status: PermissionStatus | null;
}

const queryCameraPermission = async (): Promise<CameraPermissionQuery> => {
  if (
    typeof navigator === "undefined" ||
    !navigator.mediaDevices ||
    !navigator.permissions?.query
  ) {
    return { state: "unsupported", status: null };
  }

  try {
    const status = await navigator.permissions.query({
      name: "camera" as PermissionName,
    });
    return {
      state: status.state,
      status,
    };
  } catch {
    return { state: "unsupported", status: null };
  }
};

const getInitialCameraPermissionState = (): QrcodeCameraPermissionState =>
  typeof navigator === "undefined" ||
  !navigator.mediaDevices ||
  !navigator.permissions?.query
    ? "unsupported"
    : "unknown";

const validateImageScanRequest = (
  file: File,
  options: QrcodeImageScanStartOptions
): void => {
  if (typeof File === "undefined" || !(file instanceof File)) {
    throw new Error("scanImage requires a browser File object.");
  }
  if (file.type && !file.type.startsWith("image/")) {
    throw new Error("scanImage only accepts image files.");
  }
  if (
    options.maxFileSize !== undefined &&
    (!Number.isFinite(options.maxFileSize) || options.maxFileSize <= 0)
  ) {
    throw new Error("maxFileSize must be a positive finite number.");
  }
  if (
    options.maxFileSize !== undefined &&
    file.size > options.maxFileSize
  ) {
    throw new Error(
      `Image file size ${file.size} exceeds the ${options.maxFileSize} byte limit.`
    );
  }
  if (options.formats?.length === 0) {
    throw new Error("At least one scan format must be provided.");
  }
  if (typeof document === "undefined") {
    throw new Error("Image scanning requires a browser document.");
  }
  if (options.showImage && !options.containerId) {
    throw new Error("containerId is required when showImage is true.");
  }
  if (
    options.containerId &&
    !document.getElementById(options.containerId)
  ) {
    throw new Error(`Container #${options.containerId} does not exist.`);
  }
};

const isScanningStatus = (status: QrcodeScanStatus): boolean =>
  status === "starting" || status === "scanning" || status === "paused";

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
export const useQrcodeScan = (
  options: UseQrcodeScanOptions | QrcodeScanMode = {}
): UseQrcodeScanReturn => {
  const config = typeof options === "string" ? { mode: options } : options;
  const requestedMode = config.mode ?? "auto";
  const callbacksRef = useRef({
    onSuccess: config.onSuccess,
    onError: config.onError,
    onCancel: config.onCancel,
    onDecodeError: config.onDecodeError,
  });
  callbacksRef.current = {
    onSuccess: config.onSuccess,
    onError: config.onError,
    onCancel: config.onCancel,
    onDecodeError: config.onDecodeError,
  };

  const [service] = useState<QrcodeScanServiceLike>(
    () =>
      config.service ??
      new QrcodeScanService({ wechatAdapter: config.wechatAdapter })
  );
  const [status, setStatus] = useState<QrcodeScanStatus>("idle");
  const [result, setResult] = useState<string | null>(null);
  const [scanResult, setScanResult] = useState<QrcodeScanResult | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [mode, setMode] = useState<QrcodeScanActiveMode>("none");
  const [cameraCapabilities, setCameraCapabilities] =
    useState<QrcodeCameraCapabilities | null>(null);
  const [cameraPermission, setCameraPermission] =
    useState<QrcodeCameraPermissionState>(getInitialCameraPermissionState);
  const [environment] = useState(() => ({
    isWechatEnv: service.getIsWechatEnv(),
    supportsNativeDetector: service.getSupportsNativeDetector(),
  }));
  const mountedRef = useRef(false);
  const operationRef = useRef(0);
  const controlOperationRef = useRef(0);
  const permissionOperationRef = useRef(0);
  const permissionListenerRef = useRef<{
    status: PermissionStatus;
    listener: () => void;
  } | null>(null);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      ++operationRef.current;
      void service.destroy().catch(() => undefined);
    };
  }, [service]);

  const isCurrent = useCallback(
    (operation: number): boolean =>
      mountedRef.current && operation === operationRef.current,
    []
  );

  const replacePermissionListener = useCallback(
    (permissionStatus: PermissionStatus | null): void => {
      const currentListener = permissionListenerRef.current;
      if (currentListener) {
        currentListener.status.removeEventListener(
          "change",
          currentListener.listener
        );
        permissionListenerRef.current = null;
      }

      if (!permissionStatus) return;
      const listener = (): void => {
        if (mountedRef.current) {
          setCameraPermission(permissionStatus.state);
        }
      };
      permissionStatus.addEventListener("change", listener);
      permissionListenerRef.current = { status: permissionStatus, listener };
    },
    []
  );

  const refreshCameraPermission = useCallback(async (): Promise<
    QrcodeCameraPermissionState
  > => {
    const operation = ++permissionOperationRef.current;
    const permission = await queryCameraPermission();
    if (
      mountedRef.current &&
      operation === permissionOperationRef.current
    ) {
      replacePermissionListener(permission.status);
      setCameraPermission(permission.state);
    }
    return permission.state;
  }, [replacePermissionListener]);

  useEffect(() => {
    void refreshCameraPermission();
    return () => {
      ++permissionOperationRef.current;
      replacePermissionListener(null);
    };
  }, [refreshCameraPermission, replacePermissionListener]);

  const start = useCallback(
    async (startOptions: QrcodeScanStartOptions = {}): Promise<void> => {
      const operation = ++operationRef.current;
      const controlOperation = ++controlOperationRef.current;
      const perScanCallbacks = {
        onSuccess: startOptions.onSuccess,
        onError: startOptions.onError,
        onCancel: startOptions.onCancel,
        onDecodeError: startOptions.onDecodeError,
      };
      let errorWasReported = false;
      let terminalSuccessHandled = false;

      if (mountedRef.current) {
        setError(null);
        setResult(null);
        setScanResult(null);
        setCameraCapabilities(null);
        setStatus("starting");
        setMode("none");
      }

      const scanOptions: QrcodeScanOptions = {
        ...DEFAULT_OPTIONS,
        ...startOptions,
        mode: startOptions.mode ?? requestedMode,
        formats: startOptions.formats ?? DEFAULT_OPTIONS.formats,
        onSuccess: (decodedValue, decodedDetails) => {
          if (!isCurrent(operation)) return;
          if (scanOptions.stopOnSuccess && terminalSuccessHandled) return;
          terminalSuccessHandled = scanOptions.stopOnSuccess;

          const fallbackSource =
            service.getCurrentMode() === "wechat" ||
            scanOptions.mode === "wechat" ||
            (scanOptions.mode === "auto" && service.getIsWechatEnv())
              ? "wechat"
              : "camera";
          const details = decodedDetails
            ? decodedDetails.text === decodedValue
              ? decodedDetails
              : { ...decodedDetails, text: decodedValue }
            : createFallbackScanResult(decodedValue, fallbackSource);

          setResult(decodedValue);
          setScanResult(details);
          if (scanOptions.stopOnSuccess) {
            ++controlOperationRef.current;
            setStatus("idle");
            setMode("none");
            setCameraCapabilities(null);
          } else {
            setStatus("scanning");
            setMode(service.getCurrentMode());
          }
          (perScanCallbacks.onSuccess ?? callbacksRef.current.onSuccess)?.(
            decodedValue,
            details
          );
        },
        onError: (scanError) => {
          if (!isCurrent(operation)) return;

          errorWasReported = true;
          setError(scanError);
          setStatus("error");
          setMode("none");
          setCameraCapabilities(null);
          (perScanCallbacks.onError ?? callbacksRef.current.onError)?.(
            scanError
          );
        },
        onCancel: () => {
          if (!isCurrent(operation)) return;

          setStatus("idle");
          setMode("none");
          setCameraCapabilities(null);
          (perScanCallbacks.onCancel ?? callbacksRef.current.onCancel)?.();
        },
        onDecodeError: (message) => {
          if (!isCurrent(operation)) return;
          (
            perScanCallbacks.onDecodeError ??
            callbacksRef.current.onDecodeError
          )?.(message);
        },
      };

      try {
        const pendingStart = service.start(scanOptions);
        await Promise.resolve();
        if (
          isCurrent(operation) &&
          service.getCurrentMode() === "wechat" &&
          service.getIsScanning()
        ) {
          setMode("wechat");
          setStatus("scanning");
        }

        await pendingStart;
        if (!isCurrent(operation)) return;

        const activeMode = service.getCurrentMode();
        setMode(activeMode);
        setStatus(service.getIsScanning() ? "scanning" : "idle");
        if (activeMode === "html5" && service.getIsScanning()) {
          setCameraPermission("granted");
          void refreshCameraPermission();
          if (service.getCameraCapabilities) {
            try {
              const capabilities = await service.getCameraCapabilities();
              if (
                isCurrent(operation) &&
                controlOperation === controlOperationRef.current
              ) {
                setCameraCapabilities(capabilities);
              }
            } catch {
              if (
                isCurrent(operation) &&
                controlOperation === controlOperationRef.current
              ) {
                setCameraCapabilities(null);
              }
            }
          }
        }
      } catch (startError) {
        const normalizedError = normalizeError(startError);
        if (isCurrent(operation)) {
          setError(normalizedError);
          setStatus("error");
          setMode("none");
          setCameraCapabilities(null);
          if (normalizedError.name === "NotAllowedError") {
            setCameraPermission("denied");
            void refreshCameraPermission();
          }
          if (!errorWasReported) {
            (
              perScanCallbacks.onError ?? callbacksRef.current.onError
            )?.(normalizedError);
          }
        }
        throw normalizedError;
      }
    },
    [isCurrent, refreshCameraPermission, requestedMode, service]
  );

  const stop = useCallback(async (): Promise<void> => {
    const operation = ++operationRef.current;
    ++controlOperationRef.current;
    if (mountedRef.current) {
      setStatus("stopping");
      setCameraCapabilities(null);
    }

    try {
      await service.stop();
      if (!isCurrent(operation)) return;
      setStatus("idle");
      setMode("none");
      setCameraCapabilities(null);
    } catch (stopError) {
      const normalizedError = normalizeError(stopError);
      if (isCurrent(operation)) {
        setError(normalizedError);
        setStatus("error");
        setMode("none");
        setCameraCapabilities(null);
        callbacksRef.current.onError?.(normalizedError);
      }
      throw normalizedError;
    }
  }, [isCurrent, service]);

  const pause = useCallback(async (): Promise<void> => {
    const operation = operationRef.current;
    try {
      await service.pause();
      if (isCurrent(operation)) setStatus("paused");
    } catch (pauseError) {
      const normalizedError = normalizeError(pauseError);
      if (isCurrent(operation)) {
        setError(normalizedError);
        callbacksRef.current.onError?.(normalizedError);
      }
      throw normalizedError;
    }
  }, [isCurrent, service]);

  const resume = useCallback(async (): Promise<void> => {
    const operation = operationRef.current;
    try {
      await service.resume();
      if (isCurrent(operation)) setStatus("scanning");
    } catch (resumeError) {
      const normalizedError = normalizeError(resumeError);
      if (isCurrent(operation)) {
        setError(normalizedError);
        callbacksRef.current.onError?.(normalizedError);
      }
      throw normalizedError;
    }
  }, [isCurrent, service]);

  const switchCamera = useCallback(
    async (cameraId?: string): Promise<QrcodeCamera> => {
      const lifecycleOperation = operationRef.current;
      const controlOperation = ++controlOperationRef.current;
      if (mountedRef.current) setCameraCapabilities(null);

      try {
        const camera = await service.switchCamera(cameraId);
        if (isCurrent(lifecycleOperation)) {
          setError(null);
          setMode(service.getCurrentMode());
          setStatus("scanning");
          setCameraPermission("granted");
          void refreshCameraPermission();
          if (service.getCameraCapabilities) {
            try {
              const capabilities = await service.getCameraCapabilities();
              if (
                isCurrent(lifecycleOperation) &&
                controlOperation === controlOperationRef.current
              ) {
                setCameraCapabilities(capabilities);
              }
            } catch {
              if (
                isCurrent(lifecycleOperation) &&
                controlOperation === controlOperationRef.current
              ) {
                setCameraCapabilities(null);
              }
            }
          }
        }
        return camera;
      } catch (switchError) {
        const normalizedError = normalizeError(switchError);
        if (isCurrent(lifecycleOperation)) {
          setError(normalizedError);
          if (normalizedError.name === "NotAllowedError") {
            setCameraPermission("denied");
            void refreshCameraPermission();
          }
          if (service.getCameraCapabilities && service.getIsScanning()) {
            try {
              const capabilities = await service.getCameraCapabilities();
              if (
                isCurrent(lifecycleOperation) &&
                controlOperation === controlOperationRef.current
              ) {
                setCameraCapabilities(capabilities);
              }
            } catch {
              // The original switch error remains the actionable failure.
            }
          }
          callbacksRef.current.onError?.(normalizedError);
        }
        throw normalizedError;
      }
    },
    [isCurrent, refreshCameraPermission, service]
  );

  const getCameras = useCallback(async (): Promise<QrcodeCamera[]> => {
    try {
      const cameras = await service.getCameras();
      if (mountedRef.current) {
        setError(null);
        setCameraPermission("granted");
        void refreshCameraPermission();
      }
      return cameras;
    } catch (cameraError) {
      const normalizedError = normalizeError(cameraError);
      if (mountedRef.current) {
        setError(normalizedError);
        if (normalizedError.name === "NotAllowedError") {
          setCameraPermission("denied");
          void refreshCameraPermission();
        }
        callbacksRef.current.onError?.(normalizedError);
      }
      throw normalizedError;
    }
  }, [refreshCameraPermission, service]);

  const scanImage = useCallback(
    async (
      file: File,
      imageOptions: QrcodeImageScanStartOptions = {}
    ): Promise<QrcodeScanResult> => {
      const {
        onSuccess: imageSuccess,
        onError: imageError,
        ...serviceOptions
      } = imageOptions;

      try {
        validateImageScanRequest(file, imageOptions);
        if (!service.scanImage) {
          throw new Error(
            "The configured QR code scan service does not support image scanning."
          );
        }
      } catch (validationError) {
        const normalizedError = normalizeError(validationError);
        if (mountedRef.current) {
          setError(normalizedError);
          (imageError ?? callbacksRef.current.onError)?.(normalizedError);
        }
        throw normalizedError;
      }

      const operation = ++operationRef.current;
      ++controlOperationRef.current;

      if (mountedRef.current) {
        setError(null);
        setResult(null);
        setScanResult(null);
        setCameraCapabilities(null);
        setMode("none");
        setStatus("decoding");
      }

      try {
        const details = await service.scanImage(file, serviceOptions);
        if (!isCurrent(operation)) return details;

        setResult(details.text);
        setScanResult(details);
        setStatus("idle");
        setMode("none");
        (imageSuccess ?? callbacksRef.current.onSuccess)?.(
          details.text,
          details
        );
        return details;
      } catch (imageScanError) {
        const normalizedError = normalizeError(imageScanError);
        if (isCurrent(operation)) {
          setError(normalizedError);
          setStatus("error");
          setMode("none");
          (imageError ?? callbacksRef.current.onError)?.(normalizedError);
        }
        throw normalizedError;
      }
    },
    [isCurrent, service]
  );

  const refreshCameraCapabilities = useCallback(async (): Promise<
    QrcodeCameraCapabilities | null
  > => {
    const operation = ++controlOperationRef.current;
    if (!service.getCameraCapabilities) {
      if (mountedRef.current) setCameraCapabilities(null);
      return null;
    }

    try {
      const capabilities = await service.getCameraCapabilities();
      if (
        mountedRef.current &&
        operation === controlOperationRef.current
      ) {
        setCameraCapabilities(capabilities);
        setError(null);
      }
      return capabilities;
    } catch (capabilityError) {
      const normalizedError = normalizeError(capabilityError);
      if (
        mountedRef.current &&
        operation === controlOperationRef.current
      ) {
        setError(normalizedError);
        callbacksRef.current.onError?.(normalizedError);
      }
      throw normalizedError;
    }
  }, [service]);

  const setTorch = useCallback(
    async (enabled: boolean): Promise<QrcodeCameraCapabilities> => {
      const operation = ++controlOperationRef.current;
      try {
        if (!service.setTorch) {
          throw new Error(
            "The configured QR code scan service does not support torch control."
          );
        }
        const capabilities = await service.setTorch(enabled);
        if (
          mountedRef.current &&
          operation === controlOperationRef.current
        ) {
          setCameraCapabilities(capabilities);
          setError(null);
        }
        return capabilities;
      } catch (torchError) {
        const normalizedError = normalizeError(torchError);
        if (
          mountedRef.current &&
          operation === controlOperationRef.current
        ) {
          setError(normalizedError);
          callbacksRef.current.onError?.(normalizedError);
        }
        throw normalizedError;
      }
    },
    [service]
  );

  const setZoom = useCallback(
    async (value: number): Promise<QrcodeCameraCapabilities> => {
      const operation = ++controlOperationRef.current;
      try {
        if (!service.setZoom) {
          throw new Error(
            "The configured QR code scan service does not support zoom control."
          );
        }
        const capabilities = await service.setZoom(value);
        if (
          mountedRef.current &&
          operation === controlOperationRef.current
        ) {
          setCameraCapabilities(capabilities);
          setError(null);
        }
        return capabilities;
      } catch (zoomError) {
        const normalizedError = normalizeError(zoomError);
        if (
          mountedRef.current &&
          operation === controlOperationRef.current
        ) {
          setError(normalizedError);
          callbacksRef.current.onError?.(normalizedError);
        }
        throw normalizedError;
      }
    },
    [service]
  );

  const clearResult = useCallback((): void => {
    setResult(null);
    setScanResult(null);
  }, []);

  const clearError = useCallback((): void => {
    setError(null);
    setStatus((currentStatus) =>
      currentStatus === "error"
        ? service.getIsScanning()
          ? "scanning"
          : "idle"
        : currentStatus
    );
  }, [service]);

  const reset = useCallback(async (): Promise<void> => {
    await stop();
    if (mountedRef.current) {
      setResult(null);
      setScanResult(null);
      setError(null);
    }
  }, [stop]);

  return {
    status,
    isScanning: isScanningStatus(status),
    isPaused: status === "paused",
    isDecodingImage: status === "decoding",
    result,
    scanResult,
    error,
    mode,
    cameraCapabilities,
    cameraPermission,
    isWechatEnv: environment.isWechatEnv,
    supportsNativeDetector: environment.supportsNativeDetector,
    start,
    stop,
    pause,
    resume,
    switchCamera,
    getCameras,
    scanImage,
    refreshCameraCapabilities,
    setTorch,
    setZoom,
    refreshCameraPermission,
    clearResult,
    clearError,
    reset,
  };
};

export { QrcodeScanService } from "./utils/qrcodeScanService";
export type {
  QrcodeCamera,
  QrcodeCameraCapabilities,
  QrcodeImageScanOptions,
  QrcodeScanActiveMode,
  QrcodeScanBox,
  QrcodeScanBounds,
  QrcodeScanContentType,
  QrcodeScanFormat,
  QrcodeScanMode,
  QrcodeScanOptions,
  QrcodeScanResult,
  QrcodeScanServiceLike,
  QrcodeScanServiceOptions,
  QrcodeScanSource,
  QrcodeScanStartOptions,
  QrcodeScanWechatAdapter,
  QrcodeWechatScanContext,
} from "./utils/qrcodeScanService";

export default useQrcodeScan;
