import { getToken, getUser } from '../../config/auth';
import { SIGN_IN, SIGN_OUT, SIGN_LOADING } from './auth.action';

const INICIAL_STATE = {
    loading: false,
    token: getToken() || "",
    usuario: getUser() || {}
};

const reducer = (state = INICIAL_STATE, action) => {
    console.log("Entrou no arquivo reduceAuth.js")
    switch (action.type) {
        case SIGN_IN:
            state.token = action.data.token
            state.usuario = action.data.usuario;
            return state;
        default:
            return state;
    }
};

export default reducer;