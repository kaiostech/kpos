import React, { useState } from 'react';
import tick from './ic-tick.svg';
import './App.css';

function App() {
  const [isMain, setMain] = useState(true);
  const toggleClass = () => {
    setMain(!isMain);
    console.log(isMain);
  }

  return (
    <div className="App">
      {/* className={isActive ? 'your_className': null}  */}
      <header className={isMain ? "App-header" : "App-header second"}>
        <img src={tick} className="tick" alt="tick" />
        <h1 className='main'>Confirm and Pay</h1>
        <h1 className='second'>Payment Success</h1>
        <h2 className='main'>PAY AMOUNT</h2>
        <h2 className='second'>TOTAL PRICE</h2>
        <span className={isMain ? "Price" : "Price second"}>8.99 FCFA</span>
        <span className="PriceTo">to</span>
        <span className="TillID">123&nbsp;456</span>
        <button tabIndex={0} type="button" onClick={toggleClass} autoFocus> Pay </button>
      </header>
    </div>
  );
}

export default App;
