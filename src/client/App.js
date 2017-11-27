import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { withLayout } from './containers/Layout';
import Home from './pages/Home';
import About from './pages/About';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={matchProps => withLayout(Home)(matchProps)} />
        <Route exact path="/about" render={matchProps => withLayout(About)(matchProps)} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
