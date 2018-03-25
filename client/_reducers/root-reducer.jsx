import { alertConstants } from "../_constants/alert-constants.jsx";

export function rootReducer(state = {}, action)  {
    switch (action.type) {
        case alertConstants.SUCCESS:
            return Object.assign({}, state, { result: 'success!' });

        case alertConstants.ERROR:
            return Object.assign({}, state, { result: 'error!' });

        case alertConstants.CLEAR:
            return Object.assign({}, state, { result: '' });
            
        default: return state;

    }
}