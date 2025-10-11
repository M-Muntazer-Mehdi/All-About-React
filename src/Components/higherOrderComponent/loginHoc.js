import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WithAuth from './withAuth';
import ProtectedComponent from './protectedHeader';

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

function getFileCode(fname) {
  if(fname === "loginHoc") return `import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const LoginHoc = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const handleLogin = () => {
    if (username === 'Muntazer') {
      localStorage.setItem('username', username);
      navigate('/my-ProtectedComponent');
    } else {
      alert('Invalid username. Please enter "Muntazer".');
    }
  };
  return (
    <div style={{ padding: '20px' }}>
      <h2>Login</h2>
      <h6> Enter name 'Muntazer'</h6>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your name" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
export default LoginHoc;`;
  if(fname === "withAuth") return `import React from "react";
import { Navigate } from "react-router-dom";
const WithAuth = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      const isAuthenticated = localStorage.getItem('username') === 'Muntazer';
      if(!isAuthenticated) {
        return <Navigate to='/' />;
      }
      return <WrappedComponent {...this.props} />;
    }
  };
};
export default WithAuth;`;
  if(fname === "protectedHeader") return `import WrapFile from "./testFile";
import WithAuth from "./withAuth";
const ProtectedComponent = WithAuth(WrapFile);
export default ProtectedComponent;`;
  if(fname === "testFile") return `import React from "react";
const WrapFile = () => {
  return(
    <div>
      <h4>Hoc Wrapped Component</h4>
      <p>We wrap this TestFile with a higher order component, WithAuth, using a login guard.</p>
    </div>
  );
};
export default WrapFile;`;
  return '';
}

// Demo component for this page only
function LoginDemo() {
  const [username, setUsername] = useState('');
  const handleLogin = () => {
    if (username === 'Muntazer') {
      window.alert('Login success (would redirect in real app)');
    } else {
      window.alert('Invalid username. Please enter "Muntazer".');
    }
  };
  return (
    <div style={{ padding: '14px 6px' }}>
      <h2>Login</h2>
      <h6> Enter name 'Muntazer'</h6>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your name" />
      <button style={{marginLeft:8}} onClick={handleLogin}>Login</button>
    </div>
  );
}

function FakeProtected() {
  return (
    <div style={{marginTop:8, color:'#1976d2'}}>
      <h4>Hoc Wrapped Component</h4>
      <p>This would only display if logged in as 'Muntazer'</p>
    </div>
  );
}

export default function HocDemo() {
  return (
    <div style={{ width: '100%', padding: '0 2vw 40px 2vw', textAlign: 'left' }}>
      <header style={{ marginBottom: 18 }}>
        <h1 style={{ color: '#1976d2', fontSize: '2rem', margin: 0 }}>Higher Order Component (HOC) Pattern in React</h1>
        <div style={{color:'#214570',fontSize:'1.12rem', marginTop:10}}>
          A Higher Order Component is a function that takes a component and returns a new, enhanced component. Common for auth, guards, and reusable logic.
        </div>
      </header>
      {/* Section: Login */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Login Demo Component</h2>
        <div style={codeStyle}>{getFileCode("loginHoc")}</div>
        <div style={outputStyle}><LoginDemo /></div>
        <div style={tipStyle}>Simulates an auth flow: user must login as 'Muntazer' to be authenticated!</div>
      </section>
      {/* Section: HOC Definition */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>HOC Implementation (withAuth.js)</h2>
        <div style={codeStyle}>{getFileCode("withAuth")}</div>
        <div style={tipStyle}>A HOC can guard a page, add features, or inject props. Here it checks if you’re logged in and redirects otherwise.</div>
      </section>
      {/* Section: Protected Component Assembly */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Protected Component and WrapFile</h2>
        <div style={codeStyle}>{getFileCode("protectedHeader")}</div>
        <div style={outputStyle}><FakeProtected /></div>
        <div style={tipStyle}>Here, WithAuth wraps the real page/file so only authenticated users can see it.</div>
      </section>
      {/* Section: The Wrapped Component */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Wrapped Component (testFile.js)</h2>
        <div style={codeStyle}>{getFileCode("testFile")}</div>
        <div style={tipStyle}>This is your original/"page" component. HOCs never alter the original, but wrap it!</div>
      </section>
      {/* Section: Full Example Output */}
      <section style={{marginBottom:'42px', borderTop:'2px solid #dbeaf7', paddingTop:'22px'}}>
        <h2 style={{ color: '#1155aa', fontSize: '1.17rem', margin:'0 0 7px' }}>Output: Pattern as Used in App</h2>
        <div style={outputStyle}>
          <LoginDemo />
          <div style={{marginTop:28}}><FakeProtected /></div>
        </div>
      </section>
    </div>
  );
}
