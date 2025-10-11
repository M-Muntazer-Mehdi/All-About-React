import React from "react";
import AuthStatus from "./useContext1";
import AuthComponent from "./useContext2";
import { AuthProvider } from "./authContext";

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
  if(fname === "authContext") return `import React, { createContext, useState } from 'react';
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const login  = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);
  return(
    <AuthContext.Provider value={{isAuthenticated, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};`;
  if(fname === "useContext1") return `import React, { useContext } from 'react';
import { AuthContext } from './authContext';
const AuthStatus = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <div>
      <h2>{isAuthenticated ? 'Logged In' : 'Logged Out'}</h2>
    </div>
  );
};
export default AuthStatus;`;
  if(fname === "useContext2") return `import React, { useContext } from 'react';
import { AuthContext } from './authContext';
const AuthComponent = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext);
  return (
    <div>
      {!isAuthenticated ? (
        <button onClick={login}>Log In</button>
      ) : (
        <button onClick={logout}>Log Out</button>
      )}
    </div>
  );
};
export default AuthComponent;`;
  if(fname === "contextMain") return `import React from "react";
import AuthStatus from "./useContext1";
import AuthComponent from "./useContext2";
import { AuthProvider } from "./authContext";
function ContextApi (){
  return(
    <AuthProvider>
      <div>
        <AuthStatus />
        <AuthComponent />
      </div>
    </AuthProvider>
  );
}
export default ContextApi;`;
  return '';
}

export default function ContextApiDemo() {
  return (
    <div style={{ width: '100%', padding: '0 2vw 40px 2vw', textAlign: 'left' }}>
      <header style={{ marginBottom: 18 }}>
        <h1 style={{ color: '#1976d2', fontSize: '2rem', margin: 0 }}>React Context API Demo</h1>
        <div style={{color:'#214570',fontSize:'1.12rem', marginTop:10}}>
          React Context lets you share state easily across many components. Try the auth login example below!
        </div>
      </header>
      {/* Step 1: Context Provider  */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Context Provider (Creates Shared State)</h2>
        <div style={codeStyle}>{getFileCode("authContext")}</div>
        <div style={tipStyle}>Provide any value (state, updater, or functions) to all nested components!</div>
      </section>
      {/* Step 2: Context Consumer for Auth State  */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Context Consumer: Reading State</h2>
        <div style={codeStyle}>{getFileCode("useContext1")}</div>
        <div style={outputStyle}><AuthProvider><AuthStatus /></AuthProvider></div>
        <div style={tipStyle}>Get context values using the <b>useContext()</b> hook anywhere inside the provider tree!</div>
      </section>
      {/* Step 3: Context Consumer for Auth Logic  */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Context Consumer: Update State (Login/Logout)</h2>
        <div style={codeStyle}>{getFileCode("useContext2")}</div>
        <div style={outputStyle}><AuthProvider><AuthComponent /></AuthProvider></div>
        <div style={tipStyle}>Context can expose setters and functions (like login/logout) in addition to just data.</div>
      </section>
      {/* Step 4: Full Example  */}
      <section style={{marginBottom:'42px', borderTop:'2px solid #dbeaf7', paddingTop:'22px'}}>
        <h2 style={{ color: '#1155aa', fontSize: '1.17rem', margin:'0 0 7px' }}>Full Example: contextMain.js</h2>
        <div style={codeStyle}>{getFileCode("contextMain")}</div>
        <h3 style={{margin:'17px 0 8px', color:'#1747a7', fontSize:'1.09rem'}}>Output:</h3>
        <div style={outputStyle}>
          <AuthProvider>
            <AuthStatus />
            <AuthComponent />
          </AuthProvider>
        </div>
      </section>
    </div>
  );
}