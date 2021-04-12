import { removeToken, saveAuth } from "../../config/auth";
import { authService } from "../../services/auth.service";
import history from '../../config/history';
import http from '../../config/http';


export const TYPES = {
    SIGN_IN: "SIGN_IN",
    SIGN_OUT: "SIGN_OUT",
    SIGN_ERROR: "SIGN_ERROR",
    SIGN_LOADING: "SIGN_LOADING",
}

export const signInAction = (data) => {

    return async (dispatch) => {
        dispatch({ type: TYPES.SIGN_LOADING, status: true })

        try {
            const result = await authService(data) 
            if (result.data) {
                saveAuth(result.data)
                http.defaults.headers['token'] = result.data.token;
            }
            // mandando informação para o reducer
            dispatch({
                type: TYPES.SIGN_IN, data: result.data
            })
            history.push('/')
        } catch (error) {
            dispatch({ type: TYPES.SIGN_ERROR, data: error })
        }


    };
}
export const logoutAction = (data) => {

    return async (dispatch) => {
        removeToken()
        dispatch({ type: TYPES.SIGN_OUT })
        history.push('/signin')
    };
}




