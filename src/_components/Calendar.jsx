import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import PropTypes from 'prop-types'
import {userManager} from "../_actions/userManager";
import { connect } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';

class Calendar extends React.Component {
 
    constructor (props) {
        super(props)
        this.state = {
          startDate: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.sendDate = this.sendDate.bind(this);
      }

      handleChange (date) {
                console.log(date);
        
        console.log(this.props.input);
        this.setState({
          startDate: date
        });
        this.props.input.onChange(moment(date, ['ll']).toObject())
        this.sendDate(date);
      }

      sendDate(dateR){ 
        
           
        let date = moment(dateR, ['ll']).toObject();
        delete date.hours;
        delete date.milliseconds;
        delete date.minutes;
        delete date.seconds;
        const { dispatch } = this.props;
         console.dir(date);
        userManager.avaliableTimes(date)(dispatch);
       
      }

    render() {
      const {
        input, placeholder,
        meta: {touched, error}
        } = this.props
        return (
          <div>
            <DatePicker
            // {...input}
            selected={this.state.startDate}
            onChange={this.handleChange}
            minDate={moment()}
            maxDate={moment().add(1, "month")}
            dateFormat="LL"
            placeholderText="Click to select a date"
            />
            
          </div>
        );
    }
}
    
export default Calendar = connect(null)(Calendar);