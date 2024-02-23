const fetchProducts = async (query) => {

  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const data = await response.json();

    console.log(data.results);
    return data.results;
  } catch (error) {
    return [error];
    
  }
  
};

export default fetchProducts;
