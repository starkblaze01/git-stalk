let OAUTH_TOKEN: any = null;
process.env.NODE_ENV === 'production' ?
    OAUTH_TOKEN = process.env.OAUTH_TOKEN : OAUTH_TOKEN = process.env.REACT_APP_OAUTH_TOKEN;
export default OAUTH_TOKEN;