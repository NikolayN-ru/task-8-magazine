import { createSlice } from "@reduxjs/toolkit";

const initialState: String[] = [];

export const brandsActive = createSlice({
  name: "brandActive",
  initialState,
  reducers: {
    brandAdded: (state, { payload }) => {
      return [payload];
    },
    resetBrand: (state) => {
      return initialState;
    },
  },
});

export const { brandAdded, resetBrand } = brandsActive.actions;

export default brandsActive.reducer;
