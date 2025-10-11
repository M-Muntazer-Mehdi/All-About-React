import React from "react";
import FunctionComponent from "./functionBeforeHooks";
import ClassComponent from "./classBeforeHooks";
import FunctionAfterHooks from "./functionAfterHooks";
import ClassAfterHooks from "./classAfterHooks";

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

function getFileCode(fname) {
  // Returns hardcoded source for each demo file
  if(fname === "functionBeforeHooks") return `import React from "react";

function FunctionComponent(props) {
  return (
    <h1 style={{ fontSize: "18px" }}>
      function component before Hooks "return name: {props.name}"
    </h1>
  );
}

export default FunctionComponent;`;
  if(fname === "classBeforeHooks") return `import React, {Component} from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.name };
  }
  render() {
    return <h1 style={{ fontSize: "18px" }}>
      Class component before Hooks "return name: {this.state.name}"
    </h1>;
  }
}

export default ClassComponent;`;
  if(fname === "functionAfterHooks") return `import React, { useState, useEffect } from "react";

function FunctionAfterHooks() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log( [36m [1m [0m [0m");
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1 style={{ fontSize: "18px" }}>
        function component After Hooks, Click {count} times
      </h1>
      <button onClick={handleIncrement} style={{ fontSize: "18px" }}>
        click me
      </button>
    </div>
  );
}

export default FunctionAfterHooks;`;
  if(fname === "classAfterHooks") return `import React, { Component } from "react";

class ClassAfterHooks extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <h1 style={{ fontSize: "18px" }}>
          Class component After Hooks, Click {this.state.count} times
        </h1>
        <button onClick={this.handleIncrement} style={{ fontSize: "18px" }}>
          click me
        </button>
      </div>
    );
  }
}

export default ClassAfterHooks;`;
  if(fname === "Component") return `import React from "react";
import FunctionComponent from "./functionBeforeHooks";
import ClassComponent from "./classBeforeHooks";
import FunctionAfterHooks from "./functionAfterHooks";
import ClassAfterHooks from "./classAfterHooks";

function Component() {
  return (
    <div>
      <FunctionComponent name="muntazer" />
      <ClassComponent name="munatazer" />
      <FunctionAfterHooks />
      <ClassAfterHooks />
    </div>
  );
}

export default Component;`;
  return '';
}

export default function ComponentDemo() {
  return (
    <div style={{ width: '100%', padding: '0 2vw 40px 2vw', textAlign: 'left' }}>
      <header style={{ marginBottom: 18 }}>
        <h1 style={{ color: '#1976d2', fontSize: '2rem', margin: 0 }}>React Component Concepts</h1>
        <div style={{color:'#214570',fontSize:'1.12rem', marginTop:10}}>
          Learn the difference between function components, class components, and how state & hooks change the way you write React components.
        </div>
      </header>

      {/* Function Component Before Hooks */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Function Component (Before Hooks)</h2>
        <div style={codeStyle}>{getFileCode("functionBeforeHooks")}</div>
        <div style={outputStyle}><FunctionComponent name="muntazer" /></div>
        <div style={tipStyle}>This is a simple stateless component using props (no state).</div>
      </section>

      {/* Class Component Before Hooks */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Class Component (Before Hooks)</h2>
        <div style={codeStyle}>{getFileCode("classBeforeHooks")}</div>
        <div style={outputStyle}><ClassComponent name="munatazer" /></div>
        <div style={tipStyle}>A class component can hold internal state and lifecycle methods.</div>
      </section>

      {/* Function Component After Hooks */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Function Component (Using Hooks)</h2>
        <div style={codeStyle}>{getFileCode("functionAfterHooks")}</div>
        <div style={outputStyle}><FunctionAfterHooks /></div>
        <div style={tipStyle}>Hooks add state and effects to functional components—no classes required!</div>
      </section>

      {/* Class Component After Hooks (With State) */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Class Component (With State)</h2>
        <div style={codeStyle}>{getFileCode("classAfterHooks")}</div>
        <div style={outputStyle}><ClassAfterHooks /></div>
        <div style={tipStyle}>Class state is managed with <code>this.state</code>; use hooks for simpler code.</div>
      </section>

      {/* Full Example File */}
      <section style={{marginBottom:'42px', borderTop:'2px solid #dbeaf7', paddingTop:'22px'}}>
        <h2 style={{ color: '#1155aa', fontSize: '1.17rem', margin:'0 0 7px' }}>Full Example: Component.js</h2>
        <div style={codeStyle}>{getFileCode("Component")}</div>
        <h3 style={{margin:'17px 0 8px', color:'#1747a7', fontSize:'1.09rem'}}>Output:</h3>
        <div style={outputStyle}>
          <FunctionComponent name="muntazer" />
          <ClassComponent name="munatazer" />
          <FunctionAfterHooks />
          <ClassAfterHooks />
        </div>
      </section>
    </div>
  );
}