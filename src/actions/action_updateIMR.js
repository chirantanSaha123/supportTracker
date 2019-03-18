import axios from 'axios';
import { SERVICE_UPDATE_INCIDENT } from '../components/restServices'
export const UPDATE_IMR = 'UPDATE_IMR';
export function updateIMRDetails(values,callback){

return function(dispatch) {
    const request = axios.put(`${SERVICE_UPDATE_INCIDENT}`, values)
    .then(function(response) {
        console.log(`[action]:[updateIMRDetails]: Response after calling reducer:`,response);
        
    
        dispatch({
            type: UPDATE_IMR,
            payload: response
        });
        
        callback(response);
     
    }
    )

}
}