import React from 'react';
import { FaCircleCheck } from 'react-icons/fa6';
//import { useContext } from 'react'; Proxima Atualização
//import AppContext from '../../context/AppContext'; Proxima Atualização
//import formatCurrency from '../../utils/formatCurrency'; Proxima Atualização

import './Payment.css';

export default function Payment() {

  //const {cartItems} = useContext(AppContext);  Proxima Atualização

  //const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);  Proxima Atualização

  // <div className="payment-resume">{formatCurrency(totalPrice, 'BRL')}</div>  Proxima Atualização

  return(
    <section className="payment-container">
      <div className="payment-title">
        Pagamento Feito Com Sucesso!
      </div>
      <div className="icon-container">
        <FaCircleCheck size={200} color="green"/>
        <p>Parabéns Pela Compra!</p>
      </div>
      
    </section>
  );
}
