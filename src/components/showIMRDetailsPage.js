import React,{ Component } from 'react';
import Dashboard from './dashboard'

export default class ShowIMRDetailsPage extends Component{
    constructor(props){
        super(props);
        this.state={
            showIMRdetails: true,
            imrNumber:''
        }
    }

   


    render(){
        
        return(
            <div>
                <Dashboard openIMRdetails={this.showIMRDetails} />
            </div>
        );
    }
}