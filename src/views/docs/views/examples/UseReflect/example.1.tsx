import useReflect from "@hooks/useReflect";
import { Button } from "@mui/material";

const View = () => {
  const $x = useReflect({
    x: 0,
  });
  return (
    <>
      <Button
        onClick={() => {
          $x.set("x", Math.random());
        }}
      >
        $x: {$x.get("x")}
      </Button>
    </>
  );
};

const code = `

`;

export default {
  code,
  View,
};
