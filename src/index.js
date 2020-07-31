import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';

import cadastroVideo from './pages/cadastro/Video';
import cadastroCategoria from './pages/cadastro/Categoria';
import page404 from './pages/page404';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/cadastro/video" component={cadastroVideo} />
      <Route path="/cadastro/categoria" component={cadastroCategoria} />

      <Route component={page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
