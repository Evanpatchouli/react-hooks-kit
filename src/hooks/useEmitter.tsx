import { useEffect, useContext, createContext } from "react";
import Ukey from "./utils/Ukey";

interface EventListener {
  namespace?: string;
  eventName: string;
  listenerName: string;
  listener: (...args: any[]) => void;
}

// 创建一个全局的事件监听器列表
const globalListeners = new Map<string, EventListener>();

// 创建一个 Context 来共享 globalListeners
const GlobalListenersContext = createContext(globalListeners);

export const useGlobalListeners = () => useContext(GlobalListenersContext);

interface EventEmitterConfig {
  name?: string;
  initialEventName?: string;
  initialListener?: (...args: any[]) => void;
  namespace?: string;
}

interface EventEmitter {
  name: string;
  emit: (eventName: string, ...args: any[]) => void;
  subscribe: (eventName: string, listener: (...args: any[]) => void) => void;
  unsubscribe: (eventName: string) => void;
  unsubscribeAll: () => void;
}

function useEmitter(
  name: string,
  config?: Partial<EventEmitterConfig>
): EventEmitter;
function useEmitter(config: Partial<EventEmitterConfig>): EventEmitter;
function useEmitter<M = {}>(
  name?: string,
  initialEventName?: string,
  // @ts-ignore
  initialListener?: (...args: M[typeof initialEventName][]) => void,
  config?: Partial<EventEmitterConfig>
): EventEmitter;

// @ts-ignore
function useEmitter<M = {}>(
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
  if (!configActual.namespace) {
    configActual.namespace = "default";
  }

  // 如果没有传入 name，使用 Ukey 方法生成一个唯一的名称
  const listenerName = configActual.name;

  const emit = (eventName: string, ...args: any[]) => {
    globalListeners.forEach((value, key) => {
      if (key.startsWith(`${configActual.namespace}_${eventName}_`)) {
        value.listener(...args);
      }
    });
  };

  const subscribe = (eventName: string, listener: (...args: any[]) => void) => {
    const key = `${configActual.namespace}_${eventName}_${listenerName}`;
    if (globalListeners.has(key)) {
      throw new Error(
        `Listener ${listenerName} has already registered for event ${eventName}`
      );
    }
    globalListeners.set(key, { eventName, listenerName, listener });
  };

  const unsubscribe = (eventName: string) => {
    const key = `${configActual.namespace}_${eventName}_${listenerName}`;
    globalListeners.delete(key);
  };

  const unsubscribeAll = () => {
    const keysToDelete: string[] = [];
    globalListeners.forEach((value, key) => {
      if (key.endsWith(`_${listenerName}`)) {
        keysToDelete.push(key);
      }
    });
    keysToDelete.forEach((key) => {
      globalListeners.delete(key);
    });
  };

  useEffect(() => {
    if (configActual.initialEventName && configActual.initialListener) {
      subscribe(configActual.initialEventName, configActual.initialListener);
    }
    return () => {
      globalListeners.forEach((value, key) => {
        if (key.endsWith(`_${listenerName}`)) {
          globalListeners.delete(key);
        }
      });
    };
  }, [configActual.initialEventName, configActual.initialListener]);

  return { name: listenerName, emit, subscribe, unsubscribe, unsubscribeAll };
}

export default useEmitter;
export { GlobalListenersContext };
