
import http from '../config/http';

const getServiceAllUsuarios = () => http.get('/participante');

const getServiceDetalhesUsuarios = (id) => http.get(`/participante/${id}`);

const subServiceUsuarios = (id, data) => http.post(`participante/${id}/inscricao`, data);

const createServiceUsuario = (participante) => http.post(`usuario`, participante);

const createLogarServiceUsuario = (participante) => http.post(`participante`, participante);

const deleteServiceUsuarios = (id, id_inscricao) => http.delete(`/participante/${id}/inscricao/${id_inscricao}`);


export {
    getServiceAllUsuarios,
    getServiceDetalhesUsuarios,
    subServiceUsuarios,
    createServiceUsuario,
    deleteServiceUsuarios,
    createLogarServiceUsuario
}