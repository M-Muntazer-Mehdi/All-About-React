import React from "react";
import PassingFunction from './passingFunctionAsEventHandler';
import Inline from "./inlineEventHandler";
import Object from "./eventObject";
import DefaultBehaviour from "./preventDefaultBehaviour";
import Binding from "./bindingEventHandler";
import Multiple from "./multipleEvent";
import Arguments from "./passingMultipleArgument";

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
  if(fname === "PassingFunction") return `function PassingFunction() {
  const handleClick = () => {
    alert('Button clicked!');
  };
  return (
    <div>
      <button onClick={handleClick}>Event</button>
    </div>
  );
}`;
  if(fname === "Inline") return `function Inline() {
  return (
    <div>
      <button onClick={() => alert('Button clicked!')}>Event</button>
    </div>
  );
}`;
  if(fname === "Object") return `function EventObject() {
  const handleClick = (event) => {
    alert('Button clicked! Type: ' + event.type);
  };
  return (
    <div>
      <button onClick={handleClick}>Event</button>
    </div>
  );
}`;
  if(fname === "DefaultBehaviour") return `function DefaultBehaviour() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted!');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter your name" />
      <button type="submit">Submit</button>
    </form>
  );
}`;
  if(fname === "Binding") return `class Binding extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    alert('Button clicked!');
  }
  handleClick1 = () => {
    alert('Button1 clicked!');
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Event (constructor bind)</button>
        <button onClick={this.handleClick1}>Event (class field)</button>
      </div>
    );
  }
}`;
  if(fname === "Multiple") return `function Multiple() {
  const handleMouseEnter = () => { console.log('Mouse entered!'); };
  const handleMouseLeave = () => { console.log('Mouse left!'); };
  return (
    <div>
      <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Hover over me</button>
    </div>
  );
}`;
  if(fname === "Arguments") return `function Arguments() {
  const handleClick = (id, name, event) => {
    alert('Button clicked! ID: ' + id + ', Name: ' + name);
  };
  return (
    <div>
      <button onClick={(event) => handleClick(1, 'John', event)}>ID</button>
    </div>
  );
}`;
  if(fname === "EventHandler") return `import React from "react";
import PassingFunction from './passingFunctionAsEventHandler';
import Inline from "./inlineEventHandler";
import Object from "./eventObject";
import DefaultBehaviour from "./preventDefaultBehaviour";
import Binding from "./bindingEventHandler";
import Multiple from "./multipleEvent";
import Arguments from "./passingMultipleArgument";

function EventHandler (){
  return(
    <div>
      <PassingFunction />
      <Inline />
      <Object />
      <DefaultBehaviour />
      <Binding />
      <Multiple />
      <Arguments />
    </div>
  );
}

export default EventHandler;`;
  return '';
}

export default function EventHandlerDemo() {
  return (
    <div style={{ width: '100%', padding: '0 2vw 40px 2vw', textAlign: 'left' }}>
      <header style={{ marginBottom: 18 }}>
        <h1 style={{ color: '#1976d2', fontSize: '2rem', margin: 0 }}>Event Handling in React</h1>
        <div style={{color:'#214570',fontSize:'1.12rem', marginTop:10}}>
          Explore event handlers with various patterns. Try the examples live!
        </div>
      </header>

      {/* Passing function as handler */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Passing Function as Event Handler</h2>
        <div style={codeStyle}>{getFileCode("PassingFunction")}</div>
        <div style={outputStyle}><PassingFunction /></div>
        <div style={tipStyle}>Just pass your function directly! Cleaner and recommended over repeated inline code.</div>
      </section>

      {/* Inline Event Handler */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Inline Event Handler</h2>
        <div style={codeStyle}>{getFileCode("Inline")}</div>
        <div style={outputStyle}><Inline /></div>
        <div style={tipStyle}>Event handlers can be defined inline, but avoid for complex logic—it makes the JSX harder to read.</div>
      </section>

      {/* Event Object Access */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Event Object</h2>
        <div style={codeStyle}>{getFileCode("Object")}</div>
        <div style={outputStyle}><Object /></div>
        <div style={tipStyle}>Every event handler receives a SyntheticEvent object as the first argument (browser event abstraction).</div>
      </section>

      {/* Prevent Default Behaviour */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Prevent Default Behaviour</h2>
        <div style={codeStyle}>{getFileCode("DefaultBehaviour")}</div>
        <div style={outputStyle}><DefaultBehaviour /></div>
        <div style={tipStyle}>Forms need <code>event.preventDefault()</code> to stop page refreshes on submit.</div>
      </section>

      {/* Binding in Class Components */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Binding Event Handler (Class Components)</h2>
        <div style={codeStyle}>{getFileCode("Binding")}</div>
        <div style={outputStyle}><Binding /></div>
        <div style={tipStyle}>Bind in constructor for old-style classes, or use arrow class properties for cleaner syntax.</div>
      </section>

      {/* Multiple Events */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Multiple Events</h2>
        <div style={codeStyle}>{getFileCode("Multiple")}</div>
        <div style={outputStyle}><Multiple /></div>
        <div style={tipStyle}>React supports all browser DOM events (mouse, keyboard, etc.) and multiple handlers per element.</div>
      </section>

      {/* Passing Multiple Arguments */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Passing Multiple Arguments</h2>
        <div style={codeStyle}>{getFileCode("Arguments")}</div>
        <div style={outputStyle}><Arguments /></div>
        <div style={tipStyle}>Use an inline arrow function to pass extra arguments to handlers—event is always the last parameter.</div>
      </section>

      {/* Full Example File */}
      <section style={{marginBottom:'42px', borderTop:'2px solid #dbeaf7', paddingTop:'22px'}}>
        <h2 style={{ color: '#1155aa', fontSize: '1.17rem', margin:'0 0 7px' }}>Full Example: EventHandler.js</h2>
        <div style={codeStyle}>{getFileCode("EventHandler")}</div>
        <h3 style={{margin:'17px 0 8px', color:'#1747a7', fontSize:'1.09rem'}}>Output:</h3>
        <div style={outputStyle}>
          <PassingFunction />
          <Inline />
          <Object />
          <DefaultBehaviour />
          <Binding />
          <Multiple />
          <Arguments />
        </div>
      </section>
    </div>
  );
}