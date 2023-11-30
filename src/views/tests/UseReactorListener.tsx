import useReactor, { useReactorListener } from "@hooks/.temp/useReactor";
import { Button } from "@mui/material";
import useToast from "@hooks/.temp/useToast";
import { useState } from "react";

export default function UseReactorListener() {
  const toast = useToast();
  const num = useReactor(0);
  useReactorListener(num).then((v) => {
    console.log(v);
    toast(`${v}`);
  });
  const numValue = num.value;
  const numActions = {
    plus: () => num.value++,
  };
  return (
    <div>
      <h1>UseReactorListener</h1>
      <Button variant="outlined" onClick={numActions.plus}>
        {numValue}
      </Button>
    </div>
  );
}
