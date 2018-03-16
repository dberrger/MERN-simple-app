const validate = values => {
    const errors = {}
    if (!values.firstName) {
      errors.firstName = 'Required'
    }
    if (!values.date) {
      errors.date = 'Required'
    }
    if (!values.specialist) {
        errors.specialist = 'Required'
    }
    if (!values.phone) {
        errors.phone = 'Required'
    }
    
    return errors
  }

  export default validate;