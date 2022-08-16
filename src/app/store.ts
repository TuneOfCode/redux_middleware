import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import productSlice from "./slices/productSlice";
import redirectSlice from "./slices/redirectSlice";

// create root reducers
const rootReducer = {
  redirect: redirectSlice.reducer,
  products: productSlice.reducer,
  carts: cartSlice.reducer,
};

// inital store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
