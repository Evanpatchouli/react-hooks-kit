import useUpdate from "@hooks/useUpdate";
import { useState } from "react";

const View = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Skipped on the initial render.");

  useUpdate(() => {
    setMessage(`Ran after count changed to ${count}.`);
  }, [count]);

  return (
    <div>
      <p>{message}</p>
      <button onClick={() => setCount((value) => value + 1)}>
        Increment ({count})
      </button>
    </div>
  );
};

const code = `
import useUpdate from "@hooks/useUpdate";
import { useState } from "react";

const View = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Skipped on the initial render.");

  useUpdate(() => {
    setMessage(\`Ran after count changed to \${count}.\`);
  }, [count]);

  return (
    <div>
      <p>{message}</p>
      <button onClick={() => setCount((value) => value + 1)}>
        Increment ({count})
      </button>
    </div>
  );
};
`;

export default {
  code,
  View,
};
