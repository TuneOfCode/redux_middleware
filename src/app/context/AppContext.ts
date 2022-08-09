import { createContext } from "react";

export const initialState = {
  isRedirect: false,
};

const AppContext = createContext(initialState);
export default AppContext;
