import React from 'react';
import ReactDOM from 'react-dom/client'
import store from './utils/store';
import Body from './components/Body';
import Header from './components/Header';
import { Provider } from 'react-redux';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import History from './components/History';
import SearchResults from './components/SearchResults';

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Body/>,
        children: [
            {
                path: '/',
                element: <MainContainer/>
            },
            {
                path: 'watch',
                element: <WatchPage/>
            }
        ],
    },
    {
        path: '/history',
        element: <History/>
    },
    {
        path: '/results',
        element: <SearchResults/>
    }
])
const App = ()=>(

    <Provider store={store}>
        <div>
            <Header/>
            <RouterProvider router={appRouter}/>
        </div>
    </Provider>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);