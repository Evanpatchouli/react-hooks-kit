import useFavicon from "@hooks/useFavicon";
import { useState } from "react";
import { Button } from "@mui/material";

const View = () => {
  const [status, setStatus] = useState<"online" | "offline">("online");

  useFavicon("/react-hooks-kit/favicon.ico", {
    badge: {
      content: "●",
      position: "bottom-right",
      bgColor: status === "online" ? "#00ff00" : "#ff0000",
      textColor: "#fff",
      size: 0.3
    }
  });

  return (
    <>
      <h3>Example 3: Status Indicator</h3>
      <p>Current status: <strong>{status}</strong></p>
      <Button variant="contained" onClick={() => setStatus(status === "online" ? "offline" : "online")}>
        Toggle Status
      </Button>
    </>
  );
};

const code = `import useFavicon from "@evanpatchouli/react-hooks-kit";
import { useState } from "react";

const View = () => {
  const [status, setStatus] = useState<"online" | "offline">("online");

  useFavicon("/favicon.ico", {
    badge: {
      content: "●",
      position: "bottom-right",
      bgColor: status === "online" ? "#00ff00" : "#ff0000",
      textColor: "#fff",
      size: 0.3
    }
  });

  return <div>Status: {status}</div>;
};`;

export default {
  code,
  View,
};
