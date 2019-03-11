// import React, { Component } from 'react'
// import axios from 'axios'



// class Dashboard extends Component{  
//     constructor(props){
//         super(props);
//         this.state={           
//             showIMRDetailsPage:'false',
//             imrsFromBackend: null               
//             }
//     }  
    

//     displayAllOpenIMRs=()=>{
//         console.log(`[dashboard]:[displayAllOpenIMRs]: Called displayAllOpenIMRs()`)
                
//         const GET_ALL_IMRs = 'http://localhost:8080/RESTfulExample/rest/incidents';
//         axios.get(GET_ALL_IMRs).then(response =>{
//            this.setState({
//                 imrsFromBackend : response.data
//             })
//         }
//         )

//         console.log(`[Dashboard]:[displayAllOpenIMRs]:Iteration of Imrs beginning`); 
//         const parsedImrs = this.state.imrsFromBackend.map(imr =>{
//             //console.log(`[Dashboard]:[displayAllOpenIMRs]:[Iteration]: Imr #:`,imr.inc);
            
            
//             let pulseColor=''
//             if(imr.agingDays>=8){
//                pulseColor = 'red darken-3 pulse'
//             }else if(imr.agingDays>=5 && imr.agingDays<8){
//                 pulseColor = 'yellow darken-2'
//             }else{
//                 pulseColor = 'green darken-3'
//             }
//             return(
//             <tr key={imr.incidentId}>
//             <td className="cell_data_imr center-align incNumberWithUrgency">
//                 <a href="#">{imr.inc} </a>&nbsp;
//                 <button className={`btn-floating z-depth-4 smallerButton ${pulseColor}`}></button>
//             </td>
//             <td className="cell_data center-align">{imr.reporter}</td>
//             <td className="cell_data center-align">{imr.category}</td>
//             <td className="cell_data center-align">{imr.createdOn}</td>
//             <td className="cell_data center-align">{imr.status}</td>
//             <td className="cell_data bigtextAreas">Test Subject</td>
//             <td className="cell_data bigtextAreas">{imr.description}</td>
//             <td className="cell_data center-align">{imr.agingDays}</td>
//             </tr>
//             );
//         })     
//         console.log(`[Dashboard]:[displayAllOpenIMRs]:Iteration of Imrs complete`); 
//         console.log(`[Dashboard]:[displayAllOpenIMRs]:Iterated Imrs :`,parsedImrs);
        
//         return(               
//             <table className="striped indigo lighten-4 dashboardTable">
//             <thead>
//                 <tr className="indigo darken-2 white-text">
//                     <td className="cell_header center-align">Incident#</td>
//                     <td className="cell_header center-align">Reporter</td>
//                     <td className="cell_header center-align">Category</td>
//                     <td className="cell_header center-align">Created On</td>
//                     <td className="cell_header center-align">Status</td>
//                     <td className="cell_header center-align">Subject</td>
//                     <td className="cell_header center-align">Description</td>
//                     <td className="cell_header center-align">Aging days</td>
//                 </tr>
//             </thead>
//             <tbody>
//                 {parsedImrs}
//             </tbody>
//             </table>  
//         )
//     }

//     render(){
//         console.log(`[dashboard]:[render]:Checking what to display`);
//         const functionTobeCalled = this.state.showIMRDetailsPage==='false'?(
//             this.displayAllOpenIMRs()
//         ):(
//           this.showIMRDetails()  
//         );
//         //console.log(`[dashboard]:[render]:Function to be called :`,functionTobeCalled);
        
//       return(
//             <div className="left-align">               
//                    {functionTobeCalled}    
        
//             </div>
//         )
//     }


// }




// export default Dashboard;

