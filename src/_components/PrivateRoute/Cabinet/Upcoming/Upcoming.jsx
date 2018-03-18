import React from 'react';
import {Route, Link} from 'react-router-dom';
import Profile from "../Profile.jsx";
import { connect } from 'react-redux'
import { userManager } from '../../../../_actions/userManager';
import moment from 'moment';

class Upcoming extends React.Component {
    constructor(props) {
        super(props);
        userManager.getHistory()(this.props.dispatch);

        this.removeItem = this.removeItem.bind(this);
    }

    removeItem(e) {
        console.log(e)
        userManager.deleteBooking(e)(this.props.dispatch);
    }

    render() {
        const { dispatch, history } = this.props;

        return (
            <div>
            Upcoming bookings here tou can  cancel them
                <div> 
                {    
                    this.props.isLoading ? <div>Loading.. </div> : 
                            history.filter( booking =>{
                                let now = moment().toObject();
                                let timeH = moment(booking.date.time,['HH:mm a']).hours();
                                let timeM = moment(booking.date.time,['HH:mm a']).minutes();
                                let year = booking.date.years;
                                let month = booking.date.months;
                                let day = booking.date.date;
                                let timeObj = moment({y: year, M: month, d: day, h: timeH, m: timeM})
                                return moment(timeObj).isBefore(moment());
                            } ).map(booking => {
                            return (<div key={booking.id}>
                                        <span>{booking.id}</span>
                                        <span>__{booking.date.time}</span>
                                        <span>__{booking.date.date}</span>
                                        <span>__{booking.specialist}</span>
                                        <span>__{booking.firstName}</span>
                                        <button onClick={ ()=> { this.removeItem(booking.id)}}>X</button>
                                    </div>)
                        })
                    
                }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        history: state.historyReducer.history,
        isLoading: state.historyReducer.historyLoading
    }
}

export default Upcoming = connect(mapStateToProps)(Upcoming);