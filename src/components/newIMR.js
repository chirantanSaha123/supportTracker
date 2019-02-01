import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";
import { status,options,teams,reasons } from './formData'

class NewIMR extends Component{
    constructor(props){
        super(props);
        this.state={
            startDate: new Date(),
            closedDate:'',
            modifiedDate:'',
            selectedCategory: '',
            issueWith:'',
            issueStatus:'',
            rfcDate: null,
            notes:'',
            pendingReason:''
        }
    }
    handleChange = (event) => {
        console.log(event)
        const selectedOption = event.value.substring(0,5)
        selectedOption==='teams'?(
            this.setState({
                issueWith: event.label
            })
        ):selectedOption==='issue'?(
            this.setState({
                selectedCategory: event.label
            })
        ):selectedOption==='stats'?(
            this.setState({
                issueStatus:event.label
            })
        ):selectedOption==='reasn'?(
            this.setState({
                pendingReason:event.label
            })
        ):null
        
        //console.log(`Option selected:`, selectedOption);
      }
    handleDateChange=(date)=>{

        this.setState({
            startDate: date,
            modifiedDate: new Date()
          });
    }
  handleRFCDateChange=(date)=>{        
        this.setState({
            rfcDate: date,
            modifiedDate: new Date()
          });
    }
    handleNotesChange=(e)=>{
        console.log(`text area data :`,e.target.value)
        this.setState({
            notes: e.target.value
        })
    }
    render(){
        const { selectedCategory } = this.state.selectedCategory; 
        const { issueWith } = this.state.issueWith;
        const { issueStatus }= this.state.issueStatus;
        const { pendingReason } = this.state.pendingReason;

        return(
            <div className="newIMRForm white darken-4">
            <div className="row center-align">
                <div className="col l12 center-align">
                    <h6 className="indigo-text text-darken-4"><b><u>Add New Incident Form</u></b></h6>
                </div>
            </div>
            <div className="row compactRows">
                <div className="col l1 ">&nbsp;</div>
                <div className="col l2 indigo-text text-darken-4 left-align valign-wrapper"><b>IMR Number</b></div>
                <div className="col l3"><input type="text" id="imrNumber" className="indigo-text text-darken-4"/>
                </div>
                <div className="col l3 indigo-text text-darken-4"><b>Opened on</b>
                </div>
                <div className="col l3 ">
                <DatePicker className="indigo-text text-darken-4"
                    selected = {this.state.startDate}
                    onChange={this.handleDateChange}
                    showYearDropdown
                    showMonthDropdown
                />
                </div>    
               </div>

            <div className="row compactRows">
                <div className="col l1">&nbsp;
                </div>
                <div className="col l2 indigo-text text-darken-4 left-align"><b>CM Name</b>
                </div>
                <div className="col l3"><input type="text" id="customerName" className="indigo-text text-darken-4"/>
                </div>
                <div className="col l3 indigo-text text-darken-4 formElements"><b>CM Biz Name</b>
                </div>
                <div className="col l3">
                 <input type="text" id="bizName" className="indigo-text text-darken-4"/>
                </div>
             </div>

            <div className="row compactRows">
                <div className="col l1">&nbsp;
                </div>
                <div className="col l2 indigo-text text-darken-4 left-align"><b>Subject Line</b></div>
                <div className="col l9"><input type="text" id="subject" className="indigo-text text-darken-4" />
                </div>
               
            </div>
            <div className="row compactRows">
                <div className="col l1">&nbsp;
                </div>
                <div className="col l2 indigo-text text-darken-4 left-align"><b>Reported By</b></div>
                <div className="col l3"><input type="text" id="reportedBy" className="indigo-text text-darken-4" /></div>
                <div className="col l3 indigo-text text-darken-4 left-align"><b>Issue category</b></div>
                <div className="col l3">
                    <Select 
                    value={selectedCategory}
                        onChange={this.handleChange}
                        options={options} />
                    
                </div>           
            </div>

            <div className="row compactRows">
                <div className="col l1">&nbsp;
                </div>
                <div className="col l2 indigo-text text-darken-4 left-align"><b>Aging Days</b></div>
                <div className="col l3"><input type="text" id="repoagingDaysrtedBy" className="indigo-text text-darken-4" /></div>
                <div className="col l3 indigo-text text-darken-4 left-align"><b>Issue with</b></div>
                <div className="col l3">
                    <Select 
                    value={issueWith}
                        onChange={this.handleChange}
                        options={teams} />
                    
                </div> 
            </div>

            <div className="row compactRows">
                <div className="col l1">&nbsp;
                </div>
                <div className="col l2 indigo-text text-darken-4 left-align"><b>Severity</b></div>
                <div className="col l3 left-align">
                    <input type="text" id="severity" className="indigo-text text-darken-4" />
                    
                </div> 
                <div className="col l3 indigo-text text-darken-4 left-align"><b>Pending Reson</b></div>
                <div className="col l3">
                    <Select 
                        value={pendingReason}
                        onChange={this.handleChange}
                        options={reasons} 
                        />
                </div>
                
            </div>

            <div className="row compactRows">
                <div className="col l1">&nbsp;
                </div>
                <div className="col l2 indigo-text text-darken-4 left-align"><b>Closed With</b></div>
                <div className="col l3 left-align">
                    <input type="text" id="closedWith" className="indigo-text text-darken-4" />
                    
                </div> 
                <div className="col l3 indigo-text text-darken-4 left-align"><b>Status</b></div>
                <div className="col l3">
                    <Select 
                        value={issueStatus}
                        onChange={this.handleChange}
                        options={status} 
                        />
                </div>
                
            </div>

            <div className="row compactRows">
                <div className="col l1">&nbsp;
                </div>
                <div className="col l2 indigo-text text-darken-4 left-align"><b>RFC Number</b></div>
                <div className="col l3 left-align">
                    <input type="text" id="rfcNumber" className="indigo-text text-darken-4" />                    
                </div> 
                <div className="col l3 indigo-text text-darken-4 left-align"><b>RFC Date</b></div>
                <div className="col l3">
                    <DatePicker className="indigo-text text-darken-4"
                        selected = {this.state.rfcDate}
                        onChange={this.handleRFCDateChange}
                        showYearDropdown
                        showMonthDropdown
                    />
                </div>
                
            </div>

          


            <div className="row compactRows">
                <div className="col l1">&nbsp;
                </div>
                <div className="col l2 indigo-text text-darken-4 left-align"><b>Notes</b></div>
                <div className="col l9">
                    <textarea className="notesArea"
                    name="notes" 
                    id="notes"
                    value={this.state.notes}
                    onChange={this.handleNotesChange}
                    />                   
                </div> 
                
                
            </div>
            <div className="row compactRows">
                
                <div className="col l6 right-align">
                    <button className="indigo darken-4 white-text text-darken-4 btn-width lighten-1 waves-effect waves-light"><b>Submit</b></button>
                </div>
                <div className="col l6 left-align">
                    <button className="red darken-4 white-text text-darken-4 text-darken-5 btn-width lighten-1 waves-effect waves-light"><b>Cancel</b></button>
                </div>
               
               
                
                
            </div>
            </div>
        );
    }
}

export default NewIMR;