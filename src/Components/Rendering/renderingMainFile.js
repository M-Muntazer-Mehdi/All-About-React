import React, { useState } from 'react';
import { IfStatement, TernaryOperator, LogicalOperator, SwitchStatement, ListOperator } from './Rendering';

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

export default function RenderingDemo() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const items = [
    { id: 1, name: 'Muntazer' },
    { id: 2, name: 'Bakar' },
    { id: 3, name: 'Abdullah' }
  ];

  return (
    <div style={{ width: '100%', padding: '0 2vw 36px 2vw', textAlign: 'left' }}>
      <header style={{ marginBottom: 18 }}>
        <h1 style={{ color: '#1976d2', fontSize: '2rem', margin: 0 }}>Conditional Rendering & Lists in React</h1>
        <div style={{color:'#214570',fontSize:'1.12rem', marginTop:10}}>
          This demo shows the most common ways to conditionally render content and lists in React.
        </div>
      </header>

      {/* If Statement */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.16rem', margin:'0 0 7px' }}>1. Using an if statement</h2>
        <div style={codeStyle}>{`function IfStatement(props) {
  if(props.isLoggedIn) {
    return <h3>Welcome back!</h3>;
  } else {
    return <h3>Please, Sign Up!</h3>;
  }
}`}</div>
        <div style={outputStyle}><IfStatement isLoggedIn={isLoggedIn} /></div>
        <div style={tipStyle}>
          Classic JS <b>if/else</b> logic rendered via returning different elements.
        </div>
      </section>

      {/* Ternary Operator */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '15px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.15rem', margin:'0 0 7px' }}>2. Using the Ternary Operator</h2>
        <div style={codeStyle}>{`function TernaryOperator(props) {
  return (
    <div>
      {props.isLoggedIn ? (
        <h3>Welcome Back!</h3>
      ) : (
        <h3>Please, Sign Up!</h3>
      )}
    </div>
  );
}`}</div>
        <div style={outputStyle}><TernaryOperator isLoggedIn={isLoggedIn} /></div>
        <div style={tipStyle}>
          The ternary operator (<code>{`test ? A : B`}</code>) is concise for simple conditional display.
        </div>
      </section>

      {/* Logical && Operator */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '15px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.15rem', margin:'0 0 7px' }}>3. Logical &amp;&amp; Operator</h2>
        <div style={codeStyle}>{`function LogicalOperator(props) {
  return (
    <div>
      {props.isLoggedIn && <h3>Welcome Back!</h3>}
      {!props.isLoggedIn && <h3>Please! Sign Up!</h3>}
    </div>
  );
}`}</div>
        <div style={outputStyle}><LogicalOperator isLoggedIn={isLoggedIn} /></div>
        <div style={tipStyle}>
          Render an element only when the condition is <b>true</b> (or render alternatives using both <code>&amp;&amp;</code> and <code>!</code>).
        </div>
      </section>

      {/* Switch Statement */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '15px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.15rem', margin:'0 0 7px' }}>4. Using a switch statement</h2>
        <div style={codeStyle}>{`function SwitchStatement(props) {
  let message;
  switch(props.isLoggedIn) {
    case true:
      message = <h3>Welcome Back!</h3>;
      break;
    case false:
      message = <h3>Please, Sign Up!</h3>;
      break;
  }
  return <div>{message}</div>;
}`}</div>
        <div style={outputStyle}><SwitchStatement isLoggedIn={isLoggedIn} /></div>
        <div style={tipStyle}>
          Used for multiple cases, but less common than <b>if</b> and <b>ternary</b> in React UI code.
        </div>
      </section>

      {/* List Rendering */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '15px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.15rem', margin:'0 0 7px' }}>5. Rendering Lists</h2>
        <div style={codeStyle}>{`function ListOperator(props) {
  return (
    <div>
      {props.items.map(item => (
        <h3 key={item.id}>{item.id}: {item.name}</h3>
      ))}
    </div>
  );
}`}</div>
        <div style={outputStyle}><ListOperator items={items} /></div>
        <div style={tipStyle}>
          Lists are rendered with <code>map()</code>, and each child should have a unique <b>key</b> prop.
        </div>
      </section>

      {/* Example State Toggle Button (used above) */}
      <section style={{marginBottom:'28px', borderTop:'2px solid #e7eef7', paddingTop: '15px'}}>
        <button
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          style={{ fontSize: "1.07rem", color: '#fff', background: '#1976d2', border: 'none', borderRadius: 6, padding: '7px 22px', marginTop: '10px', cursor: 'pointer' }}
        >
          Toggle Login State (now: {String(isLoggedIn)})
        </button>
        <div style={tipStyle}>
          Try toggling the login state to see all the different render approaches update live!
        </div>
      </section>

      {/* Full Example File */}
      <section style={{marginBottom:'42px', borderTop:'2px solid #dbeaf7', paddingTop:'22px'}}>
        <h2 style={{ color: '#1155aa', fontSize: '1.17rem', margin:'0 0 7px' }}>Full Example: Rendering Demo File</h2>
        <div style={codeStyle}>{`import React, { useState } from 'react';
import { IfStatement, TernaryOperator, LogicalOperator, SwitchStatement, ListOperator } from './Rendering';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const items = [
    { id: 1, name: 'Muntazer' },
    { id: 2, name: 'Bakar' },
    { id: 3, name: 'Abdullah' }
  ];

  return (
    <div className="App">
      <h1>Conditional Rendering Examples</h1>
      <h2>Using 'if' statement:</h2>
      <IfStatement isLoggedIn={isLoggedIn} />
      <h2>Using 'Ternary' Operator:</h2>
      <TernaryOperator isLoggedIn={isLoggedIn}/>
      <h2>Using Logical '&' 7' Operator:</h2>
      <LogicalOperator isLoggedIn={isLoggedIn}/>
      <h2>Using 'Switch' statement:</h2>
      <SwitchStatement isLoggedIn={isLoggedIn}/>
      <h2>Using 'List' Operator:</h2>
      <ListOperator items={items}/>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Toggle Login State
      </button>
    </div>
  );
}

export default App;`}</div>
        <h3 style={{margin:'17px 0 8px', color:'#1747a7', fontSize:'1.09rem'}}>Output:</h3>
        <div style={outputStyle}>
          <h1>Conditional Rendering Examples</h1>
          <h2>Using 'if' statement:</h2>
          <IfStatement isLoggedIn={isLoggedIn} />
          <h2>Using 'Ternary' Operator:</h2>
          <TernaryOperator isLoggedIn={isLoggedIn}/>
          <h2>Using Logical '&'' Operator:</h2>
          <LogicalOperator isLoggedIn={isLoggedIn}/>
          <h2>Using 'Switch' statement:</h2>
          <SwitchStatement isLoggedIn={isLoggedIn}/>
          <h2>Using 'List' Operator:</h2>
          <ListOperator items={items}/>
          <button onClick={() => setIsLoggedIn(!isLoggedIn)} style={{ fontSize: "1.07rem", color: '#fff', background: '#1976d2', border: 'none', borderRadius: 6, padding: '7px 22px', marginTop: '10px', cursor: 'pointer' }}>
            Toggle Login State (now: {String(isLoggedIn)})
          </button>
        </div>
      </section>
    </div>
  );
}
