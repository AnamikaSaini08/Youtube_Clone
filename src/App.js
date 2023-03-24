import React from 'react';
import ReactDOM from 'react-dom/client'
import store from './utils/store';
import Body from './components/Body';
import Header from './components/Header';
import { Provider } from 'react-redux';

const App = ()=>(
    <Provider store={store}>
        <div>
            <Header/>
            <Body/>
        </div>
    </Provider>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);