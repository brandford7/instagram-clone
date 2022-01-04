import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};


export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    isOpen: (state, action) => {
    state.value = true;
    },
    isClose: (state, action) => {
       state.value = false;
    },
  },
});

export default modalSlice.reducer;

export const { isOpen, isClose } = modalSlice.actions;
