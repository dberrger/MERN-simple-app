import { userService } from "../_services/userService.jsx";
import { userActions } from "./userActions.jsx";
import { alertActions } from "../_actions/alertActions.jsx";

export const userManager = {
    login, logout, register, getProfileData
}

function login(username, password) {
    return dispatch => {
        dispatch(userActions.loginRequest({ username }));

        userService.login(username, password)
                    .then(
                        user => {
                            dispatch(userActions.loginSuccess(user));
                            dispatch(alertActions.success("AUTHENTICATION SUCCESSFUL!"));
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
        userService.logout().logSuccess 
            ? dispatch(userActions.logOut())
            : null; 
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

