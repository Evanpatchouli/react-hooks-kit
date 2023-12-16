import { useState, useEffect, useCallback } from "react";
import useEventEmitter from "./useEmitter";
import Ukey from "./utils/Ukey";
import { Prettify } from "./typings";

type EventReceiver = {
  stop: () => void;
  start: () => void;
  reset: (args: any[]) => void;
};

type EventReceiverOptions = {
  name?: string;
  namespace?: "default" | (string & {});
  eventName: string;
  callback?: EventCallback;
};

type EventCallback = (...args: any[]) => void;

function useReceiver(eventName: string, callback?: EventCallback): [any[] | null, EventReceiver];
function useReceiver(options: Prettify<EventReceiverOptions>): [any[] | null, EventReceiver];

function useReceiver(
  eventNameOrOptions: string | Prettify<EventReceiverOptions>,
  callback?: EventCallback
): [any[] | null, EventReceiver] {
  let eventName: string;
  let name: string;
  let namespace: string;
  let cb: EventCallback | undefined;

  if (typeof eventNameOrOptions === "string") {
    eventName = eventNameOrOptions;
    name = `_receiver_${Ukey()}`;
    namespace = "default";
    cb = callback;
  } else {
    eventName = eventNameOrOptions.eventName;
    name = eventNameOrOptions.name || `_receiver_${Ukey()}`;
    namespace = eventNameOrOptions.namespace || "default";
    cb = eventNameOrOptions.callback;
    if (cb) {
      if (callback) {
        console.warn("useReceiver: callback is ignored when options.callback is set");
      } else {
        cb = callback;
      }
    }
  }

  const { subscribe, unsubscribe } = useEventEmitter({
    name: name,
    namespace: namespace,
  });
  const [eventResult, setEventResult] = useState<any[] | null>(null);

  const eventListener = useCallback((...args: any[]) => {
    setEventResult(args);
    cb?.(...args);
  }, []);

  useEffect(() => {
    subscribe(eventName, eventListener);
    return () => {
      unsubscribe(eventName);
    };
  }, [eventName, eventListener]);

  const stopListening = useCallback(() => {
    unsubscribe(eventName);
  }, [eventName]);

  const startListening = useCallback(() => {
    subscribe(eventName, eventListener);
  }, [eventName, eventListener]);

  return [
    eventResult,
    {
      stop: stopListening,
      start: startListening,
      reset: setEventResult,
    },
  ];
}

export default useReceiver;