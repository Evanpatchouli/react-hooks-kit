import useForceUpdate from "@hooks/useForceUpdate";
import { Button } from "@mui/material";
import { useState } from "react";

const View = () => {
  const forceUpdate = useForceUpdate();
  const [value, setValue] = useState(0);

  return (
    <>
      <p>Value: {value}</p>
      <Button onClick={() => setValue((previous) => previous + 1)}>Update state</Button>
      <Button onClick={() => forceUpdate()}>Force render</Button>
    </>
  );
};

const code = `import useForceUpdate from "@hooks/useForceUpdate";
import { Button } from "@mui/material";
import { useState } from "react";

const View = () => {
  const forceUpdate = useForceUpdate();
  const [value, setValue] = useState(0);

  return (
    <>
      <p>Value: {value}</p>
      <Button onClick={() => setValue((previous) => previous + 1)}>
        Update state
      </Button>
      <Button onClick={() => forceUpdate()}>Force render</Button>
    </>
  );
};`;

export default {
  code,
  View,
};
