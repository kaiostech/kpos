import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Confirm and Pay</h1>
        <h2>PAY AMOUNT</h2>
        <span className="Price">8.99 FCFA</span>
        <span className="PriceTo">to</span>
        <span className="TillID">123&nbsp;456</span>
        <button type="button"> Pay </button>
      </header>
    </div>
  );
}

export default App;
