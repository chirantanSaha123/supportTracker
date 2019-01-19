import React, { Component } from 'react'
//import BackgroundImage from '../images/Login_background.jpg'
import { Link } from 'react-router-dom';


class Login extends Component{
    render(){
     return(
           <div className="container-fluid" >

            <div id="formPlusnavnar">
                
                <div>
              
                    <form className="loginForm">
                            
                            <label htmlFor="login" className="brown-text text-darken-4 text-font"><b><h6>Username</h6></b></label>
                            <input type="text" className="black-text"/><br />

                            <label htmlFor="password" className="brown-text text-darken-4 text-font"><b><h6>Password</h6></b></label>
                            <input type="password" className="black-text"/> 
                            <div id="submitAndCancelbuttons">
                                <Link to="/home">
                                  <button className="indigo darken-4 white-text btn-width lighten-1 waves-effect waves-light"><b>Login</b></button>
                                </Link>
                                <button className="red darken-4 white-text text-darken-5 btn-width lighten-1 waves-effect waves-light"><b>Cancel</b></button>
                            </div>
                            
                           
                            

                        </form>
               </div>

            </div>
            

           
               
                
               
                

           </div>
        );
    }
}

export default Login;