import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import callProductApi from "api/product/api";
import { IProductState } from "constants/interfaces";

const initialState: IProductState = {
  products: [],
  isLoading: false,
};

export const fetchProducts: any = createAsyncThunk(
  "@products/fetchProducts",
  async () => {
    try {
      const response = await callProductApi.getListProduct();
      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
);

const productSlice = createSlice({
  name: "@products",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      });
  },
  // cách 2: các viết gọn
  //   extraReducers: {
  //     [fetchProducts.pending]: (state) => {
  //       state.isLoading = true;
  //     },
  //     [fetchProducts.fulfilled]: (state, action) => {
  //       state.isLoading = false;
  //       state.products = action.payload;
  //     },
  //   },
});
export default productSlice;
