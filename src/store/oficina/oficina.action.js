import { createServiceOficinas, getServiceAllOficinas, getServiceDetalhes, deleteServiceInscricaoOficina, removeServiceOficina, updateServiceOficina, subServiceOficinas } from "../../services/oficinas.service"
import { subServiceUsuarios } from "../../services/participante.service";

export const TYPES = {
    OFICINA_LOADING: "OFICINA_LOADING",
    OFICINA_ALL: "OFICINA_ALL",
    OFICINA_CREATE: "OFICINA_CREATE",
    OFICINA_DETAILS: "OFICINA_DETAILS",
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
            await createServiceOficinas(oficina)
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

            res.data.registered = res.data.inscricoes.length > 0;

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


export const deletarParticipanteOficina = (codoficina, id_inscricao) => {
    return async (dispatch) => {
        try {
            const all = await deleteServiceInscricaoOficina(codoficina, id_inscricao)

            if (all.data) {
                dispatch(getDetails(codoficina))
            }
        } catch (error) {
            console.log('aconteceu um ERRO": disparar um e-mail para Admin')
        }

    }
}



export const updateOficina = ({ codoficina, nomeoficina, urlimagemoficina, dataoficina, horaoficina, valoroficina, nomemonitor, descricaoficina, status }) => {
    return async (dispatch) => {
        dispatch({ type: TYPES.OFICINA_LOADING, status: true })
        try {
            const data = { nomeoficina, urlimagemoficina, dataoficina, horaoficina, valoroficina, nomemonitor, descricaoficina, status }

            await updateServiceOficina(codoficina, data)
            dispatch(getOficinasAll())

        } catch (error) {
            dispatch({ type: TYPES.OFICINA_LOADING, status: false })
            console.log('aconteceu um ERRO": Erro ao atualizar a oficina')
        }

    }
}


export const deletarOficina = (codoficina) => {
    return async (dispatch) => {
        dispatch({ type: TYPES.OFICINA_LOADING, status: true })
        try {

            await removeServiceOficina(codoficina)
            dispatch(getOficinasAll())

        } catch (error) {
            dispatch({ type: TYPES.OFICINA_LOADING, status: false })
            console.log('aconteceu um ERRO": Erro ao Excluir a oficina:', error)
        }

    }
}

export const inscreverParticipanteNaOficina = (id_curso, id_inscricao) => {
    return async (dispatch) => {

        try {
            const all = await subServiceOficinas(id_curso, id_inscricao)
            if (all.data) {
                dispatch(getDetails(id_curso))
            }
        } catch (error) {
            console.log('aconteceu um ERRO": disparar um e-mail para Admin')
        }
    }
}

