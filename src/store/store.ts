import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/themeReducer";
import menuToggleReducer from "./reducers/menuToggleReducer";
import boardsReducer from "./reducers/boardsReducer";
import tasksReducer from "./reducers/tasksReducer";
import modalReducer from "./reducers/modalReducer";


const store = configureStore({
  reducer: {
    colorTheme: themeReducer,
    menuToggle: menuToggleReducer,
    dashboards: boardsReducer,
    tasksBoard: tasksReducer,
    modalToggle: modalReducer
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
