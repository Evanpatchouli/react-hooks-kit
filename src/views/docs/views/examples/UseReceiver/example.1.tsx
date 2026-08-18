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
import useEmitter from "@hooks/useEmitter";
import useReceiver from "@hooks/useReceiver";

const View = () => {
  const emitter = useEmitter({ name: "sender" });
  const [data, receiver] = useReceiver({
    name: "receiver",
    eventName: "message",
    callback: (...args) => console.log("Received", args),
  });

  return (
    <div>
      <button onClick={() => emitter.emit("message", "Hello")}>Send</button>
      <button onClick={receiver.stop} disabled={!receiver.isListening}>Stop</button>
      <button onClick={receiver.start} disabled={receiver.isListening}>Start</button>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};
`;

export default {
  code,
  View,
};
