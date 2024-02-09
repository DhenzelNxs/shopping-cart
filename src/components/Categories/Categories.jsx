import React, { useEffect, useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Categories.css';
import fetchCategories from '../../api/fetchCategories';
import AppContext from '../../context/AppContext';
import CategorieItem from '../CategorieItem/CategorieItem';

export default function Categories() {
  const { categories, setCategories, loading } = useContext(AppContext);

  useEffect(() => {
    fetchCategories().then((response) => {
      setCategories(response);
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 7
  };

  return (
    !loading && (
      <section className="categories container">
        <Slider {...settings}>
          {categories.map((categorie) => (
            <div key={categorie.id} className="slider-items">
              <CategorieItem data={categorie} />
            </div>
          ))}
        </Slider>
      </section>
    )
  );
}
