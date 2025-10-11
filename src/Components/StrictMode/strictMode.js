import React, { StrictMode, useState, useEffect } from 'react';

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
const warningBox = {
  background: '#fff9e6',
  borderLeft: '5px solid #ffa726',
  padding: '10px 17px',
  borderRadius: '7px',
  margin: '14px 0 18px 0',
  fontSize: '1.05rem',
  color: '#7d5a00',
};

function getStrictModeCode(type) {
  if (type === 'basic') return `import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);`;
  if (type === 'component') return `function MyComponent() {
  // Strict Mode will detect issues here
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log('Effect ran');
    // Strict Mode runs this twice in dev to detect issues
  }, []);
  
  return <div>Count: {count}</div>;
}`;
  if (type === 'partial') return `function App() {
  return (
    <div>
      <Header />
      <StrictMode>
        <Sidebar />  {/* Only this component tree is checked */}
        <Content />
      </StrictMode>
      <Footer />
    </div>
  );
}`;
  return '';
}

// Demo component that shows strict mode behavior
function StrictModeDemo() {
  const [renderCount, setRenderCount] = useState(0);
  const [effectCount, setEffectCount] = useState(0);

  useEffect(() => {
    console.log('🔍 Strict Mode: useEffect ran');
    setEffectCount(c => c + 1);
  }, []);

  return (
    <StrictMode>
      <div style={{padding: 20, background: '#fff', borderRadius: 6}}>
        <h3>Component in Strict Mode</h3>
        <p>This component is wrapped in StrictMode (in development only).</p>
        <p>Effect run count: {effectCount}</p>
        <button 
          onClick={() => setRenderCount(renderCount + 1)}
          style={{padding: '8px 16px', background: '#1976d2', color: '#fff', border: 'none', borderRadius: 5, cursor: 'pointer'}}
        >
          Trigger Re-render (Count: {renderCount})
        </button>
        <div style={warningBox}>
          <strong>Check your browser console!</strong> In development, Strict Mode intentionally double-invokes certain functions to help you find bugs.
        </div>
      </div>
    </StrictMode>
  );
}

export default function StrictModeDocsDemo() {
  return (
    <div style={{ width: '100%', padding: '0 2vw 40px 2vw', textAlign: 'left' }}>
      <header style={{ marginBottom: 18 }}>
        <h1 style={{ color: '#1976d2', fontSize: '2rem', margin: 0 }}>React Strict Mode</h1>
        <div style={{color:'#214570',fontSize:'1.12rem', marginTop:10}}>
          Strict Mode is a development-only tool for highlighting potential problems in your React application. It helps you write better, more reliable code!
        </div>
        <div style={infoBox}>
          <b>What is Strict Mode?</b><br/>
          StrictMode is a wrapper component that activates additional checks and warnings for its descendants. It doesn't render any visible UI and doesn't affect production builds—it only runs in development mode.
        </div>
      </header>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Basic Strict Mode Setup</h2>
        <div style={codeStyle}>{getStrictModeCode('basic')}</div>
        <div style={tipStyle}>
          Wrap your entire app (or specific parts) with <code>&lt;StrictMode&gt;</code>. It's commonly added in index.js to check the whole app.
        </div>
      </section>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>How Strict Mode Works</h2>
        <div style={codeStyle}>{getStrictModeCode('component')}</div>
        <div style={tipStyle}>
          In development, Strict Mode intentionally double-invokes certain functions (like effects, renders) to help detect side effects and issues. Check your console to see this in action!
        </div>
      </section>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Partial Strict Mode (Specific Components)</h2>
        <div style={codeStyle}>{getStrictModeCode('partial')}</div>
        <div style={tipStyle}>
          You don't have to wrap your entire app! Use StrictMode around specific components to check only those parts of your tree.
        </div>
      </section>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Live Demo</h2>
        <div style={outputStyle}>
          <StrictModeDemo />
        </div>
        <div style={tipStyle}>
          <b>Try it:</b> Open your browser console (F12) and click the button. You'll see effects run multiple times in development—this is Strict Mode helping you catch bugs!
        </div>
      </section>

      <section style={{marginTop: 30, paddingTop: 18, borderTop: '2px solid #e5ecf5'}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>What Strict Mode Detects</h2>
        <ul style={{fontSize: '1.05rem', color: '#2c4258', margin: '0 0 0 20px'}}>
          <li><b>Unsafe lifecycle methods:</b> Warns about deprecated methods like componentWillMount.</li>
          <li><b>Legacy string ref API:</b> Flags old ref usage patterns.</li>
          <li><b>Unexpected side effects:</b> Double-invokes functions to find side effects in render phase.</li>
          <li><b>Legacy context API:</b> Warns about old context usage.</li>
          <li><b>Deprecated findDOMNode:</b> Flags this legacy method.</li>
        </ul>
      </section>

      <section style={{marginTop: 28}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>Why Double Invocation?</h2>
        <div style={infoBox}>
          In development, Strict Mode intentionally calls certain functions twice (render, constructor, useState, useMemo, etc.). This helps detect:<br/><br/>
          • <b>Impure functions:</b> Functions that produce different results when called multiple times<br/>
          • <b>Side effects in render:</b> State changes or API calls during render<br/>
          • <b>Missing cleanup:</b> Effects that don't properly clean up<br/><br/>
          <b>Don't worry!</b> This only happens in development—production builds run normally.
        </div>
      </section>

      <section style={{marginTop: 28}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>Best Practices</h2>
        <div style={infoBox}>
          ✅ <b>Always use Strict Mode in new projects</b> (Create React App includes it by default)<br/>
          ✅ Enable it early—easier to fix issues incrementally than all at once<br/>
          ✅ Don't disable it just because of double-logging—it's finding real bugs!<br/>
          ✅ Use it to prepare for React 18+ features and Concurrent Mode<br/>
          ❌ Never ship Strict Mode warnings to production (they auto-disable anyway)
        </div>
      </section>

      <section style={{marginTop: 28}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>Strict Mode vs Production</h2>
        <div style={warningBox}>
          <b>Important:</b> Strict Mode checks only run in development mode. When you build for production (<code>npm run build</code>), all Strict Mode behavior is automatically removed—no performance impact!
        </div>
      </section>
    </div>
  );
}

