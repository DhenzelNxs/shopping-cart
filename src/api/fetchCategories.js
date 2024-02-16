const fetchCategories = async () => {

  try {
    const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }

};

export default fetchCategories;
