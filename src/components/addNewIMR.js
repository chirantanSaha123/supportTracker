import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import Select from 'react-select';
//import "react-datepicker/dist/react-datepicker.css";
import { statusAll, categories, teams, reasons } from './formData'
import Navbar from './navbar'
import NavLinks from './navLinks'
import { rcaOwnedByList } from './formData'
import Calendar from 'react-calendar'

class AddNewIMR extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: this.formatDate(new Date()),
            closedDate: '',
            modifiedDate: '',
            rfcDate: null,
            notes: '',
            section: '',
            rcaOwner : '',
            emailSubject: '',
            team:'',
            analyzedCategory:'',
            status:''
        }
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

    handleChange = (event) => {
        console.log(event)
        const selectedOption = event.value.substring(0, 5)
        selectedOption === 'teams' ? (
            this.setState({
                issueWith: event.label
            })
        ) : selectedOption === 'issue' ? (
            this.setState({
                selectedCategory: event.label
            })
        ) : selectedOption === 'stats' ? (
            this.setState({
                issueStatus: event.label
            })
        ) : selectedOption === 'reasn' ? (
            this.setState({
                pendingReason: event.label
            })
        ) : null

        //console.log(`Option selected:`, selectedOption);
    }
    handleDateChange = (datePassed) => {
        console.log(`Changed Date = `,datePassed)
       const formattedStartDate=this.formatDate(datePassed)        
        this.setState({
            startDate: formattedStartDate
            });
    }
    handleClosedDateChange=(closedDate)=>{
        const formattedClosedDate = this.formatDate(closedDate)
        this.setState({
            closedDate: formattedClosedDate
        });
    }
    
    handleNotesChange = (e) => {
        console.log(`text area data :`, e.target.value)
        this.setState({
            notes: e.target.value
        })
    }

    handleRCAOwnerChange=(rcaOwner)=>{
       
        this.setState({
            rcaOwner: rcaOwner
        })
    }
    handleTeamNameChange=(team)=>{
        console.log(`[IMRDetails]:[handleTeamNameChange]printing  method called: issueWith`,team);
        this.setState({team})
    }
    handleChangeInReason=(section)=>{
        this.setState({section})
    }
    handleStatusChange=(status)=>{
        this.setState({status})
    }
    
    render() {
        const { analyzedCategory } = this.state.analyzedCategory;
        const { section } = this.state;
        const { rcaOwner } = this.state
        const { team } = this.state
        const { status } =this.state
        


        return (

            <div className="addNewIMR">
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
                            <h6 className="indigo-text text-darken-4 textCenterAlign"><b><u>Add New Incident Form</u></b></h6>
                            <form onSubmit={this.handleFormSubmit}>
                            <table className="blankForm">
                                <tbody>
                                <tr className="rowWidth">
                                        <td>&nbsp;</td>
                                        <td className="formFields"><b>CM Name</b></td>
                                        <td className="formFields"><input type="text" id="customerName" name="name" className="indigo-text text-darken-4"/></td>
                                        <td colSpan="1">&nbsp;</td>
                                        <td className="formFields"><b>RCA Owned By</b></td>
                                        <td  colSpan="2" className="formFields rightAlignFormField">
                                            <Select 
                                                value={rcaOwner}
                                                onChange={this.handleRCAOwnerChange}
                                                options={rcaOwnedByList} />
                                        </td>
                                        <td>&nbsp;</td>
                                </tr>
                                <tr className="rowWidth">
                                    <td>&nbsp;</td>
                                    <td className="formFields"><b>Opened on</b></td>
                                    <td className="formFields"><input type="text" id="creationDate" name="creationDate" value={this.state.startDate} className="indigo-text text-darken-4"/></td>
                                    <td> 
                                        <DatePicker className="react-datepicker-wrapper btn"
                                            
                                            onChange={this.handleDateChange}
                                            showYearDropdown
                                            showMonthDropdown
                                        />  
                                    </td>                                   
                                    <td className="formFields"><b>IMR Number</b></td>
                                    <td className="formFields"><input type="text" id="imrNumber" name="INC" className="indigo-text text-darken-4"/></td>
                                    <td>&nbsp;</td>
                                </tr>

                                <tr className="rowWidth">
                                    <td>&nbsp;</td>
                                    <td className="formFields"><b>Subject Line</b></td>
                                    <td colSpan="4">
                                            <textarea className="textAreaWidth"
                                            name="emailSubject" 
                                            id="emailSubject"                   
                                            />
                                    </td>  
                                    <td>&nbsp;</td>
                                </tr>

                                <tr className="rowWidth">
                                    <td>&nbsp;</td>
                                    <td className="formFields"><b>Closed On</b></td>
                                    <td className="formFields"><input type="text" id="closedDate" name="closedDate" value={this.state.closedDate} className="indigo-text text-darken-4"/></td>
                                    <td>
                                    <DatePicker className="react-datepicker-wrapper btn"
                                        onChange={this.handleClosedDateChange}
                                        showYearDropdown
                                        showMonthDropdown
                                    />
                                    </td>
                                    <td className="formFields"><b>CM Biz Name</b></td>
                                    <td className="formFields">
                                        <input type="text" id="bizName" name="businessName" className="indigo-text text-darken-4"/></td>
                                    <td>&nbsp;</td>
                                </tr>

                                <tr className="rowWidth">
                                    <td>&nbsp;</td>
                                    <td className="formFields"><b>Root Cause</b></td>
                                    <td colSpan="4">
                                            <textarea className="textAreaWidth"
                                            name="rootCause" 
                                            id="rootCause"                   
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
                                            />
                                    </td>  
                                    <td>&nbsp;</td>
                                </tr>

                                <tr className="rowWidth">
                                        <td>&nbsp;</td>
                                        <td className="formFields"><b>Reported By</b></td>
                                        <td className="formFields"><input type="text" id="repName" name="repName" className="indigo-text text-darken-4"/></td>
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
                                        <td className="formFields"><input type="text" id="age" name="age" className="indigo-text text-darken-4"/></td>
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
                                        <td className="formFields"><input type="text" id="severity" name="severity" className="indigo-text text-darken-4"/></td>
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
                                            onChange={this.handleNotesChange}
                                        />  
                                    </td>  
                                    <td>&nbsp;</td>
                                </tr>

                                <tr className="rowWidth">
                                    <td>&nbsp;</td>
                                    
                                    <td colSpan="4">
                                        <input type="submit"  className="btn indigo darken-3 submitPosition" value="Add Incident"/>
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

export default AddNewIMR;