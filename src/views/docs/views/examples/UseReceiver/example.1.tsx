import { useToast } from "@hooks/index";
import { useEmitter } from "@hooks/index";
import { GlobalListenersContext } from "@/hooks/useEmitter";
import useReceiver from "@/hooks/useReceiver";
import { Button } from "@mui/material";
import { useContext } from "react";

const View = () => {
  const emitter = useEmitter("tester");

  const toast = useToast();

  const [data, receiver] = useReceiver("test", (...data) => {
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
      <Button
        onClick={() => {
          emitter.emit("test", "hello");
        }}
      >
        Send
      </Button>
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
