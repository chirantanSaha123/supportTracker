import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class NewIMR extends Component{
    constructor(props){
        super(props);
        this.state={
            startDate: new Date(),
            closedDate:'',
            modifiedDate:''
        }
    }
    handleDateChange=(date)=>{
        this.setState({
            startDate: date,
            modifiedDate: new Date()
          });
    }
  
    render(){
        return(
            <div className="newIMRForm blue darken-4">
            <div className="row">
                <div className="col l12 center-align">
                    <h5 className="white-text"><b><u>Add New Incident Form</u></b></h5>
                </div>
            </div>
            <div className="row">
                <div className="col l3 "><h6 className="lime-text formElements"><b>IMR Number</b></h6>
                </div>
                <div className="col l3"><input type="text" id="imrNumber" className="white-text"/>
                </div>
                <div className="col l3 "><h6 className="lime-text formElements"><b>Opened on</b></h6>
                </div>
                <div className="col l3">
                <DatePicker className="white-text"
                    selected = {this.state.startDate}
                    onChange={this.handleDateChange}
                    showYearDropdown
                    showMonthDropdown
                />
                </div>
            </div>
            <div className="row">
                <div className="col l3"><h6 className="lime-text formElements"><b>Subject Line</b></h6></div>
                <div className="col l9"><input type="text" id="subject" className="white-text" />
                </div>
            </div>
            <div className="row">
                <div className="col l3"><h6 className="lime-text formElements"><b>Reported By</b></h6></div>
                <div className="col l3"><input type="text" id="reportedBy" className="white-text" /></div>
                <div className="col l3"><h6 className="lime-text formElements"><b>Issue category</b></h6></div>
                <div className="col l3">
                    <Select className="form-control" id="category" value="elligibility">
                        <option value="&nbsp"></option>
                        <option value="vendorRelated">Vendor related</option>
                        <option value="elligibility">Elligibility related</option>
                        <option value="enrollment">Enrollment Issues</option>
                        <option value="loanRequest">Apply Loan</option>
                        <option value="otherPaymentModes">Other Payment modes</option>
                        <option value="payment">Payment related</option>
                        <option value="deloitte">Deloitte Product</option>
                        <option value="mfpa">MFPA Product</option>
                        <option value="WCTDashboard">WVCT Dashboard</option>
                        <option value="serviceRequest">Custom service request</option>
                        <option value="systemScynchingIssues">Systems Synch</option>
                        <option value="otbIssues">OTB Issues</option>
                        <option value="linkage">Linkage</option>
                        <option value="mycaID">MYCAID</option>
                    </Select>
                </div>
            
            </div>
            </div>
        );
    }
}

export default NewIMR;