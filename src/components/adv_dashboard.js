import React, { Component } from 'react'
//import { openIMRs1 } from './store'
import axios from 'axios'
import IMRDetails from './imrDetails'
import { allFilters } from './formData'
import Select from 'react-select';


class AdvDashboard extends Component{  
    constructor(props){
        super(props);
        // const openIMRs = axios.get('http://localhost:8080/RESTfulExample/rest/incidents')
        // console.log(`Inside Constructor of Dashboard`,openIMRs);
        
        this.state={
            imrs: null,
            showIMRDetailsPage:'false',
            imrDetails: null,
            appliedFilter : 'ALL' ,
            filterValue :'ALL',
            showData: 'yes',
            hideDropdown: 'yes'
            
            }
    }  

    componentWillMount(){
        console.log(`[AdvDashboard]:[componentWillMount]: componentDidMount()`)
        const imrsFromProps = this.props.imrs
        this.setState({
            imrs : imrsFromProps
        })
    }
   

   showIMRDetails=(imrNumber)=>{
        console.log(`[AdvDashboard]:[showIMRDetails]: Called showIMRDetails()`)
        console.log(`[AdvDashboard]:[showIMRDetails]: Start of method`);
        console.log(`[AdvDashboard]:[showIMRDetails]: IMR number passed aa: `,imrNumber);
        // //const imrDetails = imrDetails;
        
        
        // const GET_IMT_DETAILS_URL=`http://localhost:8080/RESTfulExample/rest/incidents/${imrNumber}`;
        // axios.get(GET_IMT_DETAILS_URL)
        //     .then(response =>{
        //         console.log(`Response from API call :`,response.data)
        //         this.setState({
        //              showIMRDetailsPage:'true',
        //              imrDetails : response.data,

        //          })
        //     }) 
        
        const imrDetails = this.state.imrs.filter(imr =>{
            return imr.inc===imrNumber
        })
        console.log(`[AdvDashboard]:[displayIMRDetails]:IMR details :`,imrDetails[0]);
        
        this.setState({
            showIMRDetailsPage:'true',
            imrDetails : imrDetails[0]    
            })

    }
    displayIMRDetails(){
        console.log(`[AdvDashboard]:[displayIMRDetails]:IMR details :`,this.state.imrDetails);
        
        return(
            <div className="left-align">
                <IMRDetails imrDetails={this.state.imrDetails}/>
            </div>
        )
        
    }

    displayIMRs=(imrs)=>{
        console.log(`[AdvDashboard]:[displayAllOpenIMRs]: Called displayAllOpenIMRs()`)      
        console.log(`[AdvDashboard]:[displayAllOpenIMRs]:Imrs passed from render() :`,imrs)
        
       
        //Iterating through state IMRS and preparing the dasboard to be displayed 
        console.log(`[AdvDashboard]:[displayAllOpenIMRs]:Iteration of Imrs beginning`); 
        const parsedImrs = imrs.map(imr =>{
            //console.log(`[AdvDashboard]:[displayAllOpenIMRs]:[Iteration]: Imr #:`,imr.inc);
            
            let imrNumber = imr.inc
            let pulseColor=''
            if(imr.agingDays>=8){
               pulseColor = 'red darken-3 pulse'
            }else if(imr.agingDays>=5 && imr.agingDays<8){
                pulseColor = 'yellow darken-2'
            }else{
                pulseColor = 'green darken-3'
            }
            return(
            <tr key={imr.inc}>
            <td className="cell_data_imr center-align incNumberWithUrgency">
                <a href="#" onClick={()=>this.showIMRDetails(imrNumber)}>{imr.inc} </a>&nbsp;
                <button className={`btn-floating z-depth-4 smallerButton ${pulseColor}`}></button>
            </td>
            <td className="cell_data center-align">{imr.issueWith}</td>
            <td className="cell_data center-align">{imr.category}</td>
            <td className="cell_data center-align">{imr.createdOn}</td>
            <td className="cell_data center-align">{imr.status}</td>
            <td className="cell_data bigtextAreas">Test</td>
            <td className="cell_data bigtextAreas">{imr.description}</td>
            <td className="cell_data center-align">{imr.agingDays}</td>
            </tr>
            );
        })     
        console.log(`[AdvDashboard]:[displayAllOpenIMRs]:Iteration of Imrs complete`); 
        console.log(`[AdvDashboard]:[displayAllOpenIMRs]:Iterated Imrs :`,parsedImrs);
        
        return(               
            <table className="striped indigo lighten-4">
            <thead>
                <tr className="indigo darken-2 white-text">
                    <td className="cell_header center-align">Incident#</td>
                    <td className="cell_header center-align">Assigned To</td>
                    <td className="cell_header center-align">Category</td>
                    <td className="cell_header center-align">Created On</td>
                    <td className="cell_header center-align">Status</td>
                    <td className="cell_header center-align">Subject</td>
                    <td className="cell_header center-align">Description</td>
                    <td className="cell_header center-align">Aging days</td>
                </tr>
            </thead>
            <tbody>
                {parsedImrs}
            </tbody>
            </table>  
        )
    }
    
    handleChangeInFilter=(appliedFilter)=>{
        console.log(`[AdvDashboard]:[displayAllOpenIMRs]:AppliedFilter :`,appliedFilter);
        const imrsFromProps = this.props.imrs;
        const filteredImrs = appliedFilter.value==='ALL'?this.props.imrs:imrsFromProps.filter(imr=>{            
           return imr.issueWith===appliedFilter.value
            })
    console.log(`[AdvDashboard]:[displayAllOpenIMRs]:filteredImrs :`,filteredImrs);


        this.setState({
            appliedFilter: appliedFilter,
            filterValue : appliedFilter.value,
            imrs : filteredImrs,
            showData : 'yes',
            hideDropdown : 'yes'
         })
        
        // const filteredIMRs = (!chosenFilter==='all')?(
        //     this.props.imrs.filter(imr =>{
        //         return imr.issueWith===appliedFilter
        //     })
        //    ):this.props.imrs
        // this.setState({
        //     imrs: filteredIMRs
        // })
    }

    hideDataAndShowFilters(){
        console.log(`[AdvDashboard]:[hideDataAndShowFilters()]:Setting what to hide`);
        this.setState({
            showData: 'false',
            hideDropdown: 'no'
        })
        
    }

    render(){
        console.log(`[AdvDashboard]:[render]:Checking what to display`);
        
        const { appliedFilter } = this.state //initially it will give 'all'
        const imrsFromState = this.state.imrs //initially it will give what was passed as props

        console.log(`[AdvDashboard]:[render]:Imrs from state :`,imrsFromState);  
        const visibilityClassNameForData = this.state.showData==='yes'?"":"hideSections"
        const visibilityClassNameForDropdown = this.state.hideDropdown==='yes'?"hideSections":""
        const showFilterButton = (this.state.showIMRDetailsPage==='true' || this.state.showData==='no')?"hideSections":""

        const dataClassName=`hideFilter advDashboardTable ${visibilityClassNameForData}`
        const dropDownClassName = `showFilter ${visibilityClassNameForDropdown}`
        
        
               
        const functionTobeCalled = this.state.showIMRDetailsPage==='false'?(            
                this.displayIMRs(imrsFromState)
            ):this.state.showIMRDetailsPage==='true'?(
                this.displayIMRDetails()
            ):null
              
        return(
            <div className="left-align">  
                    <span className={showFilterButton}>
                         <button onClick={()=>this.hideDataAndShowFilters()} >Change Filters</button> 
                    </span>             
                    <span className={dropDownClassName}>                                           
                        <Select className="selectBtn"
                        value={appliedFilter}
                        onChange={this.handleChangeInFilter}
                        options={allFilters}                       
                        />
                    </span>
                    <div className={dataClassName}>
                          
                        <div className="showText">                          
                            {functionTobeCalled }
                        </div>  
                    </div>            
            </div>
        )
    }
}
export default AdvDashboard;

