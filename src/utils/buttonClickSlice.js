import { createSlice } from "@reduxjs/toolkit";

const buttonClickSlice = createSlice({
    name: 'buttonClick',
    initialState: {
        buttonClick: false,
    },
    reducers:{
        isButtonClick : (state , action)=>{
            state.buttonClick = action.payload;
        }
    } 
});

export const {isButtonClick} = buttonClickSlice.actions;
export default buttonClickSlice.reducer;