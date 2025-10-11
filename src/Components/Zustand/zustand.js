import React, { useEffect } from 'react';
import { useAppStore } from './store';

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
  minWidth: '220px',
  maxWidth: '100%',
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
const ulStyle = {
  padding: 0,
  margin: '5px auto',
  maxWidth: '380px',
  textAlign: 'left',
  wordBreak: 'break-word',
  listStylePosition: 'inside',
  paddingRight: 12,
  boxSizing: 'border-box',
};

function trimTitle(title) {
  return title.length > 50 ? title.slice(0, 49) + '…' : title;
}

function getZustandCode(type) {
  if(type === 'store') return `import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
export const useAppStore = create(
  devtools(
    persist((set, get) => ({
      count: 0,
      user: null,
      products: [],
      loading: false,
      increment: () => set(state => ({ count: state.count + 1 })),
      decrement: () => set(state => ({ count: state.count - 1 })),
      login: (username) => set({ user: { name: username } }),
      logout: () => set({ user: null }),
      fetchProducts: async () => {
        set({ loading: true });
        try {
          const res = await fetch('https://fakestoreapi.com/products');
          const data = await res.json();
          set({ products: data, loading: false });
        } catch (error) {
          set({ loading: false });
        }
      },
      productCount: () => get().products.length
    }), { name: 'app-storage' })
  )
);`;
  if(type === 'zustandComponent') return `import React, { useEffect } from 'react';
import { useAppStore } from './store';
export default function ZustandComponent() {
  const count = useAppStore(state => state.count);
  const increment = useAppStore(state => state.increment);
  const decrement = useAppStore(state => state.decrement);
  const user = useAppStore(state => state.user);
  const login = useAppStore(state => state.login);
  const logout = useAppStore(state => state.logout);
  const products = useAppStore(state => state.products);
  const loading = useAppStore(state => state.loading);
  const fetchProducts = useAppStore(state => state.fetchProducts);
  const productCount = useAppStore(state => state.productCount);
  useEffect(() => { fetchProducts(); }, [fetchProducts]);
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
      <ul style={ulStyle}>
        {products.map(p => (
          <li key={p.id}>{trimTitle(p.title)}</li>
        ))}
      </ul>
    </div>
  );
}`;
  if(type === 'file') return `import React, { useEffect } from 'react';
import { useAppStore } from './store';
export default function ZustandComponent() {
  // ...selectors omitted for brevity (see sections above)...
  useEffect(() => { fetchProducts(); }, [fetchProducts]);
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
      <ul style={ulStyle}>
        {products.map(p => (
          <li key={p.id}>{trimTitle(p.title)}</li>
        ))}
      </ul>
    </div>
  );
}`;
}

export default function ZustandDocsDemo() {
  const count = useAppStore(state => state.count);
  const increment = useAppStore(state => state.increment);
  const decrement = useAppStore(state => state.decrement);
  const user = useAppStore(state => state.user);
  const login = useAppStore(state => state.login);
  const logout = useAppStore(state => state.logout);
  const products = useAppStore(state => state.products);
  const loading = useAppStore(state => state.loading);
  const fetchProducts = useAppStore(state => state.fetchProducts);
  const productCount = useAppStore(state => state.productCount);
  useEffect(() => { fetchProducts(); }, [fetchProducts]);
  return (
    <div style={{ width: '100%', padding: '0 2vw 38px 2vw', textAlign: 'left' }}>
      <header style={{ marginBottom: 18 }}>
        <h1 style={{ color: '#1976d2', fontSize: '2rem', margin: 0 }}>Zustand Demo (State Management)</h1>
        <div style={{color:'#214570',fontSize:'1.12rem', marginTop:10}}>
          Zustand is a minimal, modern, scalable state manager for React. Great for both simple and advanced patterns!
        </div>
      </header>
      {/* Store section */}
      <section style={{marginBottom:'40px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.15rem', margin:'0 0 7px' }}>Store Setup (store.js)</h2>
        <div style={codeStyle}>{getZustandCode('store')}</div>
        <div style={tipStyle}>With Zustand, everything (state, actions, computed, async logic) is colocated in one “hook store”. Super readable!</div>
      </section>
      {/* Zustand Demo Component section */}
      <section style={{marginBottom:'40px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.15rem', margin:'0 0 7px' }}>Zustand Demo Component</h2>
        <div style={codeStyle}>{getZustandCode('zustandComponent')}</div>
        <div style={outputStyle}>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>Count: {count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <h3>User: {user ? user.name : 'Guest'}</h3>
            <button onClick={() => login('Muntazer')}>Login</button>
            <button onClick={logout}>Logout</button>
            <h3>Products ({productCount()}):</h3>
            {loading && <p>Loading...</p>}
            <ul style={ulStyle}>
              {products.map((p) => <li key={p.id}>{trimTitle(p.title)}</li>)}
            </ul>
          </div>
        </div>
        <div style={tipStyle}>Selector hooks (useAppStore(state => ...)) prevent unneeded rerenders—excellent for perf!</div>
      </section>
      {/* Full Example section */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #dbeaf7', paddingTop:'22px'}}>
        <h2 style={{ color: '#1155aa', fontSize: '1.12rem', margin:'0 0 7px' }}>Full Example Output (zustand.js)</h2>
        <div style={codeStyle}>{getZustandCode('file')}</div>
        <div style={outputStyle}>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>Count: {count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <h3>User: {user ? user.name : 'Guest'}</h3>
            <button onClick={() => login('Muntazer')}>Login</button>
            <button onClick={logout}>Logout</button>
            <h3>Products ({productCount()}):</h3>
            {loading && <p>Loading...</p>}
            <ul style={ulStyle}>
              {products.map((p) => <li key={p.id}>{trimTitle(p.title)}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
