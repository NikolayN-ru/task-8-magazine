import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products.json";

export interface CounterState {
  products: any;
}

const initialState: CounterState = {
  products: products,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export default counterSlice.reducer;
