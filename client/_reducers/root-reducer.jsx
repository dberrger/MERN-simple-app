import { alertConstants } from "../_constants/alert-constants";

export function rootReducer(state = {}, action)  {
    switch (action.type) {
        case alertConstants.SUCCESS:
            return Object.assign({}, state, { result: action.message });

        case alertConstants.ERROR:
            return Object.assign({}, state, { result: action.message });

        case alertConstants.CLEAR:
            return Object.assign({}, state, { result: '' });
            
        default: return state;

    }
}