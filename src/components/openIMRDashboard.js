import React, { Component } from 'react';
import Navbar from './navbar'
import NavLinks from './navLinks'
import { getAllIMRs } from '../actions/action_getAllIMRs'
import { getIMRDetails } from '../actions/action_getIMRDetails'
import { connect } from 'react-redux';
import { CSVLink, CSVDownload } from "react-csv";
import { allFilters } from './formData'
import Select from 'react-select';
class OpenIMRDashboard extends Component {
    constructor(props) {
        console.log(`[OpenIMRDashboard]:[constructor]:Start of constructor`);
        super(props);
        this.state = {
            imrs: [],
            appliedFilter: 'ALL',
            showData: 'true',
            choosenCollection:[]
        }
    }
    componentDidMount() {
        this.props.getAllIMRs((response) => {
            console.log('[OpenIMRDashboard]:[componentDidMount]:Response In callback function :', response);
            if (!response) {
                return <div>Loading</div>
            } else {
                console.log('[OpenIMRDashboard]:[componentDidMount]:Setting state ::imrs :');
                console.log(response);
                this.setState({
                    imrs: response,
                    choosenCollection:response
                })
            }
        });
    }
    handleChangeInFilter = (appliedFilter) => {
        console.log(`[AdvDashboard]:[displayAllOpenIMRs]:AppliedFilter :`, appliedFilter);
        const imrsFromState = this.state.imrs;
        const filteredImrs = appliedFilter.value === 'ALL' ? this.state.imrs : imrsFromState.filter(imr => {
            return imr.team === appliedFilter.value
        })
        console.log(`[AdvDashboard]:[displayAllOpenIMRs]:filteredImrs :`, filteredImrs);
        this.setState({
            appliedFilter: appliedFilter,
            filterValue: appliedFilter.value,
            choosenCollection: filteredImrs,
            showData: 'true'
        })
    }
    hideDataAndShowFilters = () => {
        this.setState({
            showData: 'false'
        })
    }
    showIMRDetails = (imrNumber)=>{
        console.log(`[OpenIMRDashboard]:[showIMRDetails]:Start of method`);
        this.props.getIMRDetails(imrNumber,(response) => {
            console.log('[OpenIMRDashboard]:[componentDidMount]:Response In callback function :', response);
            if (!response) {
                return <div>Loading</div>
            } else {
                console.log('[OpenIMRDashboard]:[componentDidMount]:Setting state ::imrs :');
                console.log(response);
                this.props.history.push({
                    pathname:'/details',
                    isUpdated:'false',
                    imrDetails: response
                })
            }
        });
        
    }


    render() {
        console.log('[OpenIMRDashboard]:[render]: Starting of method');
        const { appliedFilter } = this.state
        if (this.state.imrs.Incident === null) {
            return (
                <div>Loading!!!</div>
            )
        }
        const imrsFromDB = this.state.choosenCollection
        console.log(`[OpenIMRDashboard]:[renderMethod]:this.state.imrs.Incident = `);
        console.log(imrsFromDB);
        const parsedImrs = imrsFromDB.map(imr => {
            let imrNumber = imr.INC
            let pulseColor = ''
            if (imr.age >= 5) {
                pulseColor = 'red darken-3'
            } else if (imr.age >= 3 && imr.age < 5) {
                pulseColor = 'yellow darken-2'
            } else {
                pulseColor = 'green darken-3'
            }
            return (
                <tr key={imr.INC}>
                    <td className="cell_data_imr center-align incNumberWithUrgency">
                        <a href="#" onClick={() => this.showIMRDetails(imrNumber)}>{imr.INC} </a>&nbsp;
                <button className={`btn-floating z-depth-4 smallerButton ${pulseColor}`}></button>
                    </td>
                    <td className="cell_data center-align">{imr.team}</td>
                    <td className="cell_data center-align">{imr.analyzedCategory}</td>
                    <td className="cell_data center-align">{imr.creationDate}</td>
                    <td className="cell_data center-align">{imr.status}</td>
                    <td className="cell_data bigtextAreas">{imr.emailSubject}</td>
                    <td className="cell_data bigtextAreas">{imr.notes}</td>
                    <td className="cell_data center-align">{imr.age}</td>
                </tr>
            );
        })





        const showDataOrFilter = this.state.showData === 'true' ? (
            <div className="myContent">
                 <div className="downloadButton right-align">
                        <CSVLink data={imrsFromDB} className="btn btnSmall indigo darken-4">                    
                        <i className="material-icons">get_app</i>                    
                        </CSVLink>
                  </div> 
            <table className="striped indigo lighten-4">
                <thead>
                    <tr className="indigo darken-2 white-text">
                        <td className="cell_header center-align">Incident#</td>
                        <td className="cell_header center-align">Assigned To</td>
                        <td className="cell_header center-align">Category</td>
                        <td className="cell_header center-align">Created On</td>
                        <td className="cell_header center-align">Status</td>
                        <td className="cell_header center-align">Short Description</td>
                        <td className="cell_header center-align">Notes</td>
                        <td className="cell_header center-align">Aging days</td>
                    </tr>
                </thead>
                <tbody>
                    {parsedImrs}
                </tbody>
            </table>
            </div>

        ) : (
                <div className="filterDropDown">
                    <Select className="selectBtnForChangingFilter"
                        value={appliedFilter}
                        onChange={this.handleChangeInFilter}
                        options={allFilters}
                    />
                </div>
            )
















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
                        <div className="offsetRight">
                            
                            <div className="tableofIMRs">
                                <div className="filterInitiator">
                                    <button onClick={() => this.hideDataAndShowFilters()} >Change Filters</button>
                                </div>
                                <div className="">
                                    {showDataOrFilter}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        imrs: state.imrs,
        imrDetails:state.imrDetails
    };
}
export default connect(mapStateToProps, { getAllIMRs, getIMRDetails })(OpenIMRDashboard)
