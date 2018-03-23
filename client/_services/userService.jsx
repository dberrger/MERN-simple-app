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
            .then(response => (handleResponse(response)))
}

function register(user) {
  const  requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body : JSON.stringify(user)
  } 
  return fetch('/register', requestOptions)
            .then(response => { return response.json();})
            .then( res => {
            console.log(res);
            return handleResponse(res)
})
}

function logout() {
    console.log("LOt")
    localStorage.removeItem('user');
    return false
}

function getHistory() {
  const  requestOptions = {
      method: 'GET',
      headers: authHeader()
    }
    return fetch('/history', requestOptions)
                .then(response => (handleResponse(response)))
                .catch(err => { console.log(`unexpected error GETHISTORY : ${err}`) })
}

function addBooking(data) {
   const  requestOptions = {
       method: 'POST',
       headers: authHeader(),
       body : JSON.stringify(data)
   }
   return fetch('/add', requestOptions)
             .then(response => (handleResponse(response)))
}

function deleteBooking(id) {
    const  requestOptions = {
        method: 'DELETE',
        headers: authHeader(),
        body : JSON.stringify(id)
    }
    return fetch('/delete', requestOptions)
                .then(response => (handleResponse(response)))
}


function getProfileData() {
    const  requestOptions = {
        method: 'GET',
        headers: authHeader()
    }
    return fetch('/profile', requestOptions)
                    .then(response => (handleResponse(response)))
}

function avaliableTimes(date) {
    console.log(date);
    
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(date)
    }
    return fetch('/times', requestOptions)
                .then(response => (handleResponse(response)))
}

function handleResponse(response) {
    return response.ok ? Promise.resolve(response) : Promise.reject(response);
}