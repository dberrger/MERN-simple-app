import { userConstants } from "../_constants/user-constants.jsx";

export function authReducer (state = {isLogged: false}, action)  {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return Object.assign({}, state, { isLogged: false });

        case userConstants.LOGIN_SUCCESS:
            return Object.assign({}, state, { user: action.user, isLogged: true });

        case userConstants.LOGIN_FAILURE:
            return Object.assign({}, state, {  error: action.error, isLogged: false });
        
        case userConstants.LOGOUT:
            return Object.assign({}, state, { isLogged: false });
        default: return state;

    }
}