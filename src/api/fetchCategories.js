const fetchCategories = async () => {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await response.json();

  return data;
};

export default fetchCategories;
