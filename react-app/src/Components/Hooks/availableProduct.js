import React from 'react';
import { FixedSizeList as List } from 'react-window';

const ProductRow = ({ index, style, data }) => {
  const product = data[index];

  return (
    <div style={style} className="product-item">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>Brand: {product.brand}</p>
    </div>
  );
};

const Available = ({ filteredProducts }) => {
  return (
    <List
      height={540} // Height of the list container
      itemCount={filteredProducts.length} // Total products to render
      itemSize={180} // Height of each row
      width="100%" // Full width of the container
      itemData={filteredProducts} // Products data to render
    >
      {ProductRow}
    </List>
  );
};

export default Available;
