import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/assets/css/style.css'
import GlobalStyle from './assets/globalStyled'
import { Provider } from 'react-redux'
import Routers from './routers'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Routers />
  </Provider>,
  document.getElementById('root')
)
