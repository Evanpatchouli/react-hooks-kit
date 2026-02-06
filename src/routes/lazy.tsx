import React from "react";
import Loading from "@/components/Loading";

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
        >
          <Loading />
        </div>
      }
    >
      {props.children}
    </React.Suspense>
  );
}
