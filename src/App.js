import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App ">

        <body>
          <Calculator />
        </body>
      </div>
    );
  }
}

export default App;
