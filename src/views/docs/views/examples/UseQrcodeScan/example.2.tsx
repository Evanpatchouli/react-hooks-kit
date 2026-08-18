import { useQrcodeScan } from "@hooks/useQrcodeScan";
import { useState } from "react";

const View = () => {
  const scanner = useQrcodeScan();
  const [message, setMessage] = useState("Choose an image containing a QR code.");

  const scanFile = (file: File) => {
    setMessage("Decoding image...");
    void scanner
      .scanImage(file, { maxFileSize: 8 * 1024 * 1024 })
      .then((result) => setMessage(`Decoded: ${result.text}`))
      .catch((error) => setMessage(`Decode failed: ${String(error)}`));
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={(event) => {
          const file = event.currentTarget.files?.[0];
          if (file) scanFile(file);
        }}
      />
      <p>{message}</p>
      {scanner.scanResult ? <p>Format: {scanner.scanResult.format ?? "unknown"}</p> : null}
      <button onClick={() => { scanner.clearResult(); setMessage("Result cleared."); }}>
        Clear result
      </button>
    </div>
  );
};

const code = `
import { useQrcodeScan } from "@hooks/useQrcodeScan";

const View = () => {
  const scanner = useQrcodeScan();

  const scanFile = async (file: File) => {
    const result = await scanner.scanImage(file, {
      maxFileSize: 8 * 1024 * 1024,
    });
    console.log(result.text, result.format, result.bounds);
  };

  return (
    <input
      type="file"
      accept="image/*"
      onChange={(event) => {
        const file = event.currentTarget.files?.[0];
        if (file) void scanFile(file);
      }}
    />
  );
};
`;

export default { code, View };
