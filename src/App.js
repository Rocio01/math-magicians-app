import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Calculator from './components/Calculator';

import Home from './pages/Home';
import Quote from './pages/Quote';

export default function App() {
  return (
    <Switch>
      <Route exact path="/">
        <div className="App ">
          <Calculator />
        </div>
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/quote">
        <Quote />
      </Route>
    </Switch>
  );
}
