import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import calculate from '../logic/calculate';
import Home from '../pages/Home';
import Quote from '../pages/Quote';

const Calculator = () => {
  const [state, setState] = useState({ total: '0', next: null, operation: null });

  const handleClick = (e) => {
    setState(calculate(state, e.target.innerText));
  };
  return (
    <Switch>
      <Route exact path="/">
        <div className="calculator row align-items-center">
          <div className="result float-right">
            <p className="py-3">
              {state.total}
              {state.operation}
              {state.next}
            </p>
          </div>
          <div className="calculator-buttons row">
            <div className="calculator-digits container col row">
              <button type="button" onClick={handleClick} className=" col-4">AC</button>
              <button type="button" onClick={handleClick} className=" col-4">+/-</button>
              <button type="button" onClick={handleClick} className=" col-4">%</button>
              <button type="button" onClick={handleClick} className=" col-4">7</button>
              <button type="button" onClick={handleClick} className=" col-4">8</button>
              <button type="button" onClick={handleClick} className=" col-4">9</button>
              <button type="button" onClick={handleClick} className=" col-4">4</button>
              <button type="button" onClick={handleClick} className=" col-4">5</button>
              <button type="button" onClick={handleClick} className=" col-4">6</button>
              <button type="button" onClick={handleClick} className=" col-4">1</button>
              <button type="button" onClick={handleClick} className=" col-4">2</button>
              <button type="button" onClick={handleClick} className=" col-4">3</button>
              <button type="button" onClick={handleClick} className=" col-9">0</button>
              <button type="button" onClick={handleClick} className=" col-3">.</button>

            </div>
            <div className="calculator-operators container col-3 row">
              <button type="button" onClick={handleClick} className="operators">÷</button>
              <button type="button" onClick={handleClick} className="operators">x</button>
              <button type="button" onClick={handleClick} className="operators">-</button>
              <button type="button" onClick={handleClick} className="operators">+</button>
              <button type="button" onClick={handleClick} className="operators">=</button>
            </div>

          </div>
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
};
export default Calculator;
