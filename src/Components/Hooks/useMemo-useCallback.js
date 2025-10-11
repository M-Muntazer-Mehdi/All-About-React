import React, { useMemo, useState, useCallback, useTransition, Suspense, lazy } from 'react';
import sampleProducts from './sample';
import Filters from './filters';

const Available = lazy(() => import('./availableProduct'));

const codeStyle = {
  background: '#fafbff',
  border: '1px solid #e0e7f0',
  borderRadius: '6px',
  padding: '11px 18px',
  margin: '13px 0 10px 0',
  fontFamily: 'Fira Mono, Consolas, monospace',
  fontSize: '1rem',
  color: '#1976d2',
  overflowX: 'auto',
  whiteSpace: 'pre',
};
const outputStyle = {
  background: '#f1f5fd',
  border: '1px solid #b7cbec',
  borderRadius: '6px',
  padding: '11px 15px',
  marginBottom: '8px',
  color: '#214570',
  fontSize: '1.09rem',
  fontFamily: 'inherit',
  width: 'fit-content',
  minWidth: '200px',
};
const tipStyle = {
  background: '#e4f0fd',
  borderLeft: '5px solid #1976d2',
  padding: '8px 14px',
  borderRadius: '6px',
  fontSize: '0.99rem',
  fontStyle: 'italic',
  margin: '0 0 22px 0',
};

function getFileCode(file) {
  if (file === 'useMemo-useCallback') return `import React, { useMemo, useState, useCallback, useTransition, Suspense, lazy } from 'react';
import sampleProducts from './sample';
import Filters from './filters';
const Available = lazy(() => import('./availableProduct'));
const ProductList = () => {
  const [filters, setFilters] = useState({ category: '', priceRange: [0, 2000], brand: '' });
  const [isPending, startTransition] = useTransition();
  const filteredProducts = useMemo(() => {
    return sampleProducts.filter(product => {
      const isInCategory = filters.category ? product.category === filters.category : true;
      const isInPriceRange = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
      const isInBrand = filters.brand ? product.brand === filters.brand : true;
      return isInCategory && isInPriceRange && isInBrand;
    });
  }, [filters]);
  const handleFilterChange = useCallback((e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
  }, []);
  return (
    <div>
      <h1>Product List</h1>
      <Filters handleFilterChange={handleFilterChange} setFilters={setFilters} />
      <h2>Available Products</h2>
      {isPending && <p>Updating products...</p>}
      <Suspense fallback={<div>Loading...</div>}>
        <Available filteredProducts={filteredProducts} />
      </Suspense>
    </div>
  );
};
export default ProductList;`;
  if (file === 'filters') return `import React from 'react';
const Filters = ({ handleFilterChange, setFilters }) => (
  <div>
    <label>Category:
      <select name="category" onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="smartphones">Smartphones</option>
        <option value="laptops">Laptops</option>
        <option value="headphones">Headphones</option>
      </select>
    </label>
    <label>Price Range:
      <input type="number" name="minPrice" placeholder="Min" onChange={e => setFilters(prev => ({ ...prev, priceRange: [e.target.value, prev.priceRange[1]] }))} />
      <input type="number" name="maxPrice" placeholder="Max" onChange={e => setFilters(prev => ({ ...prev, priceRange: [prev.priceRange[0], e.target.value] }))} />
    </label>
    <label>Brand:
      <select name="brand" onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="Apple">Apple</option>
        <option value="Samsung">Samsung</option>
        <option value="Sony">Sony</option>
        <option value="Dell">Dell</option>
      </select>
    </label>
  </div>
);
export default Filters;`;
  if (file === 'sample') return `const sampleProducts = Array.from({ length: 100000 }, (_, index) => {
  const categories = ['smartphones', 'laptops', 'headphones', 'tablets', 'watches'];
  const brands = ['Apple', 'Samsung', 'Sony', 'Dell', 'HP', 'Lenovo', 'Xiaomi', 'Huawei', 'Google', 'Microsoft'];
  return {
    id: index + 1,
    name: \`${'${brands[Math.floor(Math.random() * brands.length)]} Product ${index + 1}'}\`,
    category: categories[Math.floor(Math.random() * categories.length)],
    price: Math.floor(Math.random() * (2000 - 100 + 1)) + 100,
    brand: brands[Math.floor(Math.random() * brands.length)],
  };
});
export default sampleProducts;`;
  if (file === 'availableProduct') return `import React from 'react';
import { FixedSizeList as List } from 'react-window';
const ProductRow = ({ index, style, data }) => {
  const product = data[index];
  return (
    <div style={style} className="product-item">
      <h3>{product.name}</h3>
      <p>Price: $ {product.price}</p>
      <p>Category: {product.category}</p>
      <p>Brand: {product.brand}</p>
    </div>
  );
};
const Available = ({ filteredProducts }) => (
  <List
    height={540}
    itemCount={filteredProducts.length}
    itemSize={180}
    width="100%"
    itemData={filteredProducts}
  >
    {ProductRow}
  </List>
);
export default Available;`;
  return '';
}

export default function MemoDemoPage() {
  // --- Just render the full main demo on this page ---
  const [filters, setFilters] = useState({ category: '', priceRange: [0, 2000], brand: '' });
  const [isPending, startTransition] = useTransition();
  const filteredProducts = useMemo(() => {
    return sampleProducts.filter(product => {
      const isInCategory = filters.category ? product.category === filters.category : true;
      const isInPriceRange = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
      const isInBrand = filters.brand ? product.brand === filters.brand : true;
      return isInCategory && isInPriceRange && isInBrand;
    });
  }, [filters]);
  const handleFilterChange = useCallback((e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
  }, []);
  return (
    <div style={{ width: '100%', padding: '0 2vw 42px 2vw', textAlign: 'left' }}>
      <header style={{ marginBottom: 18 }}>
        <h1 style={{ color: '#1976d2', fontSize: '2rem', margin: 0 }}>useMemo (and useCallback) in React</h1>
        <div style={{color:'#214570',fontSize:'1.12rem', marginTop:10}}>
          Memoization hooks let you power up expensive computations and prop changes. See the product filter in action on a giant list!
        </div>
      </header>

      {/* ProductList (main demo) */}
      <section style={{marginBottom:'40px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Main Product List Demo: useMemo + Filters</h2>
        <div style={codeStyle}>{getFileCode('useMemo-useCallback')}</div>
        <div style={outputStyle}>
          <h1>Product List</h1>
          <Filters handleFilterChange={handleFilterChange} setFilters={setFilters} />
          <h2>Available Products</h2>
          {isPending && <p>Updating products...</p>}
          <Suspense fallback={<div>Loading...</div>}>
            <Available filteredProducts={filteredProducts.slice(0, 15)} />
          </Suspense>
          <div style={{fontSize:'0.93rem',margin:'5px 0 0 7px',color:'#b16f2e'}}>(Showing only first 15 matching products here for preview.)</div>
        </div>
        <div style={tipStyle}>useMemo lets you memoize expensive computations like product filtering, so they only run when dependencies change.</div>
      </section>

      {/* Filters component */}
      <section style={{marginBottom:'40px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.12rem', margin:'0 0 7px' }}>Filter Component</h2>
        <div style={codeStyle}>{getFileCode('filters')}</div>
        <div style={tipStyle}>Reusable filter fields—parent manages state, filter form calls setFilters, and uses a shared change handler for controlled values.</div>
      </section>

      {/* sampleProducts array */}
      <section style={{marginBottom:'40px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.12rem', margin:'0 0 7px' }}>Sample Products Data</h2>
        <div style={codeStyle}>{getFileCode('sample')}</div>
        <div style={tipStyle}>This lets you stress-test lists in development with dummy data or mock APIs.</div>
      </section>

      {/* Virtualized List component */}
      <section style={{marginBottom:'42px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.12rem', margin:'0 0 7px' }}>AvailableProduct: Virtualized List</h2>
        <div style={codeStyle}>{getFileCode('availableProduct')}</div>
        <div style={tipStyle}>The <b>react-window</b> FixedSizeList displays hundreds of thousands of products with brilliant performance. Try filters to see how fast it is!</div>
      </section>
    </div>
  );
}
