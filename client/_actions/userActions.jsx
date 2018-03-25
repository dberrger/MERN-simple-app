import { userConstants } from "../_constants/user-constants";

export const userActions  = {
    registerRequest, registerSuccess, registerFailure,
    loginRequest, loginSuccess, loginFailure,
    getHistoryRequest, getHistorySuccess, getHistoryFailure,
    addRequest, addSuccess, addFailure,
    deleteRequest, deleteSuccess, deleteFailure,
    getProfileDataRequest, getProfileDataSuccess, getProfileDataFailure,
    avaliableTimesRequest, avaliableTimesSuccess, avaliableTimesFailure,
    logOut, setLogged
}

/** register */
function registerRequest(user) {
    return { type: userConstants.REGISTER_REQUEST, user }
}

function registerSuccess(user) {
    return { type: userConstants.REGISTER_SUCCESS, user }
}

function registerFailure(user) {
    return { type: userConstants.REGISTER_FAILURE, user }
}


/** login */

function loginRequest(user) {
    return { type: userConstants.LOGIN_REQUEST }
}

function loginSuccess(user) {
    return { type: userConstants.LOGIN_SUCCESS, user }
}

function loginFailure(message) {
    return { type: userConstants.LOGIN_FAILURE, error: message }
}

// /** get */

// function getHistoryRequest(user) {
//     return { type: userConstants.GET_HISTORY_REQUEST, user }
// }

// function getHistorySuccess(user) {
//     return { type: userConstants.GET_HISTORY_SUCCESS, user }
// }

// function getHistoryFailure(user) {
//     return { type: userConstants.GET_HISTORY_FAILURE, user }
// }

/** add */

function addRequest() {
    return { type: userConstants.ADD_BOOKING_REQUEST }
}

function addSuccess() {
    return { type: userConstants.ADD_BOOKING_SUCCESS }
}

function addFailure(user) {
    return { type: userConstants.ADD_BOOKING_FAILURE, user }
}

/** delete */

function deleteRequest(id) {
    return { type: userConstants.DELETE_BOOKING_REQUEST }
}

function deleteSuccess() {
    return { type: userConstants.DELETE_BOOKING_SUCCESS}
}

function deleteFailure(message) {
    return { type: userConstants.DELETE_BOOKING_FAILURE, error: message }
}

/** logOUT */

function logOut() {
    return { type: userConstants.LOGOUT}
}



function getProfileDataRequest() {
    return { type: userConstants.GET_USER_PROFILE_DATA_REQUEST }
}

function getProfileDataSuccess(userData) {
    return { type: userConstants.GET_USER_PROFILE_DATA_SUCCESS, userProfileData: userData }
}

function getProfileDataFailure(message) {
    return { type: userConstants.GET_USER_PROFILE_DATA_FAILURE, error: message }
}



function avaliableTimesRequest() {
    return {type: userConstants.GET_AVALIABLE_TIMES_REQUEST}
}

function avaliableTimesSuccess(times) {
    return {type: userConstants.GET_AVALIABLE_TIMES_SUCCESS, avaliableTimes: times}
}

function avaliableTimesFailure(message) {
    return {type: userConstants.GET_AVALIABLE_TIMES_FAILURE, error: message}
}


function getHistoryRequest() {
    return {type: userConstants.GET_HISTORY_REQUEST}
}

function getHistorySuccess(history) {
    return {type: userConstants.GET_HISTORY_SUCCESS, history: history}
}

function getHistoryFailure(message) {
    return {type: userConstants.GET_HISTORY_FAILURE, error: message}
}

function setLogged() {
    return {type: userConstants.SET_LOGGED}
}