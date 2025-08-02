import React, { useEffect } from 'react';
import { useAppStore } from './store';

export default function ZustandComponent() {
  // 🎯 Selectors (optimize re-renders)
  const count = useAppStore((state) => state.count);
  const increment = useAppStore((state) => state.increment);
  const decrement = useAppStore((state) => state.decrement);

  const user = useAppStore((state) => state.user);
  const login = useAppStore((state) => state.login);
  const logout = useAppStore((state) => state.logout);

  const products = useAppStore((state) => state.products);
  const loading = useAppStore((state) => state.loading);
  const fetchProducts = useAppStore((state) => state.fetchProducts);
  const productCount = useAppStore((state) => state.productCount);

  // Fetch products on mount
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      <h3>User: {user ? user.name : 'Guest'}</h3>
      <button onClick={() => login('Muntazer')}>Login</button>
      <button onClick={logout}>Logout</button>

      <h3>Products ({productCount()}):</h3>
      {loading && <p>Loading...</p>}
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}
