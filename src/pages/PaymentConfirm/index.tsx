import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import StepBanner from '@components/StepBanner';
import Divider from '@components/Divider';

import './index.css';

function PaymentConfirm () {
  const [isMain, setMain] = useState(true);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const toggleClass = () => {
    setMain(!isMain);
  }
  let buttonText = 'Pay';
  switch (searchParams.get('pid')) {
    case 'mtn':
      buttonText = "MTN Mobile Money";
      break;
    case 'airtel':
      buttonText = "airtel Money";
      break;
  }
  return (
    <header className={isMain ? "App-header" : "App-header second"}>
      <StepBanner order={2} text={"Confirm and Pay"} />
      <h5 className='Amount'>Pay Amount</h5>
      <div className='AmountContent'>
        <div className='Currency'>FCFA</div>
        <div className='Price'>8.99</div>
      </div>
      <Divider/>
      <Divider/>
      <button tabIndex={0} type="button" onClick={toggleClass} autoFocus> {buttonText} </button>
    </header>
  );
}

export default PaymentConfirm;