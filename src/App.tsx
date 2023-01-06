import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';

import PaymentService from '@pages/PaymentService'
import PaymentConfirm from '@pages/PaymentConfirm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PaymentService/>}/>
        <Route path="/pay/" element={<PaymentConfirm/>}/>
        {/* <Route path="/pay/:id" element={<PaymentConfirm/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
