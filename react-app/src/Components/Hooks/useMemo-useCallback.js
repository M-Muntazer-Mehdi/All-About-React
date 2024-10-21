import React, { useMemo, useState, useCallback, useTransition } from 'react';
import sampleProducts from './sample';
import Filters from './filters';
import Available from './availableProduct';

//Create function to call useMemo
const ProductList = () => {
//Use usestate to manage state variables
  const [filters, setFilters] = useState({
    category: '',
    priceRange: [0, 2000],
    brand: '',
  });

  const [isPending, startTransition] = useTransition(); // Use concurrent mode
  
  // Memoize the filtered products based on the current filters
  const filteredProducts = useMemo(() => {
    return sampleProducts.filter(product => {
      const isInCategory = filters.category ? product.category === filters.category : true;
      const isInPriceRange = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
      const isInBrand = filters.brand ? product.brand === filters.brand : true;

      return isInCategory && isInPriceRange && isInBrand;
    });
  }, [filters]); // Dependency array: re-run when filters change

  // Handler to update filters
  // Callback is used to filter from existing instance
  const handleFilterChange = useCallback((e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value,
    }));
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <Filters
        handleFilterChange = {handleFilterChange}
        setFilters = {setFilters}
      />
    
      {/* Render filtered products */}
      <h2>Available Products</h2>
      {isPending && <p>Updating products...</p>}
      <Available 
        filteredProducts={filteredProducts}
      />
    </div>
  );
};

export default ProductList;
