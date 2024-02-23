import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../../screens/Home/Home';
import Order from '../../screens/Order/Order';
import QrCode from '../../screens/QrCode/QrCode';
import Payment from '../../screens/Payment/Payment';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import NotFound from '../../screens/NotFound/NotFound';
import CreditCard from '../../screens/CrediCard/CreditCard';

function AppRouter() {

  const { ScreenTokens } = useContext(AppContext);

  return (
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path={'/order-' + ScreenTokens.Order} Component={Order}/>
      <Route path={'/qrcode-' + ScreenTokens.QrCode} Component={QrCode} />
      <Route path={'/creditcard-' + ScreenTokens.CreditCard} Component={CreditCard} />
      <Route path={'/payment-' + ScreenTokens.Payment} Component={Payment} />
      <Route path="*" Component={NotFound} />
    </Routes>
  );
}

export default AppRouter;
