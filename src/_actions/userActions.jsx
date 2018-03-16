import { userConstants } from "../_constants/user-constants.jsx";

export const userActions  = {
    registerRequest, registerSuccess, registerFailure,
    loginRequest, loginSuccess, loginFailure,
    getRequest, getSuccess, getFailure,
    addRequest, addSuccess, addFailure,
    deleteRequest, deleteSuccess, deleteFailure,
    getProfileDataRequest, getProfileDataSuccess, getProfileDataFailure
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
    return { type: userConstants.LOGIN_REQUEST, user }
}

function loginSuccess(user) {
    return { type: userConstants.LOGIN_SUCCESS, user }
}

function loginFailure(user) {
    return { type: userConstants.LOGIN_FAILURE, user }
}

/** get */

function getRequest(user) {
    return { type: userConstants.GET_HISTORY_REQUEST, user }
}

function getSuccess(user) {
    return { type: userConstants.GET_HISTORY_SUCCESS, user }
}

function getFailure(user) {
    return { type: userConstants.GET_HISTORY_FAILURE, user }
}

/** add */

function addRequest(user) {
    return { type: userConstants.ADD_BOOKING_REQUEST, user }
}

function addSuccess(user) {
    return { type: userConstants.ADD_BOOKING_SUCCESS, user }
}

function addFailure(user) {
    return { type: userConstants.ADD_BOOKING_FAILURE, user }
}

/** delete */

function deleteRequest(user) {
    return { type: userConstants.DELETE_BOOKING_REQUEST, user }
}

function deleteSuccess(user) {
    return { type: userConstants.DELETE_BOOKING_SUCCESS, user }
}

function deleteFailure(user) {
    return { type: userConstants.DELETE_BOOKING_FAILURE, user }
}

/** logOUT */

function logOut(user) {
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