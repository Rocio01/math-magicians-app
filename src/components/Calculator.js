import React from 'react';
// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="calculator">
        <div className="result">
          0
        </div>
        <div className="calculator-operators">
          <button type="button">/</button>
          <button type="button">x</button>
          <button type="button">-</button>
          <button type="button">+</button>
          <button type="button">=</button>
        </div>

        <div className="calculator-digits">
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button type="button">+</button>
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button">0</button>
          <button type="button">.</button>

        </div>
      </div>
    );
  }
}
