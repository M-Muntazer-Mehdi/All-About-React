import React from "react";
import { Link } from "react-router-dom";

function Headerfile() {
    return(
    <div style={wrapperstyle}>
      <Link to="/my-jsx" className="Home-link" style={jsxstyle}>
        Jsx Concepts
      </Link>
      <br />
      <br />
      <Link to="/my-component" className="Home-link" style={jsxstyle}>
        Component Comcept
      </Link>
      <br />
      <br />
      <Link to="/my-rendering" className="Home-link" style={jsxstyle}>
        Conditional Rendering & lists
      </Link>
      <br />
      <br />
      <Link to="/my-lifecycle" className="Home-link" style={jsxstyle}> 
        Componenet Lifecycle 
      </Link>
      <br />
      <br />
      <Link to="/my-state" className="Home-link" style={jsxstyle}> 
        State Management
      </Link>
      <br />
      <br />
      <Link to="/my-event" className="Home-link" style={jsxstyle}> 
        Event Handler
      </Link>
      <br />
      <br />
      <Link to="/my-forms" className="Home-link" style={jsxstyle}> 
        Forms
      </Link>
      <br />
      <br />
      <Link to="/my-context" className="Home-link" style={jsxstyle}> 
        Context Api
      </Link>
      <br />
      <br />
      <Link to="/my-loginFile" className="Home-link" style={jsxstyle}> 
        Higher Order Component
      </Link>
      <br />
      <br />
        <Link to="/my-BuggyComponent" className="Home-link" style={jsxstyle}> 
          Error Boundaries
        </Link>
      <br />
      <br />
        <Link to="/my-useMemo" className="Home-link" style={jsxstyle}> 
          useMemo - Custom Hook
        </Link>
      <br />
      <br />
        <Link to="/my-Redux" className="Home-link" style={jsxstyle}> 
          Redux
        </Link>
      <br />
      <br />
        <Link to="/my-MobX" className="Home-link" style={jsxstyle}> 
          MobX
        </Link>
      <br />
      <br />
        <Link to="/my-Zustand" className="Home-link" style={jsxstyle}> 
          Zustand
        </Link>
    </div>
    );
}
const jsxstyle = {
    color: '#000000',
    fontSize: '18px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease, color 0.3s ease',
};
const wrapperstyle = {
    marginTop: '20px',
}
export default Headerfile;