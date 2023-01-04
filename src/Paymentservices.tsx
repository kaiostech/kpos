import React from 'react';

function Paymentservice () {
  return (
    <header className="App-header">
      <h1>Choose Payment Service</h1>
      <ul>
        <li><a href='#/pay?pid=mtn'>MTN Money</a></li>
        <li><a href='#/pay?pid=airtel'>airtel Money</a></li>
      </ul>
    </header>
  );
}

export default Paymentservice;