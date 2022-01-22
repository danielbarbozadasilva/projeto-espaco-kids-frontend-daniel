import { TYPES } from './participante.action'

const INITIAL_STATE = {
  all: [],
  loading: false,
  detail: {}
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.USUARIO_LOADING:
      state.loading = action.status
      return state
    case TYPES.USUARIO_ALL:
      state.all = action.data
      state.loading = false
      return state
    case TYPES.USUARIO_DETAILS:
      state.detail = action.data
      state.loading = false
      return state
    default:
      return state
  }
}

export default reducer
