import { userConstants } from "../_constants/user-constants";

export function bookingReducer(state = { fetched: true}, action)  {
    switch (action.type) {
        case userConstants.ADD_BOOKING_REQUEST:
            return Object.assign({}, state, { fetched: true });
        // case userConstants.ADD_BOOKING_SUCCESS:
        //     return Object.assign({}, state, { fetched: true });   
        default: return state;

    }
}