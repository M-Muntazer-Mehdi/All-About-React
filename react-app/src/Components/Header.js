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