import React, { useRef, forwardRef } from "react";

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
const infoBox = {
  background: '#eef4fb',
  borderLeft: '5px solid #1976d2',
  padding: '10px 17px',
  borderRadius: '7px',
  margin: '14px 0 18px 0',
  fontSize: '1.09rem',
  color: '#144170',
};

function getCodeForRefs(type) {
  if (type === 'useRef') return `import React, { useRef } from "react";
export default function BasicRefExample() {
  const inputRef = useRef();
  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input ref={inputRef} placeholder="Click button to focus me" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}`;
  if (type === 'forwardRef') return `import React, { forwardRef } from "react";
// Reusable input component with forwarded ref
const TextField = forwardRef((props, ref) => {
  return <input ref={ref} {...props} style={{ padding: 8, margin: 5, width: 200 }} />;
});
export default TextField;`;
  if (type === 'fullExample') return `import React, { useRef, forwardRef } from "react";
const TextField = forwardRef((props, ref) => {
  return <input ref={ref} {...props} style={{ padding: 8, margin: 5, width: 200 }} />;
});
export default function App() {
  const nameRef = useRef();
  const emailRef = useRef();
  const handleFocusName = () => {
    nameRef.current.focus();
  };
  const handleFocusEmail = () => {
    emailRef.current.focus();
  };
  return (
    <div style={{ padding: 50 }}>
      <h2>Ref & ForwardRef Example</h2>
      <TextField ref={nameRef} placeholder="Name" />
      <TextField ref={emailRef} placeholder="Email" />
      <div style={{ marginTop: 20 }}>
        <button onClick={handleFocusName} style={{ marginRight: 10 }}>Focus Name</button>
        <button onClick={handleFocusEmail}>Focus Email</button>
      </div>
    </div>
  );
}`;
  return '';
}

// Reusable input component with forwarded ref
const TextField = forwardRef((props, ref) => {
  return <input ref={ref} {...props} style={{ padding: 8, margin: 5, width: 200 }} />;
});

function RefsDemo() {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleFocusName = () => {
    nameRef.current.focus();
  };

  const handleFocusEmail = () => {
    emailRef.current.focus();
  };

  return (
    <div style={{ padding: 50 }}>
      <h2>Ref & ForwardRef Example</h2>
      <TextField ref={nameRef} placeholder="Name" />
      <TextField ref={emailRef} placeholder="Email" />
      <div style={{ marginTop: 20 }}>
        <button onClick={handleFocusName} style={{ marginRight: 10 }}>
          Focus Name
        </button>
        <button onClick={handleFocusEmail}>Focus Email</button>
      </div>
    </div>
  );
}

export default function RefsDocsDemo() {
  return (
    <div style={{ width: '100%', padding: '0 2vw 40px 2vw', textAlign: 'left' }}>
      <header style={{ marginBottom: 18 }}>
        <h1 style={{ color: '#1976d2', fontSize: '2rem', margin: 0 }}>Refs & Forwarding Refs in React</h1>
        <div style={{color:'#214570',fontSize:'1.12rem', marginTop:10}}>
          Refs give you direct access to DOM elements or component instances. ForwardRef lets you pass refs through custom components!
        </div>
        <div style={infoBox}>
          <b>What are Refs?</b><br/>
          Refs are a way to access DOM nodes or React elements directly. Common uses: managing focus, triggering animations, integrating with third-party DOM libraries, or measuring DOM element sizes.
        </div>
      </header>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Basic useRef Example</h2>
        <div style={codeStyle}>{getCodeForRefs('useRef')}</div>
        <div style={tipStyle}>
          <b>useRef</b> creates a mutable reference that persists across renders. Use <code>ref.current</code> to access the DOM node.
        </div>
      </section>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>ForwardRef: Pass Refs to Child Components</h2>
        <div style={codeStyle}>{getCodeForRefs('forwardRef')}</div>
        <div style={tipStyle}>
          Wrap your component with <b>forwardRef</b> to allow parent components to pass refs through to child DOM elements. This is crucial for reusable input/button libraries!
        </div>
      </section>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Full Example: Refs & ForwardRef Together</h2>
        <div style={codeStyle}>{getCodeForRefs('fullExample')}</div>
        <div style={outputStyle}>
          <RefsDemo />
        </div>
        <div style={tipStyle}>
          <b>Try it:</b> Click the "Focus Name" or "Focus Email" buttons to see parent controlling child component focus via refs!
        </div>
      </section>

      <section style={{marginTop: 30, paddingTop: 18, borderTop: '2px solid #e5ecf5'}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>When to Use Refs</h2>
        <ul style={{fontSize: '1.05rem', color: '#2c4258', margin: '0 0 0 20px'}}>
          <li><b>Managing focus:</b> Programmatically focus inputs or buttons.</li>
          <li><b>Text selection:</b> Select text in an input field.</li>
          <li><b>Animations:</b> Trigger imperative animations on DOM nodes.</li>
          <li><b>Integrating with non-React libraries:</b> D3, jQuery, or other DOM manipulation libs.</li>
          <li><b>Measuring elements:</b> Get width, height, or scroll position.</li>
        </ul>
      </section>

      <section style={{marginTop: 28}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>Best Practices</h2>
        <div style={infoBox}>
          <b>Avoid overusing refs!</b> Refs are for imperative actions. For most UI updates, use state and props (declarative React). Only use refs when you need direct DOM access or when integrating with non-React code.
        </div>
      </section>
    </div>
  );
}
