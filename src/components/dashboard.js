import React, { Component } from 'react'
//import { openIMRs1 } from './store'
import axios from 'axios'
import IMRDetails from './imrDetails'


class Dashboard extends Component{  
    constructor(props){
        super(props);
        // // const openIMRs = axios.get('http://localhost:8080/RESTfulExample/rest/incidents')
        // // console.log(`Inside Constructor of Dashboard`,openIMRs);
        
        this.state={
            imrs: null,
            showIMRDetailsPage:'false',
            imrDetails: null        
            }
    }  
   

   showIMRDetails=(imrNumber)=>{
        console.log(`[dashboard]:[showIMRDetails]: Called showIMRDetails()`)
        console.log(`[Dashboard]:[showIMRDetails]: Start of method`);
        console.log(`[Dashboard]:[showIMRDetails]: IMR number passed aa: `,imrNumber);
        //const imrDetails = imrDetails;
        const GET_IMT_DETAILS_URL=`http://localhost:8080/RESTfulExample/rest/incidents/${imrNumber}`;
        axios.get(GET_IMT_DETAILS_URL)
            .then(response =>{
                console.log(`Response from API call :`,response.data)
                this.setState({
                     showIMRDetailsPage:'true',
                     imrDetails : response.data 
                 })
            })       
    }
    displayIMRDetails(){
        console.log(`[Dashboard]:[displayIMRDetails]:IMR details :`,this.state.imrDetails);
        
        return(
            <div className="left-align">
                <IMRDetails imrDetails={this.state.imrDetails}/>
            </div>
        )
        
    }

    displayAllOpenIMRs=()=>{
        console.log(`[dashboard]:[displayAllOpenIMRs]: Called displayAllOpenIMRs()`)      
        console.log(`[dashboard]:[displayAllOpenIMRs]:Imrs open :`,this.props.imrs)
        
        //Iterating through state IMRS and preparing the dasboard to be displayed 
        console.log(`[Dashboard]:[displayAllOpenIMRs]:Iteration of Imrs beginning`); 
        const parsedImrs = this.props.imrs.map(imr =>{
            //console.log(`[Dashboard]:[displayAllOpenIMRs]:[Iteration]: Imr #:`,imr.inc);
            
            let imrNumber = imr.incNumber
            let pulseColor=''
            if(imr.agingDays>=8){
               pulseColor = 'red darken-3 pulse'
            }else if(imr.agingDays>=5 && imr.agingDays<8){
                pulseColor = 'yellow darken-2'
            }else{
                pulseColor = 'green darken-3'
            }
            return(
            <tr key={imr.incidentId}>
            <td className="cell_data_imr center-align incNumberWithUrgency">
                <a href="#" onClick={()=>this.showIMRDetails(imrNumber)}>{imr.incNumber} </a>&nbsp;
                <button className={`btn-floating z-depth-4 smallerButton ${pulseColor}`}></button>
            </td>
            <td className="cell_data center-align">{imr.reportedBy}</td>
            <td className="cell_data center-align">{imr.category}</td>
            <td className="cell_data center-align">{imr.createdOn}</td>
            <td className="cell_data center-align">{imr.status}</td>
            <td className="cell_data bigtextAreas">Test</td>
            <td className="cell_data bigtextAreas">{imr.description}</td>
            <td className="cell_data center-align">{imr.agingDays}</td>
            </tr>
            );
        })     
        console.log(`[Dashboard]:[displayAllOpenIMRs]:Iteration of Imrs complete`); 
        console.log(`[Dashboard]:[displayAllOpenIMRs]:Iterated Imrs :`,parsedImrs);
        
        return(               
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
        )
    }

    render(){
        console.log(`[dashboard]:[render]:Checking what to display`);
        
        const functionTobeCalled = this.state.showIMRDetailsPage==='false'?(            
                this.displayAllOpenIMRs()
            ):this.state.showIMRDetailsPage==='true'?(
                this.displayIMRDetails()
            ):null
              
        return(
            <div className="left-align">               
                {functionTobeCalled }            
            </div>
        )
    }
}
export default Dashboard;

