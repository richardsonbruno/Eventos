import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../store';

/* Páginas */
import Home from './home';
import Login from './login';
import NovoUsuario from './usuario-novo';
import RecuperarSenha from './usuario-recuperar-senha';
import CadastroEventos from './cadastro-eventos';

const Routes = () => (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/novousuario" component={NovoUsuario} />
          <Route exact path='/recuperar-senha' component={RecuperarSenha} />
          <Route exact path='/cadastro-eventos' component={CadastroEventos} />
        </Switch>
      </Router>
    </Provider>
);

export default Routes;
