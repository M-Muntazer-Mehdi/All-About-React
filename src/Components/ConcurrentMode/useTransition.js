import React, { useState, useTransition, useDeferredValue } from 'react';

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

function getConcurrentCode(type) {
  if (type === 'useTransition') return `import { useState, useTransition } from 'react';
function SearchApp() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  
  const handleChange = (e) => {
    setInput(e.target.value);
    // Mark this update as low priority
    startTransition(() => {
      const newList = Array(20000).fill(e.target.value);
      setList(newList);
    });
  };
  
  return (
    <div>
      <input value={input} onChange={handleChange} />
      {isPending && <p>Updating list...</p>}
      {list.map((item, i) => <div key={i}>{item}</div>)}
    </div>
  );
}`;
  if (type === 'useDeferredValue') return `import { useState, useDeferredValue } from 'react';
function SearchWithDeferred() {
  const [input, setInput] = useState('');
  const deferredInput = useDeferredValue(input);
  
  // Input updates immediately, but deferredInput lags behind
  const list = Array(20000).fill(deferredInput);
  
  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      {list.map((item, i) => <div key={i}>{item}</div>)}
    </div>
  );
}`;
  if (type === 'comparison') return `// WITHOUT useTransition - UI freezes
const handleChange = (e) => {
  setInput(e.target.value);
  setList(Array(20000).fill(e.target.value)); // Blocks UI
};

// WITH useTransition - UI stays responsive
const handleChange = (e) => {
  setInput(e.target.value);
  startTransition(() => {
    setList(Array(20000).fill(e.target.value)); // Non-blocking
  });
};`;
  return '';
}

// Demo without useTransition (will be slow)
function SlowDemo() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
    const newList = [];
    for (let i = 0; i < 8000; i++) {
      newList.push(e.target.value);
    }
    setList(newList);
  };

  return (
    <div style={{padding: 15, background: '#fff', borderRadius: 6, marginBottom: 15}}>
      <h3>Without useTransition (Slow 😞)</h3>
      <input 
        value={input} 
        onChange={handleChange}
        placeholder="Type here (notice lag)"
        style={{padding: 8, fontSize: '1rem', width: '100%', maxWidth: 300}}
      />
      <div style={{marginTop: 10, maxHeight: 200, overflowY: 'auto', fontSize: '0.85rem', color: '#666'}}>
        {list.slice(0, 50).map((item, i) => <div key={i}>{item || '(empty)'}</div>)}
        {list.length > 50 && <div>...and {list.length - 50} more items</div>}
      </div>
    </div>
  );
}

// Demo with useTransition (responsive)
function FastDemo() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
    startTransition(() => {
      const newList = [];
      for (let i = 0; i < 8000; i++) {
        newList.push(e.target.value);
      }
      setList(newList);
    });
  };

  return (
    <div style={{padding: 15, background: '#fff', borderRadius: 6}}>
      <h3>With useTransition (Fast ⚡)</h3>
      <input 
        value={input} 
        onChange={handleChange}
        placeholder="Type here (smooth!)"
        style={{padding: 8, fontSize: '1rem', width: '100%', maxWidth: 300}}
      />
      {isPending && <p style={{color: '#ffa726', fontStyle: 'italic'}}>Updating list...</p>}
      <div style={{marginTop: 10, maxHeight: 200, overflowY: 'auto', fontSize: '0.85rem', color: '#666'}}>
        {list.slice(0, 50).map((item, i) => <div key={i}>{item || '(empty)'}</div>)}
        {list.length > 50 && <div>...and {list.length - 50} more items</div>}
      </div>
    </div>
  );
}

// useDeferredValue demo
function DeferredDemo() {
  const [input, setInput] = useState('');
  const deferredInput = useDeferredValue(input);
  
  const list = [];
  for (let i = 0; i < 5000; i++) {
    list.push(deferredInput);
  }

  return (
    <div style={{padding: 15, background: '#fff', borderRadius: 6}}>
      <h3>useDeferredValue Demo</h3>
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type here"
        style={{padding: 8, fontSize: '1rem', width: '100%', maxWidth: 300}}
      />
      <p style={{fontSize: '0.95rem', marginTop: 8}}>
        Current input: <strong>{input}</strong><br/>
        Deferred value: <strong>{deferredInput}</strong>
      </p>
      <div style={{marginTop: 10, maxHeight: 150, overflowY: 'auto', fontSize: '0.85rem', color: '#666'}}>
        {list.slice(0, 30).map((item, i) => <div key={i}>{item || '(empty)'}</div>)}
        {list.length > 30 && <div>...and {list.length - 30} more items</div>}
      </div>
    </div>
  );
}

export default function ConcurrentModeDocsDemo() {
  return (
    <div style={{ width: '100%', padding: '0 2vw 40px 2vw', textAlign: 'left' }}>
      <header style={{ marginBottom: 18 }}>
        <h1 style={{ color: '#1976d2', fontSize: '2rem', margin: 0 }}>Concurrent Mode & useTransition</h1>
        <div style={{color:'#214570',fontSize:'1.12rem', marginTop:10}}>
          Concurrent Mode (React 18+) lets React work on multiple tasks at once and prioritize urgent updates. useTransition marks updates as low-priority for smoother UX!
        </div>
        <div style={infoBox}>
          <b>What is Concurrent Mode?</b><br/>
          Concurrent Mode is a set of new features in React 18+ that help apps stay responsive by allowing React to interrupt long-running renders. It enables features like useTransition, useDeferredValue, and Suspense for data fetching.
        </div>
      </header>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>useTransition Hook</h2>
        <div style={codeStyle}>{getConcurrentCode('useTransition')}</div>
        <div style={tipStyle}>
          <code>useTransition</code> lets you mark state updates as low-priority (transitions). The UI stays responsive during expensive updates. Use <code>isPending</code> to show loading states!
        </div>
      </section>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>useDeferredValue Hook</h2>
        <div style={codeStyle}>{getConcurrentCode('useDeferredValue')}</div>
        <div style={tipStyle}>
          <code>useDeferredValue</code> lets you defer updating a value. The input updates immediately, but the expensive computation uses the deferred (lagging) value—keeping the UI responsive!
        </div>
      </section>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Before vs After Comparison</h2>
        <div style={codeStyle}>{getConcurrentCode('comparison')}</div>
        <div style={tipStyle}>
          Without concurrent features, expensive updates block the UI. With useTransition, React can keep responding to user input while rendering heavy lists in the background.
        </div>
      </section>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Live Demo: Side-by-Side Comparison</h2>
        <div style={outputStyle}>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20}}>
            <SlowDemo />
            <FastDemo />
          </div>
        </div>
        <div style={tipStyle}>
          <b>Try it:</b> Type in both inputs. Notice the left one (without useTransition) feels laggy, while the right one (with useTransition) stays smooth!
        </div>
      </section>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>useDeferredValue Demo</h2>
        <div style={outputStyle}>
          <DeferredDemo />
        </div>
        <div style={tipStyle}>
          Watch how the "Current input" updates instantly, but "Deferred value" lags slightly—React prioritizes the input responsiveness!
        </div>
      </section>

      <section style={{marginTop: 30, paddingTop: 18, borderTop: '2px solid #e5ecf5'}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>When to Use Concurrent Features</h2>
        <ul style={{fontSize: '1.05rem', color: '#2c4258', margin: '0 0 0 20px'}}>
          <li><b>Heavy computations:</b> Filtering/sorting large lists, complex calculations.</li>
          <li><b>Search/filter UIs:</b> Keep input responsive while updating results.</li>
          <li><b>Tab switching:</b> Let users switch tabs while previous content is still rendering.</li>
          <li><b>Data fetching:</b> Combined with Suspense for better loading UX.</li>
          <li><b>Animations:</b> Prioritize smooth animations over background updates.</li>
        </ul>
      </section>

      <section style={{marginTop: 28}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>useTransition vs useDeferredValue</h2>
        <div style={infoBox}>
          <b>useTransition:</b> You control when to start the transition. Wrap state updates in <code>startTransition()</code>. Good when you control the update logic.<br/><br/>
          <b>useDeferredValue:</b> React automatically defers the value. Good when you receive a value as a prop and want to defer using it in expensive computations.
        </div>
      </section>

      <section style={{marginTop: 28}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>Key Benefits of Concurrent Mode</h2>
        <ul style={{fontSize: '1.05rem', color: '#2c4258', margin: '0 0 0 20px'}}>
          <li><b>Responsive UI:</b> React can interrupt long renders to handle user input.</li>
          <li><b>Better UX:</b> Show loading states for slow updates without blocking the UI.</li>
          <li><b>Prioritization:</b> React can prioritize urgent updates (clicks, typing) over background tasks.</li>
          <li><b>Smoother animations:</b> UI stays smooth even during heavy operations.</li>
          <li><b>Automatic batching:</b> React 18+ batches more updates automatically.</li>
        </ul>
      </section>

      <section style={{marginTop: 28}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>Getting Started with React 18 Concurrent Features</h2>
        <div style={codeStyle}>{`// React 18+ automatically enables concurrent features
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
root.render(<App />);

// Now you can use:
// - useTransition
// - useDeferredValue
// - Suspense for data fetching
// - Automatic batching`}</div>
        <div style={tipStyle}>
          If you created your app with Create React App 5+ or use React 18+, concurrent features are already available! Just import and use them.
        </div>
      </section>

      <section style={{marginTop: 28}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>Best Practices</h2>
        <div style={infoBox}>
          ✅ Use <code>useTransition</code> for non-urgent updates (searches, filters, tab switches)<br/>
          ✅ Show pending states with <code>isPending</code> so users know something is happening<br/>
          ✅ Use <code>useDeferredValue</code> when you can't control the update (e.g., prop changes)<br/>
          ✅ Combine with Suspense for data fetching and code splitting<br/>
          ❌ Don't wrap every state update—only use for expensive operations<br/>
          ❌ Don't use for critical updates that need to complete immediately
        </div>
      </section>
    </div>
  );
}

