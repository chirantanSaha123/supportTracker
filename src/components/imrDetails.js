import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";
import { statusAll, categories, teams, reasons, rcaOwnedByList } from './formData'
import dateFormat from 'dateformat'
import axios from 'axios'
import Navbar from './navbar'
import NavLinks from './navLinks'
import { connect } from 'react-redux';
import { updateIMRDetails } from '../actions/action_updateIMR';

class IMRDetails extends Component {
    constructor(props) {
        super(props);
        console.log(`[IMRDetails]:[constructor]:this.props.location.imrDetails: `, this.props.location.imrDetails);


        const incident = this.props.location.isUpdated==='false'?this.props.location.imrDetails.data.Incident[0]:this.props.isUpdated
        console.log(`[IMRDetails]:[constructor]:this.props.isUpdated`,this.props.isUpdated);
        

        const imrDetails = incident



        this.state = {
           // formattedCreationDate: this.customDateFormatter(imrDetails.creationDate),
           formattedCreationDate: this.customDateFormatter(imrDetails.creationDate),
            mostSLAloss: imrDetails.mostSLAloss,
            analyzedCategory: this.getSelectedOptionForCategory(imrDetails.analyzedCategory),
            team: this.getSelectedOptionForTeam(imrDetails.team),
            section: this.getSelectedOptionForPendingReason(imrDetails.section),
            status: this.getSelectedOptionForStatus(imrDetails.status),
            rcaOwner: this.getSelectedOptionForRCAOwnedBy(imrDetails.RCAOwner),
            //rfcDate : this.props.imrDetails.rfcDate,
            notes: imrDetails.notes,
            name: imrDetails.name,
            businessName: imrDetails.businessName,
            INC: imrDetails.INC,
            mostSLALostBy: imrDetails.mostSLALostBy,
            emailSubject: imrDetails.emailSubject,
            repName: imrDetails.repName,
            age: imrDetails.age,
            maxSLALost: imrDetails.maxSLALost,
            //closedWith : this.props.imrDetails.closedWith,
            //rfcNumber : this.props.imrDetails.rfcNumber,
            assignedDate: imrDetails.assignedDate,
            severity: imrDetails.severity,
            closedDate: imrDetails.closedDate,
            rootCause:imrDetails.rootCause,
            formDatatoBeSubmitted: {}
        }
    }
    handleChangeForMostSLALostBy = (mostSLALostBy) => {
        this.setState({ mostSLALostBy })
    }
    handleCategoryChange = (analyzedCategory) => {
        console.log(`[IMrDetails]:[handleCategoryChange]: event =`, analyzedCategory);
        this.setState({ analyzedCategory })
    }
    handleOpenedOnDateChange = (date) => {
        console.log(`[IMRDetails]:[handleOpenedOnDateChange] method called`);
        this.setState({
            formattedCreationDate: date
        })
    }
    handleTeamNameChange = (team) => {
        console.log(`[IMRDetails]:[handleTeamNameChange]printing  method called: issueWith`, team);
        //{value: "teams_cas", label: "CAS"}
        this.setState({ team })
    }
    handleChangeInReason = (pendingReason) => {
        this.setState({ pendingReason })
    }
    handleStatusChange = (status) => {
        this.setState({ status })
    }
    handleRFCDateChange = (date) => {
        this.setState({
            rfcDate: date
        });
    }
    
    handleChangeInRootCause=(e)=>{
        this.setState({
            rootCause: e.target.value
        })
    }
    handleSLALossChange = (e) => {
        console.log(`text area data :`, e.target.value)
        this.setState({
            mostSLAloss: e.target.value
        })
    }
    handleRCAOwnerChange = (rcaOwner) => {
        this.setState({
            rcaOwner: rcaOwner
        })
    }
    handleDateChange = (datePassed) => {
        console.log(`Changed Date = `,datePassed)
       const formattedDate=this.formatDate(datePassed)        
        this.setState({
            formattedCreationDate: formattedDate
            });
    }

    handleClosedDateChange = (datePassed) => {
        console.log(`Changed Date = `,datePassed)
       const formattedDate=this.formatDate(datePassed)        
        this.setState({
            closedDate: formattedDate
            });
    }

    formatDate(passedDate){
        const partialDate = passedDate.toLocaleDateString().toString().substr(0,15)        
        const dateArray = partialDate.split('/')
        const month = dateArray[0]
        const date=dateArray[1]
        const year = dateArray[2]
        const formattedtDate = `${date}-${month}-${year}` 
        return formattedtDate
    }
    customDateFormatter(passedDate) {
        console.log(`[IMRDetails]:[customDateFormatter()]:Passed Date :`, passedDate);
        const splitArray = passedDate.split('-')
        const finalYear = splitArray[2];
        const finalDate = splitArray[0];
        const finalMonth = splitArray[1];
        const formattedDate = `${finalDate}-${finalMonth}-${finalYear}`
        console.log(`[IMRDetails]:[customDateFormatter()]:formattedDate :`, formattedDate);
        return formattedDate
    }
    handleChangeinNotes = (e) => {
        console.log(`[handleChangeinNotes]:text area data :`, e.target.value)
        this.setState({
            notes: e.target.value
        })
    }
    handlesChangeInMostSLALost=(e)=>{
        console.log(`[handleChangeinNotes]:Most SLA Lost:`, e.target.value)
        this.setState({
            mostSLAloss: e.target.value
        })
    }
    getSelectedOptionForTeam(valueFromDB) {
        const optionSelected = teams.filter(team => {
            return team.value === valueFromDB
        })
        return optionSelected[0];
    }
    getSelectedOptionForPendingReason(valueFromDB) {
        console.log(`[IMRDetails]:[getSelectedOptionForPendingReason()]:Pending reason from DB:`, valueFromDB);
        const optionSelected = reasons.filter(reason => {
            return reason.label === valueFromDB
        })
        console.log(`[IMRDetails]:[getSelectedOptionForPendingReason()]:pending reason optionSelected:`, optionSelected);
        return optionSelected[0];
    }
    getSelectedOptionForStatus(valueFromDB) {
        console.log(`[IMRDetails]:[getSelectedOptionForStatus()]:Status from DB:`, valueFromDB);
        const optionSelected = statusAll.filter(status => {
            return status.label === valueFromDB
        })
        console.log(`[IMRDetails]:[getSelectedOptionForStatus()]:status optionSelected:`, optionSelected);
        return optionSelected[0];
    }
    getSelectedOptionForRCAOwnedBy(valueFromDB) {
        console.log(`[IMRDetails]:[getSelectedOptionForRCAOwnedBy()]:Status from DB:`, valueFromDB);
        const optionSelected = rcaOwnedByList.filter(rcaOwner => {
            return rcaOwner.value === valueFromDB
        })
        console.log(`[IMRDetails]:[getSelectedOptionForRCAOwnedBy()]:rcaOwnedBy optionSelected:`, optionSelected);
        return optionSelected[0];
    }
    getSelectedOptionForCategory(valueFromDB) {
        const optionSelected = categories.filter(category => {
            return category.label === valueFromDB
        })
        return optionSelected[0];
    }
    getSelectedOptionForMostSLALostBy(valueFromDB) {
        const optionSelected = teams.filter(team => {
            return team.label === valueFromDB
        })
        return optionSelected[0];
    }

    customDateFormatterForPost(passedDate) {
        console.log(`[IMRDetails]:[customDateFormatterForPost()]:Passed Date :`, passedDate);
        // const splitArray = passedDate.split('/')
        // const finalYear = splitArray[2];
        // const finalDate = splitArray[0];
        // const finalMonth = splitArray[1];
        // const formattedDate = new Date(`${finalYear}/${finalMonth}/${finalDate}`)
        // console.log(`[IMRDetails]:[customDateFormatter()]:formattedDate :`, formattedDate);
        // return formattedDate
    }
    handleFormSubmit = (event) => {
        const closedDateToBeSent = this.customDateFormatterForPost(this.state.closedDate)
        
        const formData = {
            name: this.state.name,
            businessName: this.state.businessName,
            INC: this.state.INC,
            creationDate: this.state.formattedCreationDate,
            emailSubject: this.state.emailSubject,
            mostSLAloss: this.state.mostSLAloss,
            repName: this.state.repName,
            analyzedCategory: this.state.analyzedCategory.label,
            mostSLALostBy: this.state.mostSLALostBy,
            maxSLALost: this.state.maxSLALost,
            age: this.state.age,
            team: this.state.team.label,
            severity: this.state.severity,
            section: this.state.section.label,
            closedWith: this.state.closedWith,
            status: this.state.status.label,
            rfcNumber: this.state.rfcNumber,
            RFCDate: this.state.rfcDate,
            notes: this.state.notes,
            RCAOwner: this.state.rcaOwner.label,
            rootCuse: this.state.rootCause
        }
        console.log(`[imrDetails]:[handleFormSubmit]:Submitting form`, formData)
        
        
        
        this.props.updateIMRDetails(formData, (response) => {
           
            if (!response) {
                return <div>Loading</div>
            }
           
            if(response.status===200){
                this.props.history.push({
                    pathname:'/dashboard'
                });
            }
        });
      

    }
    handleOnFormValueChangeForSeverity = (e) => {
        console.log(`handleOnFormValueChange id = `, e.target.id);
        console.log(`handleOnFormValueChange value = `, e.target.value);
        this.setState({
            severity: e.target.value
        })
    }
    render() {
        const imrDetails = this.props.location.imrDetails.data.Incident[0]
        const { team } = this.state
        const { section } = this.state
        const { status } = this.state
        const { rcaOwner } = this.state
        const { formattedCreationDate } = this.state
        const { assignedDate } = this.state
        const { analyzedCategory } = this.state
        const { name } = this.state
        const { INC } = this.state
        const { emailSubject } = this.state
        const { businessName } =this.state
        const  closedDate = this.state.closedDate===''?'':this.state.closedDate
        const { rootCause }= this.state
        const { mostSLAloss } = this.state
        const { repName } =this.state
        const { age } =this.state
        const { severity } = this.state
        

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
                        <div className="newIMRForm white darken-4">
                        <form onSubmit={this.handleFormSubmit}>
                            <table className="blankForm">
                                <tbody>
                                <tr className="rowWidth">
                                        <td>&nbsp;</td>
                                        <td className="formFields"><b>CM Name</b></td>
                                        <td className="formFields"><input type="text" id="customerName" name="name" value={name} className="indigo-text text-darken-4" readOnly/></td>
                                        <td colSpan="1">&nbsp;</td>
                                        <td className="formFields"><b>RCA Owned By</b></td>
                                        <td colSpan="2" className="formFields rightAlignFormField">
                                            <Select 
                                                value={rcaOwner}
                                                onChange={this.handleRCAOwnerChange}
                                                options={rcaOwnedByList} />
                                        </td>
                                        <td>&nbsp;</td>
                                </tr>
                                {/* <tr className="rowWidth">
                                    <td>&nbsp;</td>
                                    <td className="formFields"><b>IMR Number</b></td>
                                    <td className="formFields"><input type="text" id="imrNumber" name="INC" value={INC} className="indigo-text text-darken-4" readOnly/></td>
                                    <td colSpan="1">&nbsp;</td>
                                    <td className="formFields"><b>Opened on</b></td>
                                    <td colSpan="2" className="formFields rightAlignFormField">
                                        <DatePicker className="indigo-text text-darken-4"
                                            selected = {formattedCreationDate}                                           
                                            showYearDropdown
                                            showMonthDropdown
                                            disabled={true}
                                        />
                                    </td>
                                    <td>&nbsp;</td>
                                </tr>

 */}


                                <tr className="rowWidth">
                                    <td>&nbsp;</td>
                                    <td className="formFields"><b>Opened on</b></td>
                                    <td className="formFields"><input type="text" id="creationDate" name="creationDate" value={formattedCreationDate} className="indigo-text text-darken-4" readOnly/></td>
                                    <td> 
                                        <DatePicker className="react-datepicker-wrapper btn"                                            
                                            onChange={this.handleDateChange}
                                            showYearDropdown
                                            showMonthDropdown
                                        />  
                                    </td>                                   
                                    <td className="formFields"><b>IMR Number</b></td>
                                    <td className="formFields"><input type="text" id="imrNumber" name="INC" defaultValue={INC} className="indigo-text text-darken-4"/></td>
                                    <td>&nbsp;</td>
                                </tr>






                                <tr className="rowWidth">
                                    <td>&nbsp;</td>
                                    <td className="formFields"><b>Subject Line</b></td>
                                    <td colSpan="4">
                                            <textarea className="textAreaWidth"
                                            name="emailSubject" 
                                            id="emailSubject" 
                                            value={emailSubject}
                                            readOnly                  
                                            />
                                    </td>  
                                    <td>&nbsp;</td>
                                </tr>




                                <tr className="rowWidth">
                                    <td>&nbsp;</td>
                                    <td className="formFields"><b>Closed On</b></td>
                                    <td className="formFields"><input type="text" id="closedDate" name="closedDate" value={closedDate} className="indigo-text text-darken-4" readOnly/></td>
                                    <td>
                                    <DatePicker className="react-datepicker-wrapper btn"
                                        onChange={this.handleClosedDateChange}
                                        showYearDropdown
                                        showMonthDropdown
                                    />
                                    </td>
                                    <td className="formFields"><b>CM Biz Name</b></td>
                                    <td className="formFields">
                                        <input type="text" id="bizName" name="businessName" className="indigo-text text-darken-4" defaultValue={businessName}/></td>
                                    <td>&nbsp;</td>
                                </tr>


                                {/* <tr className="rowWidth">
                                    <td>&nbsp;</td>
                                    <td className="formFields"><b>CM Biz Name</b></td>
                                    <td className="formFields">
                                        <input type="text" id="bizName" name="businessName" value={businessName} className="indigo-text text-darken-4" readOnly/></td>
                                    <td colSpan="1">&nbsp;</td>
                                    <td className="formFields"><b>Closed On</b></td>
                                    <td colSpan="2" className="formFields rightAlignFormField">
                                    <DatePicker className="indigo-text text-darken-4 datePickerWidth"
                                        selected={closedDate}
                                        onChange={this.handleClosedDateChange}
                                        showYearDropdown
                                        showMonthDropdown
                                    />
                                    </td>
                                    <td>&nbsp;</td>
                                </tr> */}

                                <tr className="rowWidth">
                                    <td>&nbsp;</td>
                                    <td className="formFields"><b>Root Cause</b></td>
                                    <td colSpan="4">
                                            <textarea className="textAreaWidth"
                                            name="rootCause" 
                                            id="rootCause"
                                            value={rootCause}
                                            onChange={this.handleChangeInRootCause}                   
                                            />
                                    </td>  
                                    <td>&nbsp;</td>
                                </tr>

                                
                                <tr className="rowWidth">
                                    <td>&nbsp;</td>
                                    <td className="formFields"><b>Most SLA Lost</b></td>
                                    <td colSpan="4">
                                            <textarea className="textAreaWidth"
                                            name="mostSLAloss" 
                                            id="mostSLAloss" 
                                            value={mostSLAloss} 
                                            onChange={this.handlesChangeInMostSLALost}                 
                                            />
                                    </td>  
                                    <td>&nbsp;</td>
                                </tr>

                                <tr className="rowWidth">
                                        <td>&nbsp;</td>
                                        <td className="formFields"><b>Reported By</b></td>
                                        <td className="formFields"><input type="text" id="repName" name="repName" value={repName} className="indigo-text text-darken-4" readOnly/></td>
                                        <td colSpan="1">&nbsp;</td>
                                        <td className="formFields"><b>Issue category</b></td>
                                        <td colSpan="2" className="formFields rightAlignFormField">
                                            <Select 
                                                value={analyzedCategory}
                                                onChange={this.handleCategoryChange}
                                                options={categories} />
                                        </td>
                                        <td>&nbsp;</td>
                                </tr>
                                <tr className="rowWidth">
                                        <td>&nbsp;</td>
                                        <td className="formFields"><b>Aging Days</b></td>
                                        <td className="formFields"><input type="text" id="age" name="age" value={age} className="indigo-text text-darken-4" readOnly/></td>
                                        <td colSpan="1">&nbsp;</td>
                                        <td className="formFields"><b>Issue with</b></td>
                                        <td colSpan="2" className="formFields rightAlignFormField">
                                            <Select 
                                                value={team}
                                                onChange={this.handleTeamNameChange}
                                                options={teams} />
                                        </td>
                                        <td>&nbsp;</td>
                                </tr>

                                <tr className="rowWidth">
                                        <td>&nbsp;</td>
                                        <td className="formFields"><b>Severity</b></td>
                                        <td className="formFields"><input type="text" id="severity" name="severity" defaultValue={severity} className="indigo-text text-darken-4" /></td>
                                        <td colSpan="1">&nbsp;</td>
                                        <td className="formFields"><b>High Level Category</b></td>
                                        <td colSpan="2" className="formFields rightAlignFormField">
                                             <Select 
                                                value={section}
                                                onChange={this.handleChangeInReason}
                                                options={reasons} 
                                                />
                                        </td>
                                        <td>&nbsp;</td>
                                </tr>

                                <tr className="rowWidth">
                                        <td>&nbsp;</td>
                                        <td className="formFields"><b>Closed With</b></td>
                                        <td className="formFields"><input type="text" id="closedWith" name="closedWith" className="indigo-text text-darken-4"/></td>
                                        <td colSpan="1">&nbsp;</td>
                                        <td className="formFields"><b>Status</b></td>
                                        <td colSpan="2" className="formFields rightAlignFormField">
                                            <Select 
                                                value={status}
                                                onChange={this.handleStatusChange}
                                                options={statusAll} 
                                            />
                                        </td>
                                        <td>&nbsp;</td>
                                </tr>

                                <tr className="rowWidth">
                                    <td>&nbsp;</td>
                                    <td className="formFields"><b>Notes</b></td>
                                    <td colSpan="4">
                                        <textarea className="notesArea"
                                            name="notes" 
                                            id="notes"
                                            value={this.state.notes}
                                            onChange={this.handleChangeinNotes}
                                        />  
                                    </td>  
                                    <td>&nbsp;</td>
                                </tr>

                                <tr className="rowWidth">
                                    <td>&nbsp;</td>
                                    
                                    <td colSpan="4">
                                        <input type="submit"  className="btn indigo darken-3 submitPosition" value="UPDATE"/>
                                    </td>
                                       
                                    <td>&nbsp;</td>
                                </tr>
                                </tbody>
                            </table>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        updatedIMR: state.updatedIMR.Incident,
        isUpdated : state.updatedIMR.isUpdated
    };
}

export default connect(mapStateToProps,{updateIMRDetails})(IMRDetails);