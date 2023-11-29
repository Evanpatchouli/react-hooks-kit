import React from "react";
import { LocalDiningTwoTone } from "@mui/icons-material";

export function Lazy(props: { children: React.ReactNode }) {
  return (
    <React.Suspense
      fallback={
        <>
          <LocalDiningTwoTone />
        </>
      }
    >
      {props.children}
    </React.Suspense>
  );
}
