import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dispatcher from './dispatcher';
import registerServiceWorker from './registerServiceWorker';




ReactDOM.render(

    <Dispatcher />
, 
document.getElementById('root'));
registerServiceWorker();
