import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonFunction from './components/ButtonFunction';
import ButtonClass from './components/ButtonClass';
import ButtonPureComponent from './components/ButtonPureComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonFunction />
        <ButtonClass />
        <ButtonPureComponent />
      </header>

    </div>
  );
}

export default App;
