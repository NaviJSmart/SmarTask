import { TaskColumnType, Column } from "../../types/board";
import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export const getTaskColumns = createAsyncThunk<
  Column[],
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

export const postTaskColumns = createAsyncThunk<
  Column,
  any,
  { rejectValue: string }
>("taskColumn/postTaskColumns", async ({ id, data }, { rejectWithValue }) => {
  try {
    const res = await axios.post(
      `https://6387121fd9b24b1be3e4f67f.mockapi.io/boards/${id}/columns`,
      data
    );

    return await res.data;
  } catch (error) {
    const err = error as AxiosError;
    return rejectWithValue(String(err.message));
  }
});

export const deleteTaskColumn = createAsyncThunk<
  void,
  any,
  { rejectValue: string }
>(
  "taskColumn/deleteTaskColumn",
  async ({ boardId, columnId }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(deleteTaskCol(columnId));
      await axios.delete(
        `https://6387121fd9b24b1be3e4f67f.mockapi.io/boards/${boardId}/columns/${columnId}`
      );
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(String(err.message));
    }
  }
);

export const updateTaskColumns = createAsyncThunk<
  any,
  any,
  { rejectValue: string }
>(
  "tasksColumn/updateTaskColumns",
  async ({ boardId, data }, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.put(
        `https://6387121fd9b24b1be3e4f67f.mockapi.io/boards/${boardId}/columns`,
        data
      );

      console.log(res);
      return res.data;
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
const columnReducer = createSlice({
  name: "tasksColumn",
  initialState,
  reducers: {
    createTaskCol: (state, action: PayloadAction<Column>) => {
      state.taskColumns = [...state.taskColumns, action.payload];
    },
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

export const { updateTaskCol, deleteTaskCol, createTaskCol } =
  columnReducer.actions;

export default columnReducer.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
