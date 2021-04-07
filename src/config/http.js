
import axios from 'axios'; // import da dependencia

// definindo a url da api
const urlApi = process.env.REACT_APP_API;
// const urlApi = "http://localhost:3001/v1";

// criando um client http através do AXIOS
const http = axios.create({
    baseURL: urlApi
});

// Definindo o header padrão da aplicação
http.defaults.headers['content-type'] = 'application/json';


export default http;