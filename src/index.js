import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/style.css';
import GlobalStyle from './assets/globalStyled';

/* Conecto o meu react no redux */
import { Provider } from 'react-redux';

/* Routers */
import Routers from './routers';

import store from './store';

ReactDOM.render(
    <Provider store={store}>
      <GlobalStyle />
      <Routers />
    </Provider>,
  document.getElementById('root')
);


