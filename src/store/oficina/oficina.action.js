import { createServiceOficinas, getServiceAllOficinas } from "../../services/oficinas.service"

export const TYPES = {
    OFICINA_LOADING: "OFICINA_LOADING",
    OFICINA_ALL: "OFICINA_ALL",
    OFICINA_CREATE: "OFICINA_CREATE",
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



