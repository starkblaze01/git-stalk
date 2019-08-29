import {
    ENABLE_USER_LOADING, DISABLE_USER_LOADING, GET_USER_DETAILS, SET_USER_NAME, GET_EVENTS, GET_FOLLOWERS,
    GET_FOLLOWING, GET_ORG, DISABLE_EVENTS_LOADING, DISABLE_FOLLOWERS_LOADING, DISABLE_FOLLOWING_LOADING,
    DISABLE_ORG_LOADING, ENABLE_EVENTS_LOADING, ENABLE_FOLLOWERS_LOADING, ENABLE_FOLLOWING_LOADING, ENABLE_ORG_LOADING,
    USER_NOT_FOUND,
} from '../actions/constants';
const defaultState: any = {
    userNotFound: true,
    loadingUser: true,
    loadingFollowers: true,
    loadingFollowing: true,
    loadingEvents: true,
    loadingOrg: true,
    userDetails: '',
    userName: '',
    follower: [],
    following: [],
    organization: [],
    events: [],
}

export default function (state: any = defaultState, action: any) {
    switch (action.type) {
        case USER_NOT_FOUND: {
            return {
                ...state,
                userNotFound: true,
            }
        }
        case ENABLE_USER_LOADING: {
            return {
                ...state,
                loadingUser: true,
                userDetails: '',
            }
        }
        case DISABLE_USER_LOADING: {
            return {
                ...state,
                loadingUser: false,
                userNotFound: false,
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
        case GET_EVENTS: {
            return {
                ...state,
                events: action.data,
            }
        }
        case GET_FOLLOWERS: {
            return {
                ...state,
                follower: action.data,
            }
        }
        case GET_FOLLOWING: {
            return {
                ...state,
                following: action.data,
            }
        }
        case GET_ORG: {
            return {
                ...state,
                organization: action.data,
            }
        }
        case ENABLE_EVENTS_LOADING: {
            return {
                ...state,
                loadingEvents: true,
                events: [],
            }
        }
        case ENABLE_FOLLOWERS_LOADING: {
            return {
                ...state,
                loadingFollowers: true,
                follower: [],
            }
        }
        case ENABLE_FOLLOWING_LOADING: {
            return {
                ...state,
                loadingFollowing: true,
                following: [],
            }
        }
        case ENABLE_ORG_LOADING: {
            return {
                ...state,
                loadingOrg: true,
                organization: [],
            }
        }
        case DISABLE_EVENTS_LOADING: {
            return {
                ...state,
                loadingEvents: false,
            }
        }
        case DISABLE_FOLLOWERS_LOADING: {
            return {
                ...state,
                loadingFollowers: false,
            }
        }
        case DISABLE_FOLLOWING_LOADING: {
            return {
                ...state,
                loadingFollowing: false,
            }
        }
        case DISABLE_ORG_LOADING: {
            return {
                ...state,
                loadingOrg: false,
            }
        }
        default: {
            return state;
        }
    }
}