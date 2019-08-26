import {
    ENABLE_USER_LOADING, DISABLE_USER_LOADING, GET_USER_DETAILS, SET_USER_NAME
} from '../actions/constants';
const defaultState: any = {
    loadingUser: true,
    userDetails: '',
    userName: '',
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
        case SET_USER_NAME: {
            return {
                ...state,
                userName: action.data,
            }
        }
        default: {
            return state;
        }
    }
}