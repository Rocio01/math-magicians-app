import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Calculator from './components/Calculator';

const App = () => (
  <div className="App ">
    <Router>
      <Calculator />
    </Router>
  </div>
);

export default App;
