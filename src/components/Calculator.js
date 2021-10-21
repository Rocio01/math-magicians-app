import React from 'react';
import calculate from '../logic/calculate';
// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,

    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((prevState) => calculate(prevState, e.target.innerText));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator row align-items-center">
        <div className="result float-right">
          <p className="py-3">
            {total}
            {operation}
            {next}
          </p>
        </div>
        <div className="calculator-buttons row">
          <div className="calculator-digits container col row">
            <button type="button" onClick={this.handleClick} className=" col-4">AC</button>
            <button type="button" onClick={this.handleClick} className=" col-4">+/-</button>
            <button type="button" onClick={this.handleClick} className=" col-4">%</button>
            <button type="button" onClick={this.handleClick} className=" col-4">7</button>
            <button type="button" onClick={this.handleClick} className=" col-4">8</button>
            <button type="button" onClick={this.handleClick} className=" col-4">9</button>
            <button type="button" onClick={this.handleClick} className=" col-4">4</button>
            <button type="button" onClick={this.handleClick} className=" col-4">5</button>
            <button type="button" onClick={this.handleClick} className=" col-4">6</button>
            <button type="button" onClick={this.handleClick} className=" col-4">1</button>
            <button type="button" onClick={this.handleClick} className=" col-4">2</button>
            <button type="button" onClick={this.handleClick} className=" col-4">3</button>
            <button type="button" onClick={this.handleClick} className=" col-9">0</button>
            <button type="button" onClick={this.handleClick} className=" col-3">.</button>

          </div>
          <div className="calculator-operators container col-3 row">
            <button type="button" onClick={this.handleClick} className="operators">÷</button>
            <button type="button" onClick={this.handleClick} className="operators">x</button>
            <button type="button" onClick={this.handleClick} className="operators">-</button>
            <button type="button" onClick={this.handleClick} className="operators">+</button>
            <button type="button" onClick={this.handleClick} className="operators">=</button>
          </div>

        </div>
      </div>
    );
  }
}
