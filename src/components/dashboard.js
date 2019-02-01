import React, { Component } from 'react'
import { openIMRs } from './store'
import axios from 'axios'
import { connect } from 'react-redux';
import { showIMRDetails } from '../actions/action_showIMRDetails'
import { imrDetails } from './store'


class Dashboard extends Component{  
    constructor(props){
        super(props);
        this.state={
            imrs: openIMRs,
            showIMRDetailsPage:'false',
            imrDetails: null        
            }
    }  
    

 callShowIMRDetails =(imrNumber)=>{
        console.log(`About to call showIMRDetails props from ShowIMRDetails component`);
        
        const imrDetails = imrDetails;
       
        this.setState({
            showIMRDetailsPage:'true',
            imrDetails:imrDetails
        })
        showIMRDetails(imrDetails) 
    }

    showIMRDetails=(imrNumber)=>{
        console.log(`[dashboard]:[showIMRDetails]: Called showIMRDetails()`)
        console.log(`[Dashboard]:[showIMRDetails]: Start of method`);
        console.log(`[Dashboard]:[showIMRDetails]: IMR number passed: `,imrNumber);
        //const imrDetails = imrDetails;
        const GET_IMT_DETAILS_URL="http://localhost:8080/RESTfulExample/rest/incident";
        axios.get(GET_IMT_DETAILS_URL)
            .then(response =>{
                console.log(`Response from API call :`,response.data)
                this.setState({
                     showIMRDetailsPage:'true',
                     imrDetails : imrDetails 
                 })
            })
        return(
            <div className="left-align">
                {this.showIMRDetailsInPage()}
            </div>
        )
        
        
    }

    displayAllOpenIMRs=()=>{
        console.log(`[dashboard]:[displayAllOpenIMRs]: Called displayAllOpenIMRs()`)
        console.log(`[dashboard]:[displayAllOpenIMRs]:Imrs open :`,this.state.imrs)
        
        //Iterating through state IMRS and preparing the dasboard to be displayed 
        console.log(`[Dashboard]:[displayAllOpenIMRs]:Iteration of Imrs beginning`); 
        const parsedImrs = this.state.imrs.map(imr =>{
            //console.log(`[Dashboard]:[displayAllOpenIMRs]:[Iteration]: Imr #:`,imr.inc);
            
            let imrNumber = imr.inc
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
                <a href="#" onClick={()=>this.showIMRDetails(imrNumber)}>{imr.inc} </a>&nbsp;
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
        ):null
        //console.log(`[dashboard]:[render]:Function to be called :`,functionTobeCalled);
        
      return(
            <div className="left-align">               
                {functionTobeCalled }         
        
            </div>
        )
    }


}


	export default Dashboard;

