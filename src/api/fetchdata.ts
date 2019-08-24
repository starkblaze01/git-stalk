import { GIT_BASE_URL } from './baseURL';
import { SENTIMENT_ANALYZER, AI_CODES, JENERETA } from './routes';
import axios from 'axios';
import OAUTH_TOKEN from './keys';

axios.defaults.headers.common['Authorization'] = OAUTH_TOKEN;

export const fetchSentimentRepoData = async () => {
    try {
        const res = await axios.get(
            `${GIT_BASE_URL}${SENTIMENT_ANALYZER}`,
        );
        return {
            isSuccess: true,
            data: res.data,
        }
    } catch (err) {
        console.log(err);
    }
}

export const fetchJeneretaRepoData = async () => {
    try {
        const res = await axios.get(
            `${GIT_BASE_URL}${JENERETA}`
        );
        return {
            isSuccess: true,
            data: res.data,
        }
    } catch (err) {
        console.log(err);
    }
}

export const fetchAIRepoData = async () => {
    try {
        const res = await axios.get(
            `${GIT_BASE_URL}${AI_CODES}`
        );
        return {
            isSuccess: true,
            data: res.data,
        }
    } catch (err) {
        console.log(err);
    }
}
