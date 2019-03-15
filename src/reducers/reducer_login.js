import { LOGIN } from '../actions/action_login';

export default function LoginReducer(state={},action){
  switch(action.type){
    case LOGIN:
    //console.log(`In Login Reducer :`,action.payload);
    
      if(action.payload.data==='authenticated'){
       
     // console.log('calling from reducer: ',action.payload);
      return Object.assign({},state,action.payload.data)
    }else{
      return state;
    }
    default:
      return state;
  }

}
