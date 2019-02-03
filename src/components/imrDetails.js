import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";
import { status,options,teams,reasons } from './formData'
import dateFormat from 'dateformat'

class IMRDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            formattedOpenedDate: this.customDateFormatter(this.props.imrDetails.createdOn),
            mostSLALostBy : this.props.imrDetails.mostSLALostBy            
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

      handleChangeForMostSLALostBy=(event)=>{
          this.setState({
            mostSLALostBy:event.label
          })
      }

    handleOpenedOnDateChange=(date)=>{
          this.setState({
            formattedOpenedDate : date
          })
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

    customDateFormatter(passedDate){
       console.log(`[IMRDetails]:[customDateFormatter()]:Passed Date :`,passedDate);
       const dt_createdOn = passedDate.substring(0,2);
       console.log(`[IMRDetails]:[customDateFormatter()]:Date :`,dt_createdOn);
       const mon_createdOn = passedDate.substring(3,6);
       console.log(`[IMRDetails]:[customDateFormatter()]:Month :`,mon_createdOn);
       const year_createdOn = passedDate.substring(8,12)
       console.log(`[IMRDetails]:[customDateFormatter()]:Year :`,year_createdOn);
       
       

       const mon_mm = (mon_createdOn==='Jan')?'01':(mon_createdOn==='Feb')?'02':null

       const formattedDate = new Date(`${year_createdOn}/${mon_mm}/${dt_createdOn}`)
       console.log(`[IMRDetails]:[customDateFormatter()]:formattedDate :`,formattedDate);
       return formattedDate
       
    }

    render(){
        // const { selectedCategory } = this.state.selectedCategory; 
        // const { issueWith } = this.state.issueWith;
        // const { issueStatus }= this.state.issueStatus;
        // const { pendingReason } = this.state.pendingReason;
        const imrDetails = this.props.imrDetails
        
         

        console.log(`[IMRDetails]:[render()]:imrDetails props from dashboard:`,imrDetails);
        return(
            <div className="newIMRForm white darken-4">
            <div className="row center-align">
                <div className="col l12 center-align">
                    <h6 className="indigo-text text-darken-4"><b><u>Details of &nbsp; {imrDetails.incNumber}</u></b></h6>
                </div>
            </div>


            <div className="row compactRows">
                <div className="col l1">&nbsp;
                </div>
                <div className="col l2 indigo-text text-darken-4 left-align"><b>CM Name</b>
                </div>
                <div className="col l3"><input type="text" value={imrDetails.cmName} id="customerName" className="indigo-text text-darken-4"/>
                </div>
                <div className="col l3 indigo-text text-darken-4 formElements"><b>CM Biz Name</b>
                </div>
                <div className="col l3">
                 <input type="text" id="bizName" value={imrDetails.cmBizName} className="indigo-text text-darken-4"/>
                </div>
             </div>


             <div className="row compactRows">
                <div className="col l1 ">&nbsp;</div>
                <div className="col l2 indigo-text text-darken-4 left-align valign-wrapper"><b>IMR Number</b></div>
                <div className="col l3"><input type="text" value={imrDetails.incNumber} id="imrNumber" className="indigo-text text-darken-4"/>
                </div>
                <div className="col l3 indigo-text text-darken-4"><b>Opened on</b>
                </div>
                <div className="col l3 ">
                <DatePicker className="indigo-text text-darken-4"
                    selected = {this.state.formattedOpenedDate}
                    onChange={this.handleOpenedOnDateChange}
                    showYearDropdown
                    showMonthDropdown
                />
                </div>    
               </div>

             <div className="row compactRows">
                <div className="col l1">&nbsp;</div>
               
                <div className="col l2 indigo-text text-darken-4 formElements"><b>SLA Lost</b>
                </div>
                <div className="col l3">
                 <input type="text" value={imrDetails.mostSLALost} id="bizName" className="indigo-text text-darken-4"/>
                </div>
                <div className="col l3 indigo-text text-darken-4 left-align"><b>Most SLA Lost By</b></div>
                <div className="col l3">
                    <Select 
                    value={this.state.mostSLALostBy}
                        onChange={this.handleChangeForMostSLALostBy}
                        options={teams} />
                    
                </div> 
             </div>

            <div className="row compactRows">
                <div className="col l1">&nbsp;
                </div>
                <div className="col l2 indigo-text text-darken-4 left-align"><b>Subject Line</b></div>
                <div className="col l9"><input type="text" value={imrDetails.subjectLine} id="subject" className="indigo-text text-darken-4" />
                </div>
               
            </div>
            <div className="row compactRows">
                <div className="col l1">&nbsp;
                </div>
                <div className="col l2 indigo-text text-darken-4 left-align"><b>Reported By</b></div>
                <div className="col l3"><input type="text" value={imrDetails.reportedBy} id="reportedBy" className="indigo-text text-darken-4" /></div>
                <div className="col l3 indigo-text text-darken-4 left-align"><b>Issue category</b></div>
                <div className="col l3">
                    <Select 
                    value={imrDetails.category}
                        onChange={this.handleChange}
                        options={options} />
                    
                </div>           
            </div>

            <div className="row compactRows">
                <div className="col l1">&nbsp;
                </div>
                <div className="col l2 indigo-text text-darken-4 left-align"><b>Aging Days</b></div>
                <div className="col l3"><input type="text" value={imrDetails.agingDays} id="repoagingDaysrtedBy" className="indigo-text text-darken-4" /></div>
                <div className="col l3 indigo-text text-darken-4 left-align"><b>Issue with</b></div>
                <div className="col l3">
                    <Select 
                    value={imrDetails.issueWith}
                        onChange={this.handleChange}
                        options={teams} />
                    
                </div> 
            </div>

            <div className="row compactRows">
                <div className="col l1">&nbsp;
                </div>
                <div className="col l2 indigo-text text-darken-4 left-align"><b>Severity</b></div>
                <div className="col l3 left-align">
                    <input type="text" id="severity" value={imrDetails.severity} className="indigo-text text-darken-4" />
                    
                </div> 
                <div className="col l3 indigo-text text-darken-4 left-align"><b>Pending Reson</b></div>
                <div className="col l3">
                    <Select 
                        value={imrDetails.pendingReason}
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
                    <input type="text" id="closedWith" value={imrDetails.closedWith} className="indigo-text text-darken-4" />
                    
                </div> 
                <div className="col l3 indigo-text text-darken-4 left-align"><b>Status</b></div>
                <div className="col l3">
                    <Select 
                        value={imrDetails.status}
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
                    <input type="text" id="rfcNumber" value={imrDetails.rfcNumber} className="indigo-text text-darken-4" />                    
                </div> 
                <div className="col l3 indigo-text text-darken-4 left-align"><b>RFC Date</b></div>
                <div className="col l3">
                    <DatePicker className="indigo-text text-darken-4"
                        selected = {imrDetails.rfcDate}
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
                    value={imrDetails.description}
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

export default IMRDetails;