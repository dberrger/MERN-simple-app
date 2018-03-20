import React from 'react';
import { userManager } from '../../../_actions/userManager.jsx';
import { connect } from 'react-redux';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        userManager.getProfileData()(this.props.dispatch);
    }

    render() {

        return (
            <div> 
            {    
                this.props.isLoading ? <div>Loading..</div> : 
                <div> 
                <div>Name : {this.props.user.firstName}</div>
                <div>Surname: {this.props.user.lastName}</div>
                <div>Nickname {this.props.user.username}</div>
                <div>Change password: >???</div>
                <div>email: {this.props.user.email}</div>
                <div>phone: --</div>
                </div> 
            }
            </div>
        );
    }
}

export default  Profile = connect(state => ({
    user: state.profileReducer.userProfileData,
    isLoading: state.profileReducer.userProfileDataLoading 
}))(Profile);