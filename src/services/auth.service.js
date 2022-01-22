import http from '../config/http'

const authService = (data) => http.post('/auth', data)
const registerUserService = (data) => http.post('/participante', { ...data, realizarLogin: true })

export {
  authService,
  registerUserService
}
