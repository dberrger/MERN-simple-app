import React from 'react';
import { userService } from "../_services/userService.jsx";
import { userActions } from "./userActions.jsx";
import { alertActions } from "../_actions/alertActions.jsx";
import { Redirect } from "react-router-dom";
import { history } from "../_backend/history";

export const userManager = {
    login,
    logout,
    register,
    getProfileData,
    addBooking,
    avaliableTimes,
    getHistory,
    deleteBooking
}

function login(username, password) {
    return dispatch => {
        dispatch(userActions.loginRequest({ username }));

        userService.login(username, password)
                    .then(
                        user => {
                            console.log(user)
                            user.isLogged = true;
                            
                            localStorage.setItem('user', JSON.stringify({ isLogged: user.ok, token: user.payload }));
                            dispatch(userActions.loginSuccess(user));
                            dispatch(alertActions.success("AUTHENTICATION SUCCESSFUL!"));
                            history.push('/');
                        },
                        error => {
                            dispatch(userActions.loginFailure(error));
                            dispatch(alertActions.error(error));
                        }
                    );
    }
}

function logout() { 

    return dispatch => {
        console.log(userService.logout());
        userService.logout() 
            ? null
            : dispatch(userActions.logOut()); 
    }
}

function register(userRegister) {
    return dispatch => {
        dispatch(userActions.registerRequest({ userRegister }));

        userService.register(userRegister)
                    .then(
                        success => {
                            console.log("success register from userManager");
                            dispatch(userActions.registerSuccess(success));
                            dispatch(alertActions.success("REGISTRATION SUCCESSFUL!"));
                           history.push('/'); 
                        },
                        error => {
                            dispatch(userActions.registerFailure(error));
                            dispatch(alertActions.error(error));
                        }
                    );
    }
}

function getProfileData() {
    return dispatch => {
        dispatch(userActions.getProfileDataRequest());

        userService.getProfileData()
                    .then(
                        success => {
                            console.log("Data has taken successfully!");
                            success = success.payload;
                            dispatch(userActions.getProfileDataSuccess(success));
                            dispatch(alertActions.success("FETCHED DATA SUCCESSFUL!"));
                        },
                        error => {
                            dispatch(userActions.getProfileDataFailure(error));
                            dispatch(alertActions.error(error));
                        }
                    );
    }
}


function addBooking(data) {
    return dispatch => {
        dispatch(userActions.addRequest());

        userService.addBooking(data)
                    .then(
                        success => {
                            console.log(`New Booking added! ${data}`);
                            dispatch(userActions.addSuccess(success));
                            dispatch(alertActions.success("ADDED DATA (BOOKING) SUCCESSFUL!"));
                        },
                        error => {
                            dispatch(userActions.addFailure(error));
                            dispatch(alertActions.error(error));
                        }
                    );
    } 
}


function deleteBooking(id) {
    return dispatch => {
        dispatch(userActions.deleteRequest());

        userService.deleteBooking(id)
                    .then(
                        success => {
                            console.log(`Booking cancelled! ${success}`);
                            dispatch(userActions.deleteSuccess());
                            
                            dispatch(alertActions.success("BOOKING HAS BEEN CANCELLED SUCCESSFULLY!"));
                            getHistory()(dispatch);
                        },
                        error => {
                            dispatch(userActions.deleteFailure(error));
                            dispatch(alertActions.error(error));
                        }
                    );
    }
}

function avaliableTimes(date) {
    return dispatch => {
        dispatch(userActions.avaliableTimesRequest());

        userService.avaliableTimes(date)
                    .then(
                        success => {
                            console.log(`Times fetched! ${success}`);
                            dispatch(userActions.avaliableTimesSuccess(success));
                            dispatch(alertActions.success("Times fetched SUCCESSFUL!"));
                        },
                        error => {
                            dispatch(userActions.avaliableTimesFailure(error));
                            dispatch(alertActions.error(error));
                        }
                    );
    }
}

function getHistory() {
    return dispatch => {
        dispatch(userActions.getHistoryRequest());

        userService.getHistory()
                    .then(
                        success => {
                            
                            console.log(`History fetched! ${success}`);
                            dispatch(userActions.getHistorySuccess(success));
                            dispatch(alertActions.success("History fetched SUCCESSFUL!"));
                        },
                        error => {
                            dispatch(userActions.getHistoryFailure(error));
                            dispatch(alertActions.error(error));
                        }
                    );
    }

}