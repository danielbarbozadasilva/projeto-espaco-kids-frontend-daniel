import http from '../config/http'

const getServiceAllOficinas = () => http.get('/oficinas')
const getServiceDetalhes = (codoficina) => http.get(`/oficinas/${codoficina}`)
const createServiceOficinas = (oficina) => http.post('oficinas', oficina)
const updateServiceOficina = (codoficina, data) => http.put(`oficinas/${codoficina}`, data)
const removeServiceOficina = (codoficina) => http.delete(`oficinas/${codoficina}`)
const subServiceOficinas = (codoficina, data) => http.post(`oficinas/${codoficina}/inscricao`, data)
const deleteServiceInscricaoOficina = (codoficina, id_inscricao, id_usuario) => http.delete(`/oficinas/${codoficina}/inscricao/${id_inscricao}/usuario/${id_usuario}`)

export {
  getServiceAllOficinas,
  getServiceDetalhes,
  createServiceOficinas,
  updateServiceOficina,
  removeServiceOficina,
  subServiceOficinas,
  deleteServiceInscricaoOficina
}
