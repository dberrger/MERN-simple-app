import { userConstants } from "../_constants/user-constants.jsx";

export function deleteReducer(state = { deleting: true }, action)  {
    switch (action.type) {
        case userConstants.DELETE_BOOKING_REQUEST:
            return Object.assign({}, state, { deleting: true });

        case userConstants.DELETE_BOOKING_SUCCESS:
            return Object.assign({}, state, { deleting: false });

        case userConstants.DELETE_BOOKING_FAILURE:
            return Object.assign({}, state, {  deleting: false, error: action.message });
            
        default: return state;

    }
}