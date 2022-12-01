import {
  createSlice,
  createAsyncThunk,
  AnyAction,
  PayloadAction,
} from "@reduxjs/toolkit";

import { Board, BoardType } from "./../../types/board";

export const getBoards = createAsyncThunk<
  Board[],
  undefined,
  { rejectValue: string }
>("board/getBoard", async (_, { rejectWithValue }) => {
  try {
    const res = await fetch(
      "https://6387121fd9b24b1be3e4f67f.mockapi.io/boards/"
    );

    if (!res.ok) {
      throw res;
    }
    const data = await res.json();
    return data;
  } catch (e: any) {
    if (typeof e.text === "function") {
      return e.text().then((someError: any) => rejectWithValue(someError));
    } else {
      return rejectWithValue(String(e.message));
    }
  }
});

const initialState: BoardType = {
  boards: [],
  loading: false,
  error: null,
  selectedBoard: null,
};

const boardReducer = createSlice({
  name: "board",
  initialState,
  reducers: {
    setSelected: (state, action) => {
      state.selectedBoard = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getBoards.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBoards.fulfilled, (state, action) => {
        if (action.payload) {
          state.loading = false;
          state.boards = action.payload;
        }
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { setSelected } = boardReducer.actions;

export default boardReducer.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
