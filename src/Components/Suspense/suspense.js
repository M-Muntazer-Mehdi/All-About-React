import React, { Suspense, lazy } from "react";

const LazyComponent = lazy(() => import("./LazyComponent"));

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
  minWidth: '240px',
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
// Hardcoded, lint-safe code blocks for demo
function getFileCode(fname) {
  if(fname === 'suspense') return `import React, { Suspense, lazy } from "react";
const LazyComponent = lazy(() => import("./LazyComponent"));
export default function SuspenseDemo() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Suspense Example</h1>
      <p>The lazy component below will load asynchronously. While loading, a fallback UI is displayed.</p>
      <Suspense fallback={<div>Loading component...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}`;
  if(fname === 'LazyComponent') return `import React from "react";
export default function LazyComponent() {
  return (
    <div style={{ marginTop: "20px", padding: "10px", background: "#f0f0f0" }}>
      <h2>I am a lazy-loaded component!</h2>
      <p>Suspense handled my loading state while I was being fetched asynchronously.</p>
    </div>
  );
}`;
  return '';
}

export default function SuspenseDocsDemo() {
  return (
    <div style={{ width: '100%', padding: '0 2vw 40px 2vw', textAlign: 'left' }}>
      <header style={{ marginBottom: 18 }}>
        <h1 style={{ color: '#1976d2', fontSize: '2rem', margin: 0 }}>React Suspense Example</h1>
        <div style={{color:'#214570',fontSize:'1.12rem', marginTop:10}}>
          Suspense lets you display a fallback UI (like a spinner/loading) while a section of your tree lazily loads.
        </div>
      </header>

      {/* SuspenseDemo section */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Suspense/Demo: Lazy & Fallback</h2>
        <div style={codeStyle}>{getFileCode('suspense')}</div>
        <div style={outputStyle}>
          <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h1>React Suspense Example</h1>
            <p>The lazy component below will load asynchronously. While loading, a fallback UI is displayed.</p>
            <Suspense fallback={<div>Loading component...</div>}>
              <LazyComponent />
            </Suspense>
          </div>
        </div>
        <div style={tipStyle}>Wrap a <b>lazy</b>-loaded component in <b>Suspense</b> to control loading UX. Use fallback to show a spinner/message!</div>
      </section>
      {/* LazyComponent source section */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.13rem', margin:'0 0 7px' }}>LazyComponent.js source</h2>
        <div style={codeStyle}>{getFileCode('LazyComponent')}</div>
        <div style={tipStyle}>React.lazy lets you split code for fast loads; Suspense handles its state while fetching.</div>
      </section>
      {/* Final full example preview */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #dbeaf7', paddingTop:'22px'}}>
        <h2 style={{ color: '#1155aa', fontSize: '1.17rem', margin:'0 0 7px' }}>Full Example Output</h2>
        <div style={outputStyle}>
          <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h1>React Suspense Example</h1>
            <p>The lazy component below will load asynchronously. While loading, a fallback UI is displayed.</p>
            <Suspense fallback={<div>Loading component...</div>}>
              <LazyComponent />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  );
}
