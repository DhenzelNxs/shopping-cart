import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import CartItem from '../../components/CartItem/CartItem';
import formatCurrency from '../../utils/formatCurrency';
import { FaPix, FaRegCreditCard } from 'react-icons/fa6';

import './Order.css';
export default function Order() {
  const { cartItems, navigate, ScreenTokens } = useContext(AppContext);
  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

  const toQrCode = () => {
    navigate('/qrcode-' + ScreenTokens.QrCode);
  };

  return(
    <section className="order-container">
      <div className="cart-items">
        { cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} remove_button={false} />) }
      </div>

      <div className="cart-resume">Valor Total: {formatCurrency(totalPrice, 'BRL')}</div>

      <div className="payment-method">
        Formas de Pagamento:
        <div className="payment-info">
          <FaPix className="Payment-icon" size={30} color="#00ffff" onClick={() => toQrCode()}/> PIX
          <FaRegCreditCard className="Payment-icon" size={30}/> Cartão de Crédito
        </div>
      </div>

    </section>
  );
}
