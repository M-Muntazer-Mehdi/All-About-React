import React from "react";
import MouseTracker from "./MouseTracker";

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

function getRenderPropCode(type) {
  if (type === 'MouseTracker') return `import React, { useState } from "react";
export default function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  return (
    <div
      style={{ height: "200px", border: "2px solid #333", marginTop: "20px", padding: "10px" }}
      onMouseMove={handleMouseMove}
    >
      {render(position)}
    </div>
  );
}`;
  if (type === 'usage') return `<MouseTracker
  render={({ x, y }) => (
    <p style={{ color: "blue", fontWeight: "bold" }}>
      Mouse position: ({x}, {y})
    </p>
  )}
/>`;
  if (type === 'fullExample') return `import React from "react";
import MouseTracker from "./MouseTracker";
export default function RenderProps() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Render Props Example</h1>
      <p>Move your mouse inside the box to see the coordinates:</p>
      <MouseTracker
        render={({ x, y }) => (
          <p style={{ color: "blue", fontWeight: "bold" }}>
            Mouse position: ({x}, {y})
          </p>
        )}
      />
      <MouseTracker
        render={({ x, y }) => (
          <div style={{ marginTop: "10px", color: "green" }}>
            <strong>Coordinates squared: ({x * x}, {y * y})</strong>
          </div>
        )}
      />
    </div>
  );
}`;
  return '';
}

function RenderPropsDemo() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Render Props Example</h1>
      <p>Move your mouse inside the box to see the coordinates:</p>

      <MouseTracker
        render={({ x, y }) => (
          <p style={{ color: "blue", fontWeight: "bold" }}>
            Mouse position: ({x}, {y})
          </p>
        )}
      />

      {/* Another example with different rendering */}
      <MouseTracker
        render={({ x, y }) => (
          <div style={{ marginTop: "10px", color: "green" }}>
            <strong>
              Coordinates squared: ({x * x}, {y * y})
            </strong>
          </div>
        )}
      />
    </div>
  );
}

export default function RenderPropsDocsDemo() {
  return (
    <div style={{ width: '100%', padding: '0 2vw 40px 2vw', textAlign: 'left' }}>
      <header style={{ marginBottom: 18 }}>
        <h1 style={{ color: '#1976d2', fontSize: '2rem', margin: 0 }}>Render Props Pattern</h1>
        <div style={{color:'#214570',fontSize:'1.12rem', marginTop:10}}>
          Render Props is a technique for sharing code between components using a prop whose value is a function. It's powerful for reusable logic!
        </div>
        <div style={infoBox}>
          <b>What are Render Props?</b><br/>
          A "render prop" is a function prop that a component uses to know what to render. This pattern lets you share behavior (like mouse tracking) while letting the parent decide the UI.
        </div>
      </header>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>MouseTracker Component (Render Prop Provider)</h2>
        <div style={codeStyle}>{getRenderPropCode('MouseTracker')}</div>
        <div style={tipStyle}>
          The <code>MouseTracker</code> tracks mouse position and calls the <code>render</code> prop function, passing the position data. The parent decides what to render!
        </div>
      </section>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Using the Render Prop</h2>
        <div style={codeStyle}>{getRenderPropCode('usage')}</div>
        <div style={tipStyle}>
          Pass a function to the <code>render</code> prop. The function receives the data (mouse position) and returns JSX to display.
        </div>
      </section>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Full Example: Multiple Render Props</h2>
        <div style={codeStyle}>{getRenderPropCode('fullExample')}</div>
        <div style={outputStyle}>
          <RenderPropsDemo />
        </div>
        <div style={tipStyle}>
          <b>Try it:</b> Move your mouse inside the boxes. The same MouseTracker component is reused, but each displays the data differently!
        </div>
      </section>

      <section style={{marginTop: 30, paddingTop: 18, borderTop: '2px solid #e5ecf5'}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>When to Use Render Props</h2>
        <ul style={{fontSize: '1.05rem', color: '#2c4258', margin: '0 0 0 20px'}}>
          <li><b>Sharing stateful logic:</b> When multiple components need the same behavior but different UIs.</li>
          <li><b>Component composition:</b> Build flexible, reusable components (e.g., data providers, animation wrappers).</li>
          <li><b>Alternative to HOCs:</b> Render props can be more flexible than Higher Order Components.</li>
          <li><b>Modern alternative:</b> Custom hooks often replace render props in modern React.</li>
        </ul>
      </section>

      <section style={{marginTop: 28}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>Render Props vs Custom Hooks</h2>
        <div style={infoBox}>
          <b>Render Props:</b> Pass a function prop to share logic and let parent control rendering.<br/><br/>
          <b>Custom Hooks:</b> A more modern approach for sharing stateful logic. Hooks are typically simpler and cleaner, but render props are still useful for component-based composition!
        </div>
      </section>
    </div>
  );
}
