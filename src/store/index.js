// importar as libs 
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';

// importação dos reducers
import SignReducer from './auth/auth.reducer';

// combina todos os reduxs em um só
const reducers = combineReducers({
    auth: SignReducer,
})

// midleware de redux
const middlewares = [thunk];

// compose junta os middlewares e ferramentas de debug
const compose = composeWithDevTools(applyMiddleware(...middlewares))

// criar a story do redux
const store = createStore(reducers, compose);


export default store;