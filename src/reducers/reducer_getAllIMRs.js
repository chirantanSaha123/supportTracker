import { GET_ALL_IMRS } from '../actions/action_getAllIMRs';

export default function GetALLIMRsReducer(state={},action){
  switch(action.type){
    case GET_ALL_IMRS:
    console.log(`In GetALLIMRsReducer Reducer :`,action.payload);   
     
      return Object.assign({},state,action.payload.data)
    
    default:
      return state;
  }

}
