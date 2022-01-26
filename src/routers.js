import React from 'react'
import { useSelector } from 'react-redux'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from './config/auth'
import Layout from './components/layout'
import Inicio from './views/inicio'
import Oficinas from './views/oficinas'
import Participantes from './views/participantes'
import Version from './views/version'
import Detalhes from './views/detalhes'
import Error401 from './views/errors/401'
import Error404 from './views/errors/404'
import history from './config/history'
import SignIn from './views/auth/signin'
import SignUp from './views/auth/singup'
import Perfil from './views/perfil'

const AdminRoute = ({ ...rest }) => {
  if (!isAuthenticated()) {
    return <Redirect to='/signin' />
  }

  const hasAdmin = Object.keys(rest).includes('admin') && !rest.admin

  if (hasAdmin) {
    return <Redirect to='/error/401' />
  }

  return <Route {...rest} />
}

const Routers = () => {
  const isAdmin = useSelector((state) => state.auth.isAdmin)
  return (
    <Router history={history}>
      <Layout nomeDaPagina='Casa da Dinda'>
        <Switch>
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />

          <AdminRoute exact path='/' component={Inicio} />
          <AdminRoute exact path='/detalhes/:codoficina' component={Detalhes} />
          <AdminRoute exact path='/version' component={Version} />
          <AdminRoute exact path='/perfil' component={Perfil} />
          <AdminRoute
            exact
            path='/participantes'
            admin={isAdmin}
            component={Participantes}
          />
          <AdminRoute
            exact
            path='/oficinas'
            admin={isAdmin}
            component={Oficinas}
          />

          <AdminRoute exact to='/error/401' component={Error401} />
          <AdminRoute exact to='/error/404' component={Error404} />
          <Redirect from='*' to='/error/404' />
        </Switch>
      </Layout>
    </Router>
  )
}

export default Routers
