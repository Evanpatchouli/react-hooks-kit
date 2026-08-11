import { act, renderHook, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import useQrcodeScan, {
  QrcodeScanService,
  type QrcodeCameraCapabilities,
  type QrcodeScanActiveMode,
  type QrcodeScanOptions,
  type QrcodeScanResult,
  type QrcodeScanServiceLike,
} from "../../hooks/useQrcodeScan";

const originalMediaDevicesDescriptor = Object.getOwnPropertyDescriptor(
  navigator,
  "mediaDevices"
);
const originalPermissionsDescriptor = Object.getOwnPropertyDescriptor(
  navigator,
  "permissions"
);

const restoreNavigatorProperty = (
  property: "mediaDevices" | "permissions",
  descriptor: PropertyDescriptor | undefined
): void => {
  if (descriptor) {
    Object.defineProperty(navigator, property, descriptor);
  } else {
    delete (navigator as any)[property];
  }
};

const setNavigatorProperty = (
  property: "mediaDevices" | "permissions",
  value: unknown
): void => {
  Object.defineProperty(navigator, property, {
    configurable: true,
    value,
  });
};

const createCapabilities = (
  overrides: Partial<QrcodeCameraCapabilities> = {}
): QrcodeCameraCapabilities => ({
  torch: { supported: true, enabled: false },
  zoom: { supported: true, value: 1, min: 1, max: 4, step: 0.5 },
  ...overrides,
});

const createResult = (
  text: string,
  source: QrcodeScanResult["source"] = "camera"
): QrcodeScanResult => ({
  text,
  source,
  format: "qr_code",
  formatName: "QR_CODE",
  contentType: "url",
  bounds: { x: 1, y: 2, width: 30, height: 40 },
  decoderName: "ZXING",
  timestamp: 123,
});

const createDeferred = <T,>() => {
  let resolve!: (value: T) => void;
  let reject!: (reason?: unknown) => void;
  const promise = new Promise<T>((resolvePromise, rejectPromise) => {
    resolve = resolvePromise;
    reject = rejectPromise;
  });
  return { promise, resolve, reject };
};

afterEach(() => {
  restoreNavigatorProperty("mediaDevices", originalMediaDevicesDescriptor);
  restoreNavigatorProperty("permissions", originalPermissionsDescriptor);
});

const createMockService = () => {
  let mode: QrcodeScanActiveMode = "none";
  let scanning = false;
  let scanOptions: QrcodeScanOptions | null = null;

  const service: QrcodeScanServiceLike = {
    start: vi.fn(async (options) => {
      scanOptions = options;
      mode = options.mode === "wechat" ? "wechat" : "html5";
      scanning = true;
    }),
    stop: vi.fn(async () => {
      mode = "none";
      scanning = false;
    }),
    pause: vi.fn(async () => undefined),
    resume: vi.fn(async () => undefined),
    switchCamera: vi.fn(async () => ({ id: "rear", label: "Rear" })),
    getCameras: vi.fn(async () => [
      { id: "front", label: "Front" },
      { id: "rear", label: "Rear" },
    ]),
    getCurrentMode: vi.fn(() => mode),
    getIsScanning: vi.fn(() => scanning),
    getIsWechatEnv: vi.fn(() => false),
    getSupportsNativeDetector: vi.fn(() => true),
    destroy: vi.fn(async () => {
      mode = "none";
      scanning = false;
    }),
  };

  return {
    service,
    getScanOptions: () => scanOptions,
    setMode: (nextMode: QrcodeScanActiveMode) => {
      mode = nextMode;
    },
    setScanning: (nextScanning: boolean) => {
      scanning = nextScanning;
    },
  };
};

const createScanOptions = (
  overrides: Partial<QrcodeScanOptions> = {}
): QrcodeScanOptions => ({
  mode: "html5",
  containerId: "qr-reader",
  fps: 10,
  qrbox: 250,
  aspectRatio: 1,
  disableFlip: false,
  formats: ["qr_code"],
  useNativeDetector: true,
  verbose: false,
  stopOnSuccess: false,
  onSuccess: vi.fn(),
  ...overrides,
});

describe("useQrcodeScan", () => {
  it("starts with environment information from the service", () => {
    const { service } = createMockService();
    const { result } = renderHook(() => useQrcodeScan({ service }));

    expect(result.current.status).toBe("idle");
    expect(result.current.mode).toBe("none");
    expect(result.current.isScanning).toBe(false);
    expect(result.current.isWechatEnv).toBe(false);
    expect(result.current.supportsNativeDetector).toBe(true);
  });

  it("creates a structured fallback for services using the legacy success callback", async () => {
    const { service, getScanOptions } = createMockService();
    const legacyValues: string[] = [];
    const onSuccess = vi.fn((value: string) => {
      legacyValues.push(value);
    });
    const { result } = renderHook(() =>
      useQrcodeScan({ mode: "html5", service, onSuccess })
    );

    await act(async () => {
      await result.current.start({ containerId: "qr-reader" });
    });

    expect(service.start).toHaveBeenCalledOnce();
    expect(result.current.status).toBe("scanning");
    expect(result.current.mode).toBe("html5");

    act(() => {
      getScanOptions()!.onSuccess("https://example.com");
    });

    expect(result.current.result).toBe("https://example.com");
    expect(result.current.scanResult).toMatchObject({
      text: "https://example.com",
      source: "camera",
      format: null,
      contentType: null,
    });
    expect(legacyValues).toEqual(["https://example.com"]);
    expect(onSuccess).toHaveBeenCalledOnce();
  });

  it("preserves structured scanner details for state and callbacks", async () => {
    const { service, getScanOptions } = createMockService();
    const onSuccess = vi.fn();
    const details = createResult("https://example.com/details");
    const { result } = renderHook(() =>
      useQrcodeScan({ mode: "html5", service, onSuccess })
    );

    await act(async () => {
      await result.current.start({ containerId: "qr-reader" });
    });
    act(() => {
      getScanOptions()!.onSuccess(details.text, details);
    });

    expect(result.current.result).toBe(details.text);
    expect(result.current.scanResult).toBe(details);
    expect(onSuccess).toHaveBeenCalledWith(details.text, details);
  });

  it("commits only the first callback when stopOnSuccess is enabled", async () => {
    const { service, getScanOptions } = createMockService();
    const onSuccess = vi.fn();
    const first = createResult("first-result");
    const second = createResult("second-result");
    const { result } = renderHook(() =>
      useQrcodeScan({ mode: "html5", service, onSuccess })
    );

    await act(async () => {
      await result.current.start({
        containerId: "qr-reader",
        stopOnSuccess: true,
      });
    });
    act(() => {
      getScanOptions()!.onSuccess(first.text, first);
      getScanOptions()!.onSuccess(second.text, second);
    });

    expect(result.current.result).toBe(first.text);
    expect(result.current.scanResult).toBe(first);
    expect(result.current.status).toBe("idle");
    expect(result.current.mode).toBe("none");
    expect(onSuccess).toHaveBeenCalledOnce();
    expect(onSuccess).toHaveBeenCalledWith(first.text, first);
  });

  it("uses per-scan callbacks instead of shared callbacks", async () => {
    const { service, getScanOptions } = createMockService();
    const sharedSuccess = vi.fn();
    const scanSuccess = vi.fn();
    const { result } = renderHook(() =>
      useQrcodeScan({ service, onSuccess: sharedSuccess })
    );

    await act(async () => {
      await result.current.start({
        containerId: "qr-reader",
        onSuccess: scanSuccess,
      });
    });
    act(() => getScanOptions()!.onSuccess("value"));

    expect(scanSuccess).toHaveBeenCalledWith("value", expect.any(Object));
    expect(sharedSuccess).not.toHaveBeenCalled();
  });

  it("uses the latest shared callback without restarting the scanner", async () => {
    const { service, getScanOptions } = createMockService();
    const firstSuccess = vi.fn();
    const latestSuccess = vi.fn();
    const { result, rerender } = renderHook(
      ({ onSuccess }) => useQrcodeScan({ service, onSuccess }),
      { initialProps: { onSuccess: firstSuccess } }
    );

    await act(async () =>
      result.current.start({ containerId: "qr-reader" })
    );
    rerender({ onSuccess: latestSuccess });
    act(() => getScanOptions()!.onSuccess("latest"));

    expect(firstSuccess).not.toHaveBeenCalled();
    expect(latestSuccess).toHaveBeenCalledWith("latest", expect.any(Object));
    expect(service.start).toHaveBeenCalledOnce();
  });

  it("ignores callbacks from a superseded scan", async () => {
    const { service } = createMockService();
    const { result } = renderHook(() => useQrcodeScan({ service }));

    await act(async () =>
      result.current.start({ containerId: "qr-reader" })
    );
    await act(async () =>
      result.current.start({ containerId: "qr-reader" })
    );

    const startMock = vi.mocked(service.start);
    act(() => startMock.mock.calls[0][0].onSuccess("stale"));
    expect(result.current.result).toBeNull();

    act(() => startMock.mock.calls[1][0].onSuccess("current"));
    expect(result.current.result).toBe("current");
  });

  it("normalizes start failures and reports them once", async () => {
    const { service } = createMockService();
    const onError = vi.fn();
    service.start = vi.fn(async (options) => {
      const error = new Error("permission denied");
      options.onError?.(error);
      throw error;
    });
    const { result } = renderHook(() => useQrcodeScan({ service, onError }));

    await act(async () => {
      await expect(
        result.current.start({ containerId: "qr-reader" })
      ).rejects.toThrow("permission denied");
    });

    expect(result.current.status).toBe("error");
    expect(result.current.error?.message).toBe("permission denied");
    expect(onError).toHaveBeenCalledOnce();
  });

  it("marks camera permission denied after a NotAllowedError", async () => {
    const permissionStatus = {
      state: "denied",
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    };
    setNavigatorProperty("mediaDevices", {});
    setNavigatorProperty("permissions", {
      query: vi.fn(async () => permissionStatus),
    });
    const { service } = createMockService();
    const permissionError = new Error("camera permission denied");
    permissionError.name = "NotAllowedError";
    service.start = vi.fn(async () => {
      throw permissionError;
    });
    const { result } = renderHook(() => useQrcodeScan({ service }));

    await act(async () => {
      await expect(
        result.current.start({ containerId: "qr-reader" })
      ).rejects.toBe(permissionError);
    });

    expect(result.current.status).toBe("error");
    expect(result.current.cameraPermission).toBe("denied");
  });

  it("reports unsupported permission queries without failing the Hook", async () => {
    const query = vi.fn(async () => {
      throw new TypeError("camera permission is not queryable");
    });
    setNavigatorProperty("mediaDevices", {});
    setNavigatorProperty("permissions", { query });
    const { service } = createMockService();
    const { result } = renderHook(() => useQrcodeScan({ service }));

    expect(result.current.cameraPermission).toBe("unknown");
    await waitFor(() => {
      expect(result.current.cameraPermission).toBe("unsupported");
    });
    expect(query).toHaveBeenCalledWith({ name: "camera" });
    expect(result.current.error).toBeNull();
  });

  it("tracks pause, resume, stop, and reset state", async () => {
    const { service, getScanOptions } = createMockService();
    const { result } = renderHook(() => useQrcodeScan({ service }));

    await act(async () => result.current.start({ containerId: "qr-reader" }));
    act(() => getScanOptions()!.onSuccess("decoded"));
    await act(async () => result.current.pause());
    expect(result.current.isPaused).toBe(true);

    await act(async () => result.current.resume());
    expect(result.current.status).toBe("scanning");

    await act(async () => result.current.reset());
    expect(result.current.status).toBe("idle");
    expect(result.current.mode).toBe("none");
    expect(result.current.result).toBeNull();
    expect(result.current.error).toBeNull();
  });

  it("tracks image decoding lifecycle and stores the structured result", async () => {
    const { service } = createMockService();
    const details = createResult("image-result", "image");
    let resolveImage: ((result: QrcodeScanResult) => void) | undefined;
    service.scanImage = vi.fn(
      () =>
        new Promise<QrcodeScanResult>((resolve) => {
          resolveImage = resolve;
        })
    );
    const onSuccess = vi.fn();
    const { result } = renderHook(() =>
      useQrcodeScan({ service, onSuccess })
    );
    const file = new File(["image"], "code.png", { type: "image/png" });
    let pendingImage!: Promise<QrcodeScanResult>;

    act(() => {
      pendingImage = result.current.scanImage(file, { maxFileSize: 1024 });
    });
    expect(result.current.status).toBe("decoding");
    expect(result.current.isDecodingImage).toBe(true);

    await act(async () => {
      resolveImage!(details);
      await pendingImage;
    });

    expect(service.scanImage).toHaveBeenCalledWith(file, {
      maxFileSize: 1024,
    });
    expect(result.current.status).toBe("idle");
    expect(result.current.isDecodingImage).toBe(false);
    expect(result.current.result).toBe(details.text);
    expect(result.current.scanResult).toBe(details);
    expect(onSuccess).toHaveBeenCalledWith(details.text, details);
  });

  it("reports image decoding failures through state and the image callback", async () => {
    const { service } = createMockService();
    service.scanImage = vi.fn(async () => {
      throw "unreadable image";
    });
    const sharedError = vi.fn();
    const imageError = vi.fn();
    const { result } = renderHook(() =>
      useQrcodeScan({ service, onError: sharedError })
    );

    await act(async () => {
      await expect(
        result.current.scanImage(
          new File(["bad"], "bad.png", { type: "image/png" }),
          { onError: imageError }
        )
      ).rejects.toThrow("unreadable image");
    });

    expect(result.current.status).toBe("error");
    expect(result.current.isDecodingImage).toBe(false);
    expect(result.current.error?.message).toBe("unreadable image");
    expect(imageError).toHaveBeenCalledWith(result.current.error);
    expect(sharedError).not.toHaveBeenCalled();
  });

  it("refreshes camera capabilities and mirrors torch and zoom updates", async () => {
    const { service } = createMockService();
    const initialCapabilities = createCapabilities();
    const torchCapabilities = createCapabilities({
      torch: { supported: true, enabled: true },
    });
    const zoomCapabilities = createCapabilities({
      zoom: { supported: true, value: 3, min: 1, max: 4, step: 0.5 },
    });
    service.getCameraCapabilities = vi.fn(async () => initialCapabilities);
    service.setTorch = vi.fn(async () => torchCapabilities);
    service.setZoom = vi.fn(async () => zoomCapabilities);
    const { result } = renderHook(() => useQrcodeScan({ service }));

    await act(async () => {
      await result.current.start({ containerId: "qr-reader" });
    });
    expect(result.current.cameraCapabilities).toBe(initialCapabilities);

    await act(async () => {
      await result.current.setTorch(true);
    });
    expect(service.setTorch).toHaveBeenCalledWith(true);
    expect(result.current.cameraCapabilities).toBe(torchCapabilities);

    await act(async () => {
      await result.current.setZoom(3);
    });
    expect(service.setZoom).toHaveBeenCalledWith(3);
    expect(result.current.cameraCapabilities).toBe(zoomCapabilities);
  });

  it("queries camera permission, reacts to changes, and removes its listener", async () => {
    let changeListener: (() => void) | undefined;
    const permissionStatus = {
      state: "prompt",
      addEventListener: vi.fn(
        (_type: string, listener: () => void) => {
          changeListener = listener;
        }
      ),
      removeEventListener: vi.fn(),
    };
    const query = vi.fn(async () => permissionStatus);
    setNavigatorProperty("mediaDevices", {});
    setNavigatorProperty("permissions", { query });
    const { service } = createMockService();
    const { result, unmount } = renderHook(() => useQrcodeScan({ service }));

    expect(result.current.cameraPermission).toBe("unknown");
    await waitFor(() => {
      expect(result.current.cameraPermission).toBe("prompt");
    });
    expect(query).toHaveBeenCalledWith({ name: "camera" });
    expect(permissionStatus.addEventListener).toHaveBeenCalledWith(
      "change",
      expect.any(Function)
    );

    act(() => {
      permissionStatus.state = "denied";
      changeListener!();
    });
    expect(result.current.cameraPermission).toBe("denied");

    unmount();
    expect(permissionStatus.removeEventListener).toHaveBeenCalledWith(
      "change",
      changeListener
    );
  });

  it("reports unsupported optional capabilities on a custom service", async () => {
    const { service } = createMockService();
    const onError = vi.fn();
    const { result } = renderHook(() => useQrcodeScan({ service, onError }));

    await act(async () => {
      await expect(result.current.refreshCameraCapabilities()).resolves.toBeNull();
    });
    expect(result.current.cameraCapabilities).toBeNull();

    await act(async () => {
      await expect(result.current.setTorch(true)).rejects.toThrow(
        "does not support torch control"
      );
      await expect(result.current.setZoom(2)).rejects.toThrow(
        "does not support zoom control"
      );
      await expect(
        result.current.scanImage(
          new File(["image"], "code.png", { type: "image/png" })
        )
      ).rejects.toThrow("does not support image scanning");
    });

    expect(onError).toHaveBeenCalledTimes(3);
    expect(result.current.status).toBe("idle");
    expect(result.current.error?.message).toContain("image scanning");
  });

  it("keeps a live custom scanner active when image scanning is unsupported", async () => {
    const { service } = createMockService();
    const onError = vi.fn();
    const { result } = renderHook(() => useQrcodeScan({ service, onError }));

    await act(async () => {
      await result.current.start({ containerId: "qr-reader" });
    });
    expect(result.current.status).toBe("scanning");
    expect(result.current.mode).toBe("html5");

    await act(async () => {
      await expect(
        result.current.scanImage(
          new File(["image"], "code.png", { type: "image/png" })
        )
      ).rejects.toThrow("does not support image scanning");
    });

    expect(result.current.status).toBe("scanning");
    expect(result.current.mode).toBe("html5");
    expect(result.current.isScanning).toBe(true);
    expect(result.current.error?.message).toContain("image scanning");
    expect(onError).toHaveBeenCalledOnce();
  });

  it("destroys its own service when unmounted", () => {
    const { service } = createMockService();
    const { unmount } = renderHook(() => useQrcodeScan({ service }));

    unmount();

    expect(service.destroy).toHaveBeenCalledOnce();
  });
});

describe("QrcodeScanService", () => {
  const originalBarcodeDetector = (window as any).BarcodeDetector;
  const fakeInstances: FakeHtml5Qrcode[] = [];

  class FakeHtml5Qrcode {
    public static cameras = [
      { id: "front", label: "Front" },
      { id: "rear", label: "Rear" },
    ];

    public static getCamerasImplementation:
      | (() => Promise<Array<{ id: string; label: string }>>)
      | undefined;

    public static async getCameras() {
      if (FakeHtml5Qrcode.getCamerasImplementation) {
        return FakeHtml5Qrcode.getCamerasImplementation();
      }
      return FakeHtml5Qrcode.cameras;
    }

    public static startImplementation: (() => Promise<null>) | undefined;
    public static scanFileError: unknown;
    public static scanFileImplementation:
      | (() => Promise<typeof FakeHtml5Qrcode.scanFileResult>)
      | undefined;
    public static scanFileResult = {
      decodedText: "https://example.com/image",
      result: {
        format: { format: 0, formatName: "QR_CODE" },
        decodedTextType: 1,
        bounds: { x: 1, y: 2, width: 30, height: 40 },
        debugData: { decoderName: "ZXING" },
      },
    };

    public isScanning = false;
    public start = vi.fn(
      async (
        camera: string | MediaTrackConstraints,
        _configuration: unknown,
        _onSuccess: (value: string) => void,
        _onError: (message: string) => void
      ) => {
        this.camera = camera;
        this.isScanning = true;
        if (FakeHtml5Qrcode.startImplementation) {
          return FakeHtml5Qrcode.startImplementation();
        }
        return null;
      }
    );
    public stop = vi.fn(async () => {
      this.isScanning = false;
    });
    public scanFileV2 = vi.fn(async (_file: File, _showImage: boolean) => {
      if (FakeHtml5Qrcode.scanFileImplementation) {
        return FakeHtml5Qrcode.scanFileImplementation();
      }
      if (FakeHtml5Qrcode.scanFileError !== undefined) {
        throw FakeHtml5Qrcode.scanFileError;
      }
      return FakeHtml5Qrcode.scanFileResult;
    });
    public clear = vi.fn();
    public pause = vi.fn();
    public resume = vi.fn();
    public applyVideoConstraints = vi.fn(
      async (constraints: MediaTrackConstraints) => {
        const advanced = constraints.advanced?.[0] as
          | { torch?: boolean; zoom?: number }
          | undefined;
        if (typeof advanced?.torch === "boolean") {
          this.settings.torch = advanced.torch;
        }
        if (typeof advanced?.zoom === "number") {
          this.settings.zoom = advanced.zoom;
        }
      }
    );
    public camera: string | MediaTrackConstraints = "front";
    public capabilities: Record<string, unknown> = {
      torch: [false, true],
      zoom: { min: 1, max: 4, step: 0.5 },
    };
    public settings: Record<string, unknown> = {
      torch: false,
      zoom: 1,
    };

    public constructor(
      public readonly containerId: string,
      public readonly config: unknown
    ) {
      fakeInstances.push(this);
    }

    public getRunningTrackSettings(): MediaTrackSettings {
      return {
        ...this.settings,
        deviceId: typeof this.camera === "string" ? this.camera : "front",
      } as MediaTrackSettings;
    }

    public getRunningTrackCapabilities(): MediaTrackCapabilities {
      return this.capabilities as MediaTrackCapabilities;
    }
  }

  const fakeModule = {
    Html5Qrcode: FakeHtml5Qrcode,
    Html5QrcodeSupportedFormats: {
      QR_CODE: 0,
      AZTEC: 1,
      CODABAR: 2,
      CODE_39: 3,
      CODE_93: 4,
      CODE_128: 5,
      DATA_MATRIX: 6,
      MAXICODE: 7,
      ITF: 8,
      EAN_13: 9,
      EAN_8: 10,
      PDF_417: 11,
      RSS_14: 12,
      RSS_EXPANDED: 13,
      UPC_A: 14,
      UPC_E: 15,
      UPC_EAN_EXTENSION: 16,
    },
  };

  afterEach(() => {
    fakeInstances.length = 0;
    FakeHtml5Qrcode.getCamerasImplementation = undefined;
    FakeHtml5Qrcode.startImplementation = undefined;
    FakeHtml5Qrcode.scanFileError = undefined;
    FakeHtml5Qrcode.scanFileImplementation = undefined;
    document.body.innerHTML = "";
    (window as any).BarcodeDetector = originalBarcodeDetector;
  });

  it("loads html5-qrcode lazily and starts with mapped formats", async () => {
    document.body.innerHTML = '<div id="qr-reader"></div>';
    (window as any).BarcodeDetector = class {};
    const loader = vi.fn(async () => fakeModule as any);
    const service = new QrcodeScanService({ loadHtml5Qrcode: loader });
    const options = createScanOptions({ formats: ["qr_code", "code_128"] });

    expect(loader).not.toHaveBeenCalled();
    await service.start(options);

    expect(loader).toHaveBeenCalledOnce();
    expect(service.getCurrentMode()).toBe("html5");
    expect(service.getIsScanning()).toBe(true);
    expect(fakeInstances[0].containerId).toMatch(
      /^react-hooks-kit-qrcode-scanner-/
    );
    expect(document.getElementById(fakeInstances[0].containerId)?.parentElement)
      .toBe(document.getElementById("qr-reader"));
    expect(fakeInstances[0].config).toMatchObject({
      formatsToSupport: [0, 5],
      useBarCodeDetectorIfSupported: true,
    });
  });

  it("falls back when BarcodeDetector exists but cannot be constructed", async () => {
    document.body.innerHTML = '<div id="qr-reader"></div>';
    (window as any).BarcodeDetector = class {
      public constructor() {
        throw new Error("unsupported format");
      }
    };
    const service = new QrcodeScanService({
      loadHtml5Qrcode: async () => fakeModule as any,
    });

    expect(service.getSupportsNativeDetector()).toBe(false);
    await service.start(createScanOptions({ useNativeDetector: true }));

    expect(fakeInstances[0].config).toMatchObject({
      useBarCodeDetectorIfSupported: false,
    });
  });

  it("stops and clears a scanner whose pending start finishes after stop", async () => {
    document.body.innerHTML = '<div id="qr-reader"></div>';
    const deferredStart = createDeferred<null>();
    FakeHtml5Qrcode.startImplementation = () => deferredStart.promise;
    const service = new QrcodeScanService({
      loadHtml5Qrcode: async () => fakeModule as any,
    });

    const pendingStart = service.start(createScanOptions());
    await waitFor(() => expect(fakeInstances).toHaveLength(1));
    const scanner = fakeInstances[0];
    await service.stop();

    expect(scanner.stop).not.toHaveBeenCalled();
    expect(scanner.clear).not.toHaveBeenCalled();

    deferredStart.resolve(null);
    await pendingStart;

    expect(scanner.stop).toHaveBeenCalledOnce();
    expect(scanner.clear).toHaveBeenCalledOnce();
    expect(service.getCurrentMode()).toBe("none");
    expect(service.getIsScanning()).toBe(false);
  });

  it("keeps a newer scanner container when an older pending scanner clears late", async () => {
    document.body.innerHTML = '<div id="qr-reader"></div>';
    const host = document.getElementById("qr-reader")!;
    const deferredFirstStart = createDeferred<null>();
    let startCount = 0;
    FakeHtml5Qrcode.startImplementation = () => {
      ++startCount;
      return startCount === 1
        ? deferredFirstStart.promise
        : Promise.resolve(null);
    };
    const service = new QrcodeScanService({
      loadHtml5Qrcode: async () => fakeModule as any,
    });

    const pendingFirstStart = service.start(createScanOptions());
    await waitFor(() => expect(fakeInstances).toHaveLength(1));
    const firstScanner = fakeInstances[0];
    const firstContainer = document.getElementById(firstScanner.containerId)!;

    await service.stop();
    expect(firstContainer.hidden).toBe(true);
    expect(firstContainer.parentElement).toBe(host);

    await service.start(createScanOptions());
    const secondScanner = fakeInstances[1];
    const secondContainer = document.getElementById(secondScanner.containerId)!;
    expect(secondContainer.parentElement).toBe(host);
    expect(secondContainer).not.toBe(firstContainer);

    deferredFirstStart.resolve(null);
    await pendingFirstStart;

    expect(firstScanner.stop).toHaveBeenCalledOnce();
    expect(firstScanner.clear).toHaveBeenCalledOnce();
    expect(document.getElementById(firstScanner.containerId)).toBeNull();
    expect(document.getElementById(secondScanner.containerId)).toBe(
      secondContainer
    );
    expect(secondScanner.clear).not.toHaveBeenCalled();
    expect(service.getCurrentMode()).toBe("html5");
    expect(service.getIsScanning()).toBe(true);

    await service.stop();
  });

  it("normalizes camera decoder metadata into a structured result", async () => {
    document.body.innerHTML = '<div id="qr-reader"></div>';
    const onSuccess = vi.fn();
    const service = new QrcodeScanService({
      loadHtml5Qrcode: async () => fakeModule as any,
    });
    await service.start(createScanOptions({ onSuccess }));
    const cameraSuccess = fakeInstances[0].start.mock.calls[0][2] as unknown as (
      text: string,
      rawResult: typeof FakeHtml5Qrcode.scanFileResult
    ) => void;

    cameraSuccess(
      FakeHtml5Qrcode.scanFileResult.decodedText,
      FakeHtml5Qrcode.scanFileResult
    );

    expect(onSuccess).toHaveBeenCalledWith(
      "https://example.com/image",
      expect.objectContaining({
        text: "https://example.com/image",
        source: "camera",
        format: "qr_code",
        formatName: "QR_CODE",
        contentType: "url",
        bounds: { x: 1, y: 2, width: 30, height: 40 },
        decoderName: "ZXING",
        timestamp: expect.any(Number),
      })
    );
  });

  it("decodes an image in a temporary hidden container and removes it", async () => {
    const service = new QrcodeScanService({
      loadHtml5Qrcode: async () => fakeModule as any,
    });
    const file = new File(["image"], "code.png", { type: "image/png" });

    const details = await service.scanImage(file);
    const scanner = fakeInstances[0];

    expect(scanner.scanFileV2).toHaveBeenCalledWith(file, false);
    expect(scanner.containerId).toMatch(/^react-hooks-kit-qrcode-scanner-/);
    expect(document.getElementById(scanner.containerId)).toBeNull();
    expect(scanner.clear).toHaveBeenCalledOnce();
    expect(details).toMatchObject({
      text: "https://example.com/image",
      source: "image",
      format: "qr_code",
      contentType: "url",
      decoderName: "ZXING",
    });
  });

  it("keeps an explicit image preview until stop clears the scanner", async () => {
    document.body.innerHTML = '<div id="image-preview"></div>';
    const preview = document.getElementById("image-preview");
    const service = new QrcodeScanService({
      loadHtml5Qrcode: async () => fakeModule as any,
    });
    const file = new File(["image"], "code.png", { type: "image/png" });

    await service.scanImage(file, {
      containerId: "image-preview",
      showImage: true,
    });
    const scanner = fakeInstances[0];
    const ownedPreview = document.getElementById(scanner.containerId);

    expect(scanner.scanFileV2).toHaveBeenCalledWith(file, true);
    expect(document.getElementById("image-preview")).toBe(preview);
    expect(ownedPreview?.parentElement).toBe(preview);
    expect(scanner.clear).not.toHaveBeenCalled();

    await service.stop();
    expect(scanner.clear).toHaveBeenCalledOnce();
    expect(document.getElementById("image-preview")).toBe(preview);
    expect(document.getElementById(scanner.containerId)).toBeNull();
  });

  it("removes its temporary image container after a decode failure", async () => {
    FakeHtml5Qrcode.scanFileError = new Error("decode failed");
    const service = new QrcodeScanService({
      loadHtml5Qrcode: async () => fakeModule as any,
    });

    await expect(
      service.scanImage(
        new File(["image"], "code.png", { type: "image/png" })
      )
    ).rejects.toThrow("decode failed");

    const scanner = fakeInstances[0];
    expect(document.getElementById(scanner.containerId)).toBeNull();
    expect(scanner.clear).toHaveBeenCalledOnce();
  });

  it("stops an active camera before decoding an image", async () => {
    document.body.innerHTML = '<div id="qr-reader"></div>';
    const service = new QrcodeScanService({
      loadHtml5Qrcode: async () => fakeModule as any,
    });
    await service.start(createScanOptions());
    const cameraScanner = fakeInstances[0];

    const details = await service.scanImage(
      new File(["image"], "code.png", { type: "image/png" })
    );

    expect(cameraScanner.stop).toHaveBeenCalledOnce();
    expect(cameraScanner.clear).toHaveBeenCalledOnce();
    expect(details.source).toBe("image");
    expect(service.getCurrentMode()).toBe("none");
    expect(service.getIsScanning()).toBe(false);
  });

  it("rejects non-image files and files over the configured size limit", async () => {
    const service = new QrcodeScanService({
      loadHtml5Qrcode: async () => fakeModule as any,
    });

    await expect(
      service.scanImage(
        new File(["plain text"], "code.txt", { type: "text/plain" })
      )
    ).rejects.toThrow("only accepts image files");
    await expect(
      service.scanImage(
        new File(["12345"], "code.png", { type: "image/png" }),
        { maxFileSize: 4 }
      )
    ).rejects.toThrow("exceeds the 4 byte limit");
    expect(fakeInstances).toHaveLength(0);
  });

  it("keeps a live camera running when an image request is invalid", async () => {
    document.body.innerHTML = '<div id="qr-reader"></div>';
    const service = new QrcodeScanService({
      loadHtml5Qrcode: async () => fakeModule as any,
    });
    await service.start(createScanOptions());
    const scanner = fakeInstances[0];

    await expect(
      service.scanImage(
        new File(["plain text"], "code.txt", { type: "text/plain" })
      )
    ).rejects.toThrow("only accepts image files");

    expect(fakeInstances).toHaveLength(1);
    expect(scanner.stop).not.toHaveBeenCalled();
    expect(scanner.clear).not.toHaveBeenCalled();
    expect(scanner.isScanning).toBe(true);
    expect(service.getCurrentMode()).toBe("html5");
    expect(service.getIsScanning()).toBe(true);
  });

  it("rejects a pending image with AbortError after stop", async () => {
    const deferred = createDeferred<typeof FakeHtml5Qrcode.scanFileResult>();
    FakeHtml5Qrcode.scanFileImplementation = () => deferred.promise;
    const service = new QrcodeScanService({
      loadHtml5Qrcode: async () => fakeModule as any,
    });
    const pendingImage = service.scanImage(
      new File(["image"], "code.png", { type: "image/png" })
    );
    await waitFor(() => expect(fakeInstances).toHaveLength(1));
    const scanner = fakeInstances[0];
    const rejection = expect(pendingImage).rejects.toMatchObject({
      name: "AbortError",
      message: "Image scan was superseded by a newer operation.",
    });

    await service.stop();
    deferred.resolve(FakeHtml5Qrcode.scanFileResult);
    await rejection;

    expect(scanner.clear).toHaveBeenCalledOnce();
    expect(service.getCurrentMode()).toBe("none");
    expect(service.getIsScanning()).toBe(false);
  });

  it("rejects a late image result without replacing a newer camera scan", async () => {
    document.body.innerHTML = '<div id="qr-reader"></div>';
    const deferred = createDeferred<typeof FakeHtml5Qrcode.scanFileResult>();
    FakeHtml5Qrcode.scanFileImplementation = () => deferred.promise;
    const service = new QrcodeScanService({
      loadHtml5Qrcode: async () => fakeModule as any,
    });
    const pendingImage = service.scanImage(
      new File(["image"], "code.png", { type: "image/png" })
    );
    await waitFor(() => expect(fakeInstances).toHaveLength(1));
    const imageScanner = fakeInstances[0];
    const rejection = expect(pendingImage).rejects.toMatchObject({
      name: "AbortError",
    });

    await service.start(createScanOptions());
    const cameraScanner = fakeInstances[1];
    deferred.resolve(FakeHtml5Qrcode.scanFileResult);
    await rejection;

    expect(imageScanner.clear).toHaveBeenCalledOnce();
    expect(cameraScanner.isScanning).toBe(true);
    expect(service.getCurrentMode()).toBe("html5");
    expect(service.getIsScanning()).toBe(true);
  });

  it("returns null capabilities when no camera scan is active", async () => {
    const loader = vi.fn(async () => fakeModule as any);
    const service = new QrcodeScanService({ loadHtml5Qrcode: loader });

    await expect(service.getCameraCapabilities()).resolves.toBeNull();
    expect(loader).not.toHaveBeenCalled();
  });

  it("reads camera capabilities and applies torch and zoom constraints", async () => {
    document.body.innerHTML = '<div id="qr-reader"></div>';
    const service = new QrcodeScanService({
      loadHtml5Qrcode: async () => fakeModule as any,
    });
    await service.start(createScanOptions());
    const scanner = fakeInstances[0];

    await expect(service.getCameraCapabilities()).resolves.toEqual(
      createCapabilities()
    );
    await expect(service.setTorch(true)).resolves.toMatchObject({
      torch: { supported: true, enabled: true },
    });
    expect(scanner.applyVideoConstraints).toHaveBeenCalledWith({
      advanced: [{ torch: true }],
    });

    await expect(service.setZoom(3)).resolves.toMatchObject({
      zoom: { supported: true, value: 3, min: 1, max: 4, step: 0.5 },
    });
    expect(scanner.applyVideoConstraints).toHaveBeenCalledWith({
      advanced: [{ zoom: 3 }],
    });
  });

  it("rejects unsupported torch and invalid zoom constraints", async () => {
    document.body.innerHTML = '<div id="qr-reader"></div>';
    const service = new QrcodeScanService({
      loadHtml5Qrcode: async () => fakeModule as any,
    });
    await service.start(createScanOptions());
    const scanner = fakeInstances[0];

    scanner.capabilities.torch = false;
    await expect(service.setTorch(true)).rejects.toThrow(
      "does not support torch control"
    );
    await expect(service.setZoom(5)).rejects.toThrow(
      "must be between 1 and 4"
    );
    await expect(service.setZoom(Number.NaN)).rejects.toThrow(
      "must be a finite number"
    );
    expect(scanner.applyVideoConstraints).not.toHaveBeenCalled();
  });

  it("does not treat a true-only torch capability as bidirectional control", async () => {
    document.body.innerHTML = '<div id="qr-reader"></div>';
    const service = new QrcodeScanService({
      loadHtml5Qrcode: async () => fakeModule as any,
    });
    await service.start(createScanOptions());
    const scanner = fakeInstances[0];
    scanner.capabilities.torch = [true];

    await expect(service.getCameraCapabilities()).resolves.toMatchObject({
      torch: { supported: false, enabled: false },
    });
    await expect(service.setTorch(false)).rejects.toThrow(
      "does not support torch control"
    );
    expect(scanner.applyVideoConstraints).not.toHaveBeenCalled();
  });

  it("switches to a requested or next camera and preserves scan options", async () => {
    document.body.innerHTML = '<div id="qr-reader"></div>';
    const service = new QrcodeScanService({
      loadHtml5Qrcode: async () => fakeModule as any,
    });
    await service.start(createScanOptions({ camera: "front", fps: 18 }));

    const nextCamera = await service.switchCamera();

    expect(nextCamera.id).toBe("rear");
    expect(fakeInstances).toHaveLength(2);
    expect(fakeInstances[0].stop).toHaveBeenCalledOnce();
    expect(fakeInstances[1].start).toHaveBeenCalledWith(
      "rear",
      expect.objectContaining({ fps: 18 }),
      expect.any(Function),
      expect.any(Function)
    );
  });

  it("aborts a camera switch stopped while camera enumeration is pending", async () => {
    document.body.innerHTML = '<div id="qr-reader"></div>';
    const service = new QrcodeScanService({
      loadHtml5Qrcode: async () => fakeModule as any,
    });
    await service.start(createScanOptions({ camera: "front" }));
    const runningScanner = fakeInstances[0];
    const deferredCameras =
      createDeferred<Array<{ id: string; label: string }>>();
    FakeHtml5Qrcode.getCamerasImplementation = () => deferredCameras.promise;

    const pendingSwitch = service.switchCamera();
    const rejection = expect(pendingSwitch).rejects.toMatchObject({
      name: "AbortError",
      message: "Camera switch was superseded by a newer operation.",
    });
    await service.stop();
    deferredCameras.resolve(FakeHtml5Qrcode.cameras);
    await rejection;

    expect(fakeInstances).toHaveLength(1);
    expect(runningScanner.start).toHaveBeenCalledOnce();
    expect(runningScanner.stop).toHaveBeenCalledOnce();
    expect(runningScanner.clear).toHaveBeenCalledOnce();
    expect(service.getCurrentMode()).toBe("none");
    expect(service.getIsScanning()).toBe(false);
  });

  it("uses the WeChat adapter only when it is available", async () => {
    const onSuccess = vi.fn();
    const scan = vi.fn(async () => "wechat-result");
    const service = new QrcodeScanService({
      wechatAdapter: { scan },
      isWechatEnvironment: () => true,
      loadHtml5Qrcode: vi.fn(async () => fakeModule as any),
    });

    await service.start(
      createScanOptions({ mode: "auto", containerId: undefined, onSuccess })
    );

    expect(scan).toHaveBeenCalledOnce();
    expect(onSuccess).toHaveBeenCalledWith(
      "wechat-result",
      expect.objectContaining({
        text: "wechat-result",
        source: "wechat",
        timestamp: expect.any(Number),
      })
    );
    expect(service.getCurrentMode()).toBe("none");
    expect(service.getIsScanning()).toBe(false);
  });

  it("aborts a pending WeChat scan and ignores its late result", async () => {
    let resolveScan: ((value: string | null) => void) | undefined;
    let scanSignal: AbortSignal | undefined;
    const cancel = vi.fn();
    const onSuccess = vi.fn();
    const service = new QrcodeScanService({
      wechatAdapter: {
        cancel,
        scan: ({ signal }) => {
          scanSignal = signal;
          return new Promise((resolve) => {
            resolveScan = resolve;
          });
        },
      },
      isWechatEnvironment: () => true,
    });

    const pendingStart = service.start(
      createScanOptions({ mode: "auto", containerId: undefined, onSuccess })
    );
    await Promise.resolve();
    await service.stop();

    expect(scanSignal?.aborted).toBe(true);
    expect(cancel).toHaveBeenCalledOnce();
    resolveScan!("late-result");
    await pendingStart;
    expect(onSuccess).not.toHaveBeenCalled();
  });

  it("invalidates a pending dynamic import when stopped", async () => {
    document.body.innerHTML = '<div id="qr-reader"></div>';
    let resolveModule: ((module: any) => void) | undefined;
    const loader = vi.fn(
      () =>
        new Promise<any>((resolve) => {
          resolveModule = resolve;
        })
    );
    const service = new QrcodeScanService({ loadHtml5Qrcode: loader });

    const pendingStart = service.start(createScanOptions());
    await Promise.resolve();
    await service.stop();
    resolveModule!(fakeModule);
    await pendingStart;

    expect(fakeInstances).toHaveLength(0);
    expect(service.getCurrentMode()).toBe("none");
  });
});
