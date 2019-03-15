import axios from 'axios';
import { SERVICE_LOGIN_URL } from '../components/restServices'
export const LOGIN = 'LOGIN';
export function login(values,callback){

return function(dispatch) {
    const request = axios.post(`${SERVICE_LOGIN_URL}`, values)
    .then(function(response) {
        //console.log(`Before dispatch`,response) 
        dispatch({
            type: LOGIN,
            payload: response
        });
        //console.log(`Before callback`) 
        callback(response);
        //console.log(`After callback`) 
    }
    )

}
}
