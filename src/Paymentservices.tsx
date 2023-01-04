import React from 'react';

import mtn from './mtn.png';
import airtel from './airtel.png';

function Paymentservice () {
  return (
    <header className="App-header">
      <h1 className="Name">Choose Payment Service</h1>
      <ul className="ProviderList">
        <li> <img src={mtn} className="thumbnail" alt="MTN Mobile Money" /><a href='#/pay?pid=mtn'>MTN Mobile Money</a></li>
        <li><img src={airtel} className="thumbnail" alt="airtel Money" /><a href='#/pay?pid=airtel'>airtel Money</a></li>
      </ul>
    </header>
  );
}

export default Paymentservice;