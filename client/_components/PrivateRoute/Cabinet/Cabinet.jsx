import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import { Profile } from "./Profile";
import _components   from "../../index";
import { connect } from 'react-redux';

class Cabinet extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
            <h1 className="mt-4 mb-3">My cabinet
              {/* <small> Subheading</small> */}
            </h1>
      
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">This is your own cabinet where you can add</a>
              </li>
              <li className="breadcrumb-item active">delete bookings or look on previous history</li>
            </ol> 
      
            <div className="row">
              <div className="col-lg-3 mb-4">
                <div className="list-group">
                  <Link to="/cabinet" className="list-group-item">Personal info</Link>
                  <Link to="/cabinet/add" className="list-group-item">Add booking</Link>
                  <Link to="/cabinet/upcoming" className="list-group-item">Upcoming bookings</Link>
                  <Link to="/cabinet/history" className="list-group-item">Booking history</Link>

                </div>
              </div>
              <div className="col-lg-9 mb-4">
                <h2>Some text #1</h2>
                <p>{ this.props.result ? this.props.result : "Some text #2"}</p>
                    <Route exact path="/cabinet" component={_components.Profile}/>
                    <Route exact path="/cabinet/add" component={_components.BookingForm}/>
                    <Route path="/cabinet/upcoming" component={_components.Upcoming}/>
                    <Route path="/cabinet/history" component={_components.History}/>
              </div>
            </div>
      
          </div>
    );
}
}

function mapStateToProps(state) {
console.log(state);
return {
    user: state.profileReducer.userProfileData,
    isLoading: state.profileReducer.userProfileDataLoading,
    result: state.rootReducer.result
}
}

export default  Cabinet = connect(mapStateToProps)(Cabinet);
