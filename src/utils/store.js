import {configureStore} from '@reduxjs/toolkit';
import appSlice from './appSlice';
import suggestionSlice from './suggestionSlice';
import chatSlice from './chatSlice';
import historySlice from './historySlice';

const store = configureStore({
    reducer:{
        app: appSlice,
        suggestion: suggestionSlice,
        chat : chatSlice,
        history: historySlice
    }
});
export default store;