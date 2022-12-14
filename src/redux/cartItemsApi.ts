import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface iCartItem {
  brand: number;
  id: number;
  image: string;
  regular_price: any;
  sku: string;
  title: string;
  type: string;
}

const initialState: any = [];

export const cartApi = createSlice({
  name: "cartApi",
  initialState,
  reducers: {
    addItemCart: (state, { payload }) => {
      state.push(payload);
    },
    delItemCart: (state) => {},
    clearCart: (state) => {
      return initialState;
    },
  },
});

export const { addItemCart, delItemCart, clearCart } = cartApi.actions;

export default cartApi.reducer;
