
import http from '../config/http';

const getServiceAllOficinas = () => http.get('/oficinas');

const getServiceDetalhes = (codoficina) => http.get(`/oficinas/${codoficina}`);

const createServiceOficinas = (id, data) => http.post(`/oficinas/${id}/inscricao`, data);

const deleteServiceOficinas = (id_oficinas, id_inscricao) => http.delete(`/oficinas/${id_oficinas}/inscricao/${id_inscricao}`);

// exemplo
// const createServiceOficinas = (data) => http.post('/oficinas/create', data);

export {
    getServiceAllOficinas,
    getServiceDetalhes,
    createServiceOficinas,
    deleteServiceOficinas,
}