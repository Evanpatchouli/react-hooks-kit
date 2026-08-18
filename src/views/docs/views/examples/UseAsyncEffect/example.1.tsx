import useAsyncEffect from "@hooks/useAsyncEffect";
import { useState } from "react";

const View = () => {
  const [status, setStatus] = useState("Idle");

  useAsyncEffect(
    async () => {
      setStatus("Loading...");
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("Loaded successfully.");

      return () => {
        console.log("Async effect cleanup");
      };
    },
    [],
    {
      onError: (error) => setStatus(`Failed: ${String(error)}`),
      onFinally: () => console.log("Async effect finished"),
    }
  );

  return (
    <p>{status}</p>
  );
};

const code = `
import useAsyncEffect from "@hooks/useAsyncEffect";
import { useState } from "react";

const View = () => {
  const [status, setStatus] = useState("Idle");

  useAsyncEffect(
    async () => {
      setStatus("Loading...");
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("Loaded successfully.");

      return () => {
        console.log("Async effect cleanup");
      };
    },
    [],
    {
      onError: (error) => setStatus(\`Failed: \${String(error)}\`),
      onFinally: () => console.log("Async effect finished"),
    }
  );

  return <p>{status}</p>;
};
`;

export default {
  code,
  View,
};
