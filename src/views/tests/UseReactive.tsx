import useReactive from "@hooks/useReactive";
import { Button } from "@mui/material";
import { useState } from "react";

export default function UseReactive() {
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
  const objActions = {
    add: () => {
      // @ts-ignore
      obj.a.value.b++;
      // b++;
      // upd();
    },
    sub: () => {
      // @ts-ignore
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
