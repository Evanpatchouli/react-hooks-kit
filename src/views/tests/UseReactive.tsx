import useReactive from "@hooks/.temp/useReactive";
import { Button } from "@mui/material";
import { useState } from "react";

export default function UseReactive() {
  const [t, tick] = useState(0);
  const upd = () => {
    tick((v) => v + 1);
  };

  let num = useReactive(0);

  let obj = useReactive(
    {
      a: {
        b: 0,
      },
      c: 0,
    },
    (v) => {
      console.log(v);
    }
  );
  let {
    a: { b },
  } = obj;
  const objActions = {
    add: () => {
      obj.a.b++;
      // b++;
      // upd();
    },
    sub: () => {
      obj.a.b--;
      // upd();
    },
  };

  return (
    <div>
      <h1>UseReactive</h1>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          num++;
        }}
      >
        {JSON.stringify(num)}
      </Button>
      <Button variant="outlined" color="primary" onClick={objActions.add}>
        {JSON.stringify(obj)}
      </Button>
    </div>
  );
}
