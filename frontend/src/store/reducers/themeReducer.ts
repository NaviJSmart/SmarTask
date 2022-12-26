import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const getTheme = () => {
  const theme = `${window?.localStorage?.getItem('theme')}`
  if ([ 'light', 'dark' ].includes(theme)) return theme

  const userMedia = window.matchMedia('(prefers-color-scheme: light)')
  if (userMedia.matches) return 'light'

  return 'light'
}

const initialState = getTheme()

export const themeReducer = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => action.payload,
  },
})

export const { setTheme } = themeReducer.actions

export default themeReducer.reducer