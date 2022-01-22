import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import SignReducer from './auth/auth.reducer'
import OficinaReducer from './oficina/oficina.reducer'
import UsuarioReducer from './participante/participante.reducer'

const reducers = combineReducers({
  auth: SignReducer,
  oficina: OficinaReducer,
  usuario: UsuarioReducer
})

const middlewares = [thunk]
const compose = composeWithDevTools(applyMiddleware(...middlewares))
const store = createStore(reducers, compose)

export default store
