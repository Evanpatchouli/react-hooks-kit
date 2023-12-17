import useInject from "@hooks/useInject";
import useProvide from "@hooks/useProvide";
import { Button } from "@mui/material";
import { useState } from "react";

const A = () => {
  const [x, setX] = useState(0);
  useProvide("x", x);
  return (
    <div>
      <Button
        color="primary"
        variant="contained"
        onClick={() => setX((x) => x + 1)}
      >
        A.x: {x}
      </Button>
    </div>
  );
};

const B = () => {
  const x = useInject<{
    x: number;
  }>("x");
  return (
    <Button color="primary" variant="contained">
      B.x: {x}
    </Button>
  );
};

export default function ProvJectView() {
  const [, r] = useState(0);
  return (
    <>
      <A />
      <B />
    </>
  );
}
