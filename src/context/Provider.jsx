import React, { useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';
import { useNavigate } from 'react-router-dom';

function Provider({ children }) {

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const navigate = useNavigate();
  const ScreenTokens = {
    Order: 'IDJIPJAINOV9828',
    Payment: 'APOJAINFIBANO8',
    QrCode: 'JHSUHF79293HIIFH',
  };

  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems,
    setCartItems,
    isCartVisible,
    setIsCartVisible,
    navigate,
    ScreenTokens,
  };

  return (
    <AppContext.Provider value={ value }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
