import React, { Component } from 'react'
import excel from 'xlsx';

class Dashboard extends Component{
    state={
        imrs:[
            {"id":"1","agingDays":"10","inc":"INC01001567","reporter":"Jensen","category":"Loan","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
            {"id":"2","agingDays":"5","inc":"INC01001568","reporter":"Jensen","category":"Loan","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
            {"id":"3","agingDays":"2","inc":"INC01001569","reporter":"Jensen","category":"Loan","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
            {"id":"4","agingDays":"10","inc":"INC01001560","reporter":"Jensen","category":"Loan","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
            {"id":"5","agingDays":"5","inc":"INC01001571","reporter":"Jensen","category":"Loan","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
            {"id":"6","agingDays":"5","inc":"INC01001572","reporter":"Jensen","category":"Loan","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
            {"id":"7","agingDays":"5","inc":"INC01001573","reporter":"Jensen","category":"Loan","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
            {"id":"8","agingDays":"5","inc":"INC01001574","reporter":"Jensen","category":"Loan","createdOn":"12/31/18","status":"In Progress","subject":"Loan tequest has failed for 5 times","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
            {"id":"9","agingDays":"8","inc":"INC01001575","reporter":"Jensen","category":"Loan","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
            {"id":"10","agingDays":"5","inc":"INC01001576","reporter":"Jensen","category":"Loan","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
            {"id":"11","agingDays":"5","inc":"INC01001577","reporter":"Jensen","category":"Loan","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
            {"id":"12","agingDays":"5","inc":"INC01001578","reporter":"Jensen","category":"Loan","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
            {"id":"13","agingDays":"5","inc":"INC01001579","reporter":"Jensen","category":"Loan","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
            {"id":"14","agingDays":"5","inc":"INC01001580","reporter":"Jensen","category":"Loan","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
            {"id":"15","agingDays":"3","inc":"INC01001581","reporter":"Jensen","category":"Loan","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
            {"id":"16","agingDays":"5","inc":"INC01001582","reporter":"Jensen","category":"Loan","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
            {"id":"17","agingDays":"4","inc":"INC01001583","reporter":"Jensen","category":"Loan","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"}
        ]
    }
    render(){
        const imrs = this.state.imrs.map(imr =>{
            let pulseColor=''
            if(imr.agingDays>=8){
               pulseColor = 'red darken-3 pulse'
              
            }else if(imr.agingDays>=5 && imr.agingDays<8){
                pulseColor = 'yellow darken-2'
            }else{
                pulseColor = 'green darken-3'
            }
            return(
            <tr key={imr.id}>
                <td className="cell_data_imr center-align">
                    {imr.inc}
                    <button className={`btn-floating z-depth-4 smallerButton ${pulseColor}`}></button>
                </td>
                <td className="cell_data center-align">{imr.reporter}</td>
                <td className="cell_data center-align">{imr.category}</td>
                <td className="cell_data center-align">{imr.createdOn}</td>
                <td className="cell_data center-align">{imr.status}</td>
                <td className="cell_data bigtextAreas">{imr.subject}</td>
                <td className="cell_data bigtextAreas">{imr.description}</td>
                
                <td className="cell_data center-align">{imr.agingDays}</td>

            </tr>
            );
        })
        // let fileName = "inc.xlsx";
        // let workbook = excel.readFile(fileName);
        // console.log(workbook) //should print an array with the excel file data
        return(
            <div className="left-align">
                <a href="#" className="btn-floating indigo lighten-1 pulse">
                    <i className="material-icons right white-text">add</i>
                </a>
                <table className="striped indigo lighten-4 dashboardTable">
                    <thead>
                        <tr className="indigo darken-2 white-text">
                            
                            <td className="cell_header center-align">Incident#</td>
                            <td className="cell_header center-align">Reporter</td>
                            <td className="cell_header center-align">Category</td>
                            <td className="cell_header center-align">Created On</td>
                            <td className="cell_header center-align">Status</td>
                            <td className="cell_header center-align">Subject</td>
                            <td className="cell_header center-align">Description</td>
                            
                            <td className="cell_header center-align">Aging days</td>
                        </tr>
                    </thead>
                    <tbody>
                        {imrs}
                    </tbody>
                </table>
            </div>
        );

    }
}

export default Dashboard;

