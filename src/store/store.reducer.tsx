import storeAction from "./store.action";
import { StoreState } from "./store.context";

const storeReducer = (
  state: StoreState,
  action: {
    type: keyof typeof storeAction;
    payload?: any;
  }
): StoreState => {
  const { type, payload } = action;
  switch (type) {
    case "SET_LOCALE":
      console.log("SET_LOCALE", payload);
      return {
        ...state,
        locale: payload,
      };
    default:
      return state;
  }
};
export default storeReducer;
