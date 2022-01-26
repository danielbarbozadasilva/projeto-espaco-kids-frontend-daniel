import axios from 'axios'
import { getToken } from './auth'
import history from './history'
import store from '../store'
import { logoutAction } from '../store/auth/auth.action'

const urlApi = process.env.REACT_APP_API

const http = axios.create({
  baseURL: urlApi
})

http.defaults.headers['content-type'] = 'application/json'
if (getToken()) {
  http.defaults.headers.token = getToken()
}

http.interceptors.response.use((response) => {
  return response
}, function (error) {
  switch (error.response.status) {
    case 401:
      history.push('/signin')
      break
    case 500:
      store.dispatch(logoutAction())
      break
  }
  return Promise.reject(error.response)
})

export default http
