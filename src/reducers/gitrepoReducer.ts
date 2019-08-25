import {
    ENABLE_USER_LOADING, DISABLE_USER_LOADING, GET_USER_DETAILS
} from '../actions/constants';
const defaultState: any = {
    loadingUser: true,
    userDetails: '',
}

export default function (state: any = defaultState, action: any) {
    switch (action.type) {
        case ENABLE_USER_LOADING: {
            return {
                ...state,
                loadingUser: true,
            }
        }
        case DISABLE_USER_LOADING: {
            return {
                ...state,
                loadingUser: false,
            }
        }
        case GET_USER_DETAILS: {
            return {
                ...state,
                userDetails: action.data,
            }
        }
        default: {
            return state;
        }
    }
}