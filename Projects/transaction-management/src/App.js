import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import { useState } from 'react';
import Customers from './Components/Customers';
import Suppliers from './Components/Suppliers';
import CustomersSetting from './Components/CustomersSetting';
import SuppliersSetting from './Components/SuppliersSetting';
import TransactionsSetting from './Components/TransactionsSetting';
import Transactions from './Components/Transactions';

function App() {


  const [Auth, setAuth] = useState();

  return (
    <div className="App">
      {/* <div className="header"><h1>Shree Sadguru Traders</h1></div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setAuthMiddleware={setAuth} />} />
          <Route path="/home" element={<Home AuthMiddleware={Auth} />}>
          </Route>
          <Route path='/customers' element={<Customers />} />
          <Route path='/suppliers' element={<Suppliers />} />
          <Route path='/editcustomers' element={<CustomersSetting />} />
          <Route path='/editsuppliers' element={<SuppliersSetting />} />
          <Route path='/transactions' element={<Transactions/>} />
          <Route path='/edittransactions' element={<TransactionsSetting />} />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
