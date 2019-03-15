import axios from 'axios';
import { SERVICE_GET_ALL_INCIDENTS } from '../components/restServices'

export const GET_ALL_IMRS ='GET_ALL_IMRS'
export function getAllIMRs(callback){

    return function(dispatch) {
        const request = axios.get(`${SERVICE_GET_ALL_INCIDENTS}`)
        .then(function(response) {
            console.log(`[getAllIMRs]:[action]:Before dispatch`,response) 
            dispatch({
                type: GET_ALL_IMRS,
                payload: response.data.Incident
            });
            console.log(`[getAllIMRs]:[action]:Before callback`) 
            callback(response.data.Incident);
            console.log(`[getAllIMRs]:[action]:After callback`) 
        }
        )
    
    }
    }