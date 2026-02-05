import useTitle from "@hooks/useTitle";
import { Button, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useState, useEffect } from "react";

const View = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [title, setTitle] = useTitle("My App");

  useEffect(() => {
    const statusTitles = {
      idle: "My App",
      loading: "⏳ Loading... - My App",
      success: "✓ Success - My App",
      error: "✗ Error - My App",
    };
    setTitle(statusTitles[status]);
  }, [status]);

  return (
    <>
      <h3>Example 5: Page Status Title</h3>
      <p>The page title reflects the current application state.</p>
      <div style={{ marginBottom: "16px" }}>
        <strong>Current Status: </strong>
        <span style={{
          fontSize: "18px",
          fontWeight: "bold",
          color: status === "success" ? "#00ff00" : status === "error" ? "#ff0000" : status === "loading" ? "#ff9800" : "#666"
        }}>
          {status.toUpperCase()}
        </span>
      </div>
      <FormControl style={{ minWidth: 200 }}>
        <InputLabel>Status</InputLabel>
        <Select
          value={status}
          label="Status"
          onChange={(e) => setStatus(e.target.value as any)}
        >
          <MenuItem value="idle">Idle</MenuItem>
          <MenuItem value="loading">Loading</MenuItem>
          <MenuItem value="success">Success</MenuItem>
          <MenuItem value="error">Error</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

const code = `import useTitle from "@evanpatchouli/react-hooks-kit";
import { useState, useEffect } from "react";

const View = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [title, setTitle] = useTitle("My App");

  useEffect(() => {
    const statusTitles = {
      idle: "My App",
      loading: "⏳ Loading... - My App",
      success: "✓ Success - My App",
      error: "✗ Error - My App",
    };
    setTitle(statusTitles[status]);
  }, [status]);

  return (
    <select onChange={(e) => setStatus(e.target.value as any)}>
      <option value="idle">Idle</option>
      <option value="loading">Loading</option>
      <option value="success">Success</option>
      <option value="error">Error</option>
    </select>
  );
};`;

export default {
  code,
  View,
};
