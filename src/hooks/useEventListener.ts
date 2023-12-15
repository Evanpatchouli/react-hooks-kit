import { useState, useEffect, useCallback } from "react";
import useEventEmitter from "./useEventEmitter";
import Ukey from "./utils/Ukey";
import { Prettify } from "./typings";

type EventListener = {
  stop: () => void;
  start: () => void;
  reset: (args: any[]) => void;
};

type EventListenerOptions = {
  name?: string;
  namespace?: "default" | (string & {});
  eventName: string;
  callback?: EventCallback;
};

type EventCallback = (...args: any[]) => void;

function useEventListener(eventName: string, callback?: EventCallback): [any[] | null, EventListener];
function useEventListener(options: Prettify<EventListenerOptions>): [any[] | null, EventListener];

function useEventListener(
  eventNameOrOptions: string | Prettify<EventListenerOptions>,
  callback?: EventCallback
): [any[] | null, EventListener] {
  let eventName: string;
  let name: string;
  let namespace: string;
  let cb: EventCallback | undefined;

  if (typeof eventNameOrOptions === "string") {
    eventName = eventNameOrOptions;
    name = `_listener_${Ukey()}`;
    namespace = "default";
    cb = callback;
  } else {
    eventName = eventNameOrOptions.eventName;
    name = eventNameOrOptions.name || `_listener_${Ukey()}`;
    namespace = eventNameOrOptions.namespace || "default";
    cb = eventNameOrOptions.callback;
    if (cb) {
      if (callback) {
        console.warn("useEventListener: callback is ignored when options.callback is set");
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

export default useEventListener;
