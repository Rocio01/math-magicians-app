import React from 'react';
// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="calculator row">
        <div className="result float-right">
          <p className="py-1">0</p>
        </div>
        <div className="calculator-buttons row">
          <div className="calculator-digits container col row">
            <button type="button" className=" col-4">AC</button>
            <button type="button" className=" col-4">+/-</button>
            <button type="button" className=" col-4">%</button>
            <button type="button" className=" col-4">7</button>
            <button type="button" className=" col-4">8</button>
            <button type="button" className=" col-4">9</button>
            <button type="button" className=" col-4">4</button>
            <button type="button" className=" col-4">5</button>
            <button type="button" className=" col-4">6</button>
            <button type="button" className=" col-4">1</button>
            <button type="button" className=" col-4">2</button>
            <button type="button" className=" col-4">3</button>
            <button type="button" className=" col-10">0</button>
            <button type="button" className=" col-2">.</button>

          </div>
          <div className="calculator-operators container col-2 row">
            <button type="button">/</button>
            <button type="button">x</button>
            <button type="button">-</button>
            <button type="button">+</button>
            <button type="button">=</button>
          </div>

        </div>
      </div>
    );
  }
}
