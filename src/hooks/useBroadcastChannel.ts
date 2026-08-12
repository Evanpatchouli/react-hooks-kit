import { useEffect, useRef } from "react";

type MessageHandler<T> = (message: T) => void;

function useBroadcastChannel<T>(
  channelName: string,
  messageHandler?: MessageHandler<T>,
  parser: boolean | ((data?: string) => T) = true
) {
  const channelRef = useRef<BroadcastChannel | null>(null);

  useEffect(() => {
    channelRef.current = new BroadcastChannel(channelName);
    channelRef.current.onmessage = (event) => {
      let _data = event.data;
      if (parser) {
        if (typeof parser === "function") {
          _data = parser(_data);
        } else {
          try {
            _data = JSON.parse(event.data);
          } catch (error) {
            console.error(error);
          }
        }
      }
      messageHandler?.(_data);
    };

    return () => {
      if (channelRef.current) {
        channelRef.current.close();
      }
    };
  }, [channelName, messageHandler]);

  const postMessage = (message: T) => {
    if (channelRef.current) {
      channelRef.current.postMessage(JSON.stringify(message));
    }
  };

  return postMessage;
}

export default useBroadcastChannel;
