import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./Slices/modalSlice";

export const store = configureStore({
  reducer: { modal: modalReducer },
});
