import React from "react";
import StateExample from './useState';
import ReducerExample from './useReducer';

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
  if(fname === "useState") return `import React, {useState} from "react";

function StateExample(){
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return(
    <div>
      <h1 style={{ fontSize: "18px" }}> Click to increase the useState example count: {count}
        <button style={{ fontSize: "18px" }} onClick={increment}>
          Click me
        </button>
      </h1>
    </div>
  );
}

export default StateExample;`;
  if(fname === "useReducer") return `import React, {useReducer} from "react";

const initialState = { count:0 };
function reducer(state, action){
  switch(action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}
function ReducerExample () {
  const [state, dispatch] = useReducer(reducer, initialState);
  return(
    <div>
      <h1 style={{ fontSize: "18px" }}> Click to increase/decrease the useReducer example count: {state.count}
        <button style={{ fontSize: "18px" }} onClick ={() => dispatch({ type: 'increment' })}>Increment</button>
        <button style={{ fontSize: "18px" }} onClick ={() => dispatch({ type: 'decrement' })}>Decrement</button>
      </h1>
    </div>
  );
}

export default ReducerExample;`;
  if(fname === "stateMainFile") return `import React from "react";
import StateExample from './useState';
import ReducerExample from './useReducer';

function stateMainfile() {
  return(
    <div>
      <StateExample />
      <ReducerExample />
    </div>
  );
}

export default stateMainfile;`;
  return '';
}

export default function StateManagementDemo() {
  return (
    <div style={{ width: '100%', padding: '0 2vw 40px 2vw', textAlign: 'left' }}>
      <header style={{ marginBottom: 18 }}>
        <h1 style={{ color: '#1976d2', fontSize: '2rem', margin: 0 }}>React State Management Basics</h1>
        <div style={{color:'#214570',fontSize:'1.12rem', marginTop:10}}>
          Key ways to manage component state in React: useState and useReducer hooks.
        </div>
      </header>
      {/* useState Example */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>useState Hook</h2>
        <div style={codeStyle}>{getFileCode("useState")}</div>
        <div style={outputStyle}><StateExample /></div>
        <div style={tipStyle}>The <b>useState</b> hook provides state in function components. Call <code>setCount</code> to update.</div>
      </section>
      {/* useReducer Example */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>useReducer Hook</h2>
        <div style={codeStyle}>{getFileCode("useReducer")}</div>
        <div style={outputStyle}><ReducerExample /></div>
        <div style={tipStyle}>The <b>useReducer</b> hook is used for complex state logic, like Redux but smaller. Useful for state transitions and clear updates.</div>
      </section>
      {/* Full Example File */}
      <section style={{marginBottom:'42px', borderTop:'2px solid #dbeaf7', paddingTop:'22px'}}>
        <h2 style={{ color: '#1155aa', fontSize: '1.17rem', margin:'0 0 7px' }}>Full Example: stateMainFile.js</h2>
        <div style={codeStyle}>{getFileCode("stateMainFile")}</div>
        <h3 style={{margin:'17px 0 8px', color:'#1747a7', fontSize:'1.09rem'}}>Output:</h3>
        <div style={outputStyle}>
          <StateExample />
          <ReducerExample />
        </div>
      </section>
    </div>
  );
}