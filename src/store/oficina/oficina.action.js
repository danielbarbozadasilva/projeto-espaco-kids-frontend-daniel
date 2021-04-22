import { createServiceOficinas, getServiceAllOficinas, getServiceDetalhes, deleteServiceOficinas } from "../../services/oficinas.service"

export const TYPES = {
    OFICINA_LOADING: "OFICINA_LOADING",
    OFICINA_ALL: "OFICINA_ALL",
    OFICINA_CREATE: "OFICINA_CREATE",
    OFICINA_DETAILS: "OFICINA_DETAILS"
}

export const getOficinasAll = () => {
    return async (dispatch) => {
        // carregar o loading antes de chamar o serviço
        dispatch({ type: TYPES.OFICINA_LOADING, status: true })

        try {
            const all = await getServiceAllOficinas()
            dispatch({
                type: TYPES.OFICINA_ALL,
                data: all.data
            })
        } catch (error) {
            dispatch({ type: TYPES.OFICINA_LOADING, status: false })
            console.log('aconteceu um ERRO": disparar um e-mail para Admin')
        }
    }
}


export const createOficina = (oficina) => {
    return async (dispatch) => {
        dispatch({ type: TYPES.OFICINA_LOADING, status: true })
        try {
            const result = await createServiceOficinas(oficina)
            dispatch(getOficinasAll())

        } catch (error) {
            dispatch({ type: TYPES.OFICINA_LOADING, status: false })
            console.log('aconteceu um ERRO": Erro ao criar a oficina')
        }

    }
}


export const getDetails = (id) => {
    return async (dispatch, getState) => {
        try {
            const { auth } = getState()
            const res = await getServiceDetalhes(id)
            res.data.registered = res.data.subscriptions.some(item => item.email === auth.usuario.email);
            dispatch({
                type: TYPES.OFICINA_DETAILS,
                data: res.data
            })
        } catch (error) {
            dispatch({ type: TYPES.OFICINA_LOADING, status: false })
            console.log("Ocorreu um erro ao exibir os detalhes da oficina");
        }
    }
}

export const deleteOficina = (id) => {
    return async (dispatch, getState) => {
        const { oficina } = getState();
        dispatch({ type: TYPES.OFICINA_LOADING, status: true })
        try {
            const res = await deleteServiceOficinas(oficina.details.id, id)

            if (res.status === 200) {
                dispatch(getDetails)
            }
        } catch (error) {
            dispatch({ type: TYPES.OFICINA_LOADING, status: false })
            console.log("Ocorreu um erro ao deletar a oficina")
        }
    }
}



