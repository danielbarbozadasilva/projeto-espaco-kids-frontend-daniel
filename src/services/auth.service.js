import http from '../config/http';

// post - trabalha com o body, ele manda pela url as informações
const authService = (data) => http.post('/auth', data);


const registerUserService = (data) => http.post('/participante', data);


export {
    authService,
    registerUserService
}