import useFavicon from "@hooks/useFavicon";
import { useState } from "react";
import { Button } from "@mui/material";

const View = () => {
  const [count, setCount] = useState(0);
  useFavicon("/react-hooks-kit/favicon.ico", count > 0 ? count : void 0);

  return (
    <>
      <h3>Example 1: Dynamic Counter Badge</h3>
      <p>Click the button to increment the badge counter on the favicon.</p>
      <Button variant="contained" onClick={() => setCount(count + 1)}>
        Count: {count}
      </Button>
      <Button variant="outlined" onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>
        Reset
      </Button>
    </>
  );
};

const code = `import useFavicon from "@evanpatchouli/react-hooks-kit";
import { useState } from "react";

const View = () => {
  const [count, setCount] = useState(0);
  useFavicon("/favicon.ico", count);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
};`;

export default {
  code,
  View,
};
