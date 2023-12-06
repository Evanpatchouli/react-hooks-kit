import { useState, useEffect, useCallback } from "react";
import useEventEmitter from "./useEventEmitter";
import Ukey from "./utils/Ukey";

function useEventListener(eventName: string): [any, () => void, () => void] {
  const { subscribe, unsubscribe } = useEventEmitter(`_emitter_${Ukey()}`);
  const [eventResult, setEventResult] = useState<any>(null);

  const eventListener = useCallback((...args: any[]) => {
    setEventResult(args);
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

  return [eventResult, stopListening, startListening];
}

export default useEventListener;
