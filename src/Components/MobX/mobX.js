import React from "react";
import { observer } from "mobx-react-lite";
import { store } from "./store";

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
  minWidth: '200px',
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
function getCodeMix(name) {
  if (name === "store") return `import { makeAutoObservable } from "mobx";
class Store {
  value = 0;
  constructor() { makeAutoObservable(this); }
  increment() { this.value++; }
  decrement() { this.value--; }
}
export const store = new Store();`;
  if (name === "mobxCounter") return `import React from "react";
import { observer } from "mobx-react-lite";
import { store } from "./store";
const MobXComponent = observer(() => {
  return (
    <div>
      <h1>MobX Counter</h1>
      <p>Value: {store.value}</p>
      <button onClick={() => store.increment()}>Increment</button>
      <button onClick={() => store.decrement()}>Decrement</button>
    </div>
  );
});
export default MobXComponent;`;
  if (name === "file") return `import React from "react";
import { observer } from "mobx-react-lite";
import { store } from "./store";
const MobXComponent = observer(() => {
  return (
    <div>
      <h1>MobX Counter</h1>
      <p>Value: {store.value}</p>
      <button onClick={() => store.increment()}>Increment</button>
      <button onClick={() => store.decrement()}>Decrement</button>
    </div>
  );
});
export default MobXComponent;`;
}

const MobXComponent = observer(() => {
  return (
    <div>
      <h1>MobX Counter</h1>
      <p>Value: {store.value}</p>
      <button onClick={() => store.increment()}>Increment</button>
      <button onClick={() => store.decrement()}>Decrement</button>
    </div>
  );
});

export default function MobXDocsDemo() {
  return (
    <div style={{ width: '100%', padding: '0 2vw 38px 2vw', textAlign: 'left' }}>
      <header style={{ marginBottom: 18 }}>
        <h1 style={{ color: '#1976d2', fontSize: '2rem', margin: 0 }}>MobX Counter Demo</h1>
        <div style={{color:'#214570',fontSize:'1.12rem', marginTop:10}}>
          MobX provides simple, flexible state management with observable state and reactions.
        </div>
      </header>
      {/* MobX Store section */}
      <section style={{marginBottom:'40px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.15rem', margin:'0 0 7px' }}>MobX Store (makeAutoObservable)</h2>
        <div style={codeStyle}>{getCodeMix('store')}</div>
        <div style={tipStyle}>MobX lets you make any class observable and add mutations directly&mdash;no reducers or boilerplate.</div>
      </section>
      {/* MobX observer component section */}
      <section style={{marginBottom:'40px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.15rem', margin:'0 0 7px' }}>MobX observer React Component</h2>
        <div style={codeStyle}>{getCodeMix('mobxCounter')}</div>
        <div style={outputStyle}><MobXComponent /></div>
        <div style={tipStyle}>Wrap your component with <b>observer()</b> so React automatically re-renders when observables change.</div>
      </section>
      {/* Full Example section */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #dbeaf7', paddingTop: '22px'}}>
        <h2 style={{ color: '#1155aa', fontSize: '1.12rem', margin:'0 0 7px' }}>Full Example Output</h2>
        <div style={codeStyle}>{getCodeMix('file')}</div>
        <div style={outputStyle}><MobXComponent /></div>
      </section>
    </div>
  );
}