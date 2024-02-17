import React, { useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';
import { useNavigate } from 'react-router-dom';
import Tokens from '../utils/ScreenTokensGenerator';

function Provider({ children }) {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const navigate = useNavigate();
  const ScreenTokens = {
    Order: Tokens.Order,
    Payment: Tokens.Payment,
    QrCode: Tokens.QrCode,
  };

  const value = {
    products,
    setProducts,
    categories,
    setCategories,
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
