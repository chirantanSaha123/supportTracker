import React, { Component } from 'react'
import Navbar from './navbar'
import { Link } from 'react-router-dom'
import Servers from './servers'
import Dashboard from './readExcel'


import ReportWithChartJS from './reportWithChart'

class Home extends Component{
    state ={
        currentPage : ''
    }
    setCurrentPage=(e)=>{
        console.log('Inside set current page: clicked page=');
        console.log(e)
        
        console.log(e.target.id)
        this.setState({
            currentPage : e.target.id
        })
    }
    render(){
        console.log('Inside render method in Home JS');
        var clickedComponent;
        const clickedLink = this.state.currentPage
        console.log(this.state.currentPage);
        console.log('printed clicked component');
       
       
        
        const currentPage = this.state.currentPage==='servers'?(
            < Servers />
        ):this.state.currentPage==='dashboard'?(
            < Dashboard />
        ):this.state.currentPage==='reportsChart'?(
            < ReportWithChartJS />
        ):(            
            <div className="center-align"><h4>No choice made yet!!!</h4></div>
          )
        
        
        
        return(
           <div className="row">
               <div className="col m12"  id="navBarDiv">
                    <Navbar />
               </div>
               <div className="col m2 hide-on-med-and-down">
                        <Link to="/dashboard" onClick={this.setCurrentPage} 
                            id="dashboard" className="btn blue darken-4 navButtons">Dashboard</Link>

                        <Link to="/reportsChart" onClick={this.setCurrentPage} 
                            id="reportsChart" className="btn blue darken-4 navButtons">Reports</Link>
                       
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