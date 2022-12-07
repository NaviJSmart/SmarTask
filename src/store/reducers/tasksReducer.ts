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

export const deleteTaskColumn = createAsyncThunk<any, any>(
  "taskColumn/deleteTaskColumn",
  async ({ boardId, columnId }, { dispatch }) => {
    try {
      await axios.delete(
        `https://6387121fd9b24b1be3e4f67f.mockapi.io/boards/${boardId}/columns/${columnId}`
      );

      dispatch(deleteTaskCol(columnId));
    } catch (error) {
      console.log(error);
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
    deleteTaskCol: (state, action: PayloadAction<string>) => {
      state.taskColumns = state.taskColumns.filter(
        (item) => item.id !== action.payload
      );
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

export const { updateTaskCol, deleteTaskCol } = taskReducer.actions;

export default taskReducer.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
