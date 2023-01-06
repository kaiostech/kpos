import React from 'react';

import StepBanner from '@components/StepBanner'
import './index.css';

const payments = [
  {'title': 'Orange Money', 'code': 'orange'},
  {'title': 'MTN Mobile Money', 'code': 'mtn'},
  {'title': 'Moov Money', 'code': 'moov'},
  {'title': 'Wave Mobile Money', 'code': 'wave'},
  {'title': 'Yup Mobile Money', 'code': 'yup'},
  {'title': 'Wizal Money', 'code': 'wizal'},
  {'title': 'CelPaid Money', 'code': 'celpaid'},
];


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