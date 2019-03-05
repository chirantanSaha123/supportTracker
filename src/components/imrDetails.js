import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";
import { statusAll,categories,teams,reasons } from './formData'
import dateFormat from 'dateformat'

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
            //rfcDate : this.props.imrDetails.rfcDate,


            notes : this.props.imrDetails.notes,
            name : this.props.imrDetails.name,
            businessName : this.props.imrDetails.businessName,
            INC : this.props.imrDetails.INC,
            //mostSLALost : this.props.imrDetails.mostSLALost,
            emailSubject : this.props.imrDetails.emailSubject,
            repName: this.props.imrDetails.repName,
            age : this.props.imrDetails.age,
            
            //closedWith : this.props.imrDetails.closedWith,
            //rfcNumber : this.props.imrDetails.rfcNumber,
            assignedDate : this.props.imrDetails.assignedDate,
            severity : this.props.imrDetails.severity            
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

    customDateFormatter(passedDate){
       console.log(`[IMRDetails]:[customDateFormatter()]:Passed Date :`,passedDate);
       //11/15/2018
       const splitArray = passedDate.split('/')
    //    console.log(`[IMRDetails]:[customDateFormatter()]:Split array :`,splitArray);
    //    console.log(`[IMRDetails]:[customDateFormatter()]:Split array : month :`,splitArray[0]);
    //    console.log(`[IMRDetails]:[customDateFormatter()]:Split array : date:`,splitArray[1]);
    //    console.log(`[IMRDetails]:[customDateFormatter()]:Split array :Year:`,splitArray[2]);
    

        const finalYear = splitArray[2];
        const finalDate = splitArray[1];
        const finalMonth = splitArray[0];

    //    const dateForFurtherSplitting = splitArray[1].split(',');
    //    const finaldate = dateForFurtherSplitting[0]
    //    console.log(`[IMRDetails]:[customDateFormatter()]:Split array : Final date:`,finaldate);

       
       
       

    //    const mon_mm = (finalMonth==='Jan')?'01':(finalMonth==='Feb')?'02':(finalMonth==='Mar')?'03':(finalMonth==='Apr')?'04':(finalMonth==='May')?'05':
    //    (finalMonth==='Jun')?'06':(finalMonth==='Jul')?'07':(finalMonth==='Aug')?'08':(finalMonth==='Sep')?'09':
    //    (finalMonth==='Oct')?'10':(finalMonth==='Nov')?'11':(finalMonth==='Dec')?'12':null

       const formattedDate = new Date(`${finalYear}/${finalMonth}/${finalDate}`)
       console.log(`[IMRDetails]:[customDateFormatter()]:formattedDate :`,formattedDate);
       return formattedDate
       
    }


    // getTeamNameOption(issueWithFromDb){
    //     console.log(`[IMRDetails]:[getTeamNameOption()]:issueWithFromDb:`,issueWithFromDb);
    //     const optionForTeam = teams.filter(team =>{
    //         console.log(`[IMRDetails]:[getTeamNameOption()]:team detail inside map:`,team);
    //         return team.label === issueWithFromDb
    //         //team.label===issueWithFromDb
    //     })

    //     // const optionForTeam = teams.map(team =>{
    //     //     if(team.label===issueWithFromDb){
    //     //         return team
    //     //     }
    //     // })
    //     console.log(`[IMRDetails]:[getTeamNameOption()]:optionForTeam:`,optionForTeam);
    //     return optionForTeam[0];
        
    // }

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
                <div className="col l3 indigo-text text-darken-4 formElements"><b>CM Biz Name</b>
                </div>
                <div className="col l3">
                 <input type="text" id="bizName" defaultValue={this.state.businessName} className="indigo-text text-darken-4"/>
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
                    <input type="text" id="severity" defaultValue={this.state.severity} className="indigo-text text-darken-4" />
                    
                </div> 
                <div className="col l3 indigo-text text-darken-4 left-align"><b>Pending Reson</b></div>
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