import {getToken, getUser} from '../../config/auth';
import {SIGN_IN, SIGN_OUT, SIGN_LOADING} from '../../sign.action';

const INICIAL_STATE = {

};

const reducer = (state = INICIAL_STATE, action) => {
    switch (action.type){
        default:
            return state;
    }
};

export default reducer;