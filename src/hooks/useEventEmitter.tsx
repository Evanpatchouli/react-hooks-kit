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

interface EventEmitterConfig {
  name?: string;
  initialEventName?: string;
  initialListener?: (...args: any[]) => void;
}

interface EventEmitter {
  name: string;
  emit: (eventName: string, ...args: any[]) => void;
  subscribe: (eventName: string, listener: (...args: any[]) => void) => void;
  unsubscribe: (eventName: string) => void;
  unsubscribeAll: () => void;
}

function useEventEmitter(
  name: string,
  config?: Partial<EventEmitterConfig>
): EventEmitter;
function useEventEmitter(config: Partial<EventEmitterConfig>): EventEmitter;
function useEventEmitter<M = {}>(
  name?: string,
  initialEventName?: string,
  // @ts-ignore
  initialListener?: (...args: M[typeof initialEventName][]) => void,
  config?: Partial<EventEmitterConfig>
): EventEmitter;

// @ts-ignore
function useEventEmitter<M = {}>(
  nameOrConfig?: string | Partial<EventEmitterConfig>,
  initialEventNameOrConfig?: string | Partial<EventEmitterConfig>,
  // @ts-ignore
  initialListener?: (...args: M[typeof initialEventNameOrConfig][]) => void,
  config?: Partial<EventEmitterConfig>
) {
  const globalListeners = useContext(GlobalListenersContext);

  // 根据参数类型确定实际的参数值
  let configActual: Partial<EventEmitterConfig> = {};

  if (typeof nameOrConfig === "string") {
    configActual.name = nameOrConfig;
    if (typeof initialEventNameOrConfig === "string") {
      configActual.initialEventName = initialEventNameOrConfig;
      configActual.initialListener = initialListener;
    } else if (typeof initialEventNameOrConfig === "object") {
      Object.entries(initialEventNameOrConfig).map(([key, value]) => {
        if (value !== void 0) {
          // @ts-ignore
          configActual[key] = value;
        }
      });
    }
  } else {
    configActual = nameOrConfig || {};
  }

  if (!configActual.name) {
    configActual.name = `_emitter_${Ukey()}`;
  }

  // 如果没有传入 name，使用 Ukey 方法生成一个唯一的名称
  const listenerName = configActual.name;

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
      throw new Error(
        `Listener ${listenerName} has already registered for event ${eventName}`
      );
    }
    if (
      Array.from(globalListeners.values()).some(
        (value) => value.listenerName === listenerName
      )
    ) {
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
    if (configActual.initialEventName && initialListener) {
      subscribe(configActual.initialEventName, initialListener);
    }
    return () => {
      globalListeners.forEach((value, key) => {
        if (key.endsWith(`_${listenerName}`)) {
          globalListeners.delete(key);
        }
      });
    };
  }, [configActual.initialEventName, initialListener]);

  return { name: listenerName, emit, subscribe, unsubscribe, unsubscribeAll };
}

export default useEventEmitter;
export { GlobalListenersContext };
