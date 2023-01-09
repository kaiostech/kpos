import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import StepBanner from '@components/StepBanner';
import Divider from '@components/Divider';
import Data from '@base/payments';

import './index.css';

function PaymentConfirm () {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  const payments = Data.payments;
  let selected = {
    'title': "Orange Money",
    'code': 'orange',
  };
  let pid = searchParams.get('pid');
  for (let item of payments) {
    if (pid === item.code) {
      selected = item;
    }
  }
  let baseUrl = '#/status?pid=';
  return (
    <header className="App-header">
      <StepBanner order={2} text={"Confirm and Pay"} />
      <h5 className='Amount'>Pay Amount</h5>
      <div className='AmountContent'>
        <div className='Currency'>FCFA</div>
        <div className='Price'>8.99</div>
      </div>
      <Divider/>
      <div className='MerchanetBox'>
        <div className='m-name'>Merchant Name</div>
        <div className='m-id'>000&nbsp;123&nbsp;456</div>
      </div>
      <Divider/>
      <div className='PaymentBox'>
        <div className='p-name' data-code={selected.code}>{selected.title}</div>
      </div>
      <a href={baseUrl+selected.code} className="button"> Pay Now </a>
    </header>
  );
}

export default PaymentConfirm;