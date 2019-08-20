import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes'
/*---------------------- 4. import reducers and pass it to our store --------------*/
import reducers from './reducers';

/*----------- 1. Redux : add this if you want to use react --------------*/
import { Provider } from 'react-redux'; 
import { createStore , applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
/*-------------- 3. create store with middleware -------------------------------*/

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

/*---------- 2. apply provider to our browserrouter ------------*/
ReactDOM.render(
        <Provider store={createStoreWithMiddleware(reducers)}>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </Provider>
    , document.getElementById('root'));

