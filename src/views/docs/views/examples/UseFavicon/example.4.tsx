import useFavicon from "@hooks/useFavicon";
import { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const View = () => {
  const [position, setPosition] = useState<"top-right" | "top-left" | "bottom-right" | "bottom-left">("top-right");

  useFavicon("/react-hooks-kit/favicon.ico", {
    badge: {
      content: "5",
      position: position
    }
  });

  return (
    <>
      <h3>Example 4: Different Positions</h3>
      <p>Select badge position:</p>
      <FormControl style={{ minWidth: 200 }}>
        <InputLabel>Position</InputLabel>
        <Select
          value={position}
          label="Position"
          onChange={(e) => setPosition(e.target.value as any)}
        >
          <MenuItem value="top-right">Top Right</MenuItem>
          <MenuItem value="top-left">Top Left</MenuItem>
          <MenuItem value="bottom-right">Bottom Right</MenuItem>
          <MenuItem value="bottom-left">Bottom Left</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

const code = `import useFavicon from "@evanpatchouli/react-hooks-kit";
import { useState } from "react";

const View = () => {
  const [position, setPosition] = useState<"top-right" | "top-left" | "bottom-right" | "bottom-left">("top-right");

  useFavicon("/favicon.ico", {
    badge: {
      content: "5",
      position: position
    }
  });

  return (
    <select onChange={(e) => setPosition(e.target.value as any)}>
      <option value="top-right">Top Right</option>
      <option value="top-left">Top Left</option>
      <option value="bottom-right">Bottom Right</option>
      <option value="bottom-left">Bottom Left</option>
    </select>
  );
};`;

export default {
  code,
  View,
};
