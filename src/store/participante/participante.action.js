import { createServiceUsuario, getServiceAllUsuarios, updateServiceUsuario, getServiceDetalhesUsuarios } from '../../services/participante.service'

export const TYPES = {
  USUARIO_LOADING: 'USUARIO_LOADING',
  USUARIO_ALL: 'USUARIO_ALL',
  USUARIO_CREATE: 'USUARIO_CREATE',
  USUARIO_DETAILS: 'USUARIO_DETAILS'
}

export const getUsuariosAll = () => {
  return async (dispatch) => {
    dispatch({ type: TYPES.USUARIO_LOADING, status: true })
    try {
      const all = await getServiceAllUsuarios()
      dispatch({
        type: TYPES.USUARIO_ALL,
        data: all.data
      })
    } catch (error) {
      dispatch({ type: TYPES.USUARIO_ALL, status: false })
      console.log('aconteceu um ERRO": disparar um e-mail para Admin')
    }
  }
}

export const getUsuarioId = (id) => {
  return async (dispatch, getState) => {
    try {
      const res = await getServiceDetalhesUsuarios(id)

      dispatch({
        type: TYPES.USUARIO_DETAILS,
        data: res.data
      })
    } catch (error) {
      dispatch({ type: TYPES.USUARIO_LOADING, status: false })
      console.log('Ocorreu um erro ao exibir os detalhes da oficina')
    }
  }
}

export const createUsuario = (usuario) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.USUARIO_LOADING, status: true })
    try {
      await createServiceUsuario(usuario)
      dispatch(getUsuariosAll())
    } catch (error) {
      dispatch({ type: TYPES.USUARIO_LOADING, status: false })
      console.log('aconteceu um ERRO": Erro ao criar a oficina')
    }
  }
}
export const updateProfile = ({ id, nomeusuario, datanascimentoparticipante, nomeparticipante, cpf, telefone, endereco, email, senha }) => {
  return async (dispatch) => {
    try {
      const data = { nomeusuario, datanascimentoparticipante, nomeparticipante, cpf, telefone, endereco, email, senha }
      const all = await updateServiceUsuario(id, data)
      dispatch({
        type: TYPES.STUDEND_ALL,
        data: all.data
      })
    } catch (error) {
    }
  }
}
