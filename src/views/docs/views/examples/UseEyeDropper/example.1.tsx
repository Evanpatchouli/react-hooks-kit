import useEyeDropper from "@hooks/useEyeDropper";
import { Button } from "@mui/material";
import { useState } from "react";

const View = () => {
  const { isSupported, sRGBHex, open } = useEyeDropper({ initialValue: "#ffffff" });
  const [error, setError] = useState("");

  return (
    <div>
      <Button
        disabled={!isSupported}
        onClick={() => {
          setError("");
          void open().catch((reason) => setError(String(reason)));
        }}
      >
        Pick a screen color
      </Button>
      <span style={{ marginLeft: 8, color: sRGBHex }}>Current color: {sRGBHex}</span>
      {error ? <p role="alert">{error}</p> : null}
    </div>
  );
};

const code = `
import useEyeDropper from "@hooks/useEyeDropper";
import { Button } from "@mui/material";

const View = () => {
  const { isSupported, sRGBHex, open } = useEyeDropper({ initialValue: "#ffffff" });

  return (
    <Button disabled={!isSupported} onClick={() => void open()}>
      Pick a screen color: {sRGBHex}
    </Button>
  );
};
`;

export default {
  code,
  View,
};
