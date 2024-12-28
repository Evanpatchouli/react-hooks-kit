import useThrottle from "@hooks/useThrottle";
import { Button } from "@mui/material";
import { useState } from "react";

const View = () => {
  const [cnt, setCnt] = useState(0);
  const throttlePlusNum = useThrottle(function () {
    setCnt((prevNum) => prevNum + 1);
  }, 1000);
  return (
    <>
      <p>Throttle: {cnt}</p>
      <Button variant="contained" onClick={throttlePlusNum}>
        Throttle + 1
      </Button>
    </>
  );
};

const code = `
import { useThrottle } from "@evanpatchouli/react-hooks-kit";
import { Button } from "@mui/material";
import { useState } from "react";

const View = () => {
  const [cnt, setCnt] = useState(0);
  const throttlePlusNum = useThrottle(() => {
    setCnt((prevNum) => prevNum + 1);
  }, 1000);
  return (
    <>
      <p>Throttle: {cnt}</p>
      <Button variant="contained" onClick={throttlePlusNum}>Throttle + 1</Button>
    </>
  );
};
`;

export default {
  code,
  View,
};
