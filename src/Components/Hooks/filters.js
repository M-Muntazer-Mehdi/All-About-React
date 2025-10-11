import React from "react";

const Filters =  ({handleFilterChange, setFilters}) => {
    return(
        <div>
        <h2>Filters</h2>
        <label>
          Category:
          <select name="category" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="smartphones">Smartphones</option>
            <option value="laptops">Laptops</option>
            <option value="headphones">Headphones</option>
          </select>
        </label>
        <label>
          Price Range:
          <input
            type="number"
            name="minPrice"
            placeholder="Min"
            onChange={(e) => setFilters(prevFilters => ({
              ...prevFilters,
              priceRange: [e.target.value, prevFilters.priceRange[1]],
            }))}
          />
          <input
            type="number"
            name="maxPrice"
            placeholder="Max"
            onChange={(e) => setFilters(prevFilters => ({
              ...prevFilters,
              priceRange: [prevFilters.priceRange[0], e.target.value],
            }))}
          />
        </label>
        <label>
          Brand:
          <select name="brand" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Sony">Sony</option>
            <option value="Dell">Dell</option>
          </select>
        </label>
      </div>
    )
};

export default Filters;