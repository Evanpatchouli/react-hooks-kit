import useEyeDropper from "@hooks/useEyeDropper";
import { useState } from "react";

const View = () => {
  const { isSupported, sRGBHex, open } = useEyeDropper({ initialValue: "#ffffff" });
  const [error, setError] = useState("");

  return (
    <div>
      <button
        disabled={!isSupported}
        onClick={() => {
          setError("");
          void open().catch((reason) => setError(String(reason)));
        }}
      >
        Pick a screen color
      </button>
      <span style={{ marginLeft: 8, color: sRGBHex }}>Current color: {sRGBHex}</span>
      {error ? <p role="alert">{error}</p> : null}
    </div>
  );
};

const code = `
import useEyeDropper from "@hooks/useEyeDropper";

const View = () => {
  const { isSupported, sRGBHex, open } = useEyeDropper({ initialValue: "#ffffff" });

  return (
    <button disabled={!isSupported} onClick={() => void open()}>
      Pick a screen color: {sRGBHex}
    </button>
  );
};
`;

export default {
  code,
  View,
};
