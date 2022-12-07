import { Column, TaskColumnType } from "./../../types/board";
import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export const getTaskColumns = createAsyncThunk<
  any,
  string,
  { rejectValue: string }
>("tasksColumn/getTaskColumns", async (id, { rejectWithValue }) => {
  try {
    const res = await axios.get(
      `https://6387121fd9b24b1be3e4f67f.mockapi.io/boards/${id}/columns`
    );
    return res.data;
  } catch (error) {
    const err = error as AxiosError;
    return rejectWithValue(String(err.message));
  }
});

export const postTaskColumns = createAsyncThunk<any, any>(
  "taskColumn/postTaskColumns",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `https://6387121fd9b24b1be3e4f67f.mockapi.io/boards/${id}/columns`,
        data
      );
      console.log(res);
      return await res.data;
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(String(err.message));
    }
  }
);

const initialState: TaskColumnType = {
  taskColumns: [],
  loading: false,
  error: null,
};
const taskReducer = createSlice({
  name: "tasksColumn",
  initialState,
  reducers: {
    updateTaskCol: (state, action) => {
      state.taskColumns = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTaskColumns.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTaskColumns.fulfilled, (state, action) => {
        state.loading = false;
        state.taskColumns = action.payload;
      })
      .addCase(postTaskColumns.fulfilled, (state, action) => {
        state.taskColumns = [...state.taskColumns, action.payload];
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { updateTaskCol } = taskReducer.actions;

export default taskReducer.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
