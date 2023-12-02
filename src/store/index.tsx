import React from "react";
import CreateStoreContext, { StoreType } from "./store.context";
import { PathArray, PathInto } from "@/hooks/utils/types";
import storeAction from "./store.action";
import getter from "@/utils/getter";

const useStore = () => {
  const model = CreateStoreContext();
  const context = React.createContext(model);
  const storeModel = React.useContext(context);
  return storeModel;
};

export function useStoreSelector<T = any>(path?: PathInto<typeof storeModel> | PathArray<typeof storeModel>) {
  const storeModel = useStore();
  if (!path) {
    return storeModel;
  }
  return getter(storeModel, path as any) as T;
}

export const useStoreAction = <K extends keyof typeof storeAction, V = (typeof storeAction)[K]>(action: K) => {
  const storeModel = useStore();
  // @ts-ignore
  return (storeModel[action] ? storeModel[action] : () => {}) as (typeof storeModel)[K];
};

export default useStore;
