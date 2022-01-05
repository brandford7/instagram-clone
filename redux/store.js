import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./Slices/modalslice";

export const store = configureStore({
  reducer: { modal: modalReducer },
});
