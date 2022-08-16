import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRedirect: false,
};
// initial redirect slice
const redirectSlice = createSlice({
  name: "@redirect",
  initialState: initialState,
  reducers: {
    openRedirect: (state: any) => {
      state.isRedirect = true;
    },
    closeRedirect: (state: any) => {
      state.isRedirect = false;
    },
  },
});
export const { openRedirect, closeRedirect } = redirectSlice.actions;
export default redirectSlice;
