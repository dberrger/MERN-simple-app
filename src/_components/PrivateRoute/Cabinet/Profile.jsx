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
                        
                        <div className="card mb-4">
                            <div className=" d-flex flex-row card mb-4">
                            <img className="card mb-4"  alt="Card image cap" /> 
                            <div className="card-body">
                                <h2 className="card-title">User page</h2>
                                <p className="card-text">Name : {this.props.user.firstName}</p>
                                <p className="card-text">Surname: {this.props.user.lastName}</p>
                                <p className="card-text">Nickname {this.props.user.username}</p>
                                <p className="card-text">Change password: >???</p>
                                <p className="card-text">email: {this.props.user.email}</p>
                                <p className="card-text">phone: --</p>
                            </div>
                            </div>
                            <div className="card-footer text-muted">
                                Posted on January 1, 2017 by
              <a href="#">Start Bootstrap</a>
                            </div>
                        </div>
                    </div>
                }

            </div>
        );
    }
}

export default Profile = connect(state => ({
    user: state.profileReducer.userProfileData,
    isLoading: state.profileReducer.userProfileDataLoading
}))(Profile);