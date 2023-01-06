import React from 'react';

import StepBanner from '@components/StepBanner'
import './index.css';

import Data from '@base/payments';
const payments = Data.payments;

function PaymentService () {

  let baseUrl = '#/pay?pid=';

  return (
    <header className="App-header">
      <StepBanner order={1} text={"Select Payment Service"} />
      <ul className="ProviderList">
        {payments.map((item) => {
          // let imgPath = './airtel.png';
          return <li key={item.code} className={item.code}>
            <a href={baseUrl+item.code}>
              {item.title}
            </a>
            </li>;
        })}
      </ul>
    </header>
  );
}

export default PaymentService;