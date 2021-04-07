import { isAuthenticated } from './config/auth';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

// config
const adminRoute = ({ ...rest }) => {
    if (!isAuthenticated()) {
        return <Redirect to="/signin" />
    }

    return <Route {...rest} />
}
// layout
import Layout from './components/layout';

// views
import Oficinas from './views/oficinas';
import SignIn from './views/auth/signin';
import Detalhes from './views/detalhes';
import Error404 from './views/errors/404';

// const isAuthenticated = false;  //mock

/* Pego todos os atributos passados exact, path 
   e quanlquer outro e armazeno tudo dentro de rest */
const AdminRouter = ({ ...rest }) => {
    if (!isAuthenticated) {
        return <Redirect to="/signin" />
    }

    return <Route{...rest} />
}

const Routers = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/signin' component={SignIn} />
                <Layout nomeDaPagina="Casa da Dinda">
                    {/* Rota de login */}

                    <AdminRouter exact path='/' component={Oficinas} />
                    <AdminRouter exact path='/detalhes/:codoficina' component={Detalhes} />
                    <AdminRouter exact to="/errors/404" component={Error404} />
                    <Redirect from="*" to="/errors/404" />
                </Layout>
            </Switch>

        </Router >
    )
}

export default Routers;