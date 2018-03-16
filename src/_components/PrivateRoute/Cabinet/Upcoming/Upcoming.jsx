import React from 'react';
import {Route, Link} from 'react-router-dom';
import Profile from "../Profile.jsx";


class Upcoming extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
              Upcoming bookings here tou can  cancel them,
            </div>
        );
    }
}

export default Upcoming;