import React from "react";
import Plainredux from "./plainRedux";
import ReduxThunk from "./thunkRedux";
import RKTRedux from "./rktRedux";

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
function codeBlockRedux(type) {
  if (type === 'plainCounter') return `// Counter (react-redux connect)
function plainRedux({ count, increment, decrement }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>{count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement} style={{ marginLeft: '10px' }}>decrement</button>
    </div>
  );
}
// ...connect code omitted...`;
  if (type === 'plainStore') return `import { legacy_createStore as createStore } from 'redux';
import counterReducer from './counterReducer';
export const plainStore = createStore(counterReducer);`;
  if (type === 'thunkCounter') return `// Counter using Redux Thunkunction ReduxThunk({ count, incrementLater, decrementLater }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{count}</h1>
      <button onClick={incrementLater}>Increment After 1s</button>
      <button onClick={decrementLater}>Decrement After 1s</button>
    </div>
  );
}
// ...connect code omitted...`;
  if (type === 'thunkStore') return `import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import counterReducer from './counterReducer';
export const thunkStore = createStore(counterReducer, applyMiddleware(thunk));`;
  if (type === 'toolkitCounter') return `// Redux Toolkit counter slice UI
export default function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment +5</button>
    </div>
  );
}`;
  if (type === 'toolkitStore') return `import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
export const RKTStore = configureStore({
  reducer: { counter: counterReducer }
});`;
  if (type === 'mainfile') return `import React from "react";
import Plainredux from "./plainRedux";
import ReduxThunk from "./thunkRedux";
import RKTRedux from "./rktRedux";
function MainFile () {
  return(
    <div>
      <Plainredux />
      <ReduxThunk />
      <RKTRedux />
    </div>
  );
}
export default MainFile;`;
  return '';
}

export default function ReduxDemoDocs() {
  return (
    <div style={{ width: '100%', padding: '0 2vw 40px 2vw', textAlign: 'left' }}>
      <header style={{ marginBottom: 18 }}>
        <h1 style={{ color: '#1976d2', fontSize: '2rem', margin: 0 }}>Redux Examples: Plain/Thunk/Toolkit</h1>
        <div style={{color:'#214570',fontSize:'1.11rem', marginTop:10, maxWidth:630}}>
          Compare plain Redux (manual reducers & connect), Redux Thunk (async), and Redux Toolkit (modern best practice) with live demos.
        </div>
      </header>
      {/* Plain Redux */}
      <section style={{marginBottom:'44px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.13rem', margin:'0 0 7px' }}>Plain Redux: Classic Counter</h2>
        <div style={codeStyle}>{codeBlockRedux('plainStore')}</div>
        <div style={codeStyle}>{codeBlockRedux('plainCounter')}</div>
        <div style={outputStyle}><Plainredux /></div>
        <div style={tipStyle}>"Manual" Redux: create store, reducer, connect; good for learning, but verbose for large apps.</div>
      </section>
      {/* Redux Thunk demo */}
      <section style={{marginBottom:'44px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.13rem', margin:'0 0 7px' }}>Redux Thunk: Async Actions</h2>
        <div style={codeStyle}>{codeBlockRedux('thunkStore')}</div>
        <div style={codeStyle}>{codeBlockRedux('thunkCounter')}</div>
        <div style={outputStyle}><ReduxThunk /></div>
        <div style={tipStyle}>Thunk allows async logic (like fetching or timeouts). Dispatchers can be functions, not just plain objects!</div>
      </section>
      {/* Redux Toolkit demo */}
      <section style={{marginBottom:'44px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.13rem', margin:'0 0 7px' }}>Redux Toolkit: Modern Simplicity</h2>
        <div style={codeStyle}>{codeBlockRedux('toolkitStore')}</div>
        <div style={codeStyle}>{codeBlockRedux('toolkitCounter')}</div>
        <div style={outputStyle}><RKTRedux /></div>
        <div style={tipStyle}>Redux Toolkit is the new standard for Redux: less boilerplate, easy slices, and direct state mutation with Immer.</div>
      </section>
      {/* Full mainfile preview */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #dbeaf7', paddingTop: '22px'}}>
        <h2 style={{ color: '#1155aa', fontSize: '1.17rem', margin:'0 0 7px' }}>Full Example: mainfile.js</h2>
        <div style={codeStyle}>{codeBlockRedux('mainfile')}</div>
        <h3 style={{margin:'17px 0 8px', color:'#1747a7', fontSize:'1.09rem'}}>Output: (all Redux counters combined)</h3>
        <div style={outputStyle}>
          <Plainredux />
          <ReduxThunk />
          <RKTRedux />
        </div>
      </section>
    </div>
  );
}