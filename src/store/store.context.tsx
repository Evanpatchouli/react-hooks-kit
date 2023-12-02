import { useReducer } from "react";
import storeReducer from "./store.reducer";

export interface StoreType {
  locale: "en" | "cn";
  setLocale: (locale: "en" | "cn") => void;
}

export const CreateStoreContext = () => {
  const [store, dispatch] = useReducer(storeReducer, {
    locale: "en",
  } as StoreType);
  const setLocale = (locale: "en" | "cn") => {
    dispatch({
      type: "SET_LOCALE",
      payload: locale,
    });
  };
  return {
    ...store,
    setLocale,
  };
};

export default CreateStoreContext;
