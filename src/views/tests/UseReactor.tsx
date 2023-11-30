import useReactor from "@hooks/.temp/useReactor";
import { Button } from "@mui/material";
import { useState } from "react";

export default function UseReactor() {
  const num = useReactor(0);
  const numValue = num.value;
  const numActions = {
    plus: () => num.value++,
  };
  return (
    <div>
      <h1>UseReactor</h1>
      <Button variant="outlined" onClick={numActions.plus}>
        {numValue}
      </Button>
    </div>
  );
}
