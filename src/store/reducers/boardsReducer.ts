import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { Board, BoardType } from "./../../types/board";

export const getBoards = createAsyncThunk(
  "board/getBoard",
  async (_, { rejectWithValue }) => {
    const res = await fetch(
      "https://6387121fd9b24b1be3e4f67f.mockapi.io/boards/"
    );
    console.log(res);
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const data = (await res.json()) as Board[];
    return data;
  }
);

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
        state.selectedBoard = action.payload
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getBoards.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBoards.fulfilled, (state, action) => {
        state.loading = false;
        state.boards = action.payload;
      })
      .addCase(getBoards.rejected, (state, action) => {
        state.loading = false;
        state.error = "Error";
      });
  },
});

export const {setSelected}  = boardReducer.actions

export default boardReducer.reducer;
