import { GIT_BASE_URL } from './baseURL';
import { USER_DETAILS } from './routes';
import axios from 'axios';
import OAUTH_TOKEN from './keys';

axios.defaults.headers.common['Authorization'] = OAUTH_TOKEN;

export const fetchUserDetails = async () => {
    try {
        const res = await axios.get(
            `${GIT_BASE_URL}${USER_DETAILS}`,
        );
        return {
            isSuccess: true,
            data: res.data,
        }
    } catch (err) {
        console.log(err);
    }
}
