import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import brands from "../data/brands.json";

export interface iBrands {
  id: number;
  title: string;
  sort: string;
  code: string;
}
const initialState: any = {
  brands,
};

export const brandsApi = createSlice({
  name: "brands",
  initialState,
  reducers: {},
});

export default brandsApi.reducer;
