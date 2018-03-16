import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Profile from "./Profile.jsx";
import _components   from "../../index.js";

class Cabinet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
               <Profile/>
               <div>
                <Route exact path="/cabinet/add" component={_components.BookingForm}/>
                <Route path="/cabinet/upcoming" component={_components.Upcoming}/>
                <Route path="/cabinet/history" component={_components.History}/>
               </div>
            </div>
        );
    }
}

export default Cabinet;