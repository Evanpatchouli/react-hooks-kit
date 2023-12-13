import useEventEmitter from "@/hooks/useEventEmitter";
import { Button, TextareaAutosize } from "@mui/material";
import { useEffect, useState } from "react";

const Kid1 = () => {
  const [kid2Val, setKid2Val] = useState("");

  const emitter = useEventEmitter("kid1", "kid2", (v) => {
    console.log("kid2", v);
    setKid2Val(v as string);
  });

  return (
    <>
      <Button
        onClick={() => {
          emitter.emit("kid1", "kid1");
        }}
      >
        Kid1 Send
      </Button>
      <TextareaAutosize value={kid2Val} />
    </>
  );
};

const Kid2 = () => {
  const emitter = useEventEmitter("kid2");

  const [kid1Val, setKid1Val] = useState("");

  useEffect(() => {
    emitter.subscribe("kid1", (v) => {
      console.log("kid1", v);
      setKid1Val(v);
    });
  }, []);

  return (
    <>
      <Button
        onClick={() => {
          emitter.emit("kid2", "kid2");
        }}
      >
        Kid2 Send
      </Button>
      <TextareaAutosize value={kid1Val} />
    </>
  );
};

const View = () => {
  return (
    <>
      <Kid1 />
      <Kid2 />
    </>
  );
};

const code = `

  `;

export default {
  code,
  View,
};
