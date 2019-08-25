import {
    ENABLE_USER_LOADING, DISABLE_USER_LOADING, GET_USER_DETAILS
} from './constants';
import { fetchUserDetails } from '../api/fetchdata';

export const getSentimentRepoDetails = () => async (dispatch: any, getState: any) => {
    const res = await fetchUserDetails();
    dispatch({
        type: ENABLE_USER_LOADING,
    });
    dispatch({
        type: GET_USER_DETAILS,
        data: res,
    });
    dispatch({
        type: DISABLE_USER_LOADING,
    })
}