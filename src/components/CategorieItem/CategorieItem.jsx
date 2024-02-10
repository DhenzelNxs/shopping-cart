import React, {useContext} from 'react';
import propTypes from 'prop-types';
import './CategorieItem.css';
import AppContext from '../../context/AppContext';
import fetchProducts from '../../api/fetchProducts';

export default function CategorieItem({data}) {
  const { name } = data;

  const { setProducts, setLoading } = useContext(AppContext);

  const handleSearch = async () => {
    setLoading(true);

    const products = await fetchProducts(name);
    console.log('Buscou');

    setProducts(products);
    setLoading(false);
  };

  
  return(
    <button className="item-button" onClick={() => {handleSearch();}}>
      {name}
    </button>   
  );
}

CategorieItem.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
