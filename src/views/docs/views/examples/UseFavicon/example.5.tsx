import useFavicon from "@hooks/useFavicon";
import { useState } from "react";
import { Button } from "@mui/material";

const View = () => {
  const [count, setCount] = useState(150);
  useFavicon("/react-hooks-kit/favicon.ico", count);

  return (
    <>
      <h3>Example 5: 99+ Display</h3>
      <p>Count: {count} (displays as "99+" when over 99)</p>
      <Button variant="contained" onClick={() => setCount(count + 10)}>
        +10
      </Button>
      <Button variant="outlined" onClick={() => setCount(Math.max(0, count - 10))} style={{ marginLeft: "10px" }}>
        -10
      </Button>
      <Button variant="outlined" onClick={() => setCount(50)} style={{ marginLeft: "10px" }}>
        Set to 50
      </Button>
      <Button variant="outlined" onClick={() => setCount(150)} style={{ marginLeft: "10px" }}>
        Set to 150
      </Button>
    </>
  );
};

const code = `import useFavicon from "@evanpatchouli/react-hooks-kit";
import { useState } from "react";

const View = () => {
  const [count, setCount] = useState(150);
  useFavicon("/favicon.ico", count); // Will display as "99+"

  return <div>Count: {count}</div>;
};`;

export default {
  code,
  View,
};
