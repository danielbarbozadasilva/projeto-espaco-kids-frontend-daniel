
import http from '../config/http';

// Exibir todas as oficinas
const getServiceAllOficinas = () => http.get('/oficinas');

// Exibir detalhes de determinada oficina
const getServiceDetalhes = (codoficina) => http.get(`/oficinas/${codoficina}`);

// criar oficina
const createServiceOficinas = (oficina) => http.post(`oficinas`, oficina);

// Atualizar uma determinada oficina
const updateServiceOficina = (codoficina, data) => http.put(`oficinas/${codoficina}`, data);

// Remover uma determinada oficina
const removeServiceOficina = (codoficina) => http.delete(`oficinas/${codoficina}`);

// Criar a inscrição na oficina
const subServiceOficinas = (codoficina, data) => http.post(`oficinas/${codoficina}/inscricao`, data);

// Deletar a inscrição na oficina
const deleteServiceInscricaoOficina = (codoficina, id_inscricao, id_usuario) => http.delete(`/oficinas/${codoficina}/inscricao/${id_inscricao}/usuario/${id_usuario}`);




export {
    getServiceAllOficinas,
    getServiceDetalhes,
    createServiceOficinas,
    updateServiceOficina,
    removeServiceOficina,
    subServiceOficinas,
    deleteServiceInscricaoOficina,
}