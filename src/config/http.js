import axios from 'axios'; // import da dependencia
import { getToken } from './auth';
import history from './history';
import store from '../store'
import { logoutAction } from '../store/auth/auth.action';

// definindo a url da api
const urlApi = process.env.REACT_APP_API;
// const urlApi = "https://projeto-02-backend.herokuapp.com/v1";

// criando um client http através do AXIOS
const http = axios.create({
    baseURL: urlApi
});

// Definindo o header padrão da aplicação
http.defaults.headers['content-type'] = 'application/json';
if (getToken()) {
    http.defaults.headers['token'] = getToken();
}

http.interceptors.response.use(
    (response) => response,
    (error) => {
        switch (error.response.status) {
            case 401:
                store.dispatch(logoutAction())
                history.push('/signin')
                break;
            default:
                break;
        }
    }
)



export default http;