import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
 
import 'react-datepicker/dist/react-datepicker.css';

export default class Calendar extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
        this.unavaliableDates = [/** all times 9-00 - Date.now() + all booked by other ppl*/];
      }
     
      handleChange(date) {
        this.setState({
          startDate: date
        });
      }
    render() {
        return (
            <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            showTimeSelect
            // excludeDates={[moment(), moment().subtract(1, "days")]}
            minDate={moment()}
            maxDate={moment().add(1, "month")}
            minTime={moment().hours(9).minutes(0)}
            maxTime={moment().hours(21).minutes(0)}
            timeFormat="HH:mm"
            timeIntervals={15}
            excludeTimes={this.unavaliableDates}
            dateFormat="LLL"
            placeholderText="Click to select a date"
            timeCaption="time"/>
        );
    }
}
    
