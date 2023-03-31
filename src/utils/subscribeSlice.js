import { createSlice } from "@reduxjs/toolkit";

const subscribeSlice = createSlice({
    name: 'subscribe',
    initialState: {
        subscribe: [],
    },
    reducers: {
        clickToSubscribe: (state,action)=>{
            const ind = state.subscribe.findIndex(obj => JSON.stringify(obj) === JSON.stringify(action.payload));
            if(ind !== -1){
                state.subscribe.splice(ind,1);
            }else{
                state.subscribe.push(action.payload);
            }
        }
    }
});

export const {clickToSubscribe} = subscribeSlice.actions;
export default subscribeSlice.reducer;