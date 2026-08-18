import useConsoleLog from "@hooks/useConsoleLog";
import { useState } from "react";

const View = () => {
  const [value, setValue] = useState(0);
  const logs = useConsoleLog();

  return (
    <div>
      <button
        onClick={() => {
          const nextValue = value + 1;
          setValue(nextValue);
          console.log("Demo value", nextValue);
        }}
      >
        Write to console
      </button>
      <p>Captured logs: {logs.length}</p>
      <pre>{logs.slice(-3).join("\n") || "No logs captured yet."}</pre>
    </div>
  );
};

const code = `
import useConsoleLog from "@hooks/useConsoleLog";

const View = () => {
  const logs = useConsoleLog();

  return (
    <div>
      <button onClick={() => console.log("Hello from the component")}>
        Write to console
      </button>
      <pre>{logs.join("\\n")}</pre>
    </div>
  );
};
`;

export default {
  code,
  View,
};
