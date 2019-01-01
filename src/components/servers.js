import React  from 'react';
import ServerImage from '../images/card_servers.jpg'

const Servers =()=>{
        return(
                <div>
                    <div className="card card-width">
                        <div className="card-image">
                            <img src={ServerImage} alt="server Image"/>
                            <span className="card-title lime-text text-accent-3 glow">
                                <h5>E3 environment - Customer</h5>
                            </span>
                        </div>
                        <div className="card-content">
                            <table className="striped lime lighten-2">
                                <thead>
                                    <tr className="orange lighten-2">
                                        <td className="center-align"><b>Host name</b></td>
                                        <td className="center-align"><b>IP address</b></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>LPP00A0ABDB410</td>
                                        <td>10.168.24.34</td>
                                    </tr>
                                    <tr>
                                        <td>LPP00A0ABDB411</td>
                                        <td>10.168.24.35</td>
                                    </tr>
                                    <tr>
                                        <td>LPP00A0ABDB412</td>
                                        <td>10.168.24.36</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="card card-width">
                        <div className="card-image ">
                            <img src={ServerImage} alt="server Image"/>
                            <span className="card-title lime-text text-accent-3 glow">
                                <h5>E3 environment - Vendor</h5>
                            </span>
                        </div>
                        <div className="card-content">
                            <table className="striped lime lighten-2 center-align">
                                <thead>
                                    <tr className="orange lighten-1">
                                        <td className="center-align"><b>Host name</b></td>
                                        <td className="center-align"><b>IP address</b></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>LPP00A0ABDB416</td>
                                        <td>10.168.24.34</td>
                                    </tr>
                                    <tr>
                                        <td>LPP00A0ABDB417</td>
                                        <td>10.168.24.35</td>
                                    </tr>
                                    <tr>
                                        <td>LPP00A0ABDB418</td>
                                        <td>10.168.24.36</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
        );
    }

export default Servers;