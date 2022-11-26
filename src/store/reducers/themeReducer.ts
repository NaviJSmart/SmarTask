import {createSlice} from '@reduxjs/toolkit';



const themeReducer = createSlice({
    name: 'theme',
    initialState: 'light',
    reducers: {
        onDarkTheme: (state) => state = 'dark',
        onLightTheme: (state) => state = 'light'
     }
})

export default themeReducer.reducer