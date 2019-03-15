import { GET_IMR_DETAILS } from '../actions/action_getIMRDetails';

export default function IMRDetailsReducer(state={},action){
  switch(action.type){
    case GET_IMR_DETAILS:
      console.log(`[IMRDetailsReducer]:In Reducer: value from DB:`,action.payload.data);
        
      return Object.assign({},state,action.payload.data)
   
    default:
      return state;
  }

}