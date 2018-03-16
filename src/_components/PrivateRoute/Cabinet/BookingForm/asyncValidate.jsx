const asyncValidate = (values/*, dispatch */) => {
  return fetch('/validate', requestOptions) // simulate server latency
            .then( response => {
            if (response.data().includes(values.username)) {
                throw { username: 'That username is taken' }
            }
            })
}

export default asyncValidate;