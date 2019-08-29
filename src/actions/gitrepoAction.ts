import {
    ENABLE_USER_LOADING, DISABLE_USER_LOADING, GET_USER_DETAILS, SET_USER_NAME, GET_FOLLOWERS,
    GET_FOLLOWING, ENABLE_FOLLOWERS_LOADING, ENABLE_FOLLOWING_LOADING, DISABLE_FOLLOWERS_LOADING,
    DISABLE_FOLLOWING_LOADING, ENABLE_EVENTS_LOADING, DISABLE_EVENTS_LOADING, GET_EVENTS, ENABLE_ORG_LOADING,
    GET_ORG, DISABLE_ORG_LOADING, USER_NOT_FOUND
} from './constants';
import {
    fetchUserDetails, fetchEvents, fetchOrgList, fetchFollowers,
    fetchFollowing,
} from '../api/fetchdata';

export const getUserDetails = (userName: any) => async (dispatch: any, getState: any) => {
    const res = await fetchUserDetails(userName);
    // console.log(res);
    if (res.isSuccess) {
        dispatch({
            type: ENABLE_USER_LOADING,
        });
        dispatch({
            type: GET_USER_DETAILS,
            data: res,
        });
        dispatch(
            getEvents(userName)
        );
        dispatch(
            getFollowers(userName)
        );
        dispatch(
            getFollowing(userName)
        );
        dispatch(
            getOrganization(userName)
        );
        dispatch({
            type: DISABLE_USER_LOADING,
        });
    } else if (!res.isSuccess) {
        dispatch({
            type: USER_NOT_FOUND,
        });
    }
}

export const setUserName = (user: any) => async (dispatch: any, getState: any) => {
    dispatch({
        type: SET_USER_NAME,
        data: user,
    });
    dispatch(
        getUserDetails(user)
    );
}

export const getEvents = (userName: any) => async (dispatch: any, getState: any) => {
    const res = await fetchEvents(userName);
    dispatch({
        type: ENABLE_EVENTS_LOADING,
    });
    dispatch({
        type: GET_EVENTS,
        data: res,
    });
    dispatch({
        type: DISABLE_EVENTS_LOADING,
    })
}

export const getFollowers = (userName: any) => async (dispatch: any, getState: any) => {
    const res = await fetchFollowers(userName);
    dispatch({
        type: ENABLE_FOLLOWERS_LOADING,
    });
    dispatch({
        type: GET_FOLLOWERS,
        data: res,
    });
    dispatch({
        type: DISABLE_FOLLOWERS_LOADING,
    })
}

export const getFollowing = (userName: any) => async (dispatch: any, getState: any) => {
    const res = await fetchFollowing(userName);
    dispatch({
        type: ENABLE_FOLLOWING_LOADING,
    });
    dispatch({
        type: GET_FOLLOWING,
        data: res,
    });
    dispatch({
        type: DISABLE_FOLLOWING_LOADING,
    })
}

export const getOrganization = (userName: any) => async (dispatch: any, getState: any) => {
    const res = await fetchOrgList(userName);
    dispatch({
        type: ENABLE_ORG_LOADING,
    });
    dispatch({
        type: GET_ORG,
        data: res,
    });
    dispatch({
        type: DISABLE_ORG_LOADING,
    })
}
