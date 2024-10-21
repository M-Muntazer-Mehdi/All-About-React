import React from "react";

const Available = ({filteredProducts}) => {
    return(
        <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <p>Category: {product.category}</p>
              <p>Brand: {product.brand}</p>
            </div>
          ))
        ) : (
          <p>No products found based on the selected filters.</p>
        )}
      </div>
    );
};

export default Available;