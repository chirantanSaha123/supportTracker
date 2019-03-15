import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dispatcher from './dispatcher';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import promise from 'redux-promise';
import thunk from 'redux-thunk';

import reducers from './reducers';
import Login from './components/login';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Dispatcher />
    </Provider>
, 
document.getElementById('root'));
registerServiceWorker();
