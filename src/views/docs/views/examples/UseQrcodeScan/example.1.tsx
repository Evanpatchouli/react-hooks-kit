import { useQrcodeScan } from "@hooks/useQrcodeScan";

const View = () => {
  const scanner = useQrcodeScan();
  return <div>
    <div id="qr-reader-docs" style={{ minHeight: 80 }} />
    <button onClick={() => void scanner.start({ containerId: "qr-reader-docs" })}>Start camera</button>{" "}
    <button onClick={() => void scanner.stop()}>Stop</button>
    <p>Status: {scanner.status}</p>
    <p>Permission: {scanner.cameraPermission}</p>
    {scanner.scanResult ? <p>Result: {scanner.scanResult.text}</p> : null}
  </div>;
};

const code = `const scanner = useQrcodeScan();
await scanner.start({ containerId: "qr-reader" });
await scanner.stop();`;

export default { code, View };
