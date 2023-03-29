import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
    name: 'history',
    initialState:{
        histories : []
    },
    reducers:{
        addHistory: (state, action)=>{
            state.histories.unshift(action.payload);
        }
    }
});

export const {addHistory} = historySlice.actions;
export default historySlice.reducer;