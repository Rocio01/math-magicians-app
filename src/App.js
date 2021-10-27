import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="principal">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div className="App p-5 m-5">
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
    </div>
  );
}
