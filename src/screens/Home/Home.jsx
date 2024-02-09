import React from 'react';
import Header from '../../components/Header/Header';
import Cart from '../../components/Cart/Cart';
import Products from '../../components/Products/Products';
import Categories from '../../components/Categories/Categories';

export default function Home() {
  return(
    <>
      <Header />
      <Categories />
      <Products />
      <Cart />
    </>
  );
}
