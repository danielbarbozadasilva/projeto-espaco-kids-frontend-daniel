
import http from '../config/http';

const getServiceAllUsuarios = () => http.get('/usuarios');

const getServiceDetalhesUsuarios = (id) => http.get(`/usuarios/${id}`);

const subServiceUsuarios = (id, data) => http.post(`usuarios/${id}/inscricao`, data);

const createServiceUsuarios = (usuarios) => http.post(`usuarios`, usuarios);

const deleteServiceUsuarios = (id, id_inscricao) => http.delete(`/usuarios/${id}/inscricao/${id_inscricao}`);


export {
    getServiceAllUsuarios,
    getServiceDetalhesUsuarios,
    subServiceUsuarios,
    createServiceUsuarios,
    deleteServiceUsuarios
}