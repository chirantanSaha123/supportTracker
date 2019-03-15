import axios from 'axios';
import { SERVICE_GET_IMR_DETAILS_PART_URL } from '../components/restServices'
export const GET_IMR_DETAILS = 'GET_IMR_DETAILS';
export function getIMRDetails(incNumber,callback){

return function(dispatch) {
    const request = axios.get(`${SERVICE_GET_IMR_DETAILS_PART_URL}${incNumber}/getIncident`)
    .then(function(response) {
        //console.log(`Before dispatch`,response) 
        dispatch({
            type: GET_IMR_DETAILS,
            payload: response
        });
        //console.log(`Before callback`) 
        callback(response);
        //console.log(`After callback`) 
    }
    )

}
}