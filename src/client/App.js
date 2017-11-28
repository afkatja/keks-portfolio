import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { withLayout } from './containers/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

const links = [
  { id: 'home', url: '/', text: 'Home' },
  { id: 'about', url: '/about', text: 'About' },
  { id: 'portfolio', url: '/portfolio', text: 'Portfolio' }
];

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={matchProps => withLayout(Home)(links)(matchProps)} />
        <Route exact path="/about" render={matchProps => withLayout(About)(links)(matchProps)} />
        <Route exact path="/portfolio" render={matchProps => withLayout(Portfolio)(links)(matchProps)} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
