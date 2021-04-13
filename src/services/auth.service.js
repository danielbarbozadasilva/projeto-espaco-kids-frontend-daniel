import http from '../config/http';

const authService = (data) => http.post('/auth', data);

export {
    authService// const isAuthenticated = false;  //mock

}