import { useSyncExternalStore } from "react";
import storeReducer from "./store.reducer";
import storeAction from "./store.action";

export interface StoreState {
  locale: "en" | "cn";
}

export interface StoreType extends StoreState {
  setLocale: (locale: "en" | "cn") => void;
}

type Action = {
  type: keyof typeof storeAction;
  payload?: any;
};

let state: StoreState = {
  // 默认语言根据浏览器语言设置
  locale: navigator.language.includes("zh") ? "cn" : "en",
};

let snapshot: StoreType;

const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

function dispatch(action: Action) {
  const nextState = storeReducer(state, action);

  if (nextState !== state) {
    state = nextState;

    snapshot = {
      ...state,
      setLocale,
    };

    emit();
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return snapshot;
}

export const setLocale = (locale: "en" | "cn") => {
  dispatch({
    type: "SET_LOCALE",
    payload: locale,
  });
};

// 初始化 snapshot
snapshot = {
  ...state,
  setLocale,
};

export function useStore(): StoreType {
  return useSyncExternalStore(subscribe, getSnapshot);
}