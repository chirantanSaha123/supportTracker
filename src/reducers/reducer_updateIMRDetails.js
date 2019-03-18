import { UPDATE_IMR } from '../actions/action_updateIMR';

export default function updateIMRReducer(state={},action){
  switch(action.type){
    case UPDATE_IMR:
    //console.log(`In Login Reducer :`,action.payload);    
       
     console.log('calling from updateIMRReducer reducer: ',action.payload);
     const newState={
         inicdent:action.payload.data,
         isUpdated:"true"
     }
     console.log('calling from updateIMRReducer reducer: New State:',newState);
     
      return Object.assign({},state,newState)
   
    default:
      return state;
  }

}