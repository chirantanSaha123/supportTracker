import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login'
import Home from './components/home'


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
            <Route path="/addNewIMR" component={Home} />
            <Route path="/imrsInOthersQueue" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/servers" component={Home} />
            <Route path="/dashboard" component={Home} />
           <Route path="/charts" component={Home} />
            <Route path="/reportsChart" component={Home} />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Dispatcher;
