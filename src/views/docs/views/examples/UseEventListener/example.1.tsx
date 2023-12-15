import { useToast } from "@/hooks";
import { useEventEmitter } from "@/hooks";
import { GlobalListenersContext } from "@/hooks/useEventEmitter";
import useEventListener from "@/hooks/useEventListener";
import { Button } from "@mui/material";
import { useContext } from "react";

const View = () => {
  const emitter = useEventEmitter();
  const send = () => {
    emitter.emit("test", "hello");
  };

  const toast = useToast();

  const [data, listener] = useEventListener("test", (...data) => {
    toast(JSON.stringify(data));
  });

  const ctx = useContext(GlobalListenersContext);
  const handlePrintAll = () => {
    const map: any = {};
    ctx.forEach((v, k) => {
      map[k] = v;
    });
    console.log(map);
  };

  return (
    <>
      <Button onClick={send}>Send</Button>
      <div>{JSON.stringify(data)}</div>
      <Button onClick={handlePrintAll}>Print All</Button>
    </>
  );
};

const code = `

`;

export default {
  code,
  View,
};
