import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true,
});

instance.interceptors.response.use(
    response => response,
    error => {
        // Handle errors here (e.g., show notification, redirect to login, etc.)
        console.error('API error:', error.response || error.message);
        return Promise.reject(error);
    }
);

export default instance;
