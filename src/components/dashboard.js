import React, { Component } from 'react'
import { openIMRs } from './store'
import axios from 'axios'

class Dashboard extends Component{    
    state={
        imrs: openIMRs        
    }
    render(){

        const URL="https://samples.openweathermap.org/data/2.5/weather?id=2172797&appid=b6907d289e10d714a6e88b30761fae22";
        //const URL="http://localhost:8080/RESTfulExample/support/imrs"; 
        axios.get(URL, { headers: { "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept",
                        "Access-Control-Expose-Headers":"access-control-allow-origin"} })
        .then(response =>{
            console.log(`wather data = `,response.data.main)

        })
       


        console.log(`In dashboard :`,this.state.imrs)
        const parsedImrs = this.state.imrs.map(imr =>{
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
                <td className="cell_data_imr center-align incNumberWithUrgency">
                    {imr.inc} &nbsp;
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
        return(
            <div className="left-align">                
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
                    {parsedImrs}
                </tbody>
                </table>               
            </div>
        );
    }
}
export default Dashboard;