import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseQrcodeScanApi() {
  const params: Parameters<typeof ApiTable>[0]["rows"] = [
    { name: "options", type: "UseQrcodeScanOptions | QrcodeScanMode", defaultValue: "{}", desc: "Scanner mode, callbacks, and optional service adapter." },
  ];
  const returns: Parameters<typeof ApiTable>[0]["rows"] = [
    { name: "status", type: "QrcodeScanStatus", desc: "Current scanner lifecycle state." },
    { name: "scanResult", type: "QrcodeScanResult | null", desc: "Latest normalized scan result." },
    { name: "start", type: "(options?) => Promise<void>", desc: "Start a live camera scan." },
    { name: "stop", type: "() => Promise<void>", desc: "Stop scanning and release resources." },
    { name: "scanImage", type: "(file, options?) => Promise<QrcodeScanResult>", desc: "Decode a QR code or barcode from an image." },
  ];
  return <>
    <SubTitle id="hook-api">API of useQrcodeScan</SubTitle>
    <SubTitle low top="20px">Parameters</SubTitle>
    <ApiTable param rows={params} />
    <SubTitle low top="20px">ReturnValue (Object)</SubTitle>
    <ApiTable return rows={returns} />
  </>;
}
