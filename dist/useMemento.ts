import { useEffect, useMemo, useState } from "react";
import Ukey from "./utils/Ukey";
import isEqual from "./utils/isEqual";

interface HistoryItem<T = any> {
  idKey: number;
  data: T | null;
}

interface Memento<T = any> {
  idKey: number;
  data: T | null;
  name: string | null;
}

/**
 * - historySize - The size of the history, default is 10.
 * - strict - If true, throw error when idKey not found, default is false.
 */
interface MementoConfig {
  historySize?: number;
  strict?: boolean;
}

/**
 * - idKey - The id of the current state.
 * - createMemento - Create a memento.
 * - deleteMemento - Delete a memento.
 * - clearMementos - Clear all mementos.
 * - rollback - Rollback to the previous state.
 * - forward - Forward to the next state.
 * - goToHistory - Go to a history state.
 * - goToMemento - Go to a memento state.
 * - deleteHistory - Delete a history state.
 * - clearHistory - Clear all history states.
 * - clone - Clone a history state.
 * - clear - Clear all states.
 * - history - All history states.
 * - mementos - All mementos.
 */
interface MementoManager<T = any> {
  idKey: number;
  createMemento: (name?: string | null) => void;
  deleteMemento: (idKey: number | number[]) => void;
  clearMementos: () => void;
  rollback: () => void;
  forward: () => void;
  goToHistory: (idKey: number) => void;
  goToMemento: (idKey: number) => void;
  deleteHistory: (idKey: number | number[]) => void;
  clearHistory: () => void;
  clear: () => void;
  history: HistoryItem<T>[];
  mementos: Memento<T>[];
  clone: (id: number) => void;
}

/**
 * ### useMemento
 * #### Parameters
 * - initialState - The initial state.
 * - config - The config.
 * @returns [state, setState, mementoManager]
 */
const useMemento = <T = any>(
  initialState: T,
  config?: MementoConfig
): [T | null, (newData: T | null | ((prev: T | null) => T | null)) => void, MementoManager] => {
  const [state, setState] = useState<HistoryItem<T>>({
    idKey: Ukey(),
    data: initialState,
  });
  const [history, setHistory] = useState<HistoryItem<T>[]>([]);
  const [mementos, setMementos] = useState<Memento<T>[]>([]);
  const historySize = useMemo(() => {
    return typeof config?.historySize === "number"
      ? config.historySize
      : config?.historySize === void 0
      ? 10
      : config?.historySize
      ? 10
      : 0;
  }, [config?.historySize]);

  // When history size changed, slice the history to latest historySize.
  useEffect(() => {
    // 如果 historySize is not a integer, return error.
    if (historySize % 1 !== 0) {
      throw new Error("[react-hooks-kit][useMemento] historySize must be an integer");
    }
    if (historySize < 0) {
      throw new Error("[react-hooks-kit][useMemento] historySize must be a positive integer");
    }
    if (history.length > historySize) {
      setHistory(history.slice(-historySize));
    }
  }, [historySize]);

  const createMemento = (name: string | null = null) => {
    // If the current state is not in the history, that means it is a new stat and then add it to the history.
    if (!history.some((item) => item.idKey === state.idKey)) {
      setHistory([...history, state]);
    }
    setMementos([...mementos, { ...state, name }]);
  };

  const deleteMemento = (idKey?: number | number[]) => {
    if (typeof idKey !== "number" && !idKey) {
      if (config?.strict) {
        throw new Error("[react-hooks-kit][useMemento] idKey is required to deleteMemento");
      } else {
        return console.error("[react-hooks-kit][useMemento] idKey is required to deleteMemento");
      }
    }
    if (typeof idKey === "number") {
      setMementos(mementos.filter((memento) => memento.idKey !== idKey));
    } else {
      if (!Array.isArray(idKey)) {
        if (config?.strict) {
          throw new Error("[react-hooks-kit][useMemento] idKey must be a number or an array of number");
        } else {
          return console.error("[react-hooks-kit][useMemento] idKey must be a number or an array of number");
        }
      }
      if (idKey.some((item) => typeof item !== "number")) {
        if (config?.strict) {
          throw new Error("[react-hooks-kit][useMemento] idKey must be a number or an array of number");
        } else {
          return console.error("[react-hooks-kit][useMemento] idKey must be a number or an array of number");
        }
      }
      setMementos(mementos.filter((memento) => !idKey.includes(memento.idKey)));
    }
  };

  const clearMementos = () => {
    setMementos([]);
  };

  const rollback = () => {
    const curIndex = history.findIndex((item) => item.idKey === state.idKey);
    if (curIndex < 0) {
      return setHistory((prev) => {
        if (prev.length > 0) {
          setState(prev[prev.length - 1]);
          return [...prev, state];
        }
        return prev;
      });
    }
    if (curIndex > 0 && curIndex <= history.length - 1) {
      return setState(history[curIndex - 1]);
    }
  };

  const forward = () => {
    const curIndex = history.findIndex((item) => item.idKey === state.idKey);
    if (curIndex >= 0 && curIndex < history.length - 1) {
      return setState(history[curIndex + 1]);
    }
  };

  const goToHistory = (idKey: number) => {
    const historyItem = history.find((item) => item.idKey === idKey);
    if (historyItem) {
      setState(historyItem);
    } else {
      if (config?.strict) {
        throw new Error(`[react-hooks-kit][useMemento] history with idKey ${idKey} not found`);
      } else {
        return console.error(`[react-hooks-kit][useMemento] history with idKey ${idKey} not found`);
      }
    }
  };

  const goToMemento = (idKey: number) => {
    const memento = mementos.find((m) => m.idKey === idKey);
    if (memento) {
      setState(memento);
    } else {
      if (config?.strict) {
        throw new Error(`[react-hooks-kit][useMemento] memento with idKey ${idKey} not found`);
      } else {
        return console.error(`[react-hooks-kit][useMemento] memento with idKey ${idKey} not found`);
      }
    }
  };

  const deleteHistory = (idKey: number | number[]) => {
    if (typeof idKey !== "number" && !idKey) {
      if (config?.strict) {
        throw new Error("[react-hooks-kit][useMemento] idKey is required to deleteHistory");
      } else {
        return console.error("[react-hooks-kit][useMemento] idKey is required to deleteHistory");
      }
    }
    if (typeof idKey === "number") {
      setHistory(history.filter((item) => item.idKey !== idKey));
    } else {
      if (!Array.isArray(idKey)) {
        if (config?.strict) {
          throw new Error("[react-hooks-kit][useMemento] idKey must be a number or an array of number");
        } else {
          return console.error("[react-hooks-kit][useMemento] idKey must be a number or an array of number");
        }
      }
      if (idKey.some((item) => typeof item !== "number")) {
        if (config?.strict) {
          throw new Error("[react-hooks-kit][useMemento] idKey must be a number or an array of number");
        } else {
          return console.error("[react-hooks-kit][useMemento] idKey must be a number or an array of number");
        }
      }
      setHistory(history.filter((item) => !idKey.includes(item.idKey)));
    }
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const calcNewState = (newData: T | null | ((prev: T | null) => T | null), pre: HistoryItem<T>) => {
    let newState;
    if (typeof newData !== "function") {
      newState = { idKey: Ukey(), data: newData };
      if (isEqual(pre.data, newData)) {
        return {
          idKey: pre.idKey,
          data: newData,
        };
      }
    } else {
      const newDataFunc = newData as (prev: T | null) => T | null;
      const newDataResult = newDataFunc(pre.data);
      newState = { idKey: Ukey(), data: newDataResult };
      if (isEqual(pre.data, newDataResult)) {
        return {
          idKey: pre.idKey,
          data: newDataResult,
        };
      }
    }
    if (history.some((item) => item.idKey === pre.idKey)) {
      return newState;
    }
    setHistory((h) => {
      if (history.length - 1 === historySize) {
        return [...history.slice(1), pre];
      }
      return [...history, pre];
    });
    return newState;
  };

  const setNewState = (newData: T | null | ((prev: T | null) => T | null)) => {
    setState((pre) => {
      return calcNewState(newData, pre);
    });
  };

  const clone = (idKey: number) => {
    const target = history.find((m) => m.idKey === idKey);
    if (target) {
      setNewState(target.data);
    } else {
      if (config?.strict) {
        throw new Error(`[react-hooks-kit][useMemento] target to clone from idKey ${idKey} not found`);
      } else {
        return console.error(`[react-hooks-kit][useMemento] target to clone from idKey ${idKey} not found`);
      }
    }
  };

  const clear = () => {
    setState({ idKey: Ukey(), data: null });
    setHistory([]);
    setMementos([]);
  };

  return [
    state.data,
    setNewState,
    {
      idKey: state.idKey,
      createMemento,
      deleteMemento,
      clearMementos,
      rollback,
      forward,
      goToHistory,
      goToMemento,
      deleteHistory,
      clearHistory,
      clone,
      clear,
      history,
      mementos,
    },
  ];
};

export default useMemento;
