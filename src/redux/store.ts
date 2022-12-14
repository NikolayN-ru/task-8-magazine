import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import brandReducer from "./brandsApi";
import cartReducer from "./cartItemsApi";
import brandsActive from "./brandActive";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    brands: brandReducer,
    cart: cartReducer,
    brandsActive: brandsActive,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
