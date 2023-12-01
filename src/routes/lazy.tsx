import React from "react";
import { CropRotate } from "@mui/icons-material";

export function Lazy(props: { children: React.ReactNode }) {
  return (
    <React.Suspense
      fallback={
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          css={$css`
            @keyframes rotate {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
            animation: rotate 1s linear infinite;
          `}
        >
          <CropRotate />
        </div>
      }
    >
      {props.children}
    </React.Suspense>
  );
}
