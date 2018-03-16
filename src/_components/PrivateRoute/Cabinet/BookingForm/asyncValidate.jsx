// const asyncValidate = (values/*, dispatch */) => {
//     console.log(values);
    
//   return fetch('/validate', requestOptions) // simulate server latency
//             .then( response => {
//             if (response.data().includes(values.username)) {
//                 throw { username: 'That username is taken' }
//             }
//             })
// }

// export default asyncValidate;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values /*, dispatch */) => {
  return sleep(1000).then(() => {
    // simulate server latency
    if (['john', 'paul', 'george', 'ringo'].includes(values.username)) {
      throw { username: 'That username is taken' }
    }
  })
}
export default asyncValidate;