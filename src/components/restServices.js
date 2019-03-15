const APPLICATION_CONTEXT = 'DailyIncidentTracker'
const HOST_NAME='localhost'
const PROTOCOL='http'
const PORT = '8085'

export const SERVICE_GET_ALL_INCIDENTS = `${PROTOCOL}://${HOST_NAME}:${PORT}/${APPLICATION_CONTEXT}/incident/getAllIncidents`
export const SERVICE_LOGIN_URL= `${PROTOCOL}://${HOST_NAME}:${PORT}/${APPLICATION_CONTEXT}/incident/verifyLogin`
export const SERVICE_GET_IMR_DETAILS_PART_URL = `${PROTOCOL}://${HOST_NAME}:${PORT}/${APPLICATION_CONTEXT}/incident/`