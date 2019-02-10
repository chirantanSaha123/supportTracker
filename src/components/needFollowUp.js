import React,{ Component } from 'react'


class IMRsInOtherTeamsQueue extends Component{
    render(){
        console.log(`[dashboard]:[displayAllOpenIMRs]: Called displayAllOpenIMRs()`)      
        console.log(`[dashboard]:[displayAllOpenIMRs]:Imrs open :`,this.props.imrs)
        
        //Iterating through state IMRS and preparing the dasboard to be displayed 
        console.log(`[Dashboard]:[displayAllOpenIMRs]:Iteration of Imrs beginning`); 
        const parsedImrs = this.props.imrsInOtherTeamsQueue.map(imr =>{
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
            <tr key={imr.id}>
            <td className="cell_data_imr center-align incNumberWithUrgency">
                <a href="#" onClick={()=>this.showIMRDetails(imrNumber)}>{imr.inc} </a>&nbsp;
                <button className={`btn-floating z-depth-4 smallerButton ${pulseColor}`}></button>
            </td>
            <td className="cell_data center-align">{imr.issueWith}</td>
           
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
                    <td className="cell_header center-align">Assigned to</td>
                    
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
        );
    }
}

export default IMRsInOtherTeamsQueue;