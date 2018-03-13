import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { userManager } from "../_actions/userManager.jsx";

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: {
                firstName: '1',
                lastName: '1',
                username: '1',
                password: '1',
                email: '1'
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
        console.log(this.props.result);
        
        const { registering  } = this.props;    
        const { user, submitted } = this.state;
        return (
            <div>
            <h2>{this.props.result}</h2>
            <form name="form" onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text"   name="firstName" value={user.firstName} onChange={this.handleChange} />
                    {submitted && !user.firstName &&
                        <div className="help-block">First Name is required</div>
                    }
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text"   name="lastName" value={user.lastName} onChange={this.handleChange} />
                    {submitted && !user.lastName &&
                        <div className="help-block">Last Name is required</div>
                    }
                </div>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text"   name="username" value={user.username} onChange={this.handleChange} />
                    {submitted && !user.username &&
                        <div className="help-block">Username is required</div>
                    }
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password"   name="password" value={user.password} onChange={this.handleChange} />
                    {submitted && !user.password &&
                        <div className="help-block">Password is required</div>
                    }
                </div>  
                <div>
                    <button >Register</button>
                    {registering}
                    <Link to="/" className="btn btn-link">Cancel</Link>
                </div>
            </form>
        </div>
        );
    }
}


function mapStateToProps(state) {
    console.log(state);
    
    return {
        result: state.rootReducer.result
    }
}

export default  Register = connect(mapStateToProps)(Register);
