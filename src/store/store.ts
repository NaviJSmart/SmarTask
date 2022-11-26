import  themeReducer from './reducers/themeReducer';
import menuToggleReducer from './reducers/menuToggleReducer';

import {  configureStore } from "@reduxjs/toolkit";



const store = configureStore({
        reducer: {
            colorTheme: themeReducer,
            menuToggle: menuToggleReducer
        }
    })

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch