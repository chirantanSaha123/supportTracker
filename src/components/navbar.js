import React, { Component } from 'react';
import Logo from '../images/logo.jpg'

class Navbar extends Component{
    render(){
        return(
                <nav className="headerSection indigo darken-3">
                        <div className="logoSection">                        
                            <img src={Logo} alt="Amex Logo" className="logo"/>
                        </div>
                        <div className="verticalCenter">                       
                            <h4>NCL Issue Management System</h4>                            
                        </div>                      
                </nav>
            
        );
    }
}

export default Navbar;