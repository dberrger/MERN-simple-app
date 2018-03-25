import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { userManager } from "../_actions/userManager";

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: '',
                email: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstName && user.lastName && user.username && user.password) {
          userManager.register(user)(this.props.dispatch);
        }
    }

    render() {
       
        const { user, submitted } = this.state;
        return (
            
                <div className="container">
                <div className="card card-register mx-auto mt-5">
                    <div className="card-header">Register an Account</div>
                    <div className="card-body">
                    <h2>{this.props.result}</h2>
                    <form name="form" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                        <div className="form-row">
                            <div className="col-md-6">
                            <label for="exampleInputName">First name</label>
                            <input className="form-control" type="text" name="firstName" placeholder="Enter first name"  value={user.firstName} onChange={this.handleChange}/>
                            {submitted && !user.firstName &&
                                    <div className="help-block">First Name is required</div>
                                }
                            </div>
                            <div className="col-md-6">
                            <label for="exampleInputLastName">Last name</label>
                            <input className="form-control" name="lastName" type="text" placeholder="Enter last name" value={user.lastName} onChange={this.handleChange}/>
                            {submitted && !user.lastName &&
                                    <div className="help-block">Last Name is required</div>
                                }
                            </div>
                        </div>
                        </div>
                        <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input className="form-control" name="email" placeholder="Enter email" value={user.email} onChange={this.handleChange}/>
                        {submitted && !user.email &&
                                    <div className="help-block">Email is required</div>
                                }
                        </div>
                        <div className="form-group">
                        <label for="username">Username</label>
                        <input className="form-control" name="username"  placeholder="Enter username"  value={user.username} onChange={this.handleChange}/>
                        {submitted && !user.username &&
                                    <div className="help-block">Username is required</div>
                                }
                        </div>
                        <div className="form-group">
                        <div className="form-row">
                            <div className="col-md-6">
                            <label for="exampleInputPassword1">Password</label>
                            <input className="form-control" name="password" type="password" placeholder="Password" value={user.password} onChange={this.handleChange}/>
                            {submitted && !user.password &&
                                    <div className="help-block">Password is required</div>
                                }
                            </div>
                            <div className="col-md-6">
                            {/* todo confirmation */}
                            <label for="exampleConfirmPassword">Confirm password</label>
                            <input className="form-control" name="password" type="password" placeholder="Confirm password" value={user.password} onChange={this.handleChange}/>
                            {submitted && !user.password &&
                                    <div className="help-block">Passwords do not match</div>
                                }
                            </div>
                        </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Register</button>
                    </form>
                    <div className="text-center">
                        <Link className="d-block small mt-3" to="/login">Login Page</Link>
                        {/* <a className="d-block small" href="forgot-password.html">Forgot Password?</a> */}
                    </div>
                    </div>
                </div>
                </div> 
        );
    }
}

export default  Register = connect(state => ({
    result: state.rootReducer.result
}))(Register);
