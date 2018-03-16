import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import PropTypes from 'prop-types'
 
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
           
      handleChange (date) {
        console.log(this.props.input);
        this.setState({
          startDate: date
        });
        this.props.input.onChange(moment(date).format('MMMM Do YYYY, hh:mm:ss a'))
      }

    render() {
      const {
        input, placeholder,
        meta: {touched, error}
        } = this.props
        return (
            <DatePicker
            // {...input}
            selected={this.state.startDate}
            onChange={this.handleChange}
            minDate={moment()}
            maxDate={moment().add(1, "month")}
            minTime={moment().hours(9).minutes(0)}
            maxTime={moment().hours(21).minutes(0)}
            showTimeSelect
            excludeTimes={[moment().hours(17).minutes(0), moment().hours(18).minutes(30),
               moment().hours(19).minutes(30)]}
            dateFormat="LLL"
            placeholderText="Click to select a date"
            />
        );
    }
}
    
