import React from 'react';
import { Route, Link } from 'react-router-dom';
import Profile from "../Profile.jsx";
import { connect } from 'react-redux'
import { userManager } from '../../../../_actions/userManager';
import moment from 'moment';

class History extends React.Component {
    constructor(props) {
        super(props);
        userManager.getHistory()(this.props.dispatch);

        this.removeItem = this.removeItem.bind(this);
        this.convertToTimeObj = this.convertToTimeObj.bind(this);
    }

    convertToTimeObj(booking) {
        let now = moment().toObject();
        let timeH = moment(booking.date.time, ['HH:mm a']).hours();
        let timeM = moment(booking.date.time, ['HH:mm a']).minutes();
        let year = booking.date.years;
        let month = booking.date.months;
        let day = booking.date.date;
        return moment({ y: year, M: month, d: day, h: timeH, m: timeM })
    }

    removeItem(e) {
        userManager.deleteBooking(e)(this.props.dispatch);
    }

    render() {
        const { dispatch, history } = this.props;
        const tableHF =
            <tr>
                <th>id</th>
                <th>firstName</th>
                <th>Time</th>
                <th>Date</th>
                <th>Specialist</th>
            </tr>;
        return (
            <div>
                {
                    this.props.isLoading ? <div>Loading.. </div> :
                        <div className="card mb-3">
                            <div className="card-header">
                                <i className="fa fa-table"></i> Data Table Example</div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            {tableHF}
                                        </thead>
                                        <tfoot>
                                            {tableHF}
                                        </tfoot>
                                        <tbody>
                                            {
                                            history
                                                .filter(booking => {
                                                    return moment(this.convertToTimeObj(booking)).isBefore(moment());})
                                                .map(booking => {
                                                    return (
                                                        <tr>
                                                        <td>{booking.id}</td>
                                                        <td>{booking.firstName}</td>
                                                        <td>{booking.date.time}</td>
                                                        <td>{booking.date.date}</td>
                                                        <td>{booking.specialist}</td>
                                                    </tr>    
                                                    )
                                                    })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                        </div>
                }
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

export default History = connect(mapStateToProps)(History);


