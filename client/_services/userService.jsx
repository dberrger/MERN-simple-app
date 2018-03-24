import authHeader from "./authHeader.jsx";

export const userService = {
    login, register, logout,
    getHistory, addBooking, deleteBooking,
    getProfileData,
    avaliableTimes
}

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }

    return fetch('/authenticate', requestOptions)
                .then(response => { return response.json(); })
                .then(res => {
                    console.log(res);
                    return handleResponse(res)
                })
        }

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    }
    return fetch('/register', requestOptions)
                .then(response => { return response.json(); })
                .then(res => {
                    console.log(res);
                    return handleResponse(res)
                })
}

function logout() {
    console.log("Logout")
    localStorage.removeItem('user');
    return false
}

function getHistory() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }
    return fetch('http://localhost:3000/booking/history', requestOptions)
                .then(response => 
                    { 
                        return response.json(); 
                    },
                    err => {
                        return "Error";
                    }
                )
                .then(res => {
                    console.log(res);
                    return handleResponse(res)
                })
}

function addBooking(data) {
    let a = authHeader();
    const requestOptions = {
        method: 'POST',
        headers: {'Authorization': JSON.parse(localStorage.getItem('user')).token , 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }
    return fetch('/booking', requestOptions)
            .then(response => { return response.json(); })
            .then(res => {
                console.log(res);   
                return handleResponse(res)
            })
}

function deleteBooking(id) {
    const requestOptions = {
        method: 'DELETE',
        headers:{'Authorization': JSON.parse(localStorage.getItem('user')).token , 'Content-Type': 'application/json'},
        body: JSON.stringify({id})
    }
    console.log(id)
    return fetch('http://localhost:3000/booking', requestOptions)
                .then(response => { return response.json(); })
                .then(res => {
                    console.log(res);   
                    return handleResponse(res)
                })
}


function getProfileData() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }
    return fetch('/profile', requestOptions)
                .then(response => { return response.json(); })
                .then(res => {
                    console.log(res);   
                    return handleResponse(res)
                })
}

function avaliableTimes(date) {
    console.log(date);

    const requestOptions = {
        method: 'POST',
        headers: {'Authorization': JSON.parse(localStorage.getItem('user')).token , 'Content-Type': 'application/json'},
        body: JSON.stringify(date)
    }
    return fetch('http://localhost:3000/booking/times', requestOptions)
                .then(response => 
                    { 
                        return response.json(); 
                    },
                    err => {
                        return "Error";
                    }
                )
                .then(res => {
                    console.log(res);
                    return handleResponse(res)
                })
}

function handleResponse(response) {
    return response.ok ? Promise.resolve(response) : Promise.reject(response);
}