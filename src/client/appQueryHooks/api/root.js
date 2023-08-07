import axios from 'axios';
// import useAuthStore from '../../hooks/auth';
const createUrl = apiUrl => path => path.startsWith('/') ? `${apiUrl}${path}` : `${apiUrl}/${path}`;
// const BaseService = axios.create({
//     timeout: 60000,
//     baseURL: appConfig.apiPrefix,
// })
axios.interceptors.request.use(req => {
    // const token = useAuthStore(state => state.token)
    if (req.url.startsWith('/api')) return req;
    req.url = createUrl('/api/v1/web')(req.url);
    req.withCredentials = true;

    return req;
});
axios.interceptors.response.use(
    res => res,
    err => {
        console.error(err);
        if (err && err.response && err.response.status === 401) {
            // If response status is 401, redirect to login page
            window.location.href = '/signout';
        }
        if (err && err.response && err.response.status === 403) {
            // If response status is 401, redirect to login page
            window.location.href = '/signout';
        }

        throw err;
    }
);
