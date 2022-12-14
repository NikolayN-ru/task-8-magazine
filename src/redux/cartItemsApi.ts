import { createSlice } from "@reduxjs/toolkit";

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
    delItemCart: (state, { payload }) => {
      const candidate = state.filter((item: any) => item.id !== payload);
      return candidate;
    },
    clearCart: (state) => {
      return initialState;
    },
  },
});

export const { addItemCart, delItemCart, clearCart } = cartApi.actions;

export default cartApi.reducer;
