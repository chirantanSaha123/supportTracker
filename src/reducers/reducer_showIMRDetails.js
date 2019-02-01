
export default function IMRDetailsReducer(state={},action){
    switch(action.type){
      case SHOW_IMR_DETAILS:
          console.log('[IMRDetailsReducer]:Inside reducer');
          if(action.payload.data){
          console.log('[IMRDetailsReducer]:payload received: ',action.payload);
          //return {state,action.payload.data}
          return Object.assign({},state,action.payload.data)
        }else{
          return state;
        }
      default :
        return state;
    }
  }