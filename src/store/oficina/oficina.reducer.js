import { TYPES } from './oficina.action'

const INITIAL_STATE = {
    all: [],
    loading: false,
    details: {}
};

const reducer = (state = INITIAL_STATE, action) => { // tamara recebe
    switch (action.type) {
        case TYPES.OFICINA_LOADING:
            state.loading = action.status
            return state;
        case TYPES.OFICINA_ALL:
            state.all = action.data
            state.loading = false
            return state;
        case TYPES.OFICINA_DETAILS:
            state.details = action.data
            state.loading = false
            return state;
        default:
            return state;
    }
};

export default reducer;
