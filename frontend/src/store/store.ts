import { configureStore, combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./reducers/themeReducer";
import menuToggleReducer from "./reducers/menuToggleReducer";
import modalReducer from "./reducers/modalReducer";
import allBoardsReducer from "./reducers/allBoardsReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk';
const allReducers = combineReducers({
  colorTheme: themeReducer,
  menuToggle: menuToggleReducer,
  modalToggle: modalReducer,
  allBoards: allBoardsReducer,
});

const persistConfig = {
  key: "boards",
  storage,
  whitelist: ['allBoards']
  
};

const persistedReducer = persistReducer(persistConfig, allReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});
export const persistedStore = persistStore(store)

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
