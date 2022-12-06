import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isOpen: false
}

const modalReducer = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        onToggleModal: (state) =>{ state.isOpen = !state.isOpen}
     }
})
export const {onToggleModal} = modalReducer.actions
export default modalReducer.reducer