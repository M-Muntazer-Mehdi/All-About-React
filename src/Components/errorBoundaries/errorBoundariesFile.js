import React from "react";
import BuggyComponent from "./buggyComponent";

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
  minWidth: '300px',
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

function getErrorBoundaryCode(type) {
  if (type === 'ErrorBoundary') return `import React from "react";
class ErrorBoundaries extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.log("Error Caught: ", error, " ", info);
  }
  render() {
    if(this.state.hasError) {
      return <h3>Something went wrong.</h3>;
    }
    return this.props.children;
  }
}
export default ErrorBoundaries;`;
  if (type === 'BuggyComponent') return `import React from 'react';
const BuggyComponent = ({ throwError }) => {
  if (throwError) {
    throw new Error("I crashed!");
  }
  return <div>This will not be rendered if there's an error.</div>;
};
export default BuggyComponent;`;
  if (type === 'usage') return `import ErrorBoundaries from './ErrorBoundaries';
import BuggyComponent from './BuggyComponent';
function App() {
  return (
    <ErrorBoundaries>
      <BuggyComponent throwError={true} />
    </ErrorBoundaries>
  );
}`;
  return '';
}

class ErrorBoundaries extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false};
    }

    static getDerivedStateFromError (error) {
        return {hasError:true};
    }

    componentDidCatch(error, info)
    {
        console.log("Error Caught: ",error, " ", info);
    }
    
    render() {
        if(this.state.hasError)
        {
            return<h3>Something went wrong.</h3>;
        }

        return this.props.children;
    }
}

export default function ErrorBoundariesDocsDemo() {
  const [showError, setShowError] = React.useState(false);
  return (
    <div style={{ width: '100%', padding: '0 2vw 40px 2vw', textAlign: 'left' }}>
      <header style={{ marginBottom: 18 }}>
        <h1 style={{ color: '#1976d2', fontSize: '2rem', margin: 0 }}>Error Boundaries in React</h1>
        <div style={{color:'#214570',fontSize:'1.12rem', marginTop:10}}>
          Error Boundaries catch JavaScript errors in their child component tree, log them, and display a fallback UI instead of crashing the whole app.
        </div>
        <div style={infoBox}>
          <b>What are Error Boundaries?</b><br/>
          Error Boundaries are React components that catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them. They're like try-catch for React components!
        </div>
      </header>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Error Boundary Component</h2>
        <div style={codeStyle}>{getErrorBoundaryCode('ErrorBoundary')}</div>
        <div style={tipStyle}>
          Error Boundaries must be <b>class components</b>. They use <code>getDerivedStateFromError()</code> to update state and <code>componentDidCatch()</code> to log errors.
        </div>
      </section>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Buggy Component (Throws Error)</h2>
        <div style={codeStyle}>{getErrorBoundaryCode('BuggyComponent')}</div>
        <div style={tipStyle}>
          This component intentionally throws an error when <code>throwError</code> prop is true. Without an Error Boundary, this would crash your entire app!
        </div>
      </section>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Using Error Boundaries</h2>
        <div style={codeStyle}>{getErrorBoundaryCode('usage')}</div>
        <div style={tipStyle}>
          Wrap any component that might throw errors with an Error Boundary to gracefully handle failures.
        </div>
      </section>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Live Demo</h2>
        <button 
          onClick={() => setShowError(!showError)}
          style={{padding: '9px 18px', background: '#1976d2', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', fontSize: '1rem', marginBottom: 15}}
        >
          {showError ? 'Hide Error Demo' : 'Show Error Demo'}
        </button>
        {showError && (
          <div style={outputStyle}>
            <ErrorBoundaries>
              <BuggyComponent throwError={true} />
            </ErrorBoundaries>
          </div>
        )}
        <div style={tipStyle}>
          <b>Try it:</b> Click the button to see the Error Boundary catch the error and display a fallback UI instead of crashing!
        </div>
      </section>

      <section style={{marginTop: 30, paddingTop: 18, borderTop: '2px solid #e5ecf5'}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>What Error Boundaries Catch</h2>
        <ul style={{fontSize: '1.05rem', color: '#2c4258', margin: '0 0 0 20px'}}>
          <li>Errors during <b>rendering</b></li>
          <li>Errors in <b>lifecycle methods</b></li>
          <li>Errors in <b>constructors</b> of the whole tree below them</li>
        </ul>
      </section>

      <section style={{marginTop: 28}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>What Error Boundaries DON'T Catch</h2>
        <ul style={{fontSize: '1.05rem', color: '#2c4258', margin: '0 0 0 20px'}}>
          <li>Event handlers (use try-catch instead)</li>
          <li>Asynchronous code (setTimeout, promises)</li>
          <li>Server-side rendering</li>
          <li>Errors thrown in the error boundary itself</li>
        </ul>
      </section>

      <section style={{marginTop: 28}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>Best Practices</h2>
        <div style={infoBox}>
          • Place Error Boundaries at strategic points in your component tree (top-level, around routes, around widgets).<br/>
          • Log errors to an error reporting service in <code>componentDidCatch()</code>.<br/>
          • Show user-friendly fallback UIs (don't just say "Something went wrong"—give context!).<br/>
          • Don't wrap every component—use boundaries around logical sections.
        </div>
      </section>
    </div>
  );
}