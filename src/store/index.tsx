import { useStore } from "./store.context";
import { PathArray, PathInto } from "@/hooks/utils/types";
import storeAction from "./store.action";
import getter from "@/utils/getter";

export function useStoreSelector<T = any>(
  path?: PathInto<ReturnType<typeof useStore>> | PathArray<ReturnType<typeof useStore>>
) {
  const storeModel = useStore();

  if (!path) {
    return storeModel;
  }

  return getter(storeModel, path as any) as T;
}

export const useStoreAction = <
  K extends keyof typeof storeAction,
  V = ReturnType<typeof useStore>[typeof storeAction[K]]
>(
  action: K
) => {
  const storeModel = useStore();

  return (
    storeModel[storeAction[action]] ? storeModel[storeAction[action]] : () => { }
  ) as V;
};

export default useStore;