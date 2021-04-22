import { createServiceUsuario, getServiceAllUsuarios} from '../../services/usuario.service';

export const TYPES = {
    USUARIO_LOADING: "USUARIO_LOADING",
    USUARIO_ALL: "USUARIO_ALL",
    USUARIO_CREATE: "USUARIO_CREATE",
}

export const getUsuariosAll = () => {
    return async (dispatch) => {
        // carregar o loading antes de chamar o serviço
        dispatch({ type: TYPES.USUARIO_LOADING, status: true })

        try {
            const all = await getServiceAllUsuarios()
            console.log(all)
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


export const createUsuario = (usuario) => {
    return async (dispatch) => {
        dispatch({ type: TYPES.USUARIO_LOADING, status: true })
        try {
            const result = await createServiceUsuario(usuario)
            dispatch(getUsuariosAll())

        } catch (error) {
            dispatch({ type: TYPES.USUARIO_LOADING, status: false })
            console.log('aconteceu um ERRO": Erro ao criar a oficina')
        }

    }
}



