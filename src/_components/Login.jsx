import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userManager } from '../_actions/userManager.jsx';

class Login extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
    //    userManager.logout();

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
        // const { loggingIn } = this.props;
         const { username, password, submitted } = this.state;
        return (
            <div>
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text"  name="username" value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                            <div>Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password"  name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div>Password is required</div>
                        }
                    </div>
                    <div>
                        <button>Login</button>
                        {/* {loggingIn} */}
                        <Link to="/register">Register</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

export default Login = connect(null)(Login);
