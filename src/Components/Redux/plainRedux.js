import React from 'react';
import { Provider } from 'react-redux';
import { plainStore } from './plainRedux/store';
import Counter from './plainRedux/plainredux';

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
function getFileCode(file) {
  if (file === 'store') return `import { legacy_createStore as createStore } from 'redux';
import counterReducer from './counterReducer';
export const plainStore = createStore(counterReducer);`;
  if (file === 'reducer') return `const intializeState = { count:0 }
function counterReducer(state = intializeState, action) {
  switch( action.type ) {
    case 'Increment':
      return { count: state.count + 1 };
    case 'Decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}
export default counterReducer;`;
  if (file === 'plainredux') return `import React from 'react';
import { connect } from 'react-redux';
function plainRedux({ count, increment, decrement }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>{count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement} style={{ marginLeft: '10px' }}>decrement</button>
    </div>
  );
}
const mapStateToProps = (state) => ({ count: state.count });
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'Increment' }),
  decrement: () => dispatch({ type: 'Decrement' })
});
export default connect(mapStateToProps, mapDispatchToProps)(plainRedux);`;
  if (file === 'PlainReduxPage') return `import React from 'react';
import { Provider } from 'react-redux';
import { plainStore } from './plainRedux/store';
import Counter from './plainRedux/plainredux';
export default function PlainReduxPage() {
  return (
    <Provider store={plainStore}>
      <h2>Plain Redux Example</h2>
      <Counter />
    </Provider>
  );
}`;
}

export default function PlainReduxDocsPage() {
  return (
    <div style={{ width: '100%', padding: '0 2vw 40px 2vw', textAlign: 'left' }}>
      <header style={{ marginBottom: 18 }}>
        <h1 style={{ color: '#1976d2', fontSize: '2rem', margin: 0 }}>Redux: Classic Counter Example</h1>
        <div style={{color:'#214570',fontSize:'1.12rem', marginTop:10}}>
          This shows a basic React + Redux (no Toolkit) counter flow: a reducer, a Redux store, a connected React UI.
        </div>
      </header>

      {/* Store setup section */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Redux Store (store.js)</h2>
        <div style={codeStyle}>{getFileCode('store')}</div>
        <div style={tipStyle}>You've set up the Redux store with your reducer. Use the Provider to make it available to your app.</div>
      </section>

      {/* Reducer code */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Reducer (counterReducer.js)</h2>
        <div style={codeStyle}>{getFileCode('reducer')}</div>
        <div style={tipStyle}>Reducers decide how state changes in response to actions from your app.</div>
      </section>

      {/* Connected Counter component demo */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Counter Component (connected with react-redux)</h2>
        <div style={codeStyle}>{getFileCode('plainredux')}</div>
        <div style={outputStyle}>
          <Provider store={plainStore}>
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <h2>Counter Example (Redux)</h2>
              <Counter />
            </div>
          </Provider>
        </div>
        <div style={tipStyle}>The connect function links component state/dispatch to Redux state/actions as props.</div>
      </section>

      {/* Main page and composite output */}
      <section style={{marginBottom:'42px', borderTop:'2px solid #dbeaf7', paddingTop:'22px'}}>
        <h2 style={{ color: '#1155aa', fontSize: '1.17rem', margin:'0 0 7px' }}>Full Example: PlainReduxPage.js</h2>
        <div style={codeStyle}>{getFileCode('PlainReduxPage')}</div>
        <h3 style={{margin:'17px 0 8px', color:'#1747a7', fontSize:'1.09rem'}}>Output:</h3>
        <div style={outputStyle}>
          <Provider store={plainStore}>
            <Counter />
          </Provider>
        </div>
      </section>
    </div>
  );
}