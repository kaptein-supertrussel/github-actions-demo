import React from 'react'
import kaptein from './kaptein-supertrussel.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={kaptein} className="App-logo" alt="kaptein" />
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
      </header>
    </div>
  );
}

export default App;
