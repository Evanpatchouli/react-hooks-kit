import useMount from "@hooks/useMount";
import { useState } from "react";

const View = () => {
  const [status, setStatus] = useState("Waiting for mount...");

  useMount(
    () => {
      setStatus("Mounted and initialized.");

      return () => {
        console.log("The mount effect was cleaned up.");
      };
    },
    (error) => {
      setStatus(`Initialization failed: ${String(error)}`);
    }
  );

  return <p>{status}</p>;
};

const code = `
import useMount from "@hooks/useMount";
import { useState } from "react";

const View = () => {
  const [status, setStatus] = useState("Waiting for mount...");

  useMount(
    () => {
      setStatus("Mounted and initialized.");

      return () => {
        console.log("The mount effect was cleaned up.");
      };
    },
    (error) => {
      setStatus(\`Initialization failed: \${String(error)}\`);
    }
  );

  return <p>{status}</p>;
};
`;

export default {
  code,
  View,
};
