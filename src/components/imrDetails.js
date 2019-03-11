import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";
import { statusAll,categories,teams,reasons,rcaOwnedByList } from './formData'
import dateFormat from 'dateformat'
import axios from 'axios'

class IMRDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            // formattedOpenedDate: this.customDateFormatter(this.props.imrDetails.createdOn),
            // mostSLALostBy : this.getSelectedOptionForMostSLALostBy(this.props.imrDetails.mostSLALostBy),
            // category : this.getSelectedOptionForCategory(this.props.imrDetails.category),
            // issueWith : this.getSelectedOptionForTeam(this.props.imrDetails.issueWith),
            // pendingReason : this.getSelectedOptionForPendingReason(this.props.imrDetails.pendingReason),
            // status : this.getSelectedOptionForStatus(this.props.imrDetails.status),
            // rfcDate : this.customDateFormatter(this.props.imrDetails.rfcDate),


            formattedCreationDate: this.customDateFormatter(this.props.imrDetails.creationDate),
            mostSLAloss : this.props.imrDetails.mostSLAloss,
            analyzedCategory : this.getSelectedOptionForCategory(this.props.imrDetails.analyzedCategory),
            team : this.getSelectedOptionForTeam(this.props.imrDetails.team),
            section : this.getSelectedOptionForPendingReason(this.props.imrDetails.section),
            status : this.getSelectedOptionForStatus(this.props.imrDetails.status),
            rcaOwner : this.getSelectedOptionForRCAOwnedBy(this.props.imrDetails.RCAOwner),
            //rfcDate : this.props.imrDetails.rfcDate,


            notes : this.props.imrDetails.notes,
            name : this.props.imrDetails.name,
            businessName : this.props.imrDetails.businessName,
            INC : this.props.imrDetails.INC,
            mostSLALostBy : this.props.imrDetails.mostSLALostBy,
            emailSubject : this.props.imrDetails.emailSubject,
            repName: this.props.imrDetails.repName,
            age : this.props.imrDetails.age,
            maxSLALost: this.props.imrDetails.maxSLALost,
            
            //closedWith : this.props.imrDetails.closedWith,
            //rfcNumber : this.props.imrDetails.rfcNumber,
            assignedDate : this.props.imrDetails.assignedDate,
            severity : this.props.imrDetails.severity,
            closedDate : this.props.imrDetails.closedDate,
            formDatatoBeSubmitted:{}            
        }
    }


    handleChangeForMostSLALostBy=(mostSLALostBy)=>{
          this.setState({mostSLALostBy})
      }
    
    handleCategoryChange=(analyzedCategory)=>{
        console.log(`[IMrDetails]:[handleCategoryChange]: event =`,analyzedCategory);
        
        this.setState({analyzedCategory})
    }

    handleOpenedOnDateChange=(date)=>{
        console.log(`[IMRDetails]:[handleOpenedOnDateChange] method called`);        
          this.setState({
            formattedCreationDate : date
          })
      }

    handleTeamNameChange=(team)=>{
        console.log(`[IMRDetails]:[handleTeamNameChange]printing  method called: issueWith`,team);
        
        //{value: "teams_cas", label: "CAS"}
        this.setState({team})
    }

    handleChangeInReason=(pendingReason)=>{
        this.setState({pendingReason})
    }

    handleStatusChange=(status)=>{
        this.setState({status})
    }

    handleRFCDateChange=(date)=>{        
        this.setState({
            rfcDate: date            
          });
    }
  
    handleNotesChange=(e)=>{
        console.log(`text area data :`,e.target.value)
        this.setState({
            notes: e.target.value
        })
    }

    handleSLALossChange=(e)=>{
        console.log(`text area data :`,e.target.value)
        this.setState({
            mostSLAloss: e.target.value
        })
    }

    handleRCAOwnerChange=(rcaOwner)=>{
       
        this.setState({
            rcaOwner: rcaOwner
        })
    }

    customDateFormatter(passedDate){
       console.log(`[IMRDetails]:[customDateFormatter()]:Passed Date :`,passedDate);
 
       const splitArray = passedDate.split('/')
  
        const finalYear = splitArray[2];
        const finalDate = splitArray[1];
        const finalMonth = splitArray[0];


       const formattedDate = new Date(`${finalYear}/${finalMonth}/${finalDate}`)
       console.log(`[IMRDetails]:[customDateFormatter()]:formattedDate :`,formattedDate);
       return formattedDate
       
    }


    getSelectedOptionForTeam(valueFromDB){        
        const optionSelected = teams.filter(team =>{            
            return team.value === valueFromDB           
        })        
        return optionSelected[0];        
    }

    getSelectedOptionForPendingReason(valueFromDB){   
        console.log(`[IMRDetails]:[getSelectedOptionForPendingReason()]:Pending reason from DB:`,valueFromDB);     
        const optionSelected = reasons.filter(reason =>{            
            return reason.label === valueFromDB           
        }) 
        console.log(`[IMRDetails]:[getSelectedOptionForPendingReason()]:pending reason optionSelected:`,optionSelected);        
        return optionSelected[0];        
    }

    getSelectedOptionForStatus(valueFromDB){      
        console.log(`[IMRDetails]:[getSelectedOptionForStatus()]:Status from DB:`,valueFromDB);  
        const optionSelected = statusAll.filter(status =>{            
            return status.label === valueFromDB           
        }) 
        console.log(`[IMRDetails]:[getSelectedOptionForStatus()]:status optionSelected:`,optionSelected);          
        return optionSelected[0];        
    }

    getSelectedOptionForRCAOwnedBy(valueFromDB){
        console.log(`[IMRDetails]:[getSelectedOptionForRCAOwnedBy()]:Status from DB:`,valueFromDB);  
        const optionSelected = rcaOwnedByList.filter(status =>{            
            return status.label === valueFromDB           
        }) 
        console.log(`[IMRDetails]:[getSelectedOptionForRCAOwnedBy()]:rcaOwnedBy optionSelected:`,optionSelected);          
        return optionSelected[0];  
    }

    getSelectedOptionForCategory(valueFromDB){        
        const optionSelected = categories.filter(category =>{            
            return category.label === valueFromDB           
        })        
        return optionSelected[0];        
    }

    getSelectedOptionForMostSLALostBy(valueFromDB){        
        const optionSelected = teams.filter(team =>{            
            return team.label === valueFromDB           
        })        
        return optionSelected[0];        
    }

    handleFormSubmit = (event)=>{
        
        const formData ={
            name:this.state.name,
            businessName:this.state.businessName,
            INC:this.state.INC,
            creationDate : this.state.formattedCreationDate,
            emailSubject: this.state.emailSubject,
            mostSLAloss: this.state.mostSLAloss,
            repName:this.state.repName,
            analyzedCategory : this.state.analyzedCategory.label,
            mostSLALostBy : this.state.mostSLALostBy,
            maxSLALost: this.state.maxSLALost,
            age:this.state.age,
            team:this.state.team.label,
            severity:this.state.severity,
            section: this.state.section.label,
            closedWith:this.state.closedWith,
            status:this.state.status.label,
            rfcNumber:this.state.rfcNumber,
            RFCDate:this.state.rfcDate,
            notes:this.state.notes,
            RCAOwner: this.state.rcaOwner.label
        }
        
        console.log(`[imrDetails]:[handleFormSubmit]:Submitting form`,formData)
        var headers ={
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            "Access-Control-Expose-Headers": "access-control-allow-origin"
        }
        const response = axios.put(`http://localhost:8080/DailyIncidentTrackerProject/incident/updateIncident`,formData)
        console.log(`[imrDetails]:[handleFormSubmit]:Response from PUT call: `,response)
    }
    handleOnFormValueChangeForSeverity=(e)=>{
        console.log(`handleOnFormValueChange id = `,e.target.id);
        console.log(`handleOnFormValueChange value = `,e.target.value);
        this.setState({
            severity: e.target.value
        })
        
        
    }

    render(){
        // const { selectedCategory } = this.state.selectedCategory; 
        // const { issueWith } = this.state.issueWith;
        // const { issueStatus }= this.state.issueStatus;
        // const { pendingReason } = this.state.pendingReason;

        //{value: "teams_cas", label: "CAS"}
        const imrDetails = this.props.imrDetails
        const { team } = this.state
        const { section } = this.state 
        const { status } = this.state 
        const { rcaOwner } = this.state   
        // const { rfcDate } = this.state   
        const { formattedCreationDate } = this.state 
        const { assignedDate } = this.state
        const { analyzedCategory } = this.state
        // const { mostSLALostBy } = this.state

        console.log(`[IMRDetails]:[render()]:imrDetails props from dashboard:`,imrDetails);
        console.log(`[IMRDetails]:[render()]:Creationdate :`,this.state.formattedCreationDate);
        console.log(`[IMRDetails]:[render()]:Analyzed category :`,analyzedCategory);
        
        
        return(
            <div className="imrDetails white darken-4">
            <form onSubmit={this.handleFormSubmit}>
            <div className="row center-align">
                <div className="col l12 center-align">
                    <h6 className="indigo-text text-darken-4"><b><u>Details of &nbsp; {imrDetails.INC}</u></b></h6>
                </div>
            </div>


            <div className="row compactRows">
                <div className="col l1">&nbsp;
                </div>
                <div className="col l2 indigo-text text-darken-4 left-align"><b>CM Name</b>
                </div>
                <div className="col l3"><input type="text" defaultValue={this.state.name} id="customerName" className="indigo-text text-darken-4"/>
                </div>
                <div className="col l3 indigo-text text-darken-4"><b>RCA Owned By</b>
                </div>
                <div className="col l3">
                    <Select 
                        value={rcaOwner}
                        onChange={this.handleRCAOwnerChange}
                        options={rcaOwnedByList} />
                    
                </div> 
             </div>

             <div className="row compactRows">
                <div className="col l1">&nbsp;
                </div>
                <div className="col l2 indigo-text text-darken-4 left-align"><b>CM Biz Name</b>
                </div>
                <div className="col l3"><input type="text" defaultValue={this.state.businessName} id="bizName" className="indigo-text text-darken-4"/>
                </div>
                <div className="col l3 indigo-text text-darken-4 formElements"><b>Closed On</b>
                </div>
                <div className="col l3">
                 <input type="text" id="closedDate" defaultValue={this.state.closedDate} className="indigo-text text-darken-4"/>
                </div>
             </div>


             <div className="row compactRows">
                <div className="col l1 ">&nbsp;</div>
                <div className="col l2 indigo-text text-darken-4 left-align valign-wrapper"><b>IMR Number</b></div>
                <div className="col l3"><input type="text" defaultValue={this.state.INC} id="imrNumber" className="indigo-text text-darken-4"/>
                </div>
                <div className="col l3 indigo-text text-darken-4"><b>Opened on</b>
                </div>
                <div className="col l3 ">
                <DatePicker className="indigo-text text-darken-4"
                    selected = {formattedCreationDate}
                    onChange={this.handleOpenedOnDateChange}
                    showYearDropdown
                    showMonthDropdown
                />
                </div>    
               </div>



            <div className="row compactRows">
                <div className="col l1">&nbsp; </div>
                <div className="col l2 indigo-text text-darken-4 left-align"><b>Subject Line</b></div>
                <div className="col l9">
                
                {/* <input type="text" defaultValue={this.state.emailSubject} id="subject" className="indigo-text text-darken-4" /> */}
                    <textarea className="subjectLineArea"
                        name="emailSubject" 
                        id="emailSubject"
                        value={this.state.emailSubject}
                        readOnly                    
                        /> 
                </div>
               
            </div>



            


            <div className="row compactRows">
                <div className="col l1">&nbsp;</div>
               
                <div className="col l2 indigo-text text-darken-4 formElements"><b>Most SLA Lost</b></div>
                <div className="col l9">
                 {/* <input type="text" defaultValue={this.state.mostSLALost} id="bizName" className="indigo-text text-darken-4"/> */}
                 <textarea className="SLALossArea"
                    name="slaLost" 
                    id="slaLost"
                    value={this.state.mostSLAloss}
                    onChange={this.handleSLALossChange}
                    /> 
                </div> 
                            
               

             </div>

        









            <div className="row compactRows">
                <div className="col l1">&nbsp;
                </div>
                <div className="col l2 indigo-text text-darken-4 left-align"><b>Reported By</b></div>
                <div className="col l3"><input type="text" defaultValue={this.state.repName} id="reportedBy" className="indigo-text text-darken-4" /></div>
                <div className="col l3 indigo-text text-darken-4 left-align"><b>Issue category</b></div>
                <div className="col l3">
                    <Select 
                        value={analyzedCategory}
                        onChange={this.handleCategoryChange}
                        options={categories} />
                    
                </div>           
            </div>

            <div className="row compactRows">
                <div className="col l1">&nbsp;
                </div>
                <div className="col l2 indigo-text text-darken-4 left-align"><b>Aging Days</b></div>
                <div className="col l3"><input type="text" defaultValue={this.state.age} id="repoagingDaysrtedBy" className="indigo-text text-darken-4" /></div>
                <div className="col l3 indigo-text text-darken-4 left-align"><b>Issue with</b></div>
                <div className="col l3">
                    <Select 
                        value={team}
                        onChange={this.handleTeamNameChange}
                        options={teams} />
                    
                </div> 
            </div>

            <div className="row compactRows">
                <div className="col l1">&nbsp;
                </div>
                <div className="col l2 indigo-text text-darken-4 left-align"><b>Severity</b></div>
                <div className="col l3 left-align">
                    <input type="text" id="severity" defaultValue={this.state.severity} className="indigo-text text-darken-4" onChange={this.handleOnFormValueChangeForSeverity}/>
                    
                </div> 
                <div className="col l3 indigo-text text-darken-4 left-align"><b>High Level Category</b></div>
                <div className="col l3">
                    <Select 
                        value={section}
                        onChange={this.handleChangeInReason}
                        options={reasons} 
                        />
                </div>
                
            </div>

            <div className="row compactRows">
                <div className="col l1">&nbsp;
                </div>
                <div className="col l2 indigo-text text-darken-4 left-align"><b>Closed With</b></div>
                <div className="col l3 left-align">
                    <input type="text" id="closedWith" defaultValue={this.state.closedWith} className="indigo-text text-darken-4" />
                    
                </div> 
                <div className="col l3 indigo-text text-darken-4 left-align"><b>Status</b></div>
                <div className="col l3">
                    <Select 
                        value={status}
                        onChange={this.handleStatusChange}
                        options={statusAll} 
                        />
                </div>
                
            </div>

            {/* <div className="row compactRows">
                <div className="col l1">&nbsp;
                </div>
                <div className="col l2 indigo-text text-darken-4 left-align"><b>RFC Number</b></div>
                <div className="col l3 left-align">
                    <input type="text" id="rfcNumber" defaultValue={this.state.rfcNumber} className="indigo-text text-darken-4" />                    
                </div> 
                <div className="col l3 indigo-text text-darken-4 left-align"><b>RFC Date</b></div>
                <div className="col l3">
                    <DatePicker className="indigo-text text-darken-4"
                        selected = {rfcDate}
                        onChange={this.handleRFCDateChange}
                        showYearDropdown
                        showMonthDropdown
                    />
                </div>
                
            </div> */}

          


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
                
                <div className="col l0 right-align">
                    <input type="submit"  className="btn indigo darken-3 submitPosition" defaultValue="Update"/>
                </div>
           
               
                
                
            </div>
            </form>
            </div>
        );
    }
}

export default IMRDetails;