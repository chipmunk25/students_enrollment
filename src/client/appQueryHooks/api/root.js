import axios from 'axios';

const createUrl = apiUrl => path => path.startsWith('/') ? `${apiUrl}${path}` : `${apiUrl}/${path}`;

axios.interceptors.request.use(req => {
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
        throw err;
    }
);
