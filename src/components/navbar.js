import React, { Component } from 'react';
import Logo from '../images/logo.jpg'

class Navbar extends Component{
    render(){
        return(
            
                <nav className="nav-wrapper indigo darken-4">
                    <div className="row">
                        <div className="col m3">                        
                            <img src={Logo} alt="Amex Logo" className="logo"/>
                        </div>
                        <div className="col m5  hide-on-small-only grey-text text-lighten-3 center-align">                       
                            <h5>CLP Production Support Portal</h5>
                            
                        </div>
                        <div className="col offset-m3 m1 left-align hide-on-small-only">                        
                            {/* <a href="#" className="btn-small btn-floating pulse blue darken-3">
                                <i className="material-icons">account_circle</i>
                            </a> */}
                        </div>
                       
                    </div>
                </nav>
            
        );
    }
}

export default Navbar;