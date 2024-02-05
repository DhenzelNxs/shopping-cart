import React from 'react';
import Header from '../../components/Header/Header';
import Cart from '../../components/Cart/Cart';
import Products from '../../components/Products/Products';

export default function Home() {
  return(
    <>
      <Header />
      <Products />
      <Cart />
    </>
  );
}
