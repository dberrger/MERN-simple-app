import { userConstants } from "../_constants/user-constants.jsx";

export function profileReducer(state = { userProfileDataLoading: true }, action)  {
    switch (action.type) {
        case userConstants.GET_USER_PROFILE_DATA_REQUEST:
            return Object.assign({}, state, { userProfileDataLoading: true });

        case userConstants.GET_USER_PROFILE_DATA_SUCCESS:
            return Object.assign({}, state, { userProfileData: action.userProfileData, userProfileDataLoading: false });

        case userConstants.GET_USER_PROFILE_DATA_FAILURE:
            return Object.assign({}, state, {  userProfileDataLoading: false });
            
        default: return state;

    }
}