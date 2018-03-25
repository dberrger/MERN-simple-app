import React from 'react';
import { userManager } from '../../../../_actions/userManager';

import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import asyncValidate from './asyncValidate'
import { connect } from 'react-redux';

import Calendar from "./Calendar";
import DropdownList from 'react-widgets/lib/DropdownList'
import 'react-widgets/dist/css/react-widgets.css'


// const onSubmit = data => console.log(JSON.stringify(data, 0, 2))

const renderField = ({ input, label, type, meta: { asyncValidating, touched, error } }) => (
  <div>
    <label>{label}</label>
    <div className={asyncValidating ? 'async-validating' : ''}>
      <input {...input} type={type} placeholder={label}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderDropdownList = ({ input, ...rest }) =>
  <DropdownList {...input} {...rest}/>

const specialists = [ 'George Washing Machine', 'Sergei Broneslavovich', 'Yuri Dberger' ];


class AsyncValidationForm extends React.Component {
  constructor(props){
    super(props);
    
  }
 
  render() {
    const { handleSubmit, pristine, reset, submitting, dispatch } = this.props;
    return (
    <form onSubmit = {handleSubmit( (values)=> {
        console.log(values.date);
        let time =values.time;
        delete values.time;
        values.date.time = time;
        delete values.date.hours;
        delete  values.date.milliseconds;
        delete  values.date.minutes;
        delete  values.date.seconds;
      
      userManager.addBooking(values)(dispatch);

    })}>
        
       <Field name="firstName" type="text" component={renderField} label="firstName"/>
       <div>
          <label>Date</label>
       <Field name="date" type="text" component={Calendar} label="date"/>
       </div>
       <div>
          <label>Time</label>
          <Field
            name="time"
            component={renderDropdownList}
            data={this.props.avaliableTimes}
            valueField="value"
            disabled={ this.props.isFetched && this.props.fetched ? false : true }
            textField="color"/>
       </div>
       <div>
          <label>specialist</label>
          <Field
            name="specialist"
            component={renderDropdownList}
            data={specialists}
            valueField="value"
            textField="color"/>
       </div>
       
       <Field name="phone" type="text" component={renderField} label="phone"/>
      <div>
        <input class="btn btn-primary" type="submit" disabled={submitting} value="ADD BOOKING"/>
      </div>
    </form>
  )
  }
}


AsyncValidationForm = connect((state)=> ({
  avaliableTimes: state.avaliableTimesReducer.avaliableTimes,
  isFetched: state.avaliableTimesReducer.fetched,
  fetched: state.bookingReducer.fetched
}),
  null
)(AsyncValidationForm);


export default reduxForm({
  form: 'asyncValidation', // a unique identifier for this form
  validate,
  asyncValidate,
  asyncBlurFields: [ 'username' ]
})(AsyncValidationForm)

