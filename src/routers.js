import React from "react";
import {
    Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

// Componnents
import Layout from "./components/layout";

// views
import Oficinas from './views/oficinas';
import SignIn from './views/auth/signin';
import SignUp from './views/auth/singup';
import Detalhes from './views/detalhes';
import Error404 from './views/errors/404';
import { isAuthenticated } from './config/auth';

import history from './config/history';
/* Pego todos os atributos passados exact, path 
   e quanlquer outro e armazeno tudo dentro de rest */

const AdminRoute = ({ ...rest }) => {

    if (!isAuthenticated()) {
        return <Redirect to="/signin" />
    }

    return <Route {...rest} />
}
const Routers = () => {
    return (
        <Router history={history}>
            <Layout nomeDaPagina="Casa da Dinda">
                <Switch>
                    <Route exact path='/signin' component={SignIn} />
                    <Route exact path='/signup' component={SignUp} />

                    <AdminRoute exact path='/' component={Oficinas} />
                    <AdminRoute exact path='/detalhes/:codoficina' component={Detalhes} />

                    <AdminRoute exact to="/error/404" component={Error404} />
                    <Redirect from="*" to="/error/404" />
                    {/* <Route component={Error404} /> */}
                </Switch>
            </Layout>
        </Router >
    )

}


export default Routers
