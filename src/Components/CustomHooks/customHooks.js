import React, { useState, useEffect } from 'react';

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
  minWidth: '300px',
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
const infoBox = {
  background: '#eef4fb',
  borderLeft: '5px solid #1976d2',
  padding: '10px 17px',
  borderRadius: '7px',
  margin: '14px 0 18px 0',
  fontSize: '1.09rem',
  color: '#144170',
};

function getCustomHookCode(type) {
  if (type === 'useCounter') return `import { useState } from 'react';
// Custom Hook: useCounter
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(initialValue);
  
  return { count, increment, decrement, reset };
}

// Usage in component
function CounterApp() {
  const { count, increment, decrement, reset } = useCounter(0);
  
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}`;
  if (type === 'useFetch') return `import { useState, useEffect } from 'react';
// Custom Hook: useFetch
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);
  
  return { data, loading, error };
}

// Usage
function UserList() {
  const { data, loading, error } = useFetch('https://api.example.com/users');
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return <ul>{data.map(user => <li key={user.id}>{user.name}</li>)}</ul>;
}`;
  if (type === 'useLocalStorage') return `import { useState, useEffect } from 'react';
// Custom Hook: useLocalStorage
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  
  return [value, setValue];
}

// Usage
function ThemeSelector() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
}`;
  if (type === 'useToggle') return `import { useState } from 'react';
// Custom Hook: useToggle
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue(v => !v);
  return [value, toggle];
}

// Usage
function Modal() {
  const [isOpen, toggleOpen] = useToggle(false);
  
  return (
    <div>
      <button onClick={toggleOpen}>Toggle Modal</button>
      {isOpen && <div>Modal Content</div>}
    </div>
  );
}`;
  return '';
}

// Custom Hook: useCounter
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(initialValue);
  return { count, increment, decrement, reset };
}

// Custom Hook: useToggle
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue(v => !v);
  return [value, toggle];
}

// Custom Hook: useLocalStorage
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialValue;
    } catch {
      return initialValue;
    }
  });
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  
  return [value, setValue];
}

// Demo components using custom hooks
function CounterDemo() {
  const { count, increment, decrement, reset } = useCounter(0);
  
  return (
    <div style={{padding: 15, background: '#fff', borderRadius: 6}}>
      <h3>useCounter Hook Demo</h3>
      <h2 style={{fontSize: '2rem', margin: '10px 0'}}>Count: {count}</h2>
      <button onClick={increment} style={{padding: '8px 16px', margin: 5, background: '#1976d2', color: '#fff', border: 'none', borderRadius: 5, cursor: 'pointer'}}>+</button>
      <button onClick={decrement} style={{padding: '8px 16px', margin: 5, background: '#1976d2', color: '#fff', border: 'none', borderRadius: 5, cursor: 'pointer'}}>-</button>
      <button onClick={reset} style={{padding: '8px 16px', margin: 5, background: '#f44336', color: '#fff', border: 'none', borderRadius: 5, cursor: 'pointer'}}>Reset</button>
    </div>
  );
}

function ToggleDemo() {
  const [isVisible, toggleVisible] = useToggle(false);
  
  return (
    <div style={{padding: 15, background: '#fff', borderRadius: 6}}>
      <h3>useToggle Hook Demo</h3>
      <button onClick={toggleVisible} style={{padding: '8px 16px', background: '#1976d2', color: '#fff', border: 'none', borderRadius: 5, cursor: 'pointer'}}>
        {isVisible ? 'Hide' : 'Show'} Content
      </button>
      {isVisible && (
        <div style={{marginTop: 15, padding: 15, background: '#e3f2fd', borderRadius: 6}}>
          <p>This content is toggled with a custom hook! 🎉</p>
        </div>
      )}
    </div>
  );
}

function LocalStorageDemo() {
  const [name, setName] = useLocalStorage('userName', '');
  
  return (
    <div style={{padding: 15, background: '#fff', borderRadius: 6}}>
      <h3>useLocalStorage Hook Demo</h3>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        style={{padding: 8, fontSize: '1rem', width: '100%', maxWidth: 300}}
      />
      <p style={{marginTop: 10, fontSize: '0.95rem', color: '#546e7a'}}>
        Your name is saved to localStorage! Try refreshing the page—it persists.
      </p>
      <button 
        onClick={() => setName('')}
        style={{padding: '6px 14px', background: '#f44336', color: '#fff', border: 'none', borderRadius: 5, cursor: 'pointer', fontSize: '0.9rem'}}
      >
        Clear
      </button>
    </div>
  );
}

export default function CustomHooksDocsDemo() {
  return (
    <div style={{ width: '100%', padding: '0 2vw 40px 2vw', textAlign: 'left' }}>
      <header style={{ marginBottom: 18 }}>
        <h1 style={{ color: '#1976d2', fontSize: '2rem', margin: 0 }}>Custom Hooks in React</h1>
        <div style={{color:'#214570',fontSize:'1.12rem', marginTop:10}}>
          Custom Hooks let you extract and reuse stateful logic across components. They're one of React's most powerful features for clean, maintainable code!
        </div>
        <div style={infoBox}>
          <b>What are Custom Hooks?</b><br/>
          A custom hook is a JavaScript function whose name starts with "use" and that may call other hooks. They let you share logic between components without changing your component hierarchy.
        </div>
      </header>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Custom Hook: useCounter</h2>
        <div style={codeStyle}>{getCustomHookCode('useCounter')}</div>
        <div style={outputStyle}>
          <CounterDemo />
        </div>
        <div style={tipStyle}>
          Extract counter logic into a reusable hook. Any component can now have increment/decrement/reset functionality with one line!
        </div>
      </section>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Custom Hook: useFetch</h2>
        <div style={codeStyle}>{getCustomHookCode('useFetch')}</div>
        <div style={tipStyle}>
          Encapsulate data fetching logic with loading and error states. Reuse across any component that needs API data!
        </div>
      </section>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Custom Hook: useLocalStorage</h2>
        <div style={codeStyle}>{getCustomHookCode('useLocalStorage')}</div>
        <div style={outputStyle}>
          <LocalStorageDemo />
        </div>
        <div style={tipStyle}>
          Sync state with localStorage automatically. Great for persisting user preferences, themes, or form data across sessions!
        </div>
      </section>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Custom Hook: useToggle</h2>
        <div style={codeStyle}>{getCustomHookCode('useToggle')}</div>
        <div style={outputStyle}>
          <ToggleDemo />
        </div>
        <div style={tipStyle}>
          Simplify boolean state management. Perfect for modals, dropdowns, collapsible sections, and any show/hide UI!
        </div>
      </section>

      <section style={{marginTop: 30, paddingTop: 18, borderTop: '2px solid #e5ecf5'}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>Rules for Custom Hooks</h2>
        <ul style={{fontSize: '1.05rem', color: '#2c4258', margin: '0 0 0 20px'}}>
          <li><b>Name must start with "use":</b> This tells React it's a hook (e.g., useCounter, useFetch).</li>
          <li><b>Can call other hooks:</b> useState, useEffect, useContext, or other custom hooks.</li>
          <li><b>Only call at top level:</b> Don't call hooks inside loops, conditions, or nested functions.</li>
          <li><b>Only call from React functions:</b> Use in function components or other custom hooks only.</li>
        </ul>
      </section>

      <section style={{marginTop: 28}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>Why Use Custom Hooks?</h2>
        <ul style={{fontSize: '1.05rem', color: '#2c4258', margin: '0 0 0 20px'}}>
          <li><b>Reusability:</b> Share stateful logic across multiple components.</li>
          <li><b>Separation of concerns:</b> Keep components focused on UI, extract logic to hooks.</li>
          <li><b>Testability:</b> Test hook logic independently from components.</li>
          <li><b>Readability:</b> Give meaningful names to complex logic (useAuth, useForm, etc.).</li>
          <li><b>Composability:</b> Build complex hooks from simpler ones.</li>
        </ul>
      </section>

      <section style={{marginTop: 28}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>Common Custom Hook Patterns</h2>
        <div style={infoBox}>
          <b>Popular custom hooks you might build:</b><br/>
          • <code>useAuth()</code> - Authentication state and login/logout<br/>
          • <code>useForm()</code> - Form state, validation, and submission<br/>
          • <code>useDebounce()</code> - Debounce values for search inputs<br/>
          • <code>useWindowSize()</code> - Track window dimensions for responsive UI<br/>
          • <code>useClickOutside()</code> - Detect clicks outside an element (dropdowns, modals)<br/>
          • <code>useInterval()</code> - Declarative setInterval<br/>
          • <code>usePrevious()</code> - Track previous value of state/prop
        </div>
      </section>

      <section style={{marginTop: 28}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>Best Practices</h2>
        <div style={infoBox}>
          ✅ <b>Always prefix with "use"</b> - Required for React to recognize it as a hook<br/>
          ✅ <b>Keep hooks focused</b> - Each hook should do one thing well<br/>
          ✅ <b>Return objects for multiple values</b> - Easier to use and extend<br/>
          ✅ <b>Document your hooks</b> - Explain parameters, return values, and usage<br/>
          ✅ <b>Handle cleanup</b> - Return cleanup functions from useEffect when needed<br/>
          ❌ <b>Don't overuse</b> - Not every piece of logic needs to be a hook<br/>
          ❌ <b>Don't break hook rules</b> - Always follow Rules of Hooks
        </div>
      </section>

      <section style={{marginTop: 28}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>Custom Hooks vs Other Patterns</h2>
        <div style={{marginTop: 15}}>
          <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '0.98rem'}}>
            <thead>
              <tr style={{background: '#e3f2fd'}}>
                <th style={{padding: 10, textAlign: 'left', border: '1px solid #90caf9'}}>Pattern</th>
                <th style={{padding: 10, textAlign: 'left', border: '1px solid #90caf9'}}>Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{padding: 10, border: '1px solid #e0e0e0'}}><b>Custom Hooks</b></td>
                <td style={{padding: 10, border: '1px solid #e0e0e0'}}>Share stateful logic (state, effects)</td>
              </tr>
              <tr style={{background: '#f9f9f9'}}>
                <td style={{padding: 10, border: '1px solid #e0e0e0'}}><b>Higher Order Components</b></td>
                <td style={{padding: 10, border: '1px solid #e0e0e0'}}>Share component logic, add props</td>
              </tr>
              <tr>
                <td style={{padding: 10, border: '1px solid #e0e0e0'}}><b>Render Props</b></td>
                <td style={{padding: 10, border: '1px solid #e0e0e0'}}>Share render logic, flexible UI</td>
              </tr>
              <tr style={{background: '#f9f9f9'}}>
                <td style={{padding: 10, border: '1px solid #e0e0e0'}}><b>Context API</b></td>
                <td style={{padding: 10, border: '1px solid #e0e0e0'}}>Share global state across tree</td>
              </tr>
            </tbody>
          </table>
          <div style={tipStyle}>
            Custom Hooks are the modern, preferred way to share stateful logic in React! They're simpler and more composable than HOCs or Render Props.
          </div>
        </div>
      </section>
    </div>
  );
}

