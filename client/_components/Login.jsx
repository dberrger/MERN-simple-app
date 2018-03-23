import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userManager } from '../_actions/userManager.jsx';

class Login extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        //userManager.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            userManager.login(username, password)(dispatch);
        }
    }

    render() {
         const { username, password, submitted } = this.state;
        return (
        <div className="container ">
            <div className="card card-login mx-auto mt-5 md-5">
            <div className="card-header">Login</div>
            <div className="card-body">
                <form name="form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input className="form-control"  placeholder="Enter username" name="username" value={username} onChange={this.handleChange} />
                    {submitted && !username &&  <div> Username is required</div>  }
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input className="form-control" type="password" placeholder="Password"  name="password" value={password} onChange={this.handleChange} />
                    {submitted && !password &&  <div>Password is required</div>  }
                </div>
                <div className="form-group">
                    <div className="form-check">
                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox"/> Remember Password</label>
                    </div>
                </div>
                {/* <a className="btn btn-primary btn-block" href="index.html">Login</a> */}
                <button className="btn btn-primary btn-block">Login</button>
                </form>
                <div className="text-center">
                <Link className="d-block small mt-3" to="/register">Register an Account</Link>
                {/* <a className="d-block small" href="forgot-password.html">Forgot Password?</a> */}
                </div>
            </div>
            </div>
        </div>
        );
    }
}


 

export default Login = connect(null)(Login);
