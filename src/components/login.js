import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../actions/action_login';
class Login extends Component {
    constructor(props) {
        super(props);        
    }
    renderFields(field) {
        const { meta: { touched, error } } = field;
        const errorClassName = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div class={errorClassName}>
                <label>{field.label}</label>
                <input class="form-control"
                    type={field.type}
                    {...field.input}
                />
                <div class="alert-danger">
                    {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        );
    }
    onSubmit(values, callback) {
        //console.log('about to call action creator');
        this.props.login(values, (response) => {
            //console.log('Response In callback function :', response);
            if (!response) {
                return <div>Loading</div>
            }
            if (response.data ==='authenticated') {
                this.props.history.push({
                    pathname: '/home'
                });
            }
        });
    }
    renderAlert() {
        //console.log("Loginresult", this.props.loginResult);
        //console.log('Inside renderAlert for Login');
        if(this.props.loginResult==='notAuthenticated'){
            return(
              <div class="alert-danger text-help">Authentication failed!</div>
            );
        }
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <div class="offset-sm-4 col-sm-4">
                <div className="beautifyForm">
                    <div className="login-form">
                        <div class="card bg-light text-indigo">
                            <div class="card-body">
                                <h3 className="text-indigo"> Login </h3>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                                    <Field
                                        name="userName"
                                        label="User name:"
                                        type="text"
                                        component={this.renderFields}
                                    />
                                    <Field
                                        name="password"
                                        label="Password:"
                                        type="password"
                                        component={this.renderFields}
                                    />
                                    <button type="submit" className="btn indigo darken-3">Submit</button>
                                    {this.renderAlert()}                                 
                                </form>
                            </div>
                        </div>
                    </div>
                    </div>




                </div>
            </div>
        );
    }
}
function validate(values) {
    const errors = {};
    if (!values.userName) {
        errors.userName = "Username is mandatory!";
    }
    if (!values.password) {
        errors.password = "Password is mandatory!"
    }
    return errors;
}
function mapStateToProps(state) {
    return {
        loginResult: state.login
    };
}
export default reduxForm({
    validate: validate,
    form: 'LoginForm'
})(
    connect(mapStateToProps, { login })(Login)
);
