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
import useReflect from "@hooks/useReflect";

const View = () => {
  const value = useReflect({ x: 0, label: "demo" });

  return (
    <div>
      <p>{value.get("label")}: {value.get("x")}</p>
      <button onClick={() => value.set("x", Number(value.get("x")) + 1)}>
        Increment
      </button>
      <button onClick={() => value.apply((current) => { current.label = "updated"; })}>
        Apply mutation
      </button>
    </div>
  );
};
`;

export default {
  code,
  View,
};
