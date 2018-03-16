import React from 'react';
import { userManager } from '../../../../_actions/userManager';

import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import asyncValidate from './asyncValidate'

import  Datepicker  from "./Datepicker.jsx";
import Calendar from "../../../Calendar.jsx";
import DropdownList from 'react-widgets/lib/DropdownList'
import 'react-widgets/dist/css/react-widgets.css'



const onSubmit = data => console.log(JSON.stringify(data, 0, 2))

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

const colors = [ 'George Washing Machine', 'Sergei Broneslavovich', 'Yuri Dberger' ]

const AsyncValidationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit( (values)=> {
      console.log(values);
      
      userManager.addBooking(values)(props.dispatch);      
    })}>
        
       <Field name="firstName" type="text" component={renderField} label="firstName"/>
       <Field name="date" type="text" component={Calendar} label="date"/>
       <div>
          <label>specialist</label>
          <Field
            name="specialist"
            component={renderDropdownList}
            data={colors}
            valueField="value"
            textField="color"/>
       </div>
       <Field name="phone" type="text" component={renderField} label="phone"/>
      <div>
        <button type="submit" disabled={submitting}>Sign Up</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}



export default reduxForm({
  form: 'asyncValidation', // a unique identifier for this form
  validate,
  asyncValidate,
  asyncBlurFields: [ 'username' ]
})(AsyncValidationForm)

