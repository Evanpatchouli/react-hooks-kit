import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseQrcodeScanApi() {
  const params: Parameters<typeof ApiTable>[0]["rows"] = [
    {
      name: "options",
      type: "UseQrcodeScanOptions | QrcodeScanMode",
      defaultValue: "{}",
      desc: "Scanner mode, callbacks, and optional service adapter.",
      properties: [
        { name: "mode", type: "\"auto\" | \"wechat\" | \"html5\"", defaultValue: "auto", desc: "Preferred live scanning mode." },
        { name: "wechatAdapter", type: "QrcodeScanWechatAdapter", desc: "Application-owned WeChat JS-SDK bridge." },
        { name: "service", type: "QrcodeScanServiceLike", desc: "Stable custom scanning service used for the Hook lifetime." },
        { name: "onSuccess", type: "(result: string, details?: QrcodeScanResult) => void", desc: "Default success callback." },
        { name: "onError", type: "(error: Error) => void", desc: "Default operational error callback." },
        { name: "onCancel", type: "() => void", desc: "Default cancellation callback." },
        { name: "onDecodeError", type: "(message: string) => void", desc: "Callback for non-fatal frame decode misses." },
      ],
    },
  ];
  const returns: Parameters<typeof ApiTable>[0]["rows"] = [
    { name: "status", type: "QrcodeScanStatus", desc: "Current scanner lifecycle state." },
    { name: "isScanning", type: "boolean", desc: "Whether a live scan is starting, running, or paused." },
    { name: "isPaused", type: "boolean", desc: "Whether an HTML5 camera scan is paused." },
    { name: "isDecodingImage", type: "boolean", desc: "Whether an image file is being decoded." },
    { name: "result", type: "string | null", desc: "Latest decoded text, retained for compatibility." },
    { name: "scanResult", type: "QrcodeScanResult | null", desc: "Latest normalized scan result." },
    { name: "error", type: "Error | null", desc: "Latest operational or device-control error." },
    { name: "mode", type: "\"wechat\" | \"html5\" | \"none\"", desc: "Active live scanner mode." },
    { name: "cameraCapabilities", type: "QrcodeCameraCapabilities | null", desc: "Torch and zoom support for the active camera track." },
    { name: "cameraPermission", type: "QrcodeCameraPermissionState", desc: "Observable camera permission state." },
    { name: "isWechatEnv", type: "boolean", desc: "Whether the current user agent is WeChat." },
    { name: "supportsNativeDetector", type: "boolean", desc: "Whether the native BarcodeDetector API is available." },
    { name: "start", type: "(options?: QrcodeScanStartOptions) => Promise<void>", desc: "Start a live camera scan." },
    { name: "stop", type: "() => Promise<void>", desc: "Stop scanning and release resources." },
    { name: "pause", type: "() => Promise<void>", desc: "Pause an HTML5 camera scan." },
    { name: "resume", type: "() => Promise<void>", desc: "Resume a paused HTML5 camera scan." },
    { name: "switchCamera", type: "(cameraId?: string) => Promise<QrcodeCamera>", desc: "Select a camera or cycle to the next camera." },
    { name: "getCameras", type: "() => Promise<QrcodeCamera[]>", desc: "List available cameras and request permission when needed." },
    { name: "scanImage", type: "(file: File, options?: QrcodeImageScanStartOptions) => Promise<QrcodeScanResult>", desc: "Decode a QR code or barcode from an image without requesting camera permission." },
    { name: "refreshCameraCapabilities", type: "() => Promise<QrcodeCameraCapabilities | null>", desc: "Refresh the active camera capability snapshot." },
    { name: "setTorch", type: "(enabled: boolean) => Promise<QrcodeCameraCapabilities>", desc: "Enable or disable the active camera torch when supported." },
    { name: "setZoom", type: "(value: number) => Promise<QrcodeCameraCapabilities>", desc: "Apply a supported zoom value to the active camera." },
    { name: "refreshCameraPermission", type: "() => Promise<QrcodeCameraPermissionState>", desc: "Re-query camera permission without prompting." },
    { name: "clearResult", type: "() => void", desc: "Clear text and structured scan results." },
    { name: "clearError", type: "() => void", desc: "Clear the latest error." },
    { name: "reset", type: "() => Promise<void>", desc: "Stop scanning and clear result and error state." },
  ];
  return <>
    <SubTitle id="hook-api">API of useQrcodeScan</SubTitle>
    <SubTitle low top="20px">Parameters</SubTitle>
    <ApiTable param rows={params} />
    <SubTitle low top="20px">Return value (object)</SubTitle>
    <ApiTable return rows={returns} />
  </>;
}
