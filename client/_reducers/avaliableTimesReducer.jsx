import { userConstants } from "../_constants/user-constants.jsx";

export function avaliableTimesReducer(state = { avaliableTimes: []}, action)  {
    switch (action.type) {
        case userConstants.GET_AVALIABLE_TIMES_REQUEST:
            return Object.assign({}, state, { fetched: false });

        case userConstants.GET_AVALIABLE_TIMES_SUCCESS:
            return Object.assign({}, state, { avaliableTimes: action.avaliableTimes, fetched: true });

        case userConstants.GET_AVALIABLE_TIMES_FAILURE:
            return Object.assign({}, state, {  error: action.message, fetched: false });
            
        default: return state;

    }
}