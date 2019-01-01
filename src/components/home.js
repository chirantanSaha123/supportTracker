import React, { Component } from 'react'
import Navbar from './navbar'
import { Link } from 'react-router-dom'
import Servers from './servers'
import Contact from './contact'

class Home extends Component{
    state ={
        currentPage : ''
    }
    setCurrentPage=(e)=>{
        console.log('Inside set current page');
        
        console.log(e.target.id)
        this.setState({
            currentPage : e.target.id
        })
    }
    render(){
        console.log('Inside render method');
        var clickedComponent;
        const clickedLink = this.state.currentPage
        console.log(this.state.currentPage);
        //console.log(clickedComponent);
       
        
        const currentPage = this.state.currentPage?(
            < Servers />
        ):(
            
            <div><h4>No choice made yet!!!</h4></div>
        )
        
        
        
        return(
           <div className="row">
               <div className="col s12 container-fluid">
                    <Navbar />
               </div>
               <div className="col m3 hide-on-med-and-down">
                        <a href="#" className="btn blue darken-4 navButtons">Dashboard</a>
                        <a href="#" className="btn blue darken-4 navButtons">Reports</a>
                        <a href="#" className="btn blue darken-4 navButtons">Major releases</a>
                        <a href="#" className="btn blue darken-4 navButtons">Support Contacts</a>
                        <Link to="/servers" onClick={this.setCurrentPage} id="servers" className="btn blue darken-4 navButtons">Server list
                            {/* <a href="#" className="btn blue darken-4 navButtons" ></a> */}
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


               
           </div>
        );
    }
}

export default Home;