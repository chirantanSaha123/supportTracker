import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class NavLinks extends Component {
    render() {
        return (
            <div>
                <div className="navLinkItem">
                    <Link to="/addNewIMR" onClick={this.setCurrentPage}
                        id="addNewIMR" className="btn blue darken-4 navButtons">Add New IMR</Link>
                </div>
                <div className="navLinkItem">
                    <Link to="/dashboard" onClick={this.setCurrentPage}
                        id="dashboard" className="btn blue darken-4 navButtons">OPEN IMRS</Link>
                </div>
                <div className="navLinkItem">
                    <Link to="/reportsChart" onClick={this.setCurrentPage}
                        id="reportsChart" className="btn blue darken-4 navButtons">Reports</Link>
                </div>
                <div className="navLinkItem">
                    <Link to="/charts" onClick={this.setCurrentPage}
                        id="charts" className="btn blue darken-4 navButtons">Custom Charts</Link>
                </div>
                <div className="navLinkItem">
                    <a href="#" className="btn blue darken-4 navButtons">Problem tickets Opened</a>
                </div>
                <div className="navLinkItem">
                    <a href="#" className="btn blue darken-4 navButtons">Major releases</a>
                </div>
                <div className="navLinkItem">
                    <a href="#" className="btn blue darken-4 navButtons">Support Contacts</a>
                </div>
                <div className="navLinkItem">
                    <Link to="/servers" onClick={this.setCurrentPage} id="servers" className="btn blue darken-4 navButtons">Server list
                </Link>
                </div>
                <div className="navLinkItem">
                    <a href="#" className="btn blue darken-4 navButtons">Customer Codes</a>
                </div>
                <div className="navLinkItem"><a href="#" className="btn blue darken-4 navButtons">Vendor Codes</a></div>
                <div className="navLinkItem"><a href="#" className="btn blue darken-4 navButtons">Loan Codes</a></div>
                <div className="navLinkItem"><a href="#" className="btn blue darken-4 navButtons">Payment Codes</a></div>
                <div className="navLinkItem"><a href="#" className="btn blue darken-4 navButtons">VVS Rules</a></div>
                <div className="navLinkItem"><a href="#" className="btn blue darken-4 navButtons">Auth Logic</a></div>
                <div className="navLinkItem"><a href="#" className="btn blue darken-4 navButtons">Common Issues</a></div>
                <div className="navLinkItem"><a href="#" className="btn blue darken-4 navButtons">Communication tracking Ids</a></div>
                <div className="navLinkItem"><a href="#" className="btn blue darken-4 navButtons">MFPA codes</a></div>
                <div className="navLinkItem"><a href="#" className="btn blue darken-4 navButtons">Deloitte codes</a></div>
                <div className="navLinkItem"><a href="#" className="btn blue darken-4 navButtons">Common URLS</a></div>
                <div className="navLinkItem"><a href="#" className="btn blue darken-4 navButtons">CERTIFICATE EXPIRY</a></div>
            </div>
            
        )
    }
}
export default NavLinks;