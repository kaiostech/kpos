import { useLocation } from 'react-router-dom';
import Divider from '@components/Divider';
import Data from '@base/payments';
import './index.css';
import tick from '@base/assets/ic-tick.svg';

function PaymentService () {
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

  return (
    <header className="App-header">
      <div className='statusLogo'>
        <img src={tick} alt="payment complete"/>
      </div>
      <h1 className='status-h1'>Payment Complete</h1>
      <div className='StatusContent'>
        <div className='Paid'>Paid Amount</div>
        <div className='Amount'>8.99 FCFA</div>
      </div>
      <Divider/>
      <div className='PaymentBox status'>
        <div className='p-name' data-code={selected.code}>{selected.title}</div>
      </div>
    </header>
  );
}

export default PaymentService;