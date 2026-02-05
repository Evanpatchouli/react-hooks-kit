import useTitle from "@hooks/useTitle";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";

const View = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [title, setTitle] = useTitle("Timer: 00:00");

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  useEffect(() => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const timeStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    setTitle(`Timer: ${timeStr}`);
  }, [seconds]);

  return (
    <>
      <h3>Example 4: Timer Title</h3>
      <p>The page title updates every second to show elapsed time.</p>
      <div style={{ marginBottom: "16px" }}>
        <strong>Elapsed Time: </strong>
        <span style={{ fontSize: "32px", fontWeight: "bold", fontFamily: "monospace" }}>
          {String(Math.floor(seconds / 60)).padStart(2, '0')}:{String(seconds % 60).padStart(2, '0')}
        </span>
      </div>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        <Button
          variant="contained"
          color={isRunning ? "error" : "primary"}
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? "Pause" : "Start"}
        </Button>
        <Button variant="outlined" onClick={() => { setSeconds(0); setIsRunning(false); }}>
          Reset
        </Button>
      </div>
    </>
  );
};

const code = `import useTitle from "@evanpatchouli/react-hooks-kit";
import { useState, useEffect } from "react";

const View = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [title, setTitle] = useTitle("Timer: 00:00");

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  useEffect(() => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const timeStr = \`\${String(mins).padStart(2, '0')}:\${String(secs).padStart(2, '0')}\`;
    setTitle(\`Timer: \${timeStr}\`);
  }, [seconds]);

  return (
    <button onClick={() => setIsRunning(!isRunning)}>
      {isRunning ? "Pause" : "Start"}
    </button>
  );
};`;

export default {
  code,
  View,
};
