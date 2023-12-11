import { useState } from "react";
import Ukey from "./utils/Ukey";
import isEqual from "./utils/isEqual";

interface HistoryItem {
  idKey: number;
  data: any;
}

interface Memento {
  idKey: number;
  data: any;
  name: string | null;
}

interface Config {
  historySize?: number;
}

const useMemento = (initialState: any, config?: Config) => {
  const [state, setState] = useState<HistoryItem>({
    idKey: Ukey(),
    data: initialState,
  });
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [mementos, setMementos] = useState<Memento[]>([]);
  const historySize = config?.historySize || 20;

  const createMemento = (name: string | null = null) => {
    if (!history.some((item) => item.idKey === state.idKey)) {
      setHistory([...history, state]);
    }
    setMementos([...mementos, { ...state, name }]);
  };

  const deleteMemento = (idKey: number) => {
    setMementos(mementos.filter((memento) => memento.idKey !== idKey));
  };

  const clearMementos = () => {
    setMementos([]);
  };

  const rollback = () => {
    const curIndex = history.findIndex((item) => item.idKey === state.idKey);
    console.log(curIndex);
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
    if (curIndex < 0) {
      return setHistory((prev) => {
        if (prev.length > 0) {
          setState(prev[prev.length - 1]);
          return [...prev, state];
        }
        return prev;
      });
    }
    if (curIndex >= 0 && curIndex < history.length - 1) {
      return setState(history[curIndex + 1]);
    }
  };

  const goToHistory = (idKey: number) => {
    const historyItem = history.find((item) => item.idKey === idKey);
    if (historyItem) {
      setState(historyItem);
    }
  };

  const goToMemento = (idKey: number) => {
    const memento = mementos.find((m) => m.idKey === idKey);
    if (memento) {
      setState(memento);
    }
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const setNewState = (newData: any) => {
    const newState = { idKey: Ukey(), data: newData };
    setState((pre) => {
      if (isEqual(newData, pre.data)) {
        return pre;
      }
      if (history.some((item) => item.idKey === pre.idKey)) {
        return newState;
      }
      setHistory((h) => {
        if (history.length -1 === historySize) {
          return [...history.slice(1), pre];
        }
        return [...history, pre];
      });
      return newState;
    });
  };

  const clear = () => {
    setState({ idKey: Ukey(), data: null });
    setHistory([]);
    setMementos([]);
  }

  return [
    state.data,
    setNewState,
    {
      createMemento,
      deleteMemento,
      clearMementos,
      rollback,
      forward,
      goToHistory,
      goToMemento,
      clearHistory,
      clear,
      history,
      mementos,
    },
  ];
};

export default useMemento;
