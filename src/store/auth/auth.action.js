import { saveAuth } from '../../config/auth';
import { authService } from '../../services/auth.service';

const SIGN_IN = "SIGN_IN"


export const signInAction = (data) => {
    return async (dispatch) => {

        const result = await authService(data)
        if (result.data) {
            saveAuth(result.data);
        }
        dispatch({
            type: SIGN_IN, data: result.data
        })
    };
}
