// src/components/Jsx.js
import React from 'react';

const codeStyle = {
  background: '#fafbff',
  border: '1px solid #e0e7f0',
  borderRadius: '6px',
  padding: '11px 17px',
  margin: '10px 0 8px 0',
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
  minWidth: '150px',
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

export default function JsxConcept() {
  const name = "muntazer";

  return (
    <div style={{ width: '100%', padding: '0 2vw 40px 2vw', textAlign: 'left' }}>
      <header style={{ marginBottom: 20 }}>
        <h1 style={{ color: '#1976d2', fontSize: '2rem', margin: 0 }}>JSX in React</h1>
        <div style={{color:'#214570',fontSize:'1.12rem', marginTop:10}}>
          <strong>JSX</strong> (JavaScript XML) lets you write HTML-like markup inside JavaScript. It makes describing UIs natural and intuitive—and compiles to efficient JavaScript code behind the scenes!
        </div>
      </header>

      {/* Example 1: Variable in JSX */}
      <section style={{marginBottom:'33px'}}>
        <h2 style={{ color: '#1747a7', fontSize: '1.2rem', margin: '14px 0 4px 0' }}>Insert a JavaScript Variable</h2>
        <div style={codeStyle}>{`const name = "muntazer";
<h4>Hello, {name}!</h4>`}</div>
        <div style={outputStyle}>
          <h4 style={{margin:'0'}}>Hello, {name}!</h4>
        </div>
        <div style={tipStyle}>
          <b>Tip:</b> To insert a variable in JSX, wrap it with curly braces: <code>{`{name}`}</code>. You can use any valid JavaScript expression inside the braces.
        </div>
      </section>

      {/* Example 2: Arithmetic in JSX */}
      <section style={{marginBottom:'33px'}}>
        <h2 style={{ color: '#1747a7', fontSize: '1.2rem', margin: '14px 0 4px 0' }}>Use JavaScript Expressions</h2>
        <div style={codeStyle}>{`<h4>Sum is: {3+3}</h4>`}</div>
        <div style={outputStyle}>
          <h4 style={{margin:'0'}}>Sum is: {3+3}</h4>
        </div>
        <div style={tipStyle}>
          <b>Tip:</b> Inside JSX, curly braces let you use any valid JavaScript—math, function calls, or variables. Try changing <code>{`3+3`}</code> to another calculation!
        </div>
      </section>

      {/* Full example! */}
      <section style={{marginBottom:'36px', marginTop:'42px', borderTop: '2px solid #e5eaf1', paddingTop:'22px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.22rem', margin:'16px 0 8px' }}>Full Example: JSX Component File</h2>
        <div style={codeStyle}>{`import React from 'react';

function JsxConcept() {
  const name = "muntazer";
  return (
    <div>
      <h1>This is the JSX Concept page</h1>
      <h4>Here, I use name Variable with Jsx Element = {name}</h4>
      <h4>Know, I Use Jsx Element for Arthamatic operation = {3+3}</h4>
    </div>
  );
}

export default JsxConcept;`}
        </div>
        <h3 style={{margin:'20px 0 7px', color:'#1747a7',fontSize:'1.11rem'}}>Output:</h3>
        <div style={outputStyle}>
          <div>
            <h1 style={{margin:0}}>This is the JSX Concept page</h1>
            <h4 style={{margin:0}}>Here, I use name Variable with Jsx Element = {name}</h4>
            <h4 style={{margin:0}}>Know, I Use Jsx Element for Arthamatic operation = {3+3}</h4>
          </div>
        </div>
      </section>
    </div>
  );
}
