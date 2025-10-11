import React from "react";
import Mounting from "./Mounting";
import Updating from "./Updating";
import Unmounting from "./Unmounting";
import DataFetchingComponent from "./useEffect";

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
  if(fname === "Mounting") return `import React, {Component} from "react";

class Mounting extends Component {
  constructor(props) {
    super(props);
    this.state = {count : 0};
    console.log("Constructor: Component Initialized");
  }

  static getDrivedStateFromProps() {
    console.log("getDrivedStateFromProps: sync prop with state");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount: Component Mounted");
  }

  render(){
    console.log("Render: Componenet Render");
    return(
      <div>
        <h1 style={{ fontSize: "18px" }}> Click to increase the Mounting example count: {this.state.count}
          <button style={{ fontSize: "18px" }} onClick={()=> this.setState({count : this.state.count + 1})}> 
            Click me
          </button>
        </h1>
      </div>
    );
  }
}

export default Mounting;`;
  if(fname === "Updating") return `import React, {Component} from "react";

class Updating extends Component {
  constructor(props){
    super(props);
    this.state = {count: 0};
    this.scrollRef = React.createRef();
    console.log("Constructor: Component Initialized");
  }
  static getDrivedStateFromProps(props, state){
    console.log("getDrivedStateFromProps: sync state with prop");
    return null;
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate: determine component re-render on not");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    if (this.scrollRef.current) {
      const scrollPosition = this.scrollRef.current.scrollTop;
      console.log("getSnapshotBeforeUpdate: Capture the scroll position before update: ", scrollPosition);
      return scrollPosition;
    }
    console.log("not capture");
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("componentDidUpdate: component updated");
    if(snapshot !== null){
      this.scrollRef.current.scrollTop = snapshot;
      console.log("Restoring Scroll Position to: ", snapshot);
    }
  }
  render() {
    console.log('Render: Re-rendering');
    return (
      <div>
        <h1 style={{ fontSize: "18px" }}> Click to increase the Updating example count: {this.state.count}
          <button style={{ fontSize: "18px" }} onClick={()=> this.setState({count : this.state.count + 1})}> 
            Click me
          </button>
        </h1>
        <div ref={this.scrollRef} style={{ height: '100px', overflowY: 'scroll', border: '1px solid black' }}>
          <div style={{ height: '300px', padding: '10px' }}>
            <p>Scrollable Content</p>
            <p>More content here...</p>
            <p>Keep scrolling...</p>
            <p>Count: {this.state.count}</p>
            <p>Keep incrementing the count!</p>
            <p>More content here...</p>
            <p>Keep scrolling...</p>
            <p>Count: {this.state.count}</p>
            <p>Keep incrementing the count!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Updating;`;
  if(fname === "Unmounting") return `import React from 'react';

class Unmounting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isRunning: true,
    };
    console.log('Constructor: Component Initialized');
  }
  componentDidMount() {
    console.log('ComponentDidMount: Component Mounted to the DOM');
    this.timerID = setInterval(() => {
      if (this.state.isRunning) {
        this.setState({ count: this.state.count + 1 });
      }
    }, 1000);
  }
  componentWillUnmount() {
    console.log('componentWillUnmount: Cleaning up before component unmounts');
    clearInterval(this.timerID);
  }
  stopCounter = () => {
    this.setState({ isRunning: false }); 
    console.log('Counter stopped');
  };
  render() {
    console.log('Render: Component Rendering');
    return (
      <div>
       <h1 style={{ fontSize: "18px" }}> Click to stop the Unmounting example count: {this.state.count}
        <button style={{ fontSize: "18px" }} onClick={this.stopCounter}>Stop Counter</button>
        </h1>
      </div>
    );
  }
}

export default Unmounting;`;
  if(fname === "useEffect") return `import React, { useState, useEffect } from 'react';

function DataFetchingComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    // Cleanup function (optional)
    return () => {
      // Any cleanup here
      console.log("Cleanup if necessary");
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <h1>Fetched Data:</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetchingComponent;`;
  if(fname === "Lifecycle") return `import React from "react";
import Mounting from "./Mounting";
import Updating from "./Updating";
import Unmounting from "./Unmounting";
import DataFetchingComponent from "./useEffect";

function Lifecycle() {
  return (
    <div>
      <Mounting />
      <Updating />
      <Unmounting />
      <DataFetchingComponent />
    </div>
  );
}

export default Lifecycle;`;
  return '';
}

export default function LifecycleDemo() {
  return (
    <div style={{ width: '100%', padding: '0 2vw 40px 2vw', textAlign: 'left' }}>
      <header style={{ marginBottom: 18 }}>
        <h1 style={{ color: '#1976d2', fontSize: '2rem', margin: 0 }}>React Component Lifecycle</h1>
        <div style={{color:'#214570',fontSize:'1.12rem', marginTop:10}}>
          Learn and experiment with mounting, updating, unmounting, and side effect/data-fetching in modern React!
        </div>
      </header>

      {/* Mounting Example */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Mounting: Constructor, getDrivedStateFromProps, componentDidMount</h2>
        <div style={codeStyle}>{getFileCode("Mounting")}</div>
        <div style={outputStyle}><Mounting /></div>
        <div style={tipStyle}>
          "Mounting" phase is when a component is created and inserted into the DOM. See logs in the console for each lifecycle method.
        </div>
      </section>

      {/* Updating Example */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Updating: shouldComponentUpdate, getSnapshotBeforeUpdate, componentDidUpdate</h2>
        <div style={codeStyle}>{getFileCode("Updating")}</div>
        <div style={outputStyle}><Updating /></div>
        <div style={tipStyle}>
          The "Updating" phase runs every time state or props change&mdash;see scroll logic and detailed method logs in the browser console.
        </div>
      </section>

      {/* Unmounting Example */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Unmounting: componentWillUnmount</h2>
        <div style={codeStyle}>{getFileCode("Unmounting")}</div>
        <div style={outputStyle}><Unmounting /></div>
        <div style={tipStyle}>
          "Unmounting" phase is when a component is about to be removed from the DOM. Manually stop the counter. Watch console logs!
        </div>
      </section>

      {/* useEffect (Functional) Demo */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>useEffect: Functional Component Side Effects & Data Fetching</h2>
        <div style={codeStyle}>{getFileCode("useEffect")}</div>
        <div style={outputStyle}><DataFetchingComponent /></div>
        <div style={tipStyle}>
          The <b>useEffect</b> hook lets function components run side effects (data fetches, timeouts, cleanup, etc.) previously handled by lifecycle methods.
        </div>
      </section>

      {/* Full Example File */}
      <section style={{marginBottom:'42px', borderTop:'2px solid #dbeaf7', paddingTop:'22px'}}>
        <h2 style={{ color: '#1155aa', fontSize: '1.17rem', margin:'0 0 7px' }}>Full Example: Lifecycle.js</h2>
        <div style={codeStyle}>{getFileCode("Lifecycle")}</div>
        <h3 style={{margin:'17px 0 8px', color:'#1747a7', fontSize:'1.09rem'}}>Output:</h3>
        <div style={outputStyle}>
          <Mounting />
          <Updating />
          <Unmounting />
          <DataFetchingComponent />
        </div>
      </section>
    </div>
  );
}