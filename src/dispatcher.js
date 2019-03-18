import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login'
import Home from './components/home'
import AddNewIMR from './components/addNewIMR'
import OpenIMRDashboard from './components/openIMRDashboard'
import IMRDEtails from './components/imrDetails'



class Dispatcher extends Component {
  setBackgroundPage=(e)=>{
    console.log('calling function in index.html');
    var image = document.getElementById('backgroundImage');
    console.log(image);
  }
  render(){
    return(
      <BrowserRouter>
        <div onChange={this.setBackgroundPage}>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/addNewIMR" component={AddNewIMR} />
            <Route path="/dashboard" component={OpenIMRDashboard} />
            <Route path="/details" component={IMRDEtails} />


        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Dispatcher;
