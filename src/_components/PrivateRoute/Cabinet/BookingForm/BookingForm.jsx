import React from 'react';
import { userManager } from '../../../../_actions/userManager.jsx';
import { connect } from 'react-redux';

import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import asyncValidate from './asyncValidate'

import  Datepicker  from "./Datepicker.jsx";
import { Calendar } from "../../../Calendar.jsx";


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

const AsyncValidationForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
   return ( 

    <form onSubmit={onSubmit (data => {
      lol("DAIN")
    })}>
   
      <Field name="firstName" type="text" component={renderField} label="firstName"/>
      {/* <Field name="date" type="text" component={Datepicker} label="date"/> */}
      <Field name="specialist" type="text" component={renderField} label="specialist"/>
      <Field name="phone" type="text" component={renderField} label="phone"/>
      <div>
        <button type="button" disabled={submitting}>Sign Up</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
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