import { useReducer } from "react";
import { initialState } from "./AppContext";
import { reducers } from "./AppState";

export const useContextSelector = () => {
  const [state, dispatch] = useReducer(reducers, initialState);
  return state;
};
export const useContextDispatch = () => {
  const [state, dispatch] = useReducer(reducers, initialState);
  return dispatch;
};
