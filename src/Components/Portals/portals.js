import React, { useState } from "react";
import ReactDOM from "react-dom";

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
  minWidth: '180px',
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

function getCodeForPortals() {
  return `import React, { useState } from "react";
import ReactDOM from "react-dom";
export default function App() {
  const [showNormal, setShowNormal] = useState(false);
  const [showPortal, setShowPortal] = useState(false);
  return (
    <div style={{ height: "200px", overflow: "scroll", border: "2px solid #aaa", position: "relative" }}>
      <p style={{ padding: 20 }}>Scroll down ↓</p>
      <div style={{ height: "1000px", background: "#eee", padding: 20 }}>
        <button onClick={() => setShowNormal(true)}>Open Normal Modal</button>
        <button style={{ marginLeft: 10 }} onClick={() => setShowPortal(true)}>Open Portal Modal</button>
        {showNormal && (
          <div style={{ position: "absolute", top: "150px", left: "50%", transform: "translateX(-50%)", background: "white", border: "2px solid red", padding: "20px", zIndex: 1 }}>
            <p>🚫 Normal Modal (inside scroll)</p>
            <button onClick={() => setShowNormal(false)}>Close</button>
          </div>
        )}
        {showPortal && ReactDOM.createPortal(
          <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", background: "white", border: "2px solid green", padding: "20px", zIndex: 999 }}>
            <p>✅ Portal Modal (fixed on screen)</p>
            <button onClick={() => setShowPortal(false)}>Close</button>
          </div>,
          document.body
        )}
      </div>
    </div>
  );
}`;
}

function PortalDemo() {
  const [showNormal, setShowNormal] = useState(false);
  const [showPortal, setShowPortal] = useState(false);

  return (
    <div
      style={{
        height: "200px",
        overflow: "scroll",
        border: "2px solid #aaa",
        position: "relative",
      }}
    >
      <p style={{ padding: 20 }}>Scroll down ↓</p>

      <div style={{ height: "1000px", background: "#eee", padding: 20 }}>
        <button onClick={() => setShowNormal(true)}>Open Normal Modal</button>
        <button
          style={{ marginLeft: 10 }}
          onClick={() => setShowPortal(true)}
        >
          Open Portal Modal
        </button>

        {showNormal && (
          <div
            style={{
              position: "absolute",
              top: "150px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "white",
              border: "2px solid red",
              padding: "20px",
              zIndex: 1,
            }}
          >
            <p>🚫 Normal Modal (inside scroll)</p>
            <button onClick={() => setShowNormal(false)}>Close</button>
          </div>
        )}

        {showPortal &&
          ReactDOM.createPortal(
            <div
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "white",
                border: "2px solid green",
                padding: "20px",
                zIndex: 999,
              }}
            >
              <p>✅ Portal Modal (fixed on screen)</p>
              <button onClick={() => setShowPortal(false)}>Close</button>
            </div>,
            document.body
          )}
      </div>
    </div>
  );
}

export default function PortalsDocsDemo() {
  return (
    <div style={{ width: '100%', padding: '0 2vw 40px 2vw', textAlign: 'left' }}>
      <header style={{ marginBottom: 18 }}>
        <h1 style={{ color: '#1976d2', fontSize: '2rem', margin: 0 }}>React Portals Demo</h1>
        <div style={{color:'#214570',fontSize:'1.12rem', marginTop:10}}>
          Portals let you render a component outside its parent DOM hierarchy—useful for modals, tooltips, and overlays!
        </div>
        <div style={infoBox}>
          <b>What are Portals?</b><br/>
          Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. This is especially useful for modals, dropdowns, and tooltips that need to break out of overflow or z-index constraints.
        </div>
      </header>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Portal vs Normal Rendering</h2>
        <div style={codeStyle}>{getCodeForPortals()}</div>
        <div style={outputStyle}>
          <PortalDemo />
        </div>
        <div style={tipStyle}>
          <b>Try it:</b> Scroll down in the demo and click both "Open Normal Modal" and "Open Portal Modal". Notice the Normal Modal scrolls with content (red border), but the Portal Modal stays fixed on screen (green border) because it renders to <code>document.body</code>!
        </div>
      </section>

      <section style={{marginTop: 30, paddingTop: 18, borderTop: '2px solid #e5ecf5'}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>Why Use Portals?</h2>
        <ul style={{fontSize: '1.05rem', color: '#2c4258', margin: '0 0 0 20px'}}>
          <li><b>Modals & Overlays:</b> Render above all other content without z-index conflicts.</li>
          <li><b>Tooltips:</b> Position tooltips outside overflow containers.</li>
          <li><b>Breaking parent constraints:</b> Escape CSS overflow, position, or stacking contexts.</li>
          <li><b>Event bubbling:</b> Portal children still bubble events to React parent components (not DOM parents).</li>
        </ul>
      </section>

      <section style={{marginTop: 28}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>Syntax</h2>
        <div style={codeStyle}>{`ReactDOM.createPortal(child, container)`}</div>
        <div style={tipStyle}>
          First argument: The React element to render.<br/>
          Second argument: The DOM node to render it into (commonly <code>document.body</code>).
        </div>
      </section>
    </div>
  );
}
