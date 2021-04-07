import { saveAuth } from '../../config/auth';
import { authService } from '../../services/auth.service';

export const SIGN_IN = "SIGN_IN"


export const signInAction = (data) => {
    console.log("Executando o signInAction")

    return async (dispatch) => {
        console.log("Executando a função assincrona dispatch")

        const result = await authService(data)
        if (result.data) {
            saveAuth(result.data);
        }
        dispatch({
            type: SIGN_IN, data: result.data
        })
    };
}
