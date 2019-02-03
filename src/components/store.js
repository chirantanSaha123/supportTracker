import axios from 'axios'

export const openIMRs=[
    {"id":"1","agingDays":"10","inc":"INC01001567","reporter":"Jensen","category":"Payment","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
    {"id":"2","agingDays":"5","inc":"INC01001568","reporter":"Jensen","category":"Loan","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
    {"id":"3","agingDays":"2","inc":"INC01001569","reporter":"Jensen","category":"Payment","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
    {"id":"4","agingDays":"10","inc":"INC01001560","reporter":"Jensen","category":"Vendor","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
    {"id":"5","agingDays":"5","inc":"INC01001571","reporter":"Jensen","category":"Loan","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
    {"id":"6","agingDays":"5","inc":"INC01001572","reporter":"Jensen","category":"Payment","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
    {"id":"7","agingDays":"5","inc":"INC01001573","reporter":"Jensen","category":"Vendor","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
    {"id":"8","agingDays":"5","inc":"INC01001574","reporter":"Jensen","category":"Loan","createdOn":"12/31/18","status":"In Progress","subject":"Loan tequest has failed for 5 times","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
    {"id":"9","agingDays":"8","inc":"INC01001575","reporter":"Jensen","category":"Vendor","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
    {"id":"10","agingDays":"5","inc":"INC01001576","reporter":"Jensen","category":"Loan","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
    {"id":"11","agingDays":"5","inc":"INC01001577","reporter":"Jensen","category":"Customer","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
    {"id":"12","agingDays":"5","inc":"INC01001578","reporter":"Jensen","category":"Customer","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
    {"id":"13","agingDays":"5","inc":"INC01001579","reporter":"Jensen","category":"Loan","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
    {"id":"14","agingDays":"5","inc":"INC01001580","reporter":"Jensen","category":"Customer","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
    {"id":"15","agingDays":"3","inc":"INC01001581","reporter":"Jensen","category":"Payment","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
    {"id":"16","agingDays":"5","inc":"INC01001582","reporter":"Jensen","category":"Customer","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
    {"id":"17","agingDays":"4","inc":"INC01001583","reporter":"Jensen","category":"Loan","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"}
];


export const imrsInOtherTeamsQueue = [
    {"issueWith":"MYCA","id":"1","agingDays":"10","inc":"INC01001567","reporter":"Jensen","category":"Loan","createdOn":"01/10/19","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
    {"issueWith":"CFE","id":"2","agingDays":"5","inc":"INC01001568","reporter":"Jensen","category":"Loan","createdOn":"01/13/19","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
    {"issueWith":"MYCA","id":"3","agingDays":"2","inc":"INC01001569","reporter":"Jensen","category":"Loan","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
    {"issueWith":"GCAP","id":"4","agingDays":"10","inc":"INC01001560","reporter":"Jensen","category":"Loan","createdOn":"01/12/19","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
    {"issueWith":"MYCA","id":"5","agingDays":"5","inc":"INC01001571","reporter":"Jensen","category":"Loan","createdOn":"01/13/19","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
    {"issueWith":"MYCA","id":"6","agingDays":"5","inc":"INC01001572","reporter":"Jensen","category":"Loan","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
    {"issueWith":"DXP","id":"7","agingDays":"5","inc":"INC01001573","reporter":"Jensen","category":"Loan","createdOn":"01/10/19","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
    {"issueWith":"MYCA","id":"8","agingDays":"5","inc":"INC01001574","reporter":"Jensen","category":"Loan","createdOn":"12/31/18","status":"In Progress","subject":"Loan tequest has failed for 5 times","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
    {"issueWith":"MYCA","id":"9","agingDays":"8","inc":"INC01001575","reporter":"Jensen","category":"Loan","createdOn":"01/10/19","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
    {"issueWith":"DXP","id":"10","agingDays":"5","inc":"INC01001576","reporter":"Jensen","category":"Loan","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
    {"issueWith":"DXP","id":"11","agingDays":"5","inc":"INC01001577","reporter":"Jensen","category":"Loan","createdOn":"01/13/19","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
    {"issueWith":"DXP","id":"12","agingDays":"5","inc":"INC01001578","reporter":"Jensen","category":"Loan","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
    {"issueWith":"DXP","id":"13","agingDays":"5","inc":"INC01001579","reporter":"Jensen","category":"Loan","createdOn":"01/14/19","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
    {"issueWith":"MYCA","id":"14","agingDays":"5","inc":"INC01001580","reporter":"Jensen","category":"Loan","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
    {"issueWith":"MYCA","id":"15","agingDays":"3","inc":"INC01001581","reporter":"Jensen","category":"Loan","createdOn":"01/12/19","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
    {"issueWith":"CRPS","id":"16","agingDays":"5","inc":"INC01001582","reporter":"Jensen","category":"Loan","createdOn":"01/13/19","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
    {"issueWith":"MYCA","id":"17","agingDays":"4","inc":"INC01001583","reporter":"Jensen","category":"Loan","createdOn":"01/14/19","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"}
];

export const imrDetails = {
        "id":"1",
        "agingDays":"10",
        "inc":"INC01001567",
        "reporter":"Jensen",
        "category":"Payment",
        "createdOn":"12/31/18",
        "status":"In Progress",
        "subject":"Cannot link products",
        "description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"
    };

    export const openIMRs1 = axios.get('http://localhost:8080/RESTfulExample/rest/incidents').then(response =>{
        return response.data
    })