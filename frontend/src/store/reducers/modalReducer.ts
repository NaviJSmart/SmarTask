import { PayloadAction } from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    modalType: ''
}

const modalReducer = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        onToggleModal: (state, action: PayloadAction<string>) =>{ state.modalType =  action.payload}
     }
})
export const {onToggleModal} = modalReducer.actions
export default modalReducer.reducer