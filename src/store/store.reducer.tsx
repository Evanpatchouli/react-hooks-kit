import storeAction from "./store.action";
import { StoreType } from "./store.context";

const storeReducer = (
  state: StoreType,
  action: {
    type: keyof typeof storeAction;
    payload: any;
  }
): StoreType => {
  const { type, payload } = action;
  switch (type) {
    case "SET_LOCALE":
      return {
        ...state,
        locale: payload,
      };
    default:
      return state;
  }
};
export default storeReducer;
