import { RootState } from './../store';
import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalType: "",
  modalEdit: false,
};

const modalReducer = createSlice({
  name: "modal",
  initialState,
  reducers: {
    onToggleModal: (state, action: PayloadAction<string>) => {
      state.modalType = action.payload;
    },
    onModalEdit: (state, action: PayloadAction<boolean>) => {
      state.modalEdit = action.payload;
    },
  },
});
export const { onToggleModal, onModalEdit } = modalReducer.actions;
export default modalReducer.reducer;


export const modalSelector = (state: RootState) => state.modalToggle