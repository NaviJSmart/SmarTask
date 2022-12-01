import { Column, TaskColumnType } from "./../../types/board";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTaskColumns = createAsyncThunk<
  any,
  string,
  { rejectValue: string }
>("tasksColumn/getTaskColumns", async (id) => {
  try {
    const res = await axios.get(
      `https://6387121fd9b24b1be3e4f67f.mockapi.io/boards/${id}/columns`
    );
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState: TaskColumnType = {
  taskColumns: [],
  loading: false,
  error: null,
};
const taskReducer = createSlice({
  name: "tasksColumn",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTaskColumns.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTaskColumns.fulfilled, (state, action) => {
        state.loading = false;
        state.taskColumns = action.payload;
      });
  },
});

export default taskReducer.reducer;
