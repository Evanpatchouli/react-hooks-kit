import useTitle from "@hooks/useTitle";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";

const View = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useTitle("Counter: 0");

  useEffect(() => {
    setTitle(`Counter: ${count}`);
  }, [count]);

  return (
    <>
      <h3>Example 2: Dynamic Counter Title</h3>
      <p>The page title updates automatically with the counter value.</p>
      <div style={{ marginBottom: "16px" }}>
        <strong>Current Count: </strong>
        <span style={{ fontSize: "24px", fontWeight: "bold" }}>{count}</span>
      </div>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        <Button variant="contained" onClick={() => setCount(count + 1)}>
          Increment
        </Button>
        <Button variant="outlined" onClick={() => setCount(count - 1)}>
          Decrement
        </Button>
        <Button variant="outlined" onClick={() => setCount(0)}>
          Reset
        </Button>
      </div>
    </>
  );
};

const code = `import useTitle from "@evanpatchouli/react-hooks-kit";
import { useState, useEffect } from "react";

const View = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useTitle("Counter: 0");

  useEffect(() => {
    setTitle(\`Counter: \${count}\`);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};`;

export default {
  code,
  View,
};
