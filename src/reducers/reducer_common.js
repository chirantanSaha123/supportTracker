import React from 'react';
import { combineReducers } from 'redux';

import { IMRDetailsReducer } from './reducer_showIMRDetails'

const rootReducer = combineReducers({
    imrDetails: IMRDetailsReducer
  });
  
  export default rootReducer;