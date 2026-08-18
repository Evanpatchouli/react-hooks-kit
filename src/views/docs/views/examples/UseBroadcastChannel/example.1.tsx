import useBroadcastChannel from "@hooks/useBroadcastChannel";
import { useCallback, useState } from "react";

const View = () => {
  const [message, setMessage] = useState("No message received yet.");
  const handleMessage = useCallback((value: string) => {
    setMessage(value);
  }, []);
  const send = useBroadcastChannel<string>("docs-broadcast", undefined);
  useBroadcastChannel<string>("docs-broadcast", handleMessage);

  return (
    <div>
      <button onClick={() => send(`Message at ${new Date().toLocaleTimeString()}`)}>
        Send message
      </button>
      <p>Received: {message}</p>
      <small>Two channel instances are used because BroadcastChannel does not echo to its sender.</small>
    </div>
  );
};

const code = `
import useBroadcastChannel from "@hooks/useBroadcastChannel";
import { useCallback, useState } from "react";

const View = () => {
  const [message, setMessage] = useState("No message received yet.");
  const handleMessage = useCallback((value: string) => {
    setMessage(value);
  }, []);
  const send = useBroadcastChannel<string>("docs-broadcast", undefined);
  useBroadcastChannel<string>("docs-broadcast", handleMessage);

  return (
    <div>
      <button onClick={() => send("Hello from this tab")}>Send message</button>
      <p>Received: {message}</p>
    </div>
  );
};
`;

export default {
  code,
  View,
};
