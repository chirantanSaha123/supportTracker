import React from 'react';
import { combineReducers } from 'redux';
import { reducer as FormReducer} from 'redux-form';

import LoginReducer from './reducer_login';
import GetALLIMRsReducer from './reducer_getAllIMRs'
import IMRDetailsReducer from './reducer_IMRDetails'
import UpdateIMRReducer from './reducer_updateIMRDetails'


const rootReducer = combineReducers({
  login: LoginReducer,
  imrs : GetALLIMRsReducer,
  imrDetails: IMRDetailsReducer,
  updatedIMR : UpdateIMRReducer,
  form : FormReducer
});

export default rootReducer;
