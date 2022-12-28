import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isHide: false,
};

const toggleReducer = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    onToggleMenu: (state) => {
      state.isHide = !state.isHide;
    },
  },
});

export const { onToggleMenu } = toggleReducer.actions;
export default toggleReducer.reducer;


