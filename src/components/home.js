import React, { Component } from 'react'
import Navbar from './navbar'
import { Link } from 'react-router-dom'
import Servers from './servers'
//import Dashboard from './dashboard'
import AdvDashboard from './adv_dashboard'
import Report from './report'
import NewIMR from './newIMR'
import axios from 'axios'
import IMRsInOtherTeamsQueue from './needFollowUp'
import { imrsInOtherTeamsQueue, openIMRs } from './store';


import ReportWithChartJS from './reportWithChart'

class Home extends Component{
    state ={
        currentPage : '',
        imrs: null,
        imrsInOtherTeamsQueue : imrsInOtherTeamsQueue
    }

    componentDidMount(){
        // axios.get('http://localhost:8080/RESTfulExample/rest/incidents').then(response =>{
        //     this.setState({
        //         imrs : response.data
        //     })
        // })
        this.setState({
            imrs : openIMRs
        })
    }
   

    setCurrentPage=(e)=>{
        console.log('[Home]:[setCurrentPage()]:Start of method');
        
        this.setState({
            currentPage : e.target.id
        })
        console.log('[Home]:[setCurrentPage]:End of method');
    }
    render(){
        console.log('[Home]:[render()]:Start of method');
        var clickedComponent;
        const clickedLink = this.state.currentPage
        
       

       
       
        
        const currentPage = this.state.currentPage==='servers'?(
            < Servers />
        ):this.state.currentPage==='dashboard'?(
            < AdvDashboard imrs={this.state.imrs}/>
        ):this.state.currentPage==='reportsChart'?(
            < ReportWithChartJS />
        ):this.state.currentPage==='charts'?(
            <Report />
        ):this.state.currentPage==='addNewIMR'?(
            <NewIMR />
        ):(            
            <div className="center-align"><h4>No choice made yet!!!</h4></div>
          )
        
        
        
        return(
           <div className="row">
               <div className="col m12"  id="navBarDiv">
                    <Navbar />
               </div>
               <div className="col m2 hide-on-med-and-down">
                        <Link to="/addNewIMR" onClick={this.setCurrentPage} 
                            id="addNewIMR" className="btn blue darken-4 navButtons">Add New IMR</Link>

                        <Link to="/dashboard" onClick={this.setCurrentPage} 
                            id="dashboard" className="btn blue darken-4 navButtons">OPEN IMRS</Link>

                        {/* <Link to="/imrsInOthersQueue" onClick={this.setCurrentPage} 
                            id="imrsInOthersQueue" className="btn blue darken-4 navButtons">IMRS IN OTHER'S QUEUE</Link> */}

                        <Link to="/reportsChart" onClick={this.setCurrentPage} 
                            id="reportsChart" className="btn blue darken-4 navButtons">Reports</Link>

                        <Link to="/charts" onClick={this.setCurrentPage} 
                            id="charts" className="btn blue darken-4 navButtons">Custom Charts</Link>

                        <a href="#" className="btn blue darken-4 navButtons">Problem tickets Opened</a>

                        <a href="#" className="btn blue darken-4 navButtons">Major releases</a>
                        <a href="#" className="btn blue darken-4 navButtons">Support Contacts</a>
                        <Link to="/servers" onClick={this.setCurrentPage} id="servers" className="btn blue darken-4 navButtons">Server list
                            
                        </Link>

                      

                        <a href="#" className="btn blue darken-4 navButtons">Customer Codes</a>
                        <a href="#" className="btn blue darken-4 navButtons">Vendor Codes</a>
                        <a href="#" className="btn blue darken-4 navButtons">Loan Codes</a>
                        <a href="#" className="btn blue darken-4 navButtons">Payment Codes</a>
                        <a href="#" className="btn blue darken-4 navButtons">VVS Rules</a>
                        <a href="#" className="btn blue darken-4 navButtons">Auth Logic</a>
                        <a href="#" className="btn blue darken-4 navButtons">Common Issues</a>
                        <a href="#" className="btn blue darken-4 navButtons">Communication tracking Ids</a>
                        <a href="#" className="btn blue darken-4 navButtons">MFPA codes</a>
                        <a href="#" className="btn blue darken-4 navButtons">Deloitte codes</a>
                        <a href="#" className="btn blue darken-4 navButtons">Common URLS</a>
                        <a href="#" className="btn blue darken-4 navButtons">CERTIFICATE EXPIRY</a>
               </div>
               <div className="col offset-m1 m8 contentDiv">
                    {currentPage}
               </div>
               <div className="col m1"></div>


               
           </div>
        );
    }
}

export default Home;