import { useToast, useToggle } from "@/hooks/index";
import useEmitter, {
  GlobalListenersContext,
} from "@/hooks/useEmitter";
import { Button, TextareaAutosize } from "@mui/material";
import { useContext, useEffect, useState } from "react";

const Kid1 = () => {
  const [kid2Val, setKid2Val] = useState("");
  const toast = useToast();

  const emitter = useEmitter("kid1", "kid2", (v) => {
    setKid2Val(v as string);
    toast(`${v}`);
  });

  return (
    <>
      <Button
        onClick={() => {
          emitter.emit("kid1", "kid1 said Hello!");
        }}
      >
        Kid1 Send
      </Button>
      <TextareaAutosize value={kid2Val} />
    </>
  );
};

const Kid2 = () => {
  const emitter = useEmitter("kid2");
  const toast = useToast();

  const [kid1Val, setKid1Val] = useState("");

  useEffect(() => {
    emitter.subscribe("kid1", (v) => {
      toast(`${v}`);
      setKid1Val(v);
    });
  }, []);

  return (
    <>
      <Button
        onClick={() => {
          emitter.emit("kid2", "kid2 said Hello!");
        }}
      >
        Kid2 Send
      </Button>
      <TextareaAutosize value={kid1Val} />
    </>
  );
};

const View = () => {
  const ctx = useContext(GlobalListenersContext);
  const handlePrintAll = () => {
    const map: any = {};
    ctx.forEach((v, k) => {
      map[k] = v;
    });
    console.log(map);
  };
  const [kid2, showKid2] = useToggle();
  return (
    <>
      <Button onClick={handlePrintAll}>Print All listners</Button>
      <br />
      <Kid1 />
      <br />
      <Button onClick={showKid2}>
        Show/Hide Kid2
      </Button>
      {kid2 && <Kid2 />}
    </>
  );
};

const code = `
import useEmitter from "@hooks/useEmitter";
import { useEffect, useState } from "react";

const Sender = () => {
  const emitter = useEmitter({ name: "sender", namespace: "demo" });

  return (
    <button onClick={() => emitter.emit("message", "Hello from the sender")}>
      Send message
    </button>
  );
};

const Receiver = () => {
  const emitter = useEmitter({ name: "receiver", namespace: "demo" });
  const [message, setMessage] = useState("No message yet.");

  useEffect(() => {
    emitter.subscribe("message", setMessage);
    return () => emitter.unsubscribe("message");
  }, []);

  return <p>{message}</p>;
};
`;

export default {
  code,
  View,
};
