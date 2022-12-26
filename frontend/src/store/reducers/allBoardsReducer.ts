import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import databoards from "../../data/data.json";
import {
  BoardType,
  Column,
  PayloadBoard,
  PayloadColumnEdit,
  PayloadTask,
} from "../../types/board";
import { v4 as uuidv4 } from "uuid";
import { randomHEXcolor } from "../../utils/randomColor";

const data = databoards.boards.map((item) => item);
const initialState: BoardType = {
  boards: data || [],
  selectedBoard: null,
  selectedColumn: null,
  selectedTask: null,
};

const allBoardReducer = createSlice({
  name: "board",
  initialState,
  reducers: {
    setSelectedBoard: (state, action) => {
      state.selectedBoard = action.payload;
    },
    setSelectedColumn: (state, action: PayloadAction<string>) => {
      state.selectedColumn = action.payload;
    },
    setSelectedTask: (state, action: PayloadAction<string>) => {
      state.selectedTask = action.payload;
    },
    createBoard: (state, action: PayloadAction<PayloadBoard>) => {
      const newBoard = {
        id: uuidv4(),
        title: action.payload.title,
        columns: [],
      };
      state.boards = [...state.boards, newBoard];
      state.selectedBoard = newBoard;
    },
    editBoard: (state, action: PayloadAction<PayloadBoard>) => {
      const existed = state.boards.find(
        (board) => board.id === action.payload.id
      );
      if (existed) {
        existed.title = action.payload.title;
      }
    },
    deleteBoard: (state, action: PayloadAction<string>) => {
      if (state.selectedBoard) {
        state.boards = state.boards.filter(
          (board) => board.id !== action.payload
        );
      }
    },
    createColumn: (state, action: PayloadAction<{ taskProcess: string }>) => {
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
    updateColumns: (state, action: PayloadAction<Column[]>) => {
      const existed = state.boards.find(
        (board) => board.id === state.selectedBoard?.id
      );
      if (existed) {
        existed.columns = action.payload;
      }
    },
    editColumn: (state, action: PayloadAction<PayloadColumnEdit>) => {
      const existed = state.boards
        .find((board) => board.id === action.payload.boardId)
        ?.columns.find((col) => col.id === action.payload.columnId);
      if (existed) {
        existed.taskProcess = action.payload.taskProcess;
        existed.color = action.payload.color;
      }
    },
    deleteColumn: (state, action: PayloadAction<string>) => {
      const existed = state.boards.find(
        (board) => board.id === state.selectedBoard?.id
      );
      if (existed) {
        existed.columns = existed.columns.filter(
          (col) => col.id !== action.payload
        );
      }
    },
    createTask: (state, action: PayloadAction<{sub_title: string, description: string}>) => {
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
    editTask: (state, action: PayloadAction<PayloadTask>) => {
      const existed = state.boards
        .find((board) => board.id === action.payload.boardId)
        ?.columns.find((column) => column.id === action.payload.columnId)
        ?.tasks.find((task) => task.id === action.payload.taskId);
      if (existed) {
        existed.sub_title = action.payload.sub_title;
        existed.description = action.payload.description;
      }
    },
    deleteTask: (state, action) => {
      const existed = state.boards
        .find((board) => board.id === action.payload.boardId)
        ?.columns.find((column) => column.id === action.payload.columnId);
      if (existed) {
        existed.tasks = existed.tasks.filter(
          (task) => task.id !== action.payload.taskId
        );
      }
    },
  },
});

export const {
  setSelectedBoard,
  setSelectedColumn,
  setSelectedTask,
  updateColumns,
  createBoard,
  createColumn,
  createTask,
  deleteColumn,
  deleteBoard,
  editBoard,
  editColumn,
  editTask,
  deleteTask,
} = allBoardReducer.actions;

export default allBoardReducer.reducer;
