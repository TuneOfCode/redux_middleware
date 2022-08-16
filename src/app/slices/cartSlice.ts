import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem, ICartState } from "constants/interfaces";

const initialState: ICartState = {
  quantity: {},
  price: {},
  countCart: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "@carts",
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const { id, price } = action.payload;
      if (state.quantity[id]) {
        state.quantity[id]++;
      } else {
        state.quantity[id] = 1;
      }
      state.price[id] = price;
      state.countCart++;
    },
    totalMoney: (state) => {
      let totalMoney = 0;
      Object.keys(state.quantity).map((key: string) => {
        totalMoney += state.price[+key] * state.quantity[+key];
      });
      state.total = totalMoney;
    },
    removeToCart: (state, action: PayloadAction<ICartItem>) => {
      const { id } = action.payload;
      let cloneQuantity = state.quantity;
      let clonePrice = state.price;
      if (state.quantity[id] >= 2) {
        cloneQuantity[id]--;
      } else {
        delete cloneQuantity[id];
        delete clonePrice[id];
      }
      state.quantity = cloneQuantity;
      state.price = clonePrice;
      state.countCart--;
    },
    checkoutToCart: (state) => {
      state.quantity = {};
      state.price = {};
      state.countCart = 0;
      state.total = 0;
    },
  },
});
export const { addToCart, removeToCart, totalMoney, checkoutToCart } =
  cartSlice.actions;

export default cartSlice;
