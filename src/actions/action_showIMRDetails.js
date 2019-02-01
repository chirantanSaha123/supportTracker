import axios from 'axios'

export function showIMRDetails(imrNumber){
    const GET_IMT_DETAILS_URL="http://localhost:8080/RESTfulExample/rest/incident";
    const imrDetail = axios.get(GET_IMT_DETAILS_URL);
        
    return(
    {
        type:'SHOW_IMR_DETAILS',
        payload: imrDetail
    })
}