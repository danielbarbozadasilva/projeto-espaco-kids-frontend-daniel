import { TYPES } from './oficina.action';

const INITIAL_STATE = {
    all: [],
    loading: false
};

const reducer = (state = INITIAL_STATE, action) => { 
    switch (action.type) {
        case TYPES.OFICINA_LOADING:
            state.loading = action.status
            return state;
        case TYPES.OFICINA_ALL:
            state.all = action.data
            state.loading = false
            return state;
        default:
            return state;
    }
};

export default reducer;
