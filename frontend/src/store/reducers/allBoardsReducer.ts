import { createSlice } from "@reduxjs/toolkit";
import databoards from "../../data/data.json";
import { BoardType } from "../../types/board";
import { v4 as uuidv4 } from "uuid";
import { randomHEXcolor } from "../../utils/randomColor";
const initialState: BoardType = {
  boards: [],
  loading: false,
  error: null,
  selectedBoard: null,
  selectedColumn: null,
};

const allBoardReducer = createSlice({
  name: "board",
  initialState,
  reducers: {
    setSelectedBoard: (state, action) => {
      state.selectedBoard = action.payload;
    },
    setSelectedColumn: (state, action) => {
      state.selectedColumn = action.payload;
    },
    getAllBoards: (state) => {
      state.boards = databoards.boards.map((item) => item);
    },
    createBoard: (state, action) => {
      const newBoard = {
        id: uuidv4(),
        title: action.payload.title,
        columns: [],
      };
      state.boards = [...state.boards, newBoard];
      state.selectedBoard = newBoard;
    },
    deleteBoard: (state,action) => {
      if (state.selectedBoard) {
        state.boards = state.boards.filter(
          (board) => board.id !== action.payload
        );
      }
    },
    createColumn: (state, action) => {
      const newColumn = {
        id: uuidv4(),
        taskProcess: action.payload.taskProcess,
        color: randomHEXcolor(),
        tasks: [],
      };
      const existed = state.boards.find(
        (board) => board.id === state.selectedBoard?.id
      );
      if (existed) {
        existed.columns.push(newColumn);
      }
    },
    updateColumns: (state, action) => {
      const existed = state.boards.find(
        (board) => board.id === state.selectedBoard?.id
      );
      if (existed) {
        existed.columns = action.payload;
      }
    },
    editColumn: (state, action) => {
      const existed = state.boards
        .find((board) => board.id === state.selectedBoard?.id)
        ?.columns.find((col) => col.id === state?.selectedColumn);
      if (existed) {
      }
    },
    deleteColumn: (state, action) => {
      const existed = state.boards.find(
        (board) => board.id === state.selectedBoard?.id
      );
      if (existed) {
        existed.columns = existed.columns.filter(
          (col) => col.id !== action.payload
        );
      }
    },
    createTask: (state, action) => {
      const newTask = {
        id: uuidv4(),
        sub_title: action.payload.sub_title,
        description: action.payload.description,
      };
      const existed = state.boards
        .find((board) => board.id === state.selectedBoard?.id)
        ?.columns.find((col) => col.id === state?.selectedColumn);
      if (existed) {
        existed.tasks.push(newTask);
      }
    },
  },
});

export const {
  setSelectedBoard,
  setSelectedColumn,
  getAllBoards,
  updateColumns,
  createBoard,
  createColumn,
  createTask,
  deleteColumn,
  deleteBoard,
} = allBoardReducer.actions;

export default allBoardReducer.reducer;
