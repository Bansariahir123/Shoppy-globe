import { useState, useEffect } from 'react';

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useFetchProducts;
