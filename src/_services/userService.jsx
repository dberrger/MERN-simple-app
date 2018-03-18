import authHeader from "./authHeader.jsx";

export const userService = {
    login, register, logout,
    getHistory, addBooking, deleteBooking,
    getProfileData,
    avaliableTimes
}

function login(username, password) {
  const  requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body : JSON.stringify({username, password})
  } 
  
  return fetch('/authenticate', requestOptions)
            .then(response => { return response.ok ? response.data() : response })
            .then(user => {
                if(localStorage.getItem('user')) return Promise.reject("You are already logged")               
                localStorage.setItem('user', JSON.stringify(user));
            })
            // .catch(err => {console.log(`unexpected error LOGIN: ${err}`);
            // return Promise.reject("You're already logged!") })
}

function register(user) {
  const  requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body : JSON.stringify(user)
  } 
  return fetch('/register', requestOptions)
            .then( response => {            
                response.status ? Promise.resolve(response.data()) : Promise.reject(response) });
}

function logout() {
    localStorage.removeItem('loggedUser');
    return localStorage.getItem('loggedUser') ? {logSuccess: true} : {logSuccess : false}
}

function getHistory() {
  const  requestOptions = {
      method: 'GET',
      headers: authHeader()
    }
    return fetch('/history', requestOptions)
                .then(response => { return response.ok ? Promise.resolve(response.data()) : Promise.reject(response) })
                .catch(err => { console.log(`unexpected error GETHISTORY : ${err}`) })
}

function addBooking(data) {
   const  requestOptions = {
       method: 'POST',
       headers: authHeader(),
       body : JSON.stringify(data)
   }
   return fetch('/add', requestOptions)
            .then(response => { return response.ok ? Promise.resolve(response.data()) : Promise.reject(response) })
}

function deleteBooking(id) {
    const  requestOptions = {
        method: 'DELETE',
        headers: authHeader(),
        body : JSON.stringify(id)
    }
    return fetch('/delete', requestOptions)
            .then(response => { response.ok ? Promise.resolve(response.data()) : Promise.reject(response)  })
}


function getProfileData() {
    const  requestOptions = {
        method: 'GET',
        headers: authHeader()
    }
    return fetch('/profile', requestOptions)
            .then(response => { return response.ok ? Promise.resolve(response.data()) : Promise.reject(response) });
}

function avaliableTimes(date) {
    console.log(date);
    
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(date)
    }
    return fetch('/times', requestOptions)
                .then(response => { return response.ok ? Promise.resolve(response.data()) : Promise.reject(response)});
}