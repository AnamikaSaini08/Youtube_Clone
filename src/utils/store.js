import {configureStore} from '@reduxjs/toolkit';
import appSlice from './appSlice';
import suggestionSlice from './suggestionSlice';
import chatSlice from './chatSlice';
import historySlice from './historySlice';
import buttonClickSlice from './buttonClickSlice';

const store = configureStore({
    reducer:{
        app: appSlice,
        suggestion: suggestionSlice,
        chat : chatSlice,
        history: historySlice,
        buttonClick : buttonClickSlice
    }
});
export default store;