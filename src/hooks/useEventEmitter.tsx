import { useEffect, useContext, createContext } from "react";
import Ukey from "./utils/Ukey";

interface EventListener {
  eventName: string;
  listenerName: string;
  listener: (...args: any[]) => void;
}

// 创建一个全局的事件监听器列表
const globalListeners = new Map<string, EventListener>();

// 创建一个 Context 来共享 globalListeners
const GlobalListenersContext = createContext(globalListeners);

// @ts-ignore
function useEventEmitter<M = {}>(
  name?: string,
  initialEventName?: string,
  // @ts-ignore
  initialListener?: (...args: M[typeof name][]) => void
) {
  const globalListeners = useContext(GlobalListenersContext);

  // 如果没有传入 name，使用 Ukey 方法生成一个唯一的名称
  const listenerName = name || `_emitter_${Ukey()}`;

  const emit = (eventName: string, ...args: any[]) => {
    globalListeners.forEach((value, key) => {
      if (key.startsWith(eventName)) {
        value.listener(...args);
      }
    });
  };

  const subscribe = (eventName: string, listener: (...args: any[]) => void) => {
    const key = `${eventName}_${listenerName}`;
    if (globalListeners.has(key)) {
      throw new Error(`Listener ${listenerName} has already registered for event ${eventName}`);
    }
    if (Array.from(globalListeners.values()).some((value) => value.listenerName === listenerName)) {
      throw new Error(`Listener name ${listenerName} is already in use`);
    }
    globalListeners.set(key, { eventName, listenerName, listener });
  };

  const unsubscribe = (eventName: string) => {
    const key = `${eventName}_${listenerName}`;
    globalListeners.delete(key);
  };

  const unsubscribeAll = () => {
    globalListeners.forEach((value, key) => {
      if (key.endsWith(`_${listenerName}`)) {
        globalListeners.delete(key);
      }
    });
  };

  useEffect(() => {
    if (initialEventName && initialListener) {
      subscribe(initialEventName, initialListener);
    }
    return () => {
      globalListeners.forEach((value, key) => {
        if (key.endsWith(`_${listenerName}`)) {
          globalListeners.delete(key);
        }
      });
    };
  }, [initialEventName, initialListener]);

  return { name: listenerName, emit, subscribe, unsubscribe, unsubscribeAll };
}

export default useEventEmitter;
export { GlobalListenersContext };
