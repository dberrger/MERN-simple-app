import { userConstants } from "../_constants/user-constants.jsx";

export function historyReducer(state = { historyLoading: true }, action)  {
    switch (action.type) {
        case userConstants.GET_HISTORY_REQUEST:
            return Object.assign({}, state, { historyLoading: true });

        case userConstants.GET_HISTORY_SUCCESS:
            return Object.assign({}, state, { historyLoading: false, history: action.history });

        case userConstants.GET_HISTORY_FAILURE:
            return Object.assign({}, state, {  historyLoading: false, error: action.message });
            
        default: return state;

    }
}