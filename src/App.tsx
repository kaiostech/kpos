import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';

import PaymentService from '@pages/PaymentService';
import PaymentConfirm from '@pages/PaymentConfirm';
import PaymentStatus from '@pages/PaymentStatus';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PaymentService/>}/>
        <Route path="/pay/" element={<PaymentConfirm/>}/>
        <Route path="/status/" element={<PaymentStatus/>}/>
      </Routes>
    </div>
  );
}

export default App;
