import { GIT_BASE_URL } from './baseURL';
import { USER_DETAILS, FOLLWERS, FOLLOWING, EVENTS, ORG_LIST } from './routes';
import axios from 'axios';
import OAUTH_TOKEN from './keys';
axios.defaults.headers.common['Authorization'] = OAUTH_TOKEN;

export const fetchUserDetails = async (userName: any) => {
    try {
        const res = await axios.get(
            `${GIT_BASE_URL}${USER_DETAILS}/${userName}`,
        );
        return {
            isSuccess: true,
            data: res.data,
        }
    } catch (err) {
        console.log(err);
        return {
            isSuccess: false
        }
    }
}

export const fetchFollowers = async (userName: any) => {
    try {
        const res = await axios.get(
            `${GIT_BASE_URL}${USER_DETAILS}/${userName}${FOLLWERS}`
        );
        return {
            isSuccess: true,
            data: res.data
        }
    } catch (err) {
        console.log(err);
    }
}
export const fetchFollowing = async (userName: any) => {
    try {
        const res = await axios.get(
            `${GIT_BASE_URL}${USER_DETAILS}/${userName}${FOLLOWING}`
        );
        return {
            isSuccess: true,
            data: res.data
        }
    } catch (err) {
        console.log(err);
    }
}

export const fetchEvents = async (userName: any) => {
    try {
        const res = await axios.get(
            `${GIT_BASE_URL}${USER_DETAILS}/${userName}${EVENTS}`
        );
        return {
            isSuccess: true,
            data: res.data,
        }
    } catch (err) {
        console.log(err);
    }
}

export const fetchOrgList = async (userName: any) => {
    try {
        const res = await axios.get(
            `${GIT_BASE_URL}${USER_DETAILS}/${userName}${ORG_LIST}`
        );
        return {
            isSuccess: true,
            data: res.data,
        }
    } catch (err) {
        console.log(err);
    }
}