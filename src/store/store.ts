import {  configureStore } from "@reduxjs/toolkit";
import  themeReducer from './reducers/themeReducer';
import menuToggleReducer from './reducers/menuToggleReducer';
import boardsReducer from "./reducers/boardsReducer";




const store = configureStore({
        reducer: {
            colorTheme: themeReducer,
            menuToggle: menuToggleReducer,
            dashboards: boardsReducer,
        }
    })

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch