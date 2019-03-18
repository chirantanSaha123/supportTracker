import React, { Component } from 'react'
import Navbar from './navbar'
import NavLinks from './navLinks'

class Home extends Component {
    render() {
        return (
            <div className="home">
               <div className="row">
                    <div className="col m12 container-fluid" id="navBarDiv">
                        <Navbar />
                    </div>
                </div>
                <div className="linksPlusContent">
                    <div className="linksSection">
                        <NavLinks />
                    </div>
                    <div className="contentSection">
                        <h3>Please choose an option!</h3>
                    </div>                      
                </div>
            </div>
        )
    }
}
export default Home;