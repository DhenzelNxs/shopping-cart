import React, { useContext, useState } from 'react';
import propTypes from 'prop-types';
import { BsFillCartPlusFill } from 'react-icons/bs';

import './ProductCard.css';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function ProductCard({ data }) {
  const { title, thumbnail, price } = data;

  const { cartItems, setCartItems } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);

  const handleAddCart = () => {
    setShowModal(true);
  };

  const handleConfirmAdd = () => {
    setCartItems([...cartItems, data]);
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className="product-card">

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-item">
              <div className="cart-item">
                <img
                  src={thumbnail}
                  alt="imagem do produto"
                  className="cart-item-image"
                />

                <div className="cart-item-content">
                  <h3 className="cart-item-title">{title}</h3>
                  <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>
                </div>
              </div>
            </div>
            <p>Deseja adicionar este item ao carrinho?</p>
            <div>
              <button type="button" onClick={handleConfirmAdd}>Sim</button>
              <button type="button" onClick={handleCloseModal}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
      
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product"
        className="card__image"
      />

      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card__title">{title}</h2>
      </div>

      <button
        type="button"
        className="button__add-cart"
        onClick={ handleAddCart }
      >
        <BsFillCartPlusFill />
      </button>
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
