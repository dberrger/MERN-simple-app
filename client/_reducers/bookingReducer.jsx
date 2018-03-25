import { userConstants } from "../_constants/user-constants";

export function bookingReducer(state = { fetched: true }, action)  {
    switch (action.type) {
        case userConstants.ADD_BOOKING_REQUEST:
            return Object.assign({}, state, { fetched: false }); 
        default: return state;

    }
}