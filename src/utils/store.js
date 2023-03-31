import {configureStore} from '@reduxjs/toolkit';
import appSlice from './appSlice';
import suggestionSlice from './suggestionSlice';
import chatSlice from './chatSlice';
import historySlice from './historySlice';
import buttonClickSlice from './buttonClickSlice';
import subscribeSlice from './subscribeSlice';

const store = configureStore({
    reducer:{
        app: appSlice,
        suggestion: suggestionSlice,
        chat : chatSlice,
        history: historySlice,
        buttonClick : buttonClickSlice,
        subscribe : subscribeSlice
    }
});
export default store;