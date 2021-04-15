import React from "react";
import { useSelector } from 'react-redux';

import {
    Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

// Configuração
import { isAuthenticated } from './config/auth';

// layout
import Layout from "./components/layout";

// views
import Inicio from './views/inicio';
import Oficinas from './views/oficinas';
import Usuarios from './views/usuarios';
import Sobre from './views/sobre';
import Detalhes from './views/detalhes';
import Error401 from './views/errors/401';
import Error404 from './views/errors/404';

import history from './config/history';
/* Pego todos os atributos passados exact, path 
   e quanlquer outro e armazeno tudo dentro de rest */
import SignIn from './views/auth/signin';
import SignUp from './views/auth/singup';
import Perfil from './views/perfil';



const AdminRoute = ({ ...rest }) => {
    if (!isAuthenticated()) {
        return <Redirect to="/signin" />
    }

    const hasAdmin = Object.keys(rest).includes('admin') && !rest.admin

    if (hasAdmin) {
        return <Redirect to="/error/401" />
    }

    return <Route {...rest} />
}


const Routers = () => {
    const isAdmin = useSelector(state => state.auth.isAdmin)
    return (
        <Router history={history}>
        <Layout nomeDaPagina="Casa da Dinda">
            <Switch>
                    <Route exact path='/signin' component={SignIn} />
                    <Route exact path='/signup' component={SignUp} />

                    <AdminRoute exact path='/' component={Inicio} />
                    <AdminRoute exact path='/detalhes/:codoficina' component={Detalhes} />
                    {/* ADMIN */}
                    <AdminRoute exact path='/sobre' component={Sobre} />
                    <AdminRoute exact path='/perfil' component={Perfil} />

                  
                    {/* ADMIN */}
                    <AdminRoute exact path='/usuarios' admin={isAdmin} component={Usuarios} />
                    <AdminRoute exact path='/oficinas' admin={isAdmin} component={Oficinas} />


                 <AdminRoute exact to="/error/401" component={Error401} />
                    <AdminRoute exact to="/error/404" component={Error404} />
                    <Redirect from="*" to="/error/404" />
                </Switch>
            </Layout>
        </Router >
    )

}


export default Routers
