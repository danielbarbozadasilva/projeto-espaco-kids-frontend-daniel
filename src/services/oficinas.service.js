
import http from '../config/http';

const getServiceAllOficinas = () => http.get('/oficinas');

const getServiceDetalhes = (codoficina) => http.get(`/oficinas/${codoficina}`);

const subServiceOficinas = (id, data) => http.post(`oficinas/${id}/inscricao`, data);

const createServiceOficinas = (oficina) => http.post(`oficinas`, oficina);

const deleteServiceOficinas = (id_oficinas, id_inscricao) => http.delete(`/oficinas/${id_oficinas}/inscricao/${id_inscricao}`);


export {
    getServiceAllOficinas,
    getServiceDetalhes,
    subServiceOficinas,
    deleteServiceOficinas,
    createServiceOficinas
}